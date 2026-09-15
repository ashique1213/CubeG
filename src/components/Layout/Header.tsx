import React from 'react';
import { BookOpen, Sliders, RotateCcw, Menu, X, Box } from 'lucide-react';
import { SolvingStep } from '../../cube/types';

interface HeaderProps {
  currentStep: SolvingStep;
  currentStepId: number;
  totalSteps: number;
  isAnimating: boolean;
  isManualControlsOpen: boolean;
  isSidebarOpen: boolean;
  onSelectStep: (stepId: number) => void;
  onPrevStep: () => void;
  onNextStep: () => void;
  onToggleManualControls: () => void;
  onOpenNotation: () => void;
  onOpenHowItWorks: () => void;
  onResetStep: () => void;
  onToggleSidebar: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  isAnimating,
  isManualControlsOpen,
  isSidebarOpen,
  onToggleManualControls,
  onOpenNotation,
  onResetStep,
  onToggleSidebar,
}) => {
  return (
    <header className="topbar">
      {/* Hamburger (mobile/tablet only) */}
      <button
        className="topbar-hamburger"
        onClick={onToggleSidebar}
        title={isSidebarOpen ? 'Close menu' : 'Open menu'}
      >
        {isSidebarOpen
          ? <X style={{ width: 18, height: 18 }} />
          : <Menu style={{ width: 18, height: 18 }} />
        }
      </button>

      {/* Brand */}
      <div className="topbar-brand">
        <div className="topbar-brand-icon">
          <Box style={{ width: 16, height: 16, color: '#fff' }} />
        </div>
        <span className="topbar-brand-name">CubeGuide</span>
        <span className="topbar-brand-badge">3×3 PRO</span>
      </div>

      {/* Spacer */}
      <div style={{ flex: 1 }} />

      {/* Actions */}
      <div className="topbar-actions">
        <button
          onClick={onResetStep}
          disabled={isAnimating}
          className="topbar-btn"
          title="Reset current step"
        >
          <RotateCcw style={{ width: 13, height: 13 }} />
          <span className="topbar-btn-label">Reset Step</span>
        </button>

        <button
          onClick={onToggleManualControls}
          className="topbar-btn"
          title="Toggle Manual Layer Moves Pad"
          style={isManualControlsOpen ? { color: 'var(--accent)', borderColor: 'var(--accent-border)', background: 'var(--accent-bg)' } : {}}
        >
          <Sliders style={{ width: 13, height: 13 }} />
          <span className="topbar-btn-label">Manual</span>
        </button>

        <button
          onClick={onOpenNotation}
          className="topbar-btn"
          title="Open Notation Reference"
        >
          <BookOpen style={{ width: 13, height: 13 }} />
          <span className="topbar-btn-label">Notation</span>
        </button>
      </div>
    </header>
  );
};
