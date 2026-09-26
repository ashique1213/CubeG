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

  // Step 4: First layer complete, middle layer edges waiting to be inserted (Left then Right reverse setup)
  4: [
    'F\'', 'U\'', 'F', 'U', 'R', 'U', 'R\'', 'U\'', 'F', 'U', 'F\'', 'U\'', 'L\'', 'U\'', 'L', 'U'
  ],

  // Step 5: First two layers solved, yellow L-shape ready for yellow cross
  5: [
    'F', 'R', 'U', 'R\'', 'U\'', 'F\'' // reverse of F U R U' R' F'
  ],

  // Step 6: Yellow cross solved, top layer edges ready to align side colors (U R U R' U R U2 R')
  6: [
    'R', 'U2', "R'", "U'", 'R', "U'", "R'", "U'" // inverse of U R U R' U R U2 R'
  ],

  // Step 7: Crossed side colors aligned, corners ready for setting (U R U' L' U R' U' L)
  7: [
    "L'", 'U', 'R', "U'", 'L', 'U', "R'", "U'" // inverse of U R U' L' U R' U' L
  ],

  // Step 8: Corner positions set, yellow face orientation ready for R' B' R B
  8: [
    "B'", "R'", 'B', 'R', "B'", "R'", 'B', 'R' // inverse of R' B' R B R' B' R B
  ],

  // Step 9: Completely solved Rubik's Cube!
  9: [],
};

export function getInitialStateForStep(stepId: number): CubeState {
  const cube = new CubeState();
  const setupMoves = STEP_SETUP_MOVES[stepId] || [];
  cube.applyMoves(setupMoves);
  return cube;
}
