import React, { useState, useEffect, useCallback, useRef } from 'react';
import confetti from 'canvas-confetti';
import * as THREE from 'three';
import { SOLVING_STEPS } from './data/solvingSteps';
import { CubeState } from './cube/CubeState';
import { getInitialStateForStep } from './cube/presetStates';
import { MoveNotation } from './cube/types';

import { Sidebar } from './components/Layout/Sidebar';
import { StepPanel } from './components/Tutorial/StepPanel';
import { CubeScene } from './components/Cube3D/CubeScene';
import { ManualControls } from './components/Controls/ManualControls';
import { NotationModal } from './components/Controls/NotationModal';
import { HowItWorksModal } from './components/Controls/HowItWorksModal';

export const App: React.FC = () => {
  const [currentStepId, setCurrentStepId] = useState<number>(1);
  const [cubeState, setCubeState] = useState<CubeState>(() => getInitialStateForStep(1));

  const [activeMove, setActiveMove] = useState<MoveNotation | null>(null);
  const [lastCompletedMove, setLastCompletedMove] = useState<MoveNotation | null>(null);
  const [currentMoveIndex, setCurrentMoveIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isComplete, setIsComplete] = useState<boolean>(false);

  const [isManualControlsOpen, setIsManualControlsOpen] = useState<boolean>(false);
  const [isNotationOpen, setIsNotationOpen] = useState<boolean>(false);
  const [isHowItWorksOpen, setIsHowItWorksOpen] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const currentStep = SOLVING_STEPS.find(s => s.id === currentStepId) || SOLVING_STEPS[0];
  const totalSteps = SOLVING_STEPS.length;
  const playTimerRef = useRef<number | null>(null);

  useEffect(() => {
    if (currentStepId === 10) {
      try { confetti({ particleCount: 90, spread: 80, origin: { y: 0.55 } }); }
      catch (err) { console.warn('Confetti unavailable:', err); }
    }
  }, [currentStepId]);

  useEffect(() => {
    return () => { if (playTimerRef.current) clearTimeout(playTimerRef.current); };
  }, []);

  const changeStep = useCallback((stepId: number) => {
    if (playTimerRef.current) clearTimeout(playTimerRef.current);
    setIsPlaying(false);
    setActiveMove(null);
    setIsAnimating(false);
    setCurrentMoveIndex(0);
    setIsComplete(false);
    setLastCompletedMove(null);
    setCurrentStepId(stepId);
    setCubeState(getInitialStateForStep(stepId));
    setIsSidebarOpen(false);
  }, []);

  const triggerNextMove = useCallback(() => {
    if (isAnimating || activeMove) return;
    if (currentMoveIndex < currentStep.moves.length) {
      setActiveMove(currentStep.moves[currentMoveIndex]);
      setIsAnimating(true);
    }
  }, [isAnimating, activeMove, currentMoveIndex, currentStep.moves]);

  const handleMoveComplete = useCallback((completedMove: MoveNotation) => {
    setIsAnimating(false);
    setActiveMove(null);
    setLastCompletedMove(completedMove);
    setCurrentMoveIndex(prevIndex => {
      const newIndex = prevIndex + 1;
      const allDone = newIndex >= currentStep.moves.length;
      if (allDone) {
        setIsPlaying(false);
        setIsComplete(true);
      } else if (isPlaying) {
        playTimerRef.current = window.setTimeout(() => {
          const nextMove = currentStep.moves[newIndex];
          if (nextMove) { setActiveMove(nextMove); setIsAnimating(true); }
        }, 240);
      }
      return newIndex;
    });
  }, [currentStep.moves, isPlaying]);

  const handlePlay = useCallback(() => {
    if (isComplete || isAnimating) return;
    setIsPlaying(true);
    if (!activeMove && currentMoveIndex < currentStep.moves.length) {
      setActiveMove(currentStep.moves[currentMoveIndex]);
      setIsAnimating(true);
    }
  }, [isComplete, isAnimating, activeMove, currentMoveIndex, currentStep.moves]);

  const handlePause = useCallback(() => {
    setIsPlaying(false);
    if (playTimerRef.current) clearTimeout(playTimerRef.current);
  }, []);

  const handleResetStep = useCallback(() => {
    if (playTimerRef.current) clearTimeout(playTimerRef.current);
    setIsPlaying(false);
    setActiveMove(null);
    setIsAnimating(false);
    setCurrentMoveIndex(0);
    setIsComplete(false);
    setCubeState(getInitialStateForStep(currentStepId));
  }, [currentStepId]);

  const handleExecuteManualMove = useCallback((move: MoveNotation) => {
    if (isAnimating || activeMove) return;
    setIsPlaying(false);
    setActiveMove(move);
    setIsAnimating(true);
  }, [isAnimating, activeMove]);

  const handleResetCube = useCallback(() => {
    if (playTimerRef.current) clearTimeout(playTimerRef.current);
    setIsPlaying(false);
    setActiveMove(null);
    setIsAnimating(false);
    setCurrentMoveIndex(0);
    setIsComplete(false);
    setCubeState(new CubeState());
  }, []);

  const highlightPredicate = useCallback((pos: THREE.Vector3): boolean => {
    if (currentStepId === 1) return pos.y === 1 && (Math.abs(pos.x) + Math.abs(pos.z) === 1);
    if (currentStepId === 2) return pos.y === -1 && (Math.abs(pos.x) + Math.abs(pos.z) === 1);
    if (currentStepId === 3) return pos.x === 1 && pos.y === -1 && pos.z === 1;
    if (currentStepId === 7) return pos.x === -1 && pos.y === 1 && pos.z === 1;
    return false;
  }, [currentStepId]);

  return (
    <div className="app-shell select-none">
      <div className="body-layout">
        {/* Sidebar overlay (mobile) */}
        <div
          className={`sidebar-overlay${isSidebarOpen ? ' open' : ''}`}
          onClick={() => setIsSidebarOpen(false)}
        />

        {/* Left Sidebar — brand + steps */}
        <Sidebar
          steps={SOLVING_STEPS}
          currentStepId={currentStepId}
          isAnimating={isAnimating}
          onSelectStep={changeStep}
          isMobileOpen={isSidebarOpen}
          onToggle={() => setIsSidebarOpen(prev => !prev)}
          isManualControlsOpen={isManualControlsOpen}
          onResetStep={handleResetStep}
          onToggleManualControls={() => setIsManualControlsOpen(prev => !prev)}
          onOpenNotation={() => setIsNotationOpen(true)}
        />

        {/* Main Content */}
        <div className="main-content">
          {/* Mobile horizontal step strip */}
          <div className="mobile-step-strip">
            {SOLVING_STEPS.map(s => {
              const isCurrent = s.id === currentStepId;
              const isCompleted = s.id < currentStepId;
              return (
                <button
                  key={s.id}
                  disabled={isAnimating}
                  onClick={() => changeStep(s.id)}
                  className={`mobile-step-strip-btn${isCurrent ? ' active' : isCompleted ? ' completed' : ''}`}
                >
                  Step {s.id}
                </button>
              );
            })}
          </div>

          <div className="split-view">
            {/* Step Guide Panel */}
            <StepPanel
              step={currentStep}
              currentStep={currentStepId}
              totalSteps={totalSteps}
              currentMoveIndex={currentMoveIndex}
              isPlaying={isPlaying}
              isAnimating={isAnimating}
              isComplete={isComplete}
              onPlay={handlePlay}
              onPause={handlePause}
              onNextMove={triggerNextMove}
              onResetStep={handleResetStep}
              onPrev={() => changeStep(Math.max(1, currentStepId - 1))}
              onNext={() => changeStep(Math.min(totalSteps, currentStepId + 1))}
              onSolveAgain={() => changeStep(1)}
              onToggleSidebar={() => setIsSidebarOpen(prev => !prev)}
              isSidebarOpen={isSidebarOpen}
            />

            {/* 3D Cube Panel */}
            <div className="cube-panel">
              <CubeScene
                cubeState={cubeState}
                activeMove={activeMove}
                lastCompletedMove={lastCompletedMove}
                isAlgorithmComplete={isComplete}
                orientationText={currentStep.orientation}
                onMoveComplete={handleMoveComplete}
                highlightPredicate={highlightPredicate}
              />
              <ManualControls
                isOpen={isManualControlsOpen}
                onClose={() => setIsManualControlsOpen(false)}
                onExecuteMove={handleExecuteManualMove}
                onResetCube={handleResetCube}
                isAnimating={isAnimating}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <NotationModal isOpen={isNotationOpen} onClose={() => setIsNotationOpen(false)} />
      <HowItWorksModal
        isOpen={isHowItWorksOpen}
        onClose={() => setIsHowItWorksOpen(false)}
        onStartSolving={() => { setIsHowItWorksOpen(false); changeStep(1); }}
      />
    </div>
  );
};
