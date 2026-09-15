import React from 'react';
import { Play, Pause, SkipForward, RotateCcw } from 'lucide-react';
import { MoveNotation } from '../../cube/types';

interface AlgorithmPlayerProps {
  moves: MoveNotation[];
  currentMoveIndex: number;
  isPlaying: boolean;
  isAnimating: boolean;
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
  isAnimating,
  isComplete,
  onPlay,
  onPause,
  onNextMove,
  onResetStep,
}) => {
  if (moves.length === 0) return null;

  return (
    <div className="player-row">
      {isPlaying ? (
        <button onClick={onPause} className="player-btn player-btn-pause">
          <Pause style={{ width: 13, height: 13 }} />
          Pause
        </button>
      ) : (
        <button
          disabled={isAnimating || isComplete}
          onClick={onPlay}
          className="player-btn player-btn-play"
        >
          <Play style={{ width: 13, height: 13 }} />
          {currentMoveIndex > 0 && !isComplete ? 'Resume' : 'Play All'}
        </button>
      )}

      <button
        disabled={isAnimating || isPlaying || isComplete}
        onClick={onNextMove}
        className="player-btn player-btn-next"
        title="Step one move at a time"
      >
        <SkipForward style={{ width: 13, height: 13 }} />
        Next Move
      </button>

      <button
        disabled={isAnimating}
        onClick={onResetStep}
        className="player-btn player-btn-reset"
        title="Reset to start of step"
      >
        <RotateCcw style={{ width: 13, height: 13 }} />
      </button>
    </div>
  );
};
