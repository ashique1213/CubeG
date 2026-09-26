import React from 'react';
import { MoveNotation } from '../../cube/types';

interface MoveVisualCardProps {
  move: MoveNotation;
  isCurrent?: boolean;
  isDone?: boolean;
  size?: number;
}

export const getMoveDescription = (move: MoveNotation): string => {
  switch (move) {
    case 'R':   return 'Right Up';
    case "R'":  return 'Right Down';
    case 'R2':  return 'Right 180°';
    case 'L':   return 'Left Down';
    case "L'":  return 'Left Up';
    case 'L2':  return 'Left 180°';
    case 'U':   return 'Top Left';
    case "U'":  return 'Top Right';
    case 'U2':  return 'Top 180°';
    case 'F':   return 'Front Clockwise';
    case "F'":  return 'Front Counter-CW';
    case 'F2':  return 'Front 180°';
    case 'B':   return 'Bottom Right';
    case "B'":  return 'Bottom Left';
    case 'B2':  return 'Bottom 180°';
    case 'D':   return 'Down Clockwise';
    case "D'":  return 'Down Counter-CW';
    case 'D2':  return 'Down 180°';
    default:    return move;
  }
};

export const MoveVisualCard: React.FC<MoveVisualCardProps> = ({
  move,
  isCurrent = false,
  isDone = false,
  size = 52,
}) => {
  const desc = getMoveDescription(move);

  // Render authentic 3x3 diagram grid with exact rotation arrows matching user's diagram
  const renderGridWithArrow = () => {
    const stroke = '#000000';
    const strokeWidth = 1.5;
    const arrowStroke = '#000000';
    const arrowWidth = 2.4;

    switch (move) {
      /* ── R: Right column turns UP ↑ ──────────────────────────── */
      case 'R':
        return (
          <svg width={size} height={size} viewBox="0 0 60 60">
            {/* Grid 3x3 */}
            <rect x="6" y="6" width="48" height="48" fill="#ffffff" stroke={stroke} strokeWidth={strokeWidth} rx="2" />
            <line x1="22" y1="6" x2="22" y2="54" stroke={stroke} strokeWidth={strokeWidth} />
            <line x1="38" y1="6" x2="38" y2="54" stroke={stroke} strokeWidth={strokeWidth} />
            <line x1="6" y1="22" x2="54" y2="22" stroke={stroke} strokeWidth={strokeWidth} />
            <line x1="6" y1="38" x2="54" y2="38" stroke={stroke} strokeWidth={strokeWidth} />
            {/* Right column highlight */}
            <rect x="38" y="6" width="16" height="48" fill="rgba(4, 170, 109, 0.12)" />
            {/* Up arrow on right column */}
            <line x1="46" y1="46" x2="46" y2="14" stroke={arrowStroke} strokeWidth={arrowWidth} strokeLinecap="round" />
            <polyline points="40,20 46,13 52,20" fill="none" stroke={arrowStroke} strokeWidth={arrowWidth} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );

      /* ── R': Right column turns DOWN ↓ ───────────────────────── */
      case "R'":
        return (
          <svg width={size} height={size} viewBox="0 0 60 60">
            <rect x="6" y="6" width="48" height="48" fill="#ffffff" stroke={stroke} strokeWidth={strokeWidth} rx="2" />
            <line x1="22" y1="6" x2="22" y2="54" stroke={stroke} strokeWidth={strokeWidth} />
            <line x1="38" y1="6" x2="38" y2="54" stroke={stroke} strokeWidth={strokeWidth} />
            <line x1="6" y1="22" x2="54" y2="22" stroke={stroke} strokeWidth={strokeWidth} />
            <line x1="6" y1="38" x2="54" y2="38" stroke={stroke} strokeWidth={strokeWidth} />
            <rect x="38" y="6" width="16" height="48" fill="rgba(217, 119, 6, 0.12)" />
            {/* Down arrow on right column */}
            <line x1="46" y1="14" x2="46" y2="46" stroke={arrowStroke} strokeWidth={arrowWidth} strokeLinecap="round" />
            <polyline points="40,40 46,47 52,40" fill="none" stroke={arrowStroke} strokeWidth={arrowWidth} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );

      /* ── R2: Right column turns 180° ─────────────────────────── */
      case 'R2':
        return (
          <svg width={size} height={size} viewBox="0 0 60 60">
            <rect x="6" y="6" width="48" height="48" fill="#ffffff" stroke={stroke} strokeWidth={strokeWidth} rx="2" />
            <line x1="22" y1="6" x2="22" y2="54" stroke={stroke} strokeWidth={strokeWidth} />
            <line x1="38" y1="6" x2="38" y2="54" stroke={stroke} strokeWidth={strokeWidth} />
            <line x1="6" y1="22" x2="54" y2="22" stroke={stroke} strokeWidth={strokeWidth} />
            <line x1="6" y1="38" x2="54" y2="38" stroke={stroke} strokeWidth={strokeWidth} />
            <line x1="46" y1="46" x2="46" y2="14" stroke={arrowStroke} strokeWidth={arrowWidth} strokeLinecap="round" />
            <polyline points="40,20 46,13 52,20" fill="none" stroke={arrowStroke} strokeWidth={arrowWidth} strokeLinecap="round" />
            <polyline points="40,27 46,20 52,27" fill="none" stroke={arrowStroke} strokeWidth={arrowWidth} strokeLinecap="round" />
          </svg>
        );

      /* ── L: Left column turns DOWN ↓ ─────────────────────────── */
      case 'L':
        return (
          <svg width={size} height={size} viewBox="0 0 60 60">
            <rect x="6" y="6" width="48" height="48" fill="#ffffff" stroke={stroke} strokeWidth={strokeWidth} rx="2" />
            <line x1="22" y1="6" x2="22" y2="54" stroke={stroke} strokeWidth={strokeWidth} />
            <line x1="38" y1="6" x2="38" y2="54" stroke={stroke} strokeWidth={strokeWidth} />
            <line x1="6" y1="22" x2="54" y2="22" stroke={stroke} strokeWidth={strokeWidth} />
            <line x1="6" y1="38" x2="54" y2="38" stroke={stroke} strokeWidth={strokeWidth} />
            <rect x="6" y="6" width="16" height="48" fill="rgba(33, 150, 243, 0.12)" />
            {/* Down arrow on left column */}
            <line x1="14" y1="14" x2="14" y2="46" stroke={arrowStroke} strokeWidth={arrowWidth} strokeLinecap="round" />
            <polyline points="8,40 14,47 20,40" fill="none" stroke={arrowStroke} strokeWidth={arrowWidth} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );

      /* ── L': Left column turns UP ↑ ──────────────────────────── */
      case "L'":
        return (
          <svg width={size} height={size} viewBox="0 0 60 60">
            <rect x="6" y="6" width="48" height="48" fill="#ffffff" stroke={stroke} strokeWidth={strokeWidth} rx="2" />
            <line x1="22" y1="6" x2="22" y2="54" stroke={stroke} strokeWidth={strokeWidth} />
            <line x1="38" y1="6" x2="38" y2="54" stroke={stroke} strokeWidth={strokeWidth} />
            <line x1="6" y1="22" x2="54" y2="22" stroke={stroke} strokeWidth={strokeWidth} />
            <line x1="6" y1="38" x2="54" y2="38" stroke={stroke} strokeWidth={strokeWidth} />
            <rect x="6" y="6" width="16" height="48" fill="rgba(33, 150, 243, 0.12)" />
            {/* Up arrow on left column */}
            <line x1="14" y1="46" x2="14" y2="14" stroke={arrowStroke} strokeWidth={arrowWidth} strokeLinecap="round" />
            <polyline points="8,20 14,13 20,20" fill="none" stroke={arrowStroke} strokeWidth={arrowWidth} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );

      /* ── U: Top row turns LEFT ← ─────────────────────────────── */
      case 'U':
        return (
          <svg width={size} height={size} viewBox="0 0 60 60">
            <rect x="6" y="6" width="48" height="48" fill="#ffffff" stroke={stroke} strokeWidth={strokeWidth} rx="2" />
            <line x1="22" y1="6" x2="22" y2="54" stroke={stroke} strokeWidth={strokeWidth} />
            <line x1="38" y1="6" x2="38" y2="54" stroke={stroke} strokeWidth={strokeWidth} />
            <line x1="6" y1="22" x2="54" y2="22" stroke={stroke} strokeWidth={strokeWidth} />
            <line x1="6" y1="38" x2="54" y2="38" stroke={stroke} strokeWidth={strokeWidth} />
            <rect x="6" y="6" width="48" height="16" fill="rgba(4, 170, 109, 0.12)" />
            {/* Left arrow on top row */}
            <line x1="46" y1="14" x2="14" y2="14" stroke={arrowStroke} strokeWidth={arrowWidth} strokeLinecap="round" />
            <polyline points="20,8 13,14 20,20" fill="none" stroke={arrowStroke} strokeWidth={arrowWidth} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );

      /* ── U': Top row turns RIGHT → ───────────────────────────── */
      case "U'":
        return (
          <svg width={size} height={size} viewBox="0 0 60 60">
            <rect x="6" y="6" width="48" height="48" fill="#ffffff" stroke={stroke} strokeWidth={strokeWidth} rx="2" />
            <line x1="22" y1="6" x2="22" y2="54" stroke={stroke} strokeWidth={strokeWidth} />
            <line x1="38" y1="6" x2="38" y2="54" stroke={stroke} strokeWidth={strokeWidth} />
            <line x1="6" y1="22" x2="54" y2="22" stroke={stroke} strokeWidth={strokeWidth} />
            <line x1="6" y1="38" x2="54" y2="38" stroke={stroke} strokeWidth={strokeWidth} />
            <rect x="6" y="6" width="48" height="16" fill="rgba(217, 119, 6, 0.12)" />
            {/* Right arrow on top row */}
            <line x1="14" y1="14" x2="46" y2="14" stroke={arrowStroke} strokeWidth={arrowWidth} strokeLinecap="round" />
            <polyline points="40,8 47,14 40,20" fill="none" stroke={arrowStroke} strokeWidth={arrowWidth} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );

      /* ── U2: Top row turns 180° ──────────────────────────────── */
      case 'U2':
        return (
          <svg width={size} height={size} viewBox="0 0 60 60">
            <rect x="6" y="6" width="48" height="48" fill="#ffffff" stroke={stroke} strokeWidth={strokeWidth} rx="2" />
            <line x1="22" y1="6" x2="22" y2="54" stroke={stroke} strokeWidth={strokeWidth} />
            <line x1="38" y1="6" x2="38" y2="54" stroke={stroke} strokeWidth={strokeWidth} />
            <line x1="6" y1="22" x2="54" y2="22" stroke={stroke} strokeWidth={strokeWidth} />
            <line x1="6" y1="38" x2="54" y2="38" stroke={stroke} strokeWidth={strokeWidth} />
            <line x1="46" y1="14" x2="14" y2="14" stroke={arrowStroke} strokeWidth={arrowWidth} strokeLinecap="round" />
            <polyline points="20,8 13,14 20,20" fill="none" stroke={arrowStroke} strokeWidth={arrowWidth} strokeLinecap="round" />
            <polyline points="27,8 20,14 27,20" fill="none" stroke={arrowStroke} strokeWidth={arrowWidth} strokeLinecap="round" />
          </svg>
        );

      /* ── F: Front face clockwise circular arrow (tilted grid) ── */
      case 'F':
        return (
          <svg width={size} height={size} viewBox="0 0 60 60">
            {/* Flat black base square behind rotated face showing rotation offset */}
            <rect x="9" y="9" width="42" height="42" fill="#000000" rx="1" />
            {/* Tilted Front Face like reference drawing */}
            <g transform="rotate(-6 30 30)">
              <rect x="9" y="9" width="42" height="42" fill="#ffffff" stroke={stroke} strokeWidth={strokeWidth} rx="1" />
              <line x1="23" y1="9" x2="23" y2="51" stroke={stroke} strokeWidth={strokeWidth} />
              <line x1="37" y1="9" x2="37" y2="51" stroke={stroke} strokeWidth={strokeWidth} />
              <line x1="9" y1="23" x2="51" y2="23" stroke={stroke} strokeWidth={strokeWidth} />
              <line x1="9" y1="37" x2="51" y2="37" stroke={stroke} strokeWidth={strokeWidth} />
            </g>
            {/* Bold Curved Clockwise Arrow ↷ */}
            <path
              d="M 18 36 A 15 15 0 1 1 43 24"
              fill="none"
              stroke={arrowStroke}
              strokeWidth={arrowWidth + 0.8}
              strokeLinecap="round"
            />
            <polygon points="48,20 45,30 37,25" fill={arrowStroke} />
          </svg>
        );

      /* ── F': Front face counter-clockwise circular arrow ─────── */
      case "F'":
        return (
          <svg width={size} height={size} viewBox="0 0 60 60">
            {/* Flat black base square behind rotated face showing rotation offset */}
            <rect x="9" y="9" width="42" height="42" fill="#000000" rx="1" />
            {/* Tilted Front Face */}
            <g transform="rotate(6 30 30)">
              <rect x="9" y="9" width="42" height="42" fill="#ffffff" stroke={stroke} strokeWidth={strokeWidth} rx="1" />
              <line x1="23" y1="9" x2="23" y2="51" stroke={stroke} strokeWidth={strokeWidth} />
              <line x1="37" y1="9" x2="37" y2="51" stroke={stroke} strokeWidth={strokeWidth} />
              <line x1="9" y1="23" x2="51" y2="23" stroke={stroke} strokeWidth={strokeWidth} />
              <line x1="9" y1="37" x2="51" y2="37" stroke={stroke} strokeWidth={strokeWidth} />
            </g>
            {/* Bold Curved Counter-Clockwise Arrow ↶ */}
            <path
              d="M 42 36 A 15 15 0 1 0 17 24"
              fill="none"
              stroke={arrowStroke}
              strokeWidth={arrowWidth + 0.8}
              strokeLinecap="round"
            />
            <polygon points="12,20 15,30 23,25" fill={arrowStroke} />
          </svg>
        );

      /* ── B' / Bottom to Left ← ───────────────────────────────── */
      case "B'":
        return (
          <svg width={size} height={size} viewBox="0 0 60 60">
            <rect x="6" y="6" width="48" height="48" fill="#ffffff" stroke={stroke} strokeWidth={strokeWidth} rx="2" />
            <line x1="22" y1="6" x2="22" y2="54" stroke={stroke} strokeWidth={strokeWidth} />
            <line x1="38" y1="6" x2="38" y2="54" stroke={stroke} strokeWidth={strokeWidth} />
            <line x1="6" y1="22" x2="54" y2="22" stroke={stroke} strokeWidth={strokeWidth} />
            <line x1="6" y1="38" x2="54" y2="38" stroke={stroke} strokeWidth={strokeWidth} />
            <rect x="6" y="38" width="48" height="16" fill="rgba(233, 30, 99, 0.12)" />
            {/* Left arrow on bottom row */}
            <line x1="46" y1="46" x2="14" y2="46" stroke={arrowStroke} strokeWidth={arrowWidth} strokeLinecap="round" />
            <polyline points="20,40 13,46 20,52" fill="none" stroke={arrowStroke} strokeWidth={arrowWidth} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );

      /* ── B / Bottom to Right → ───────────────────────────────── */
      case 'B':
        return (
          <svg width={size} height={size} viewBox="0 0 60 60">
            <rect x="6" y="6" width="48" height="48" fill="#ffffff" stroke={stroke} strokeWidth={strokeWidth} rx="2" />
            <line x1="22" y1="6" x2="22" y2="54" stroke={stroke} strokeWidth={strokeWidth} />
            <line x1="38" y1="6" x2="38" y2="54" stroke={stroke} strokeWidth={strokeWidth} />
            <line x1="6" y1="22" x2="54" y2="22" stroke={stroke} strokeWidth={strokeWidth} />
            <line x1="6" y1="38" x2="54" y2="38" stroke={stroke} strokeWidth={strokeWidth} />
            <rect x="6" y="38" width="48" height="16" fill="rgba(233, 30, 99, 0.12)" />
            {/* Right arrow on bottom row */}
            <line x1="14" y1="46" x2="46" y2="46" stroke={arrowStroke} strokeWidth={arrowWidth} strokeLinecap="round" />
            <polyline points="40,40 47,46 40,52" fill="none" stroke={arrowStroke} strokeWidth={arrowWidth} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );

      /* ── Fallback generic ────────────────────────────────────── */
      default:
        return (
          <svg width={size} height={size} viewBox="0 0 60 60">
            <rect x="6" y="6" width="48" height="48" fill="#ffffff" stroke={stroke} strokeWidth={strokeWidth} rx="2" />
            <line x1="22" y1="6" x2="22" y2="54" stroke={stroke} strokeWidth={strokeWidth} />
            <line x1="38" y1="6" x2="38" y2="54" stroke={stroke} strokeWidth={strokeWidth} />
            <line x1="6" y1="22" x2="54" y2="22" stroke={stroke} strokeWidth={strokeWidth} />
            <line x1="6" y1="38" x2="54" y2="38" stroke={stroke} strokeWidth={strokeWidth} />
            <text x="30" y="36" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#000000">{move}</text>
          </svg>
        );
    }
  };

  return (
    <div
      className={`w3-move-card${isCurrent ? ' w3-move-card-active' : isDone ? ' w3-move-card-done' : ''}`}
      title={`${move}: ${desc}`}
    >
      <div className="w3-move-card-diagram">
        {renderGridWithArrow()}
      </div>
      <div className="w3-move-card-label">
        <span className="w3-move-card-code">{move}</span>
        <span className="w3-move-card-desc">{desc}</span>
      </div>
    </div>
  );
};
