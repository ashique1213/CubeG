import React from 'react';
import { BookOpen, HelpCircle, RotateCcw, Menu, X, Box } from 'lucide-react';

interface HeaderProps {
  onOpenNotation: () => void;
  onOpenHowItWorks: () => void;
  onResetStep: () => void;
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenNotation,
  onOpenHowItWorks,
  onResetStep,
  onToggleSidebar,
  isSidebarOpen,
}) => {
  return (
    <header className="w3-topbar">
      {/* Mobile Hamburger */}
      <button
        className="w3-topbar-hamburger"
        onClick={onToggleSidebar}
        title={isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
        aria-label="Toggle menu"
      >
        {isSidebarOpen ? <X style={{ width: 20, height: 20 }} /> : <Menu style={{ width: 20, height: 20 }} />}
      </button>

      {/* W3Schools-style Logo / Brand */}
      <div className="w3-topbar-brand">
        <div className="w3-topbar-logo">
          <Box style={{ width: 18, height: 18, color: '#ffffff' }} />
        </div>
        <div className="w3-topbar-title">
          <span className="w3-logo-main">Cube<span className="w3-logo-accent">G</span></span>
          <span className="w3-logo-badge">3×3 TUTORIAL</span>
        </div>
      </div>

      {/* Top navigation links */}
      <nav className="w3-topbar-nav">
        <button
          onClick={onResetStep}
          className="w3-topbar-link"
          title="Reset current step sequence"
        >
          <RotateCcw style={{ width: 14, height: 14 }} />
          <span>Reset Step</span>
        </button>

        <button
          onClick={onOpenNotation}
          className="w3-topbar-link"
          title="Cube Move Notation Cheatsheet"
        >
          <BookOpen style={{ width: 14, height: 14 }} />
          <span>Notations</span>
        </button>

        <button
          onClick={onOpenHowItWorks}
          className="w3-topbar-link"
          title="How This Method Works"
        >
          <HelpCircle style={{ width: 14, height: 14 }} />
          <span>How It Works</span>
        </button>
      </nav>
    </header>
  );
};
