import React, { useEffect } from 'react';
import { X, HelpCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

interface HowItWorksModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartSolving: () => void;
}

export const HowItWorksModal: React.FC<HowItWorksModalProps> = ({
  isOpen,
  onClose,
  onStartSolving,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const stepsOverview = [
    { title: 'The Daisy', desc: 'Surround the yellow center with 4 white edge petals.' },
    { title: 'White Cross', desc: 'Match side colors to centers and turn 180° down to the bottom face.' },
    { title: 'First Layer Corners', desc: 'Insert the 4 bottom white corners using R U R\' U\'.' },
    { title: 'Middle Layer', desc: 'Slot the 4 belt edges into their left or right positions.' },
    { title: 'Yellow Cross', desc: 'Form the top yellow cross using F U R U\' R\' F\'.' },
    { title: 'Crossed Yellow Side Matching', desc: 'Align side edge colors with centers using U R U R\' U R U2 R\'.' },
    { title: 'Corner Setting', desc: 'Cycle top layer corners into their correct places with U R U\' L\' U R\' U\' L.' },
    { title: 'Orienting Yellow Corners', desc: 'Repeat R\' B\' R B until corner yellow faces UP, rotating only the top layer.' },
    { title: 'Cube Solved!', desc: 'Turn the top layer to match side colors and the entire cube is complete!' },
  ];

  return (
    <div
      className="w3-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="howitworks-modal-title"
    >
      <div
        className="w3-modal-dialog"
        onClick={e => e.stopPropagation()}
      >
        {/* Exact Black Header */}
        <div className="w3-modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <HelpCircle style={{ width: 18, height: 18, color: '#04AA6D' }} />
            <span id="howitworks-modal-title" className="w3-modal-title">
              How This Beginner Method Works
            </span>
          </div>
          <button
            onClick={onClose}
            className="w3-modal-close"
            title="Close dialog (Esc)"
            aria-label="Close dialog"
          >
            <X style={{ width: 20, height: 20 }} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="w3-modal-content">
          <p className="w3-modal-lead">
            This tutorial teaches the foundational <strong>Layer-by-Layer (LBL)</strong> method for solving the 3×3 Rubik's Cube. Follow each step sequentially:
          </p>

          <div className="w3-steps-overview-list">
            {stepsOverview.map((item, idx) => (
              <div key={idx} className="w3-step-overview-item">
                <CheckCircle2 style={{ width: 16, height: 16, color: '#04AA6D', flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div className="w3-step-overview-title">
                    Step {idx + 1}: {item.title}
                  </div>
                  <div className="w3-step-overview-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="w3-modal-footer">
            <button
              onClick={() => {
                onClose();
                onStartSolving();
              }}
              className="w3-btn w3-btn-run"
              style={{ padding: '8px 20px', fontSize: 14 }}
            >
              <span>Start Solving Now</span>
              <ArrowRight style={{ width: 16, height: 16 }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
