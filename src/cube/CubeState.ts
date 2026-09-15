import * as THREE from 'three';
import { PieceState, MoveNotation, FaceName } from './types';
import { FACE_COLORS, getMoveDefinition } from './constants';

export class CubeState {
  pieces: PieceState[];

  constructor(pieces?: PieceState[]) {
    this.pieces = pieces ? pieces.map(p => this.clonePiece(p)) : this.createInitialPieces();
  }

  private clonePiece(piece: PieceState): PieceState {
    return {
      id: piece.id,
      position: piece.position.clone(),
      quaternion: piece.quaternion.clone(),
      stickers: { ...piece.stickers },
    };
  }

  clone(): CubeState {
    return new CubeState(this.pieces);
  }

  // Initialize the 26 cubies in a solved state
  createInitialPieces(): PieceState[] {
    const pieces: PieceState[] = [];

    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          // Skip the center core of the 3x3 cube
          if (x === 0 && y === 0 && z === 0) continue;

          const id = `${x}_${y}_${z}`;
          const stickers: PieceState['stickers'] = {};

          if (x === 1) stickers.right = FACE_COLORS.R;   // Green
          if (x === -1) stickers.left = FACE_COLORS.L;   // Blue
          if (y === 1) stickers.up = FACE_COLORS.U;       // Yellow
          if (y === -1) stickers.down = FACE_COLORS.D;   // White
          if (z === 1) stickers.front = FACE_COLORS.F;   // Red
          if (z === -1) stickers.back = FACE_COLORS.B;    // Orange

          pieces.push({
            id,
            position: new THREE.Vector3(x, y, z),
            quaternion: new THREE.Quaternion(), // identity rotation
            stickers,
          });
        }
      }
    }

    return pieces;
  }

  // Returns all pieces that belong to a specific face/layer
  getLayerPieces(axis: 'x' | 'y' | 'z', layer: number): PieceState[] {
    const threshold = 0.5;
    return this.pieces.filter(p => {
      const val = p.position[axis];
      return layer > 0 ? val > threshold : val < -threshold;
    });
  }

  // Instantly applies a mathematical move without 3D animation (e.g. for setups or instant step loading)
  applyMove(move: MoveNotation): void {
    const def = getMoveDefinition(move);
    const rotationMatrix = new THREE.Matrix4().makeRotationAxis(def.rotationVector, def.targetAngle);
    const rotationQuat = new THREE.Quaternion().setFromRotationMatrix(rotationMatrix);

    const layerPieces = this.getLayerPieces(def.axis, def.layer);

    for (const piece of layerPieces) {
      // Rotate position vector
      piece.position.applyMatrix4(rotationMatrix);
      // Clean round to avoid floating point precision drift
      piece.position.x = Math.round(piece.position.x);
      piece.position.y = Math.round(piece.position.y);
      piece.position.z = Math.round(piece.position.z);

      // Rotate piece orientation
      piece.quaternion.premultiply(rotationQuat);
      piece.quaternion.normalize();
    }
  }

  applyMoves(moves: MoveNotation[]): void {
    for (const move of moves) {
      this.applyMove(move);
    }
  }

  reset(): void {
    this.pieces = this.createInitialPieces();
  }
}
