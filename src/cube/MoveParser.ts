import { MoveNotation } from './types';

const VALID_MOVES = new Set<string>([
  'U', "U'", 'U2',
  'D', "D'", 'D2',
  'L', "L'", 'L2',
  'R', "R'", 'R2',
  'F', "F'", 'F2',
  'B', "B'", 'B2',
]);

export function parseAlgorithm(algStr: string): MoveNotation[] {
  if (!algStr || !algStr.trim()) return [];
  const tokens = algStr.trim().split(/\s+/);
  const result: MoveNotation[] = [];

  for (const token of tokens) {
    if (VALID_MOVES.has(token)) {
      result.push(token as MoveNotation);
    } else {
      console.warn(`[MoveParser] Ignoring unrecognized move token: "${token}"`);
    }
  }

  return result;
}
