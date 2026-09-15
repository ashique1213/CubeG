import React from 'react';
import { MoveNotation } from '../../cube/types';

interface MoveIndicatorBadgeProps {
  activeMove: MoveNotation | null;
  lastCompletedMove: MoveNotation | null;
  isAlgorithmComplete?: boolean;
}

export const MoveIndicatorBadge: React.FC<MoveIndicatorBadgeProps> = ({
  activeMove,
  lastCompletedMove,
  isAlgorithmComplete,
}) => {
  if (isAlgorithmComplete) {
    return (
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-emerald-950/80 backdrop-blur-md border border-emerald-500/40 text-emerald-300 px-3 py-1.5 rounded-full shadow-lg text-sm font-medium animate-fade-in">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>Algorithm Complete ✓</span>
      </div>
    );
  }

  if (activeMove) {
    return (
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2.5 bg-slate-900/85 backdrop-blur-md border border-sky-500/40 text-white px-3.5 py-1.5 rounded-full shadow-xl text-sm font-semibold animate-pulse">
        <span className="w-2.5 h-2.5 rounded-full bg-sky-400"></span>
        <span className="text-slate-400 font-normal">Moving...</span>
        <span className="bg-sky-500 text-slate-950 font-mono font-bold px-2 py-0.5 rounded text-xs">
          {activeMove}
        </span>
      </div>
    );
  }

  if (lastCompletedMove) {
    return (
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-slate-900/75 backdrop-blur-md border border-slate-700/60 text-slate-300 px-3 py-1.5 rounded-full shadow text-xs font-medium">
        <span className="text-emerald-400 font-bold">✓</span>
        <span>Moved:</span>
        <span className="font-mono font-bold text-white bg-slate-800 px-1.5 py-0.5 rounded">
          {lastCompletedMove}
        </span>
      </div>
    );
  }

  return (
    <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 bg-slate-900/60 backdrop-blur-md border border-slate-800 text-slate-400 px-3 py-1 rounded-full text-xs">
      <span>Ready</span>
    </div>
  );
};
