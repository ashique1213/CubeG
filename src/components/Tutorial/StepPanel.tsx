import React from 'react';
import { Compass, Award } from 'lucide-react';
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
  isAnimating?: boolean;
  isComplete: boolean;
  onPlay: () => void;
  onPause: () => void;
  onNextMove: () => void;
  onResetStep: () => void;
  onPrev: () => void;
  onNext: () => void;
  onSolveAgain: () => void;
}

export const StepPanel: React.FC<StepPanelProps> = ({
  step,
  currentStep,
  totalSteps,
  currentMoveIndex,
  isPlaying,
  isAnimating = false,
  isComplete,
  onPlay,
  onPause,
  onNextMove,
  onResetStep,
  onPrev,
  onNext,
  onSolveAgain,
}) => {
  const isSolvedStep = step.id === totalSteps;

  return (
    <article className="w3-main-article">
      {/* Top W3Schools Previous / Next Bar */}
      <StepNavigation
        currentStep={currentStep}
        totalSteps={totalSteps}
        isAnimating={isAnimating}
        onPrev={onPrev}
        onNext={onNext}
        onSolveAgain={onSolveAgain}
      />

      {/* Main Page Title */}
      <div className="w3-page-header">
        <h1 className="w3-page-title">
          Step {step.id}: {step.title}
        </h1>

        <div className="w3-orientation-pill">
          <Compass style={{ width: 14, height: 14, color: '#04AA6D' }} />
          <span><strong>Orientation:</strong> {step.orientation}</span>
        </div>
      </div>

      <hr className="w3-divider" />

      {/* Main Body */}
      <div className="w3-page-body">
        {/* W3Schools Iconic Example / Algorithm Box at the Top */}
        {step.algorithm && (
          <div className="w3-example">
            <h3 className="w3-example-heading">Algorithm Sequence:</h3>
            <div className="w3-code">
              <code>{step.algorithm}</code>
            </div>

            <div className="w3-example-interactive">
              <MoveDisplay
                moves={step.moves}
                currentMoveIndex={currentMoveIndex}
                isComplete={isComplete}
                stepId={step.id}
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

        {/* Step Instructions directly below */}
        <section className="w3-section">
          <h2 className="w3-section-title">How To Do This Step:</h2>
          <ul className="w3-instructions-list">
            {step.instructions.map((text, idx) => (
              <li key={idx} className="w3-instruction-item">
                <span className="w3-instruction-bullet">&#10003;</span>
                <span className="w3-instruction-text">{text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 2D Visual Diagram */}
        {step.diagramType && (
          <section className="w3-section">
            <StepDiagram type={step.diagramType} />
          </section>
        )}

        {/* Solved Celebration Box (for Step 9) */}
        {isSolvedStep && (
          <div className="w3-panel w3-solved-panel">
            <div className="w3-solved-header">
              <Award style={{ width: 26, height: 26, color: '#04AA6D' }} />
              <h3 style={{ margin: 0, fontSize: 18, color: '#04AA6D' }}>
                Congratulations — 3×3 Rubik's Cube Solved!
              </h3>
            </div>
            <p style={{ marginTop: 8, fontSize: 14, color: '#334155', lineHeight: 1.5 }}>
              You have completed all 9 steps of the beginner method. Click <strong>Solve Again</strong> to practice from Step 1 or test your speed!
            </p>
          </div>
        )}

        {/* W3Schools Note & Pro Tip Callout Panels */}
        {step.tips && step.tips.length > 0 && (
          <div className="w3-panel w3-tip-panel">
            <h4 className="w3-tip-heading">Pro Tip &amp; Notes:</h4>
            {step.tips.map((tip, idx) => (
              <p key={idx} className="w3-tip-text">
                &bull; {tip}
              </p>
            ))}
          </div>
        )}
      </div>

      <hr className="w3-divider" />

      {/* Bottom W3Schools Previous / Next Bar */}
      <StepNavigation
        currentStep={currentStep}
        totalSteps={totalSteps}
        isAnimating={isAnimating}
        onPrev={onPrev}
        onNext={onNext}
        onSolveAgain={onSolveAgain}
      />
    </article>
  );
};
