import React from 'react';
import { RotateCcw, Sliders, BookOpen, Box } from 'lucide-react';
import { SolvingStep } from '../../cube/types';

interface SidebarProps {
  steps: SolvingStep[];
  currentStepId: number;
  isAnimating: boolean;
  onSelectStep: (id: number) => void;
  isMobileOpen: boolean;
  onToggle: () => void;
  isManualControlsOpen: boolean;
  onResetStep: () => void;
  onToggleManualControls: () => void;
  onOpenNotation: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  steps,
  currentStepId,
  isAnimating,
  onSelectStep,
  isMobileOpen,
  isManualControlsOpen,
  onResetStep,
  onToggleManualControls,
  onOpenNotation,
}) => {
  return (
    <nav className={`sidebar select-none${isMobileOpen ? ' mobile-open' : ''}`}>
      {/* Brand */}
      <div className="sidebar-brand">
        <div className="sidebar-brand-icon">
          <Box style={{ width: 16, height: 16, color: '#fff' }} />
        </div>
        <div>
          <div className="sidebar-brand-name">CubeGuide</div>
          <div className="sidebar-brand-sub">3×3 Beginner Method</div>
        </div>
      </div>

      <div className="sidebar-section-title">Guide Contents</div>
      <div className="sidebar-divider" />

      {/* Step list */}
      <div className="sidebar-steps">
        {steps.map(step => {
          const isCurrent = step.id === currentStepId;
          const isCompleted = step.id < currentStepId;
          return (
            <button
              key={step.id}
              disabled={isAnimating}
              onClick={() => onSelectStep(step.id)}
              className={`sidebar-step-btn${isCurrent ? ' active' : ''}${isCompleted ? ' completed' : ''}`}
            >
              <span className="sidebar-step-dot" />
              <span>
                <span className="sidebar-step-label">Step {step.id} — </span>
                {step.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Bottom actions */}
      <div className="sidebar-divider" />
      <div className="sidebar-actions">
        <button
          disabled={isAnimating}
          onClick={onResetStep}
          className="sidebar-action-btn"
          title="Reset current step"
        >
          <RotateCcw style={{ width: 13, height: 13 }} />
          Reset Step
        </button>

        <button
          onClick={onToggleManualControls}
          className={`sidebar-action-btn${isManualControlsOpen ? ' active' : ''}`}
          title="Manual Moves"
        >
          <Sliders style={{ width: 13, height: 13 }} />
          Manual Moves
        </button>

        <button
          onClick={onOpenNotation}
          className="sidebar-action-btn"
          title="Notation Reference"
        >
          <BookOpen style={{ width: 13, height: 13 }} />
          Notation
        </button>
      </div>

      <div className="sidebar-divider" />
      <div className="sidebar-footer">
        <span>Powered by </span>
        <a
          href="https://questacksolutions.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="sidebar-footer-link"
        >
          QueStack Solutions
        </a>
      </div>
    </nav>
  );
};
