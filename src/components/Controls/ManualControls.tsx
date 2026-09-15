import React from 'react';
import { X, RotateCcw, Sparkles } from 'lucide-react';
import { MoveNotation } from '../../cube/types';

interface ManualControlsProps {
  isOpen: boolean;
  onClose: () => void;
  onExecuteMove: (move: MoveNotation) => void;
  onResetCube: () => void;
  isAnimating: boolean;
}

const MOVE_GROUPS: { label: string; moves: MoveNotation[] }[] = [
  { label: 'Up (U)', moves: ['U', "U'", 'U2'] },
  { label: 'Down (D)', moves: ['D', "D'", 'D2'] },
  { label: 'Right (R)', moves: ['R', "R'", 'R2'] },
  { label: 'Left (L)', moves: ['L', "L'", 'L2'] },
  { label: 'Front (F)', moves: ['F', "F'", 'F2'] },
  { label: 'Back (B)', moves: ['B', "B'", 'B2'] },
];

export const ManualControls: React.FC<ManualControlsProps> = ({
  isOpen,
  onClose,
  onExecuteMove,
  onResetCube,
  isAnimating,
}) => {
  return (
    <div className={`manual-drawer${isOpen ? ' open' : ''}`}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 10, borderBottom: '1px solid rgba(255,255,255,0.07)', marginBottom: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <Sparkles style={{ width: 13, height: 13, color: '#38bdf8' }} />
          <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Manual Controls
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <button
            disabled={isAnimating}
            onClick={onResetCube}
            style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '3px 8px', borderRadius: 6, fontSize: 11, fontWeight: 600, color: '#f87171', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)' }}
          >
            <RotateCcw style={{ width: 11, height: 11 }} />
            Reset
          </button>
          <button onClick={onClose} style={{ padding: 4, borderRadius: 6, color: 'rgba(255,255,255,0.4)' }}>
            <X style={{ width: 14, height: 14 }} />
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 6 }}>
        {MOVE_GROUPS.map(group => (
          <div key={group.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, background: 'rgba(255,255,255,0.04)', borderRadius: 8, padding: '6px 4px', border: '1px solid rgba(255,255,255,0.06)' }}>
            <span style={{ fontSize: 9, fontWeight: 700, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.07em' }}>
              {group.label}
            </span>
            <div style={{ display: 'flex', gap: 3, width: '100%', justifyContent: 'center' }}>
              {group.moves.map(m => (
                <button
                  key={m}
                  disabled={isAnimating}
                  onClick={() => onExecuteMove(m)}
                  style={{ flex: 1, padding: '4px 2px', background: '#1e293b', color: '#e2e8f0', fontFamily: 'monospace', fontWeight: 700, fontSize: 11, borderRadius: 5, border: '1px solid #334155', cursor: 'pointer', textAlign: 'center', transition: 'all 0.1s' }}
                  onMouseEnter={e => { (e.target as HTMLElement).style.background = '#0ea5e9'; (e.target as HTMLElement).style.color = '#0f172a'; }}
                  onMouseLeave={e => { (e.target as HTMLElement).style.background = '#1e293b'; (e.target as HTMLElement).style.color = '#e2e8f0'; }}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
