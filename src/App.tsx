import React, { useState, useEffect, useCallback, useRef } from 'react';
import confetti from 'canvas-confetti';
import { SOLVING_STEPS } from './data/solvingSteps';
import { Header } from './components/Layout/Header';
import { Sidebar } from './components/Layout/Sidebar';
import { StepPanel } from './components/Tutorial/StepPanel';
import { NotationModal } from './components/Controls/NotationModal';
import { HowItWorksModal } from './components/Controls/HowItWorksModal';

export const App: React.FC = () => {
  const [currentStepId, setCurrentStepId] = useState<number>(1);
  const [currentMoveIndex, setCurrentMoveIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isComplete, setIsComplete] = useState<boolean>(false);

  const [isNotationOpen, setIsNotationOpen] = useState<boolean>(false);
  const [isHowItWorksOpen, setIsHowItWorksOpen] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const currentStep = SOLVING_STEPS.find(s => s.id === currentStepId) || SOLVING_STEPS[0];
  const totalSteps = SOLVING_STEPS.length;
  const playTimerRef = useRef<number | null>(null);

  useEffect(() => {
    if (currentStepId === 9) {
      try {
        confetti({ particleCount: 90, spread: 80, origin: { y: 0.55 } });
      } catch (err) {
        console.warn('Confetti unavailable:', err);
      }
    }
  }, [currentStepId]);

  useEffect(() => {
    return () => {
      if (playTimerRef.current) clearTimeout(playTimerRef.current);
    };
  }, []);

  const changeStep = useCallback((stepId: number) => {
    if (playTimerRef.current) clearTimeout(playTimerRef.current);
    setIsPlaying(false);
    setCurrentMoveIndex(0);
    setIsComplete(false);
    setCurrentStepId(stepId);
    setIsSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const triggerNextMove = useCallback(() => {
    setCurrentMoveIndex(prev => {
      const next = prev + 1;
      if (next >= currentStep.moves.length) {
        setIsPlaying(false);
        setIsComplete(true);
        return currentStep.moves.length;
      }
      return next;
    });
  }, [currentStep.moves.length]);

  const handlePlay = useCallback(() => {
    if (isComplete) return;
    setIsPlaying(true);
  }, [isComplete]);

  // Handle auto-advance playback of algorithm steps in 2D guide
  useEffect(() => {
    if (!isPlaying) return;

    playTimerRef.current = window.setTimeout(() => {
      setCurrentMoveIndex(prev => {
        const next = prev + 1;
        if (next >= currentStep.moves.length) {
          setIsPlaying(false);
          setIsComplete(true);
          return currentStep.moves.length;
        }
        return next;
      });
    }, 600);

    return () => {
      if (playTimerRef.current) clearTimeout(playTimerRef.current);
    };
  }, [isPlaying, currentMoveIndex, currentStep.moves.length]);

  const handlePause = useCallback(() => {
    setIsPlaying(false);
    if (playTimerRef.current) clearTimeout(playTimerRef.current);
  }, []);

  const handleResetStep = useCallback(() => {
    if (playTimerRef.current) clearTimeout(playTimerRef.current);
    setIsPlaying(false);
    setCurrentMoveIndex(0);
    setIsComplete(false);
  }, []);

  return (
    <div className="w3-app">
      {/* Top W3Schools Dark Navbar */}
      <Header
        onOpenNotation={() => setIsNotationOpen(true)}
        onOpenHowItWorks={() => setIsHowItWorksOpen(true)}
        onResetStep={handleResetStep}
        onToggleSidebar={() => setIsSidebarOpen(prev => !prev)}
        isSidebarOpen={isSidebarOpen}
      />

      <div className="w3-app-body">
        {/* Mobile Sidebar Backdrop Overlay */}
        {isSidebarOpen && (
          <div
            className="w3-sidebar-backdrop"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Left W3Schools Sidebar */}
        <Sidebar
          steps={SOLVING_STEPS}
          currentStepId={currentStepId}
          onSelectStep={changeStep}
          isMobileOpen={isSidebarOpen}
        />

        {/* Main Content Area */}
        <main className="w3-main-container">
          <div className="w3-content-wrapper">
            <StepPanel
              step={currentStep}
              currentStep={currentStepId}
              totalSteps={totalSteps}
              currentMoveIndex={currentMoveIndex}
              isPlaying={isPlaying}
              isAnimating={false}
              isComplete={isComplete}
              onPlay={handlePlay}
              onPause={handlePause}
              onNextMove={triggerNextMove}
              onResetStep={handleResetStep}
              onPrev={() => changeStep(Math.max(1, currentStepId - 1))}
              onNext={() => changeStep(Math.min(totalSteps, currentStepId + 1))}
              onSolveAgain={() => changeStep(1)}
            />
          </div>
        </main>
      </div>

      {/* Modals */}
      <NotationModal isOpen={isNotationOpen} onClose={() => setIsNotationOpen(false)} />
      <HowItWorksModal
        isOpen={isHowItWorksOpen}
        onClose={() => setIsHowItWorksOpen(false)}
        onStartSolving={() => {
          setIsHowItWorksOpen(false);
          changeStep(1);
        }}
      />
    </div>
  );
};
