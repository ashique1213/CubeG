import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { CubeState } from '../../cube/CubeState';
import { MoveNotation, MoveDefinition } from '../../cube/types';
import { getMoveDefinition } from '../../cube/constants';
import { CubiePiece } from './CubiePiece';

interface RubiksCubeProps {
  cubeState: CubeState;
  activeMove: MoveNotation | null;
  animationDuration?: number; // ms, default 550
  onMoveComplete?: (move: MoveNotation) => void;
  highlightPredicate?: (piecePos: THREE.Vector3) => boolean;
}

interface AnimationData {
  move: MoveNotation;
  def: MoveDefinition;
  startTime: number;
  duration: number;
  rotatingPieceIds: Set<string>;
}

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export const RubiksCube: React.FC<RubiksCubeProps> = ({
  cubeState,
  activeMove,
  animationDuration = 550,
  onMoveComplete,
  highlightPredicate,
}) => {
  const pivotRef = useRef<THREE.Group>(null);
  const animRef = useRef<AnimationData | null>(null);

  // When activeMove changes and is not null, initialize animation
  useEffect(() => {
    if (!activeMove) {
      animRef.current = null;
      if (pivotRef.current) {
        pivotRef.current.rotation.set(0, 0, 0);
      }
      return;
    }

    const def = getMoveDefinition(activeMove);
    const layerPieces = cubeState.getLayerPieces(def.axis, def.layer);
    const pieceIds = new Set(layerPieces.map(p => p.id));

    if (pivotRef.current) {
      pivotRef.current.rotation.set(0, 0, 0);
    }

    animRef.current = {
      move: activeMove,
      def,
      startTime: performance.now(),
      duration: animationDuration,
      rotatingPieceIds: pieceIds,
    };
  }, [activeMove, cubeState, animationDuration]);

  // Frame loop for buttery smooth 60fps layer rotation
  useFrame(() => {
    const anim = animRef.current;
    if (!anim || !pivotRef.current) return;

    const elapsed = performance.now() - anim.startTime;
    const progress = Math.min(1, elapsed / anim.duration);
    const eased = easeInOutCubic(progress);
    const currentAngle = anim.def.targetAngle * eased;

    // Apply rotation around the specific axis
    pivotRef.current.rotation.set(0, 0, 0);
    pivotRef.current.rotation[anim.def.axis] = currentAngle;

    if (progress >= 1) {
      // Completed animation
      const completedMove = anim.move;
      animRef.current = null;
      pivotRef.current.rotation.set(0, 0, 0);

      // Mutate the mathematical state
      cubeState.applyMove(completedMove);

      if (onMoveComplete) {
        onMoveComplete(completedMove);
      }
    }
  });

  // Partition pieces into static vs rotating
  const currentRotatingIds = animRef.current?.rotatingPieceIds;

  const staticPieces = cubeState.pieces.filter(
    p => !currentRotatingIds || !currentRotatingIds.has(p.id)
  );

  const rotatingPieces = currentRotatingIds
    ? cubeState.pieces.filter(p => currentRotatingIds.has(p.id))
    : [];

  return (
    <group>
      {/* Static Pieces Group */}
      <group>
        {staticPieces.map(piece => (
          <CubiePiece
            key={piece.id}
            piece={piece}
            isHighlighted={highlightPredicate ? highlightPredicate(piece.position) : false}
          />
        ))}
      </group>

      {/* Dynamic Rotating Layer Pivot Group */}
      <group ref={pivotRef}>
        {rotatingPieces.map(piece => (
          <CubiePiece
            key={piece.id}
            piece={piece}
            isHighlighted={highlightPredicate ? highlightPredicate(piece.position) : false}
          />
        ))}
      </group>
    </group>
  );
};
