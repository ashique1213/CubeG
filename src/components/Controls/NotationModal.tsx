import React, { useEffect } from 'react';
import { X, BookOpen, Check } from 'lucide-react';

interface NotationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NotationModal: React.FC<NotationModalProps> = ({ isOpen, onClose }) => {
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

  const faces = [
    { key: 'U', name: 'Up', color: 'Yellow', desc: 'Top layer turn 90° clockwise' },
    { key: 'D', name: 'Down', color: 'White', desc: 'Bottom layer turn 90° clockwise' },
    { key: 'R', name: 'Right', color: 'Green', desc: 'Right layer turn 90° clockwise' },
    { key: 'L', name: 'Left', color: 'Blue', desc: 'Left layer turn 90° clockwise' },
    { key: 'F', name: 'Front', color: 'Red', desc: 'Front layer turn 90° clockwise' },
    { key: 'B', name: 'Back', color: 'Orange', desc: 'Back layer turn 90° clockwise' },
  ];

  return (
    <div
      className="w3-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="notation-modal-title"
    >
      <div
        className="w3-modal-dialog"
        onClick={e => e.stopPropagation()}
      >
        {/* Exact Black Header */}
        <div className="w3-modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <BookOpen style={{ width: 18, height: 18, color: '#04AA6D' }} />
            <span id="notation-modal-title" className="w3-modal-title">
              Rubik's Cube Move Notations
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
          {/* Rules Summary */}
          <div className="w3-notation-rules">
            <div className="w3-notation-rule-card">
              <div className="w3-rule-badge">Letter (e.g. R, U, F)</div>
              <p className="w3-rule-desc">
                Turn that face <strong>90° clockwise</strong> looking directly at it.
              </p>
            </div>

            <div className="w3-notation-rule-card">
              <div className="w3-rule-badge w3-badge-prime">Prime ' (e.g. R', U')</div>
              <p className="w3-rule-desc">
                Turn that face <strong>90° counter-clockwise</strong> (opposite).
              </p>
            </div>

            <div className="w3-notation-rule-card">
              <div className="w3-rule-badge w3-badge-double">Number 2 (e.g. U2, R2)</div>
              <p className="w3-rule-desc">
                Turn that face <strong>180° (half turn)</strong> in either direction.
              </p>
            </div>
          </div>

          {/* Faces Grid */}
          <div style={{ marginTop: 18 }}>
            <h4 className="w3-modal-section-title">The 6 Cube Faces</h4>
            <div className="w3-faces-grid">
              {faces.map(f => (
                <div key={f.key} className="w3-face-card">
                  <span className="w3-face-key">{f.key}</span>
                  <div>
                    <div className="w3-face-name">
                      {f.name} ({f.color})
                    </div>
                    <div className="w3-face-desc">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Action */}
          <div className="w3-modal-footer">
            <button
              onClick={onClose}
              className="w3-btn w3-btn-run"
              style={{ padding: '8px 22px', fontSize: 14 }}
            >
              <Check style={{ width: 16, height: 16 }} />
              <span>Got It</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
