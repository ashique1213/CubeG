import React from 'react';
import { IsometricCube } from './IsometricCube';
import { MoveVisualCard } from './MoveVisualCard';

interface StepDiagramProps {
  type?: string;
}

// ── Reusable W3Schools-styled Grid Cell with Exact Black Borders/Body ───
type CellColor = 'yellow' | 'white' | 'empty' | 'green' | 'blue' | 'orange' | 'red' | 'highlight' | 'target';

const CELL_STYLES: Record<CellColor, React.CSSProperties> = {
  yellow:    { background: '#FFD500', borderColor: '#000000', color: '#000000' },
  white:     { background: '#ffffff', borderColor: '#000000', color: '#000000' },
  empty:     { background: '#262626', borderColor: '#000000', color: 'transparent' },
  green:     { background: '#04AA6D', borderColor: '#000000', color: '#ffffff' },
  blue:      { background: '#2196F3', borderColor: '#000000', color: '#ffffff' },
  orange:    { background: '#FF9800', borderColor: '#000000', color: '#ffffff' },
  red:       { background: '#f44336', borderColor: '#d32f2f', color: '#ffffff' },
  highlight: { background: '#FFD500', borderColor: '#000000', color: '#000000', outline: '3px solid #04AA6D' },
  target:    { background: '#FFEB3B', borderColor: '#000000', color: '#000000', outline: '3px solid #04AA6D' },
};

const Cell = ({
  color,
  label,
  pulse,
}: { color: CellColor; label?: string; pulse?: boolean }) => (
  <div
    style={{
      width: 36,
      height: 36,
      borderRadius: 4,
      border: '2px solid #000000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 800,
      fontSize: 11,
      fontFamily: 'monospace',
      transition: 'all 0.15s ease',
      animation: pulse ? 'pulse 1.8s infinite' : undefined,
      ...CELL_STYLES[color],
    }}
  >
    {label}
  </div>
);

// ── Classic W3Schools Diagram Container ───────────────────────────
const DiagramBox = ({
  title,
  caption,
  children,
  accentColor = '#04AA6D',
}: {
  title?: string;
  caption?: string;
  children: React.ReactNode;
  accentColor?: string;
}) => (
  <div
    style={{
      background: '#ffffff',
      border: '1px solid #e7e9eb',
      borderLeft: `4px solid ${accentColor}`,
      borderRadius: '0 5px 5px 0',
      padding: '10px 14px',
      margin: '8px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 8,
      boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
    }}
  >
    {title && (
      <div
        style={{
          fontSize: 13,
          fontWeight: 800,
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          color: '#000000',
        }}
      >
        {title}
      </div>
    )}
    {children}
    {caption && (
      <div
        style={{
          fontSize: 12.5,
          fontWeight: 700,
          color: accentColor,
          lineHeight: 1.45,
        }}
      >
        {caption}
      </div>
    )}
  </div>
);

// Exact Black 3×3 Cube Core Background
const Grid3x3 = ({ cells }: { cells: React.ReactNode[] }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 36px)',
      gap: 3,
      padding: 5,
      background: '#000000',
      border: '2px solid #000000',
      borderRadius: 6,
      boxShadow: '0 2px 5px rgba(0,0,0,0.18)',
    }}
  >
    {cells}
  </div>
);

