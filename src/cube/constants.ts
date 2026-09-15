import * as THREE from 'three';
import { FaceName, MoveNotation, MoveDefinition } from './types';

// Official Rubik's Cube Colors as requested
export const CUBE_COLORS = {
  white: '#FFFFFF',
  yellow: '#FFD500',
  red: '#B71234',
  orange: '#FF5800',
  blue: '#0046AD',
  green: '#009B48',
  plastic: '#151619',
  innerPlastic: '#0d0e10',
  highlightGlow: '#38bdf8',
} as const;

// Standard Rubik's Cube Face to Color mapping:
// Top: Yellow, Bottom: White, Front: Red, Back: Orange, Right: Green, Left: Blue
export const FACE_COLORS: Record<FaceName, string> = {
  U: CUBE_COLORS.yellow,
  D: CUBE_COLORS.white,
  F: CUBE_COLORS.red,
  B: CUBE_COLORS.orange,
  R: CUBE_COLORS.green,
  L: CUBE_COLORS.blue,
};

// Base definitions for clockwise 90 degree rotation
export const BASE_MOVES: Record<FaceName, { axis: 'x' | 'y' | 'z'; layer: number; vector: THREE.Vector3; angle: number }> = {
  R: { axis: 'x', layer: 1, vector: new THREE.Vector3(1, 0, 0), angle: -Math.PI / 2 },
  L: { axis: 'x', layer: -1, vector: new THREE.Vector3(1, 0, 0), angle: Math.PI / 2 },
  U: { axis: 'y', layer: 1, vector: new THREE.Vector3(0, 1, 0), angle: -Math.PI / 2 },
  D: { axis: 'y', layer: -1, vector: new THREE.Vector3(0, 1, 0), angle: Math.PI / 2 },
  F: { axis: 'z', layer: 1, vector: new THREE.Vector3(0, 0, 1), angle: -Math.PI / 2 },
  B: { axis: 'z', layer: -1, vector: new THREE.Vector3(0, 0, 1), angle: Math.PI / 2 },
};

export function getMoveDefinition(move: MoveNotation): MoveDefinition {
  const face = move[0] as FaceName;
  const isPrime = move.includes("'");
  const isDouble = move.includes('2');
  const base = BASE_MOVES[face];

  let multiplier = 1;
  if (isPrime) multiplier = -1;
  else if (isDouble) multiplier = 2;

  return {
    notation: move,
    face,
    axis: base.axis,
    layer: base.layer,
    rotationVector: base.vector.clone(),
    targetAngle: base.angle * multiplier,
  };
}

export function getInverseMove(move: MoveNotation): MoveNotation {
  if (move.includes("'")) {
    return move.replace("'", '') as MoveNotation;
  }
  if (move.includes('2')) {
    return move;
  }
  return `${move}'` as MoveNotation;
}
