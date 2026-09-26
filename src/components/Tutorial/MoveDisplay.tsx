import React from 'react';
import { MoveNotation } from '../../cube/types';
import { MoveVisualCard } from './MoveVisualCard';

interface MoveDisplayProps {
  moves: MoveNotation[];
  currentMoveIndex: number;
  isComplete: boolean;
  stepId?: number;
}

export const MoveDisplay: React.FC<MoveDisplayProps> = ({
  moves,
  currentMoveIndex,
  isComplete,
  stepId,
}) => {
  if (moves.length === 0) return null;

  // Step 4: Divide into Two Distinct Lines (Left Insertion vs Right Insertion)
  if (stepId === 4 && moves.length === 16) {
    const leftMoves = moves.slice(0, 8);
    const rightMoves = moves.slice(8, 16);

    return (
      <div className="w3-move-display">
        {/* Status header */}
        <div className="w3-move-meta">
          <span className="w3-move-label">Visual Move Sequence (Divided into 2 Lines):</span>
          {isComplete ? (
            <span className="w3-move-status w3-move-done">All 16 moves executed ✓</span>
          ) : (
            <span className="w3-move-status">
              {currentMoveIndex < 8
                ? `Executing Left Formula (Move ${currentMoveIndex + 1} of 8)`
                : `Executing Right Formula (Move ${currentMoveIndex - 7} of 8)`}
            </span>
          )}
        </div>

        {/* LINE 1: Left Insertion */}
        <div className="w3-move-group">
          <div className="w3-move-group-header">
            <span className="w3-move-group-tag tag-left">Line 1: Left Insertion</span>
            <span className="w3-move-group-desc">U' L' U L U F U' F'</span>
            <span className="w3-move-group-hint">(Top sticker matches LEFT center)</span>
          </div>

          <div className="w3-move-cards-row">
            {leftMoves.map((move, idx) => {
              const globalIdx = idx;
              const isCurrent = !isComplete && globalIdx === currentMoveIndex;
              const isDone = globalIdx < currentMoveIndex || isComplete;

              return (
                <MoveVisualCard
                  key={`left-${move}-${idx}`}
                  move={move}
                  isCurrent={isCurrent}
                  isDone={isDone}
                  size={46}
                />
              );
            })}
          </div>

          <div className="w3-move-badges" style={{ marginTop: 6 }}>
            {leftMoves.map((move, idx) => {
              const globalIdx = idx;
              const isCurrent = !isComplete && globalIdx === currentMoveIndex;
              const isDone = globalIdx < currentMoveIndex || isComplete;
              return (
                <span
                  key={`badge-left-${move}-${idx}`}
                  className={`w3-move-badge${isCurrent ? ' w3-badge-active' : isDone ? ' w3-badge-done' : ''}`}
                >
                  {move}
                </span>
              );
            })}
          </div>
        </div>

        {/* LINE 2: Right Insertion */}
        <div className="w3-move-group" style={{ marginTop: 10 }}>
          <div className="w3-move-group-header">
            <span className="w3-move-group-tag tag-right">Line 2: Right Insertion</span>
            <span className="w3-move-group-desc">U R U' R' U' F' U F</span>
            <span className="w3-move-group-hint">(Top sticker matches RIGHT center)</span>
          </div>

          <div className="w3-move-cards-row">
            {rightMoves.map((move, idx) => {
              const globalIdx = idx + 8;
              const isCurrent = !isComplete && globalIdx === currentMoveIndex;
              const isDone = globalIdx < currentMoveIndex || isComplete;

              return (
                <MoveVisualCard
                  key={`right-${move}-${idx}`}
                  move={move}
                  isCurrent={isCurrent}
                  isDone={isDone}
                  size={46}
                />
              );
            })}
          </div>

          <div className="w3-move-badges" style={{ marginTop: 6 }}>
            {rightMoves.map((move, idx) => {
              const globalIdx = idx + 8;
              const isCurrent = !isComplete && globalIdx === currentMoveIndex;
              const isDone = globalIdx < currentMoveIndex || isComplete;
              return (
                <span
                  key={`badge-right-${move}-${idx}`}
                  className={`w3-move-badge${isCurrent ? ' w3-badge-active' : isDone ? ' w3-badge-done' : ''}`}
                >
                  {move}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Standard 1-line display for other steps
  return (
    <div className="w3-move-display">
      {/* Move progression status bar */}
      <div className="w3-move-meta">
        <span className="w3-move-label">Visual Move Sequence:</span>
        {isComplete ? (
          <span className="w3-move-status w3-move-done">All {moves.length} moves executed ✓</span>
        ) : (
          <span className="w3-move-status">
            Move {Math.min(currentMoveIndex + 1, moves.length)} of {moves.length}
          </span>
        )}
      </div>

      {/* Visual Move Cards with 3x3 grids and rotational arrows */}
      <div className="w3-move-cards-row">
        {moves.map((move, idx) => {
          const isCurrent = !isComplete && idx === currentMoveIndex;
          const isDone = idx < currentMoveIndex || isComplete;

          return (
            <MoveVisualCard
              key={`${move}-${idx}`}
              move={move}
              isCurrent={isCurrent}
              isDone={isDone}
              size={50}
            />
          );
        })}
      </div>

      {/* Compact Text Sequence Badges */}
      <div className="w3-move-badges" style={{ marginTop: 8 }}>
        {moves.map((move, idx) => {
          const isCurrent = !isComplete && idx === currentMoveIndex;
          const isDone = idx < currentMoveIndex || isComplete;

          return (
            <React.Fragment key={`badge-${move}-${idx}`}>
              {idx > 0 && idx % 8 === 0 && (
                <span className="w3-move-sep" title="Phrase separator">
                  |
                </span>
              )}
              <span
                className={`w3-move-badge${isCurrent ? ' w3-badge-active' : isDone ? ' w3-badge-done' : ''}`}
              >
                {move}
              </span>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