export const StepDiagram: React.FC<StepDiagramProps> = ({ type }) => {
  if (!type) return null;

  switch (type) {
    /* ── Step 1: Daisy ──────────────────────────────────────────── */
    case 'daisy': {
      // Top face: yellow center (4) + 4 white petals (1, 3, 5, 7)
      const daisyTop = [
        '#262626', '#ffffff', '#262626',
        '#ffffff', '#FFD500', '#ffffff',
        '#262626', '#ffffff', '#262626',
      ];
      return (
        <DiagramBox
          title="Visual Diagram: Target Top Face (Daisy)"
          caption="✓ 4 white edge petals surrounding the yellow center piece"
          accentColor="#04AA6D"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
            <IsometricCube topFaceColors={daisyTop} size={110} label="3D Perspective" />
            <Grid3x3
              cells={[
                <Cell color="empty" key={0} />,
                <Cell color="white" label="W" key={1} />,
                <Cell color="empty" key={2} />,
                <Cell color="white" label="W" key={3} />,
                <Cell color="yellow" label="Y" key={4} />,
                <Cell color="white" label="W" key={5} />,
                <Cell color="empty" key={6} />,
                <Cell color="white" label="W" key={7} />,
                <Cell color="empty" key={8} />,
              ]}
            />
            <div style={{ fontSize: 13.5, color: '#000000', lineHeight: 1.5, flex: 1, minWidth: 200 }}>
              <strong>Look for:</strong>
              <ul style={{ margin: '4px 0 0 18px', padding: 0 }}>
                <li>Yellow center always on TOP (U)</li>
                <li>4 White petals around it</li>
                <li>Corners don't matter in this step</li>
              </ul>
            </div>
          </div>
        </DiagramBox>
      );
    }

    /* ── Step 2: White Cross ────────────────────────────────────── */
    case 'bottom-cross':
      return (
        <DiagramBox
          title="Visual Diagram: Bottom Face (White Cross)"
          caption="✓ True White Cross: all 4 side colors match their center faces"
          accentColor="#04AA6D"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
            <Grid3x3
              cells={[
                <Cell color="empty" key={0} />,
                <Cell color="white" label="W" key={1} />,
                <Cell color="empty" key={2} />,
                <Cell color="white" label="W" key={3} />,
                <Cell color="white" label="W" key={4} />,
                <Cell color="white" label="W" key={5} />,
                <Cell color="empty" key={6} />,
                <Cell color="white" label="W" key={7} />,
                <Cell color="empty" key={8} />,
              ]}
            />
            <div style={{ fontSize: 13.5, color: '#000000', lineHeight: 1.5, flex: 1, minWidth: 200 }}>
              <strong>Side Alignment:</strong>
              <ul style={{ margin: '4px 0 0 18px', padding: 0 }}>
                <li>Red petal aligns with Red center → turn 180°</li>
                <li>Green petal aligns with Green center → turn 180°</li>
                <li>Orange petal aligns with Orange center → turn 180°</li>
                <li>Blue petal aligns with Blue center → turn 180°</li>
              </ul>
            </div>
          </div>
        </DiagramBox>
      );

    /* ── Step 3: White Corners ──────────────────────────────────── */
    case 'corners':
      return (
        <DiagramBox
          title="Visual Diagram: First Layer Completed"
          caption="✓ White bottom face fully solved with matching bottom belt"
          accentColor="#04AA6D"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
            <Grid3x3
              cells={[
                <Cell color="white" label="W" key={0} />,
                <Cell color="white" label="W" key={1} />,
                <Cell color="white" label="W" key={2} />,
                <Cell color="white" label="W" key={3} />,
                <Cell color="white" label="W" key={4} />,
                <Cell color="white" label="W" key={5} />,
                <Cell color="white" label="W" key={6} />,
                <Cell color="white" label="W" key={7} />,
                <Cell color="white" label="W" key={8} />,
              ]}
            />
            <div style={{ fontSize: 13.5, color: '#000000', lineHeight: 1.5, flex: 1, minWidth: 200 }}>
              <strong>Right-Hand Trigger:</strong>
              <div style={{ fontFamily: 'monospace', fontWeight: 800, fontSize: 16, color: '#04AA6D', margin: '4px 0' }}>
                R U R' U'
              </div>
              <span>Repeat 1 to 5 times until the corner drops into place with colors matched!</span>
            </div>
          </div>
        </DiagramBox>
      );

    /* ── Step 4: Middle Layer ───────────────────────────────────── */
    case 'middle-layer':
      return (
        <DiagramBox
          title="Visual Diagram: Middle Layer Insertion (Left vs Right)"
          caption="Identify the target slot and execute either the Left or Right formula"
          accentColor="#2196F3"
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12, width: '100%' }}>
            {/* Left Insertion */}
            <div style={{ background: '#f0f9ff', border: '1.5px solid #000000', borderLeft: '5px solid #0284c7', borderRadius: 4, padding: 12 }}>
              <div style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', color: '#0369a1', marginBottom: 4 }}>
                ← Left Insertion
              </div>
              <div style={{ fontFamily: 'monospace', fontSize: 14, fontWeight: 800, background: '#ffffff', padding: '6px 10px', borderRadius: 4, border: '1px solid #000000', color: '#000000', marginBottom: 6 }}>
                U' L' U L U F U' F'
              </div>
              <div style={{ fontSize: 12, color: '#000000' }}>
                Top sticker matches <strong>LEFT</strong> center
              </div>
            </div>

            {/* Right Insertion */}
            <div style={{ background: '#f5f3ff', border: '1.5px solid #000000', borderLeft: '5px solid #7c3aed', borderRadius: 4, padding: 12 }}>
              <div style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', color: '#6d28d9', marginBottom: 4 }}>
                → Right Insertion
              </div>
              <div style={{ fontFamily: 'monospace', fontSize: 14, fontWeight: 800, background: '#ffffff', padding: '6px 10px', borderRadius: 4, border: '1px solid #000000', color: '#000000', marginBottom: 6 }}>
                U R U' R' U' F' U F
              </div>
              <div style={{ fontSize: 12, color: '#000000' }}>
                Top sticker matches <strong>RIGHT</strong> center
              </div>
            </div>
          </div>
        </DiagramBox>
      );

    /* ── Step 5: Yellow Cross Progression (Matching User Reference Image!) ── */
    case 'yellow-progression': {
      // Light grey base tiles with vibrant yellow pattern tiles (matching reference drawing)
      const g = '#e2e8f0';
      const y = '#FFD500';

      // 1. Center Dot
      const dotTop = [
        g, g, g,
        g, y, g,
        g, g, g,
      ];
      // 2. 'L' Shape (center 4, top-back 1, left 3)
      const lShapeTop = [
        g, y, g,
        y, y, g,
        g, g, g,
      ];
      // 3. Line (left 3, center 4, right 5)
      const lineTop = [
        g, g, g,
        y, y, y,
        g, g, g,
      ];
      // 4. Yellow Cross (edges 1, 3, 5, 7 + center 4)
      const crossTop = [
        g, y, g,
        y, y, y,
        g, y, g,
      ];

      return (
        <DiagramBox
          title="Yellow Cross Pattern Progression & Move Diagram"
          caption="✓ Follow the progression: Dot → 'L' Shape → Line → Yellow Cross using F R U R' U' F'"
          accentColor="#04AA6D"
        >
          {/* Side-by-side 2-column layout exactly matching the user's reference diagram */}
          <div className="w3-ref-diagram-layout">
            {/* Left Column: 4 Isometric 3D Cubes with Down Arrows */}
            <div className="w3-ref-cubes-col">
              <div className="w3-ref-col-header">1. State Progression</div>
              <div className="w3-ref-cubes-stack">
                <div className="w3-ref-cube-item">
                  <IsometricCube topFaceColors={dotTop} size={68} label="1. Center Dot" />
                </div>
                <div className="w3-ref-down-arrow">&#8595;</div>
                <div className="w3-ref-cube-item">
                  <IsometricCube topFaceColors={lShapeTop} size={68} label="2. 'L' Shape" />
                </div>
                <div className="w3-ref-down-arrow">&#8595;</div>
                <div className="w3-ref-cube-item">
                  <IsometricCube topFaceColors={lineTop} size={68} label="3. Line" />
                </div>
                <div className="w3-ref-down-arrow">&#8595;</div>
                <div className="w3-ref-cube-item">
                  <IsometricCube topFaceColors={crossTop} size={68} label="4. Cross ✓" />
                </div>
              </div>
            </div>

            {/* Right Column: 6 Move Visual Cards in 2 rows of 3 */}
            <div className="w3-ref-moves-col">
              <div className="w3-ref-col-header">2. Move Sequence (F R U R' U' F')</div>
              <div className="w3-ref-moves-grid">
                <MoveVisualCard move="F" size={50} />
                <MoveVisualCard move="R" size={50} />
                <MoveVisualCard move="U" size={50} />
                <MoveVisualCard move="R'" size={50} />
                <MoveVisualCard move="U'" size={50} />
                <MoveVisualCard move="F'" size={50} />
              </div>
              <div className="w3-ref-moves-guide">
                <div className="w3-ref-guide-title">How To Execute Each Move:</div>
                <ol className="w3-ref-guide-steps">
                  <li><strong>F</strong>: Front face turns Clockwise ↷</li>
                  <li><strong>R</strong>: Right column turns UP ↑</li>
                  <li><strong>U</strong>: Top layer turns LEFT ←</li>
                  <li><strong>R'</strong>: Right column turns DOWN ↓</li>
                  <li><strong>U'</strong>: Top layer turns RIGHT →</li>
                  <li><strong>F'</strong>: Front face turns Counter-CW ↶</li>
                </ol>
                <div className="w3-ref-guide-tip">
                  💡 <strong>Rule:</strong> Keep yellow face on TOP and repeat until you get the Yellow Cross!
                </div>
              </div>
            </div>
          </div>
        </DiagramBox>
      );
    }

    /* ── Step 6: Crossed Yellow Side Color Matching ────────────── */
    case 'side-matching': {
      const crossTop = [
        '#262626', '#FFD500', '#262626',
        '#FFD500', '#FFD500', '#FFD500',
        '#262626', '#FFD500', '#262626',
      ];
      return (
        <DiagramBox
          title="Visual Diagram: Crossed Yellow Side Color Matching"
          caption="✓ Match all 4 cross edge side colors with center faces using U R U R' U R U2 R'"
          accentColor="#04AA6D"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
            <IsometricCube topFaceColors={crossTop} size={110} label="Crossed Side Match" />
            <Grid3x3
              cells={[
                <Cell color="empty" key={0} />,
                <Cell color="highlight" label="Y" key={1} />,
                <Cell color="empty" key={2} />,
                <Cell color="highlight" label="Y" key={3} />,
                <Cell color="yellow" label="Y" key={4} />,
                <Cell color="highlight" label="Y" key={5} />,
                <Cell color="empty" key={6} />,
                <Cell color="highlight" label="Y" key={7} />,
                <Cell color="empty" key={8} />,
              ]}
            />
            <div style={{ fontSize: 13.5, color: '#000000', lineHeight: 1.5, flex: 1, minWidth: 200 }}>
              <strong>Not Yellow Face Fishshape:</strong>
              <div style={{ fontFamily: 'monospace', fontWeight: 800, fontSize: 14, color: '#04AA6D', margin: '4px 0' }}>
                U R U R' U R U2 R'
              </div>
              <span>Rotate top layer (U) to align as many side colors as possible, then execute the formula!</span>
            </div>
          </div>
        </DiagramBox>
      );
    }

    /* ── Step 7: Top Layer Corner Setting ───────────────────────── */
    case 'corner-matching':
      return (
        <DiagramBox
          title="Visual Diagram: Top Layer Corner Setting"
          caption="✓ Position matching corner at Front-Right → run U R U' L' U R' U' L"
          accentColor="#2196F3"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
            <Grid3x3
              cells={[
                <Cell color="blue" label="C" key={0} />,
                <Cell color="yellow" label="Y" key={1} />,
                <Cell color="blue" label="C" key={2} />,
                <Cell color="yellow" label="Y" key={3} />,
                <Cell color="yellow" label="Y" key={4} />,
                <Cell color="yellow" label="Y" key={5} />,
                <Cell color="blue" label="C" key={6} />,
                <Cell color="yellow" label="Y" key={7} />,
                <Cell color="target" label="Target" key={8} />,
              ]}
            />
            <div style={{ fontSize: 13.5, color: '#000000', lineHeight: 1.5, flex: 1, minWidth: 200 }}>
              <strong>Corner Setting (Matching Corner Color):</strong>
              <div style={{ fontFamily: 'monospace', fontWeight: 800, fontSize: 14, color: '#2196F3', margin: '4px 0' }}>
                U R U' L' U R' U' L
              </div>
              <span>Find a corner already in the correct place, put it at Front-Right, and cycle the others!</span>
            </div>
          </div>
        </DiagramBox>
      );

    /* ── Step 8: Orienting Yellow Corners ───────────────────────── */
    case 'yellow-corners':
      return (
        <DiagramBox
          title="Visual Diagram: Setting Corner Yellow (R' B' R B)"
          caption="Repeat R' B' R B until corner yellow points UP, then turn top layer (U) for next corner!"
          accentColor="#FF9800"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
              <Grid3x3
                cells={[
                  <Cell color="yellow" label="Y" key={0} />,
                  <Cell color="yellow" label="Y" key={1} />,
                  <Cell color="yellow" label="Y" key={2} />,
                  <Cell color="yellow" label="Y" key={3} />,
                  <Cell color="yellow" label="Y" key={4} />,
                  <Cell color="yellow" label="Y" key={5} />,
                  <Cell color="yellow" label="Y" key={6} />,
                  <Cell color="yellow" label="Y" key={7} />,
                  <Cell color="highlight" label="Y" pulse key={8} />,
                ]}
              />
              <div style={{ fontSize: 13.5, color: '#000000', lineHeight: 1.5, flex: 1, minWidth: 200 }}>
                <strong>The 4-Move Repeat:</strong>
                <div style={{ fontFamily: 'monospace', fontWeight: 800, fontSize: 16, color: '#e65100', margin: '4px 0' }}>
                  R' B' R B
                </div>
                <div style={{ fontSize: 12.5, color: '#333333' }}>
                  Always keep front facing you. Only rotate top layer (U) to bring the next unsolved corner to the Front-Right slot!
                </div>
              </div>
            </div>

            {/* 4 Visual Cards for R' B' R B */}
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              <MoveVisualCard move="R'" size={48} />
              <MoveVisualCard move="B'" size={48} />
              <MoveVisualCard move="R" size={48} />
              <MoveVisualCard move="B" size={48} />
            </div>
          </div>
        </DiagramBox>
      );

    /* ── Step 9: Solved Cube ────────────────────────────────────── */
    case 'solved': {
      const allYellow = Array(9).fill('#FFD500');
      const allRed = Array(9).fill('#f44336');
      const allGreen = Array(9).fill('#04AA6D');

      return (
        <DiagramBox
          title="Visual Diagram: All 6 Faces Solved!"
          caption="🏆 CONGRATULATIONS! The entire 3×3 Rubik's Cube is completely solved!"
          accentColor="#04AA6D"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
            <IsometricCube
              topFaceColors={allYellow}
              leftFaceColors={allRed}
              rightFaceColors={allGreen}
              size={120}
              label="Fully Solved 3D Cube"
            />
            <div style={{ fontSize: 13.5, color: '#000000', lineHeight: 1.6, flex: 1, minWidth: 220 }}>
              <div><strong>Full 6-Face Method Mastered:</strong></div>
              <div style={{ fontSize: 12.5, color: '#000000', marginTop: 4 }}>
                Daisy → White Cross → White Corners → Middle Layer → Yellow Cross → Side Matching → Corner Setting → Corner Yellow → Solved!
              </div>
            </div>
          </div>
        </DiagramBox>
      );
    }

    default:
      return null;
  }
};
