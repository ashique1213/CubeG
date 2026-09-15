import React, { useRef, useState, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ContactShadows } from '@react-three/drei';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import * as THREE from 'three';
import { RotateCcw } from 'lucide-react';
import { CubeState } from '../../cube/CubeState';
import { MoveNotation } from '../../cube/types';
import { RubiksCube } from './RubiksCube';
import { MoveIndicatorBadge } from './MoveIndicatorBadge';
import { OrientationGuide } from './OrientationGuide';

interface CubeSceneProps {
  cubeState: CubeState;
  activeMove: MoveNotation | null;
  lastCompletedMove: MoveNotation | null;
  isAlgorithmComplete?: boolean;
  orientationText: string;
  onMoveComplete?: (move: MoveNotation) => void;
  highlightPredicate?: (pos: THREE.Vector3) => boolean;
}

const DEFAULT_CAMERA_POS: [number, number, number] = [5.5, 4.5, 6.0];

export const CubeScene: React.FC<CubeSceneProps> = ({
  cubeState,
  activeMove,
  lastCompletedMove,
  isAlgorithmComplete,
  orientationText,
  onMoveComplete,
  highlightPredicate,
}) => {
  const controlsRef = useRef<OrbitControlsImpl>(null);
  const [cameraKey, setCameraKey] = useState(0);

  const handleResetCamera = useCallback(() => {
    if (controlsRef.current) {
      controlsRef.current.reset();
      controlsRef.current.object.position.set(...DEFAULT_CAMERA_POS);
      controlsRef.current.target.set(0, 0, 0);
      controlsRef.current.update();
    }
    setCameraKey(prev => prev + 1);
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: '#0b0f19' }}>
      {/* Move Status Badge */}
      <div className="move-badge-overlay">
        <MoveIndicatorBadge
          activeMove={activeMove}
          lastCompletedMove={lastCompletedMove}
          isAlgorithmComplete={isAlgorithmComplete}
        />
      </div>

      {/* Camera Reset */}
      <button className="camera-btn" onClick={handleResetCamera} title="Reset camera">
        <RotateCcw style={{ width: 12, height: 12 }} />
        Reset View
      </button>

      {/* Orientation Guide */}
      <OrientationGuide currentOrientationText={orientationText} />

      {/* 3D Canvas */}
      <Canvas
        key={cameraKey}
        shadows
        camera={{ position: DEFAULT_CAMERA_POS, fov: 42 }}
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
        style={{ width: '100%', height: '100%' }}
      >
        <color attach="background" args={['#0b0f19']} />
        <ambientLight intensity={1.1} />
        <directionalLight
          position={[6, 10, 8]}
          intensity={1.8}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-bias={-0.0001}
        />
        <directionalLight position={[-8, -5, -6]} intensity={0.6} />
        <directionalLight position={[0, -8, 2]} intensity={0.4} />

        <RubiksCube
          cubeState={cubeState}
          activeMove={activeMove}
          animationDuration={520}
          onMoveComplete={onMoveComplete}
          highlightPredicate={highlightPredicate}
        />

        <ContactShadows position={[0, -2.2, 0]} opacity={0.6} scale={8} blur={2.2} far={4} />

        <OrbitControls
          ref={controlsRef}
          enableDamping
          dampingFactor={0.06}
          minDistance={8}
          maxDistance={17}
          rotateSpeed={0.8}
        />
      </Canvas>

      {/* Hint */}
      <div className="cube-hint">Drag to rotate</div>
    </div>
  );
};
