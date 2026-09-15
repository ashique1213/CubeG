import React from 'react';
import { MoveNotation } from '../../cube/types';

interface MoveDisplayProps {
  moves: MoveNotation[];
  currentMoveIndex: number;
  isComplete: boolean;
}

export const MoveDisplay: React.FC<MoveDisplayProps> = ({
  moves,
  currentMoveIndex,
  isComplete,
}) => {
  if (moves.length === 0) return null;

  return (
    <div style={{ marginBottom: 10 }}>
      <div className="move-counter">
        <span>Sequence</span>
        {isComplete ? (
          <span className="move-counter-complete">All {moves.length} moves done</span>
        ) : (
          <span>Move {Math.min(currentMoveIndex + 1, moves.length)} / {moves.length}</span>
        )}
      </div>
      <div className="move-row">
        {moves.map((move, idx) => {
          const isCurrent = !isComplete && idx === currentMoveIndex;
          const isDone = idx < currentMoveIndex || isComplete;
          return (
            <span
              key={`${move}-${idx}`}
              className={`move-badge${isCurrent ? ' current' : isDone ? ' done' : ''}`}
            >
              {move}
            </span>
          );
        })}
      </div>
    </div>
  );
};
