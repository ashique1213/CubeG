import React from 'react';
import { ArrowLeft, ArrowRight, RotateCcw } from 'lucide-react';

interface StepNavigationProps {
  currentStep: number;
  totalSteps: number;
  isAnimating: boolean;
  onPrev: () => void;
  onNext: () => void;
  onSolveAgain: () => void;
}

export const StepNavigation: React.FC<StepNavigationProps> = ({
  currentStep,
  totalSteps,
  isAnimating,
  onPrev,
  onNext,
  onSolveAgain,
}) => {
  const isFirst = currentStep === 1;
  const isLast = currentStep === totalSteps;

  return (
    <div className="step-nav">
      <button
        disabled={isFirst || isAnimating}
        onClick={onPrev}
        className="step-nav-btn"
      >
        <ArrowLeft style={{ width: 14, height: 14 }} />
        Previous
      </button>

      <span className="step-nav-info">
        {currentStep} / {totalSteps}
      </span>

      {isLast ? (
        <button
          disabled={isAnimating}
          onClick={onSolveAgain}
          className="step-nav-btn step-nav-solve-again"
        >
          <RotateCcw style={{ width: 14, height: 14 }} />
          Solve Again
        </button>
      ) : (
        <button
          disabled={isAnimating}
          onClick={onNext}
          className="step-nav-btn step-nav-next"
        >
          Next Step
          <ArrowRight style={{ width: 14, height: 14 }} />
        </button>
      )}
    </div>
  );
};
