import React from 'react';
import { SolvingStep } from '../../cube/types';

interface SidebarProps {
  steps: SolvingStep[];
  currentStepId: number;
  onSelectStep: (id: number) => void;
  isMobileOpen: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({
  steps,
  currentStepId,
  onSelectStep,
  isMobileOpen,
}) => {
  return (
    <aside className={`w3-sidebar${isMobileOpen ? ' w3-sidebar-open' : ''}`}>
      <div className="w3-sidebar-header">
        <h2 className="w3-sidebar-title">Cube 3×3 Tutorial</h2>
      </div>

      <div className="w3-sidebar-list">
        {steps.map(step => {
          const isCurrent = step.id === currentStepId;
          const isCompleted = step.id < currentStepId;

          return (
            <button
              key={step.id}
              onClick={() => onSelectStep(step.id)}
              className={`w3-sidebar-item${isCurrent ? ' w3-active' : ''}${isCompleted ? ' w3-completed' : ''}`}
            >
              <span className="w3-sidebar-step-num">Step {step.id}:</span>
              <span className="w3-sidebar-step-text">{step.title}</span>
            </button>
          );
        })}
      </div>

      <div className="w3-sidebar-footer">
        <div className="w3-footer-brand">
          CubeG &bull; Beginner Method
        </div>
      </div>
    </aside>
  );
};
