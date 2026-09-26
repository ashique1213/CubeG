import React from 'react';
import { RotateCcw } from 'lucide-react';

interface StepNavigationProps {
  currentStep: number;
  totalSteps: number;
  isAnimating?: boolean;
  onPrev: () => void;
  onNext: () => void;
  onSolveAgain: () => void;
}

export const StepNavigation: React.FC<StepNavigationProps> = ({
  currentStep,
  totalSteps,
  isAnimating = false,
  onPrev,
  onNext,
  onSolveAgain,
}) => {
  const isFirst = currentStep === 1;
  const isLast = currentStep === totalSteps;

  return (
    <div className="w3-nav-bar">
      <button
        disabled={isFirst || isAnimating}
        onClick={onPrev}
        className="w3-btn-prev"
        title="Go to previous step"
      >
        &#10094; Previous
      </button>

      <div className="w3-nav-counter">
        Step {currentStep} of {totalSteps}
      </div>

      {isLast ? (
        <button
          disabled={isAnimating}
          onClick={onSolveAgain}
          className="w3-btn-solve-again"
          title="Start tutorial from Step 1"
        >
          <RotateCcw style={{ width: 14, height: 14 }} />
          Solve Again
        </button>
      ) : (
        <button
          disabled={isAnimating}
          onClick={onNext}
          className="w3-btn-next"
          title="Go to next step"
        >
          Next &#10095;
        </button>
      )}
    </div>
  );
};
