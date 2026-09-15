import React from 'react';
import { Compass, Award, Menu, X } from 'lucide-react';
import { SolvingStep } from '../../cube/types';
import { StepDiagram } from './StepDiagram';
import { MoveDisplay } from './MoveDisplay';
import { AlgorithmPlayer } from './AlgorithmPlayer';
import { StepNavigation } from './StepNavigation';

interface StepPanelProps {
  step: SolvingStep;
  currentStep: number;
  totalSteps: number;
  currentMoveIndex: number;
  isPlaying: boolean;
  isAnimating: boolean;
  isComplete: boolean;
  isSidebarOpen: boolean;
  onPlay: () => void;
  onPause: () => void;
  onNextMove: () => void;
  onResetStep: () => void;
  onPrev: () => void;
  onNext: () => void;
  onSolveAgain: () => void;
  onToggleSidebar: () => void;
}

export const StepPanel: React.FC<StepPanelProps> = ({
  step,
  currentStep,
  totalSteps,
  currentMoveIndex,
  isPlaying,
  isAnimating,
  isComplete,
  isSidebarOpen,
  onPlay,
  onPause,
  onNextMove,
  onResetStep,
  onPrev,
  onNext,
  onSolveAgain,
  onToggleSidebar,
}) => {
  const isSolvedStep = step.id === 10;

  return (
    <div className="step-doc select-text">

      {/* Step Header */}
      <div className="step-doc-header">
        {/* Hamburger — mobile/tablet only */}
        <button className="step-doc-hamburger" onClick={onToggleSidebar} title="Menu">
          {isSidebarOpen
            ? <X style={{ width: 16, height: 16 }} />
            : <Menu style={{ width: 16, height: 16 }} />
          }
        </button>

        <div>
          <div className="step-doc-eyebrow">
            <span className="step-tag">Step {step.id.toString().padStart(2, '0')} of {totalSteps}</span>
            <div className="step-orientation">
              <Compass style={{ width: 12, height: 12, color: 'var(--accent)' }} />
              <span>{step.orientation}</span>
            </div>
          </div>
          <h2 className="step-doc-title">{step.title}</h2>
        </div>
      </div>

      {/* Body — Algorithm card comes FIRST so Sequence & Play All are ALWAYS visible without scrolling */}
      <div className="step-body">
        {step.algorithm && (
          <div className="algo-card">
            <div className="algo-card-header">
              <span className="algo-card-label">Algorithm</span>
              <span className="algo-card-count">{step.moves.length} moves</span>
            </div>
            <div className="algo-formula">{step.algorithm}</div>
            <div className="algo-body">
              <MoveDisplay
                moves={step.moves}
                currentMoveIndex={currentMoveIndex}
                isComplete={isComplete}
              />
              <AlgorithmPlayer
                moves={step.moves}
                currentMoveIndex={currentMoveIndex}
                isPlaying={isPlaying}
                isAnimating={isAnimating}
                isComplete={isComplete}
                onPlay={onPlay}
                onPause={onPause}
                onNextMove={onNextMove}
                onResetStep={onResetStep}
              />
            </div>
          </div>
        )}

        {isSolvedStep ? (
          <div className="celebration-block">
            <div className="celebration-icon">
              <Award style={{ width: 22, height: 22 }} />
            </div>
            <div className="celebration-title">Cube Solved!</div>
            <p className="celebration-text">
              You've mastered all 10 steps of the beginner method. Drag the 3D cube to inspect
              your finished puzzle, or start a fresh run.
            </p>
          </div>
        ) : (
          <div className="instructions-block">
            {step.instructions.map((text, idx) => (
              <div key={idx} className="instruction-row">
                <span className="instruction-bullet" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        )}

        {step.diagramType && (
          <StepDiagram type={step.diagramType} />
        )}
      </div>

      {/* Step Navigation — pinned at bottom */}
      <StepNavigation
        currentStep={currentStep}
        totalSteps={totalSteps}
        isAnimating={isAnimating}
        onPrev={onPrev}
        onNext={onNext}
        onSolveAgain={onSolveAgain}
      />
    </div>
  );
};
