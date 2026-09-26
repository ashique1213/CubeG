import React from 'react';

export interface IsometricCubeProps {
  // Top face 3x3 colors: array of 9 colors (indices 0..8, where 0 is back-left, 4 is center, 8 is front-right)
  topFaceColors?: string[];
  // Front-left face (optional colors, defaults to grey)
  leftFaceColors?: string[];
  // Front-right face (optional colors, defaults to grey)
  rightFaceColors?: string[];
  size?: number;
  label?: string;
}

export const IsometricCube: React.FC<IsometricCubeProps> = ({
  topFaceColors = Array(9).fill('#e2e8f0'),
  leftFaceColors = Array(9).fill('#cbd5e1'),
  rightFaceColors = Array(9).fill('#94a3b8'),
  size = 110,
  label,
}) => {
  // Isometric projection helper
  // Grid coordinates: x in [-1.5, 1.5], y in [-1.5, 1.5], z in [-1.5, 1.5]
  // Standard isometric projection:
  // screenX = originX + (x - z) * cos(30°) * unit
  // screenY = originY + (x + z) * sin(30°) * unit - y * unit

  const stroke = '#000000';
  const strokeWidth = 1.3;

  // Let's compute isometric polygon points for 3x3 faces:
  // Center is at (100, 110), viewBox="0 0 200 220"
  // Angles: 30 degrees for X and Z axes.
  const cx = 100;
  const cy = 95;
  const u = 24; // unit size
  const cos30 = 0.866025;
  const sin30 = 0.5;

  const project = (x: number, y: number, z: number) => {
    const px = cx + (x - z) * cos30 * u;
    const py = cy + (x + z) * sin30 * u - y * u;
    return `${px.toFixed(1)},${py.toFixed(1)}`;
  };

  // Render Top Face 3x3 (y = 1.5, x in [-1.5, 1.5], z in [-1.5, 1.5])
  const renderTopFace = () => {
    const tiles = [];
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        // x goes from -1.5 to 1.5
        // z goes from -1.5 to 1.5
        const x0 = -1.5 + c;
        const x1 = x0 + 1;
        const z0 = -1.5 + r;
        const z1 = z0 + 1;
        const y = 1.5;

        const p1 = project(x0, y, z0);
        const p2 = project(x1, y, z0);
        const p3 = project(x1, y, z1);
        const p4 = project(x0, y, z1);

        const idx = r * 3 + c;
        const color = topFaceColors[idx] || '#e2e8f0';

        tiles.push(
          <polygon
            key={`top-${idx}`}
            points={`${p1} ${p2} ${p3} ${p4}`}
            fill={color}
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
        );
      }
    }
    return tiles;
  };

  // Render Front-Left Face (z = 1.5, x in [-1.5, 1.5], y in [-1.5, 1.5])
  const renderLeftFace = () => {
    const tiles = [];
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        const x0 = -1.5 + col;
        const x1 = x0 + 1;
        const y0 = 1.5 - row;
        const y1 = y0 - 1;
        const z = 1.5;

        const p1 = project(x0, y0, z);
        const p2 = project(x1, y0, z);
        const p3 = project(x1, y1, z);
        const p4 = project(x0, y1, z);

        const idx = row * 3 + col;
        const color = leftFaceColors[idx] || '#e2e8f0';

        tiles.push(
          <polygon
            key={`left-${idx}`}
            points={`${p1} ${p2} ${p3} ${p4}`}
            fill={color}
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
        );
      }
    }
    return tiles;
  };

  // Render Front-Right Face (x = 1.5, z in [-1.5, 1.5], y in [-1.5, 1.5])
  const renderRightFace = () => {
    const tiles = [];
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        const z0 = 1.5 - col;
        const z1 = z0 - 1;
        const y0 = 1.5 - row;
        const y1 = y0 - 1;
        const x = 1.5;

        const p1 = project(x, y0, z0);
        const p2 = project(x, y0, z1);
        const p3 = project(x, y1, z1);
        const p4 = project(x, y1, z0);

        const idx = row * 3 + col;
        const color = rightFaceColors[idx] || '#cbd5e1';

        tiles.push(
          <polygon
            key={`right-${idx}`}
            points={`${p1} ${p2} ${p3} ${p4}`}
            fill={color}
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
        );
      }
    }
    return tiles;
  };

  return (
    <div className="w3-isometric-cube-container">
      <svg
        width={size}
        height={size * 1.1}
        viewBox="0 0 200 220"
        style={{ display: 'block', overflow: 'visible' }}
      >
        <g>
          {renderTopFace()}
          {renderLeftFace()}
          {renderRightFace()}
        </g>
      </svg>
      {label && <div className="w3-isometric-cube-label">{label}</div>}
    </div>
  );
};
