import React, { useMemo } from 'react';
import * as THREE from 'three';
import { PieceState } from '../../cube/types';
import { CUBE_COLORS } from '../../cube/constants';

interface CubiePieceProps {
  piece: PieceState;
  isHighlighted?: boolean;
}

// Single Sticker on one of the 6 faces
const Sticker: React.FC<{
  position: [number, number, number];
  rotation: [number, number, number];
  color: string;
  isHighlighted?: boolean;
}> = ({ position, rotation, color, isHighlighted }) => {
  return (
    <group position={position} rotation={rotation}>
      {/* Glossy sticker plane with thin bevel margin */}
      <mesh castShadow receiveShadow>
        <planeGeometry args={[0.84, 0.84]} />
        <meshStandardMaterial
          color={color}
          roughness={0.25}
          metalness={0.08}
          polygonOffset
          polygonOffsetFactor={-1}
          emissive={isHighlighted ? CUBE_COLORS.highlightGlow : '#000000'}
          emissiveIntensity={isHighlighted ? 0.35 : 0}
        />
      </mesh>
    </group>
  );
};

export const CubiePiece: React.FC<CubiePieceProps> = ({ piece, isHighlighted }) => {
  // Convert piece quaternion & position to matrix or directly apply
  const matrix = useMemo(() => {
    const mat = new THREE.Matrix4();
    mat.makeRotationFromQuaternion(piece.quaternion);
    mat.setPosition(piece.position);
    return mat;
  }, [piece.position, piece.quaternion]);

  const offset = 0.495; // half width (0.97/2 + epsilon)

  return (
    <group matrixAutoUpdate={false} matrix={matrix}>
      {/* Black plastic body with subtle bevel appearance */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.96, 0.96, 0.96]} />
        <meshStandardMaterial
          color={CUBE_COLORS.plastic}
          roughness={0.65}
          metalness={0.15}
        />
      </mesh>

      {/* Stickers on exterior faces if defined */}
      {piece.stickers.right && (
        <Sticker
          position={[offset, 0, 0]}
          rotation={[0, Math.PI / 2, 0]}
          color={piece.stickers.right}
          isHighlighted={isHighlighted}
        />
      )}
      {piece.stickers.left && (
        <Sticker
          position={[-offset, 0, 0]}
          rotation={[0, -Math.PI / 2, 0]}
          color={piece.stickers.left}
          isHighlighted={isHighlighted}
        />
      )}
      {piece.stickers.up && (
        <Sticker
          position={[0, offset, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          color={piece.stickers.up}
          isHighlighted={isHighlighted}
        />
      )}
      {piece.stickers.down && (
        <Sticker
          position={[0, -offset, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          color={piece.stickers.down}
          isHighlighted={isHighlighted}
        />
      )}
      {piece.stickers.front && (
        <Sticker
          position={[0, 0, offset]}
          rotation={[0, 0, 0]}
          color={piece.stickers.front}
          isHighlighted={isHighlighted}
        />
      )}
      {piece.stickers.back && (
        <Sticker
          position={[0, 0, -offset]}
          rotation={[0, Math.PI, 0]}
          color={piece.stickers.back}
          isHighlighted={isHighlighted}
        />
      )}
    </group>
  );
};
