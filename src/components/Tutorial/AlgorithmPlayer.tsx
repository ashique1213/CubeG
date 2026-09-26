import React from 'react';
import { Play, Pause, SkipForward, RotateCcw } from 'lucide-react';
import { MoveNotation } from '../../cube/types';

interface AlgorithmPlayerProps {
  moves: MoveNotation[];
  currentMoveIndex: number;
  isPlaying: boolean;
  isAnimating?: boolean;
  isComplete: boolean;
  onPlay: () => void;
  onPause: () => void;
  onNextMove: () => void;
  onResetStep: () => void;
}

export const AlgorithmPlayer: React.FC<AlgorithmPlayerProps> = ({
  moves,
  currentMoveIndex,
  isPlaying,
  isAnimating = false,
  isComplete,
  onPlay,
  onPause,
  onNextMove,
  onResetStep,
}) => {
  if (moves.length === 0) return null;

  return (
    <div className="w3-player-row">
      {isPlaying ? (
        <button
          onClick={onPause}
          className="w3-btn w3-btn-pause"
          title="Pause move playback"
        >
          <Pause style={{ width: 14, height: 14 }} />
          <span>Pause</span>
        </button>
      ) : (
        <button
          disabled={isAnimating || isComplete}
          onClick={onPlay}
          className="w3-btn w3-btn-run"
          title="Run full algorithm sequence"
        >
          <Play style={{ width: 14, height: 14 }} />
          <span>{currentMoveIndex > 0 && !isComplete ? 'Resume Moves »' : 'Run Algorithm »'}</span>
        </button>
      )}

      <button
        disabled={isAnimating || isPlaying || isComplete}
        onClick={onNextMove}
        className="w3-btn w3-btn-secondary"
        title="Step forward one move at a time"
      >
        <SkipForward style={{ width: 14, height: 14 }} />
        <span>Next Move &#10095;</span>
      </button>

      <button
        disabled={isAnimating}
        onClick={onResetStep}
        className="w3-btn w3-btn-reset"
        title="Reset sequence to beginning"
      >
        <RotateCcw style={{ width: 14, height: 14 }} />
        <span>Reset</span>
      </button>
    </div>
  );
};
