import * as THREE from 'three';

export type FaceName = 'U' | 'D' | 'L' | 'R' | 'F' | 'B';

export type MoveNotation =
  | 'U' | "U'" | 'U2'
  | 'D' | "D'" | 'D2'
  | 'L' | "L'" | 'L2'
  | 'R' | "R'" | 'R2'
  | 'F' | "F'" | 'F2'
  | 'B' | "B'" | 'B2';

export interface MoveDefinition {
  notation: MoveNotation;
  face: FaceName;
  axis: 'x' | 'y' | 'z';
  layer: number; // -1 or 1
  rotationVector: THREE.Vector3;
  targetAngle: number;
}

export interface CubieFaceStickers {
  right?: string;  // +X (Green)
  left?: string;   // -X (Blue)
  up?: string;     // +Y (Yellow)
  down?: string;   // -Y (White)
  front?: string;  // +Z (Red)
  back?: string;   // -Z (Orange)
}

export interface PieceState {
  id: string; // e.g. "x_y_z" original identifier
  position: THREE.Vector3; // current coordinates in {-1, 0, 1}
  quaternion: THREE.Quaternion; // current 3D orientation
  stickers: CubieFaceStickers;
}

export interface SolvingStep {
  id: number;
  title: string;
  subtitle?: string;
  instructions: string[];
  algorithm?: string;
  moves: MoveNotation[];
  orientation: string;
  diagramTitle?: string;
  diagramType?: 'daisy' | 'bottom-cross' | 'corners' | 'middle-layer' | 'yellow-progression' | 'fish' | 'headlights' | 'edges' | 'solved';
  tips?: string[];
  initialMovesToSetup?: MoveNotation[]; // moves applied from solved state or custom state
  highlightPieces?: (piece: PieceState) => boolean;
}
