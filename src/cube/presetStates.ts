import { CubeState } from './CubeState';
import { MoveNotation } from './types';

// Setup moves applied from solved state to prepare the starting cube for each tutorial step
export const STEP_SETUP_MOVES: Record<number, MoveNotation[]> = {
  // Step 1: Daisy in progress - 3 petals in place, 1 petal ready to insert
  1: [
    'L2', 'B2', 'R2', 'F2', // create daisy
    'R', 'U', 'R\'', 'F\''   // reverse the last petal insertion
  ],

  // Step 2: The Daisy is complete on top, ready to match colors and turn 180° to bottom
  2: [
    'L2', 'B2', 'R2', 'F2'  // 4 white edges surrounding yellow center
  ],

  // Step 3: White cross solved on bottom, one corner ready on top front-right
  3: [
    'U', 'R', 'U\'', 'R\''   // reverse of R U R' U'
  ],

  // Step 4: First layer complete, middle layer left edge waiting on top
  4: [
    'F', 'U', 'F\'', 'U\'', 'L\'', 'U\'', 'L', 'U' // reverse of U' L' U L U F U' F'
  ],

  // Step 5: First layer complete, middle layer right edge waiting on top
  5: [
    'F\'', 'U\'', 'F', 'U', 'R', 'U', 'R\'', 'U\'' // reverse of U R U' R' U' F' U F
  ],

  // Step 6: First two layers solved, yellow L-shape ready for yellow cross
  6: [
    'F', 'R', 'U', 'R\'', 'U\'', 'F\'' // reverse of F U R U' R' F'
  ],

  // Step 7: Yellow cross solved, forming the Fish Shape ready for Sune
  7: [
    'R', 'U2', 'R\'', 'U\'', 'R', 'U\'', 'R\'' // reverse of R U R' U R U2 R'
  ],

  // Step 8: Yellow face solved, headlights ready at the back for A-Perm
  8: [
    'R2', 'B2', 'R', 'F', 'R\'', 'B2', 'R', 'F\'', 'R' // reverse of R' F R' B2 R F' R' B2 R2
  ],

  // Step 9: Corners solved, 3 edges need cycling for U-Perm
  9: [
    'R', 'U\'', 'R', 'U', 'R', 'U', 'R', 'U\'', 'R\'', 'U\'', 'R2' // reverse of R2 U R U R' U' R' U' R' U R'
  ],

  // Step 10: Completely solved Rubik's Cube!
  10: [],
};

export function getInitialStateForStep(stepId: number): CubeState {
  const cube = new CubeState();
  const setupMoves = STEP_SETUP_MOVES[stepId] || [];
  cube.applyMoves(setupMoves);
  return cube;
}
