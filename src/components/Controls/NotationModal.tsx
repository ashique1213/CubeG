import React from 'react';
import { X, BookOpen, Check } from 'lucide-react';

interface NotationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NotationModal: React.FC<NotationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const faces = [
    { key: 'U', name: 'Up', color: 'Yellow', desc: 'Top layer rotation clockwise' },
    { key: 'D', name: 'Down', color: 'White', desc: 'Bottom layer rotation clockwise' },
    { key: 'R', name: 'Right', color: 'Green', desc: 'Right layer rotation clockwise' },
    { key: 'L', name: 'Left', color: 'Blue', desc: 'Left layer rotation clockwise' },
    { key: 'F', name: 'Front', color: 'Red', desc: 'Front layer facing you clockwise' },
    { key: 'B', name: 'Back', color: 'Orange', desc: 'Back layer facing away clockwise' },
  ];

  return (
    <div className="modal-backdrop animate-fade-in">
      <div className="modal-box" style={{ maxWidth: 520, padding: 0 }}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <BookOpen style={{ width: 16, height: 16, color: 'var(--accent)' }} />
            <span className="modal-title">Rubik's Cube Notation Guide</span>
          </div>
          <button onClick={onClose} className="modal-close">
            <X style={{ width: 16, height: 16 }} />
          </button>
        </div>
        <div className="modal-body">

        {/* Rule Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/60">
            <div className="font-mono font-bold text-sky-600 dark:text-sky-400 text-sm">
              Letter alone (e.g. R)
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-300 mt-1">
              Turn that face <strong>90° clockwise</strong> looking directly at it.
            </div>
          </div>
          <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/60">
            <div className="font-mono font-bold text-amber-600 dark:text-amber-400 text-sm">
              Prime ' (e.g. R')
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-300 mt-1">
              Turn that face <strong>90° counter-clockwise</strong> (opposite direction).
            </div>
          </div>
          <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/60">
            <div className="font-mono font-bold text-emerald-600 dark:text-emerald-400 text-sm">
              Number 2 (e.g. R2)
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-300 mt-1">
              Turn that face <strong>180° (half turn)</strong> in either direction.
            </div>
          </div>
        </div>

        {/* Faces Table */}
        <div className="space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            The 6 Faces
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {faces.map(f => (
              <div
                key={f.key}
                className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800"
              >
                <span className="w-8 h-8 rounded-lg bg-slate-900 text-sky-400 font-mono font-bold flex items-center justify-center text-sm shadow-xs">
                  {f.key}
                </span>
                <div className="text-xs">
                  <div className="font-bold text-slate-800 dark:text-slate-200">
                    {f.name} ({f.color})
                  </div>
                  <div className="text-slate-500 text-[11px]">
                    {f.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 px-5 py-2 bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold rounded-xl shadow-md transition-all active:scale-95"
          >
            <Check className="w-4 h-4" />
            <span>Got It</span>
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};
