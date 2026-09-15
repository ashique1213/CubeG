import React from 'react';
import { Check } from 'lucide-react';

interface StepProgressProps {
  currentStep: number;
  totalSteps: number;
  onSelectStep: (stepId: number) => void;
  isAnimating: boolean;
}

export const StepProgress: React.FC<StepProgressProps> = ({
  currentStep,
  totalSteps,
  onSelectStep,
  isAnimating,
}) => {
  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);

  return (
    <div className="w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-3 select-none overflow-x-auto">
      <div className="max-w-7xl mx-auto flex items-center justify-between min-w-[620px] gap-2">
        {steps.map((step, idx) => {
          const isCurrent = step === currentStep;
          const isCompleted = step < currentStep;

          return (
            <React.Fragment key={step}>
              {/* Step Circle & Label */}
              <button
                disabled={isAnimating}
                onClick={() => onSelectStep(step)}
                className={`group flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${
                  isCurrent
                    ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20 ring-2 ring-sky-400/30'
                    : isCompleted
                    ? 'bg-slate-100 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                    : 'bg-transparent text-slate-400 dark:text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
                aria-label={`Jump to Step ${step}`}
              >
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    isCurrent
                      ? 'bg-white text-sky-700'
                      : isCompleted
                      ? 'bg-emerald-500 text-white'
                      : 'border border-slate-300 dark:border-slate-700 text-slate-500'
                  }`}
                >
                  {isCompleted ? <Check className="w-3 h-3 stroke-[3]" /> : step.toString().padStart(2, '0')}
                </div>
                <span className="hidden xl:inline">
                  {step === 10 ? 'Solved' : `Step ${step}`}
                </span>
              </button>

              {/* Connecting Line */}
              {idx < steps.length - 1 && (
                <div
                  className={`flex-1 h-0.5 mx-1 transition-colors ${
                    step < currentStep
                      ? 'bg-emerald-500/70'
                      : 'bg-slate-200 dark:bg-slate-800'
                  }`}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
