import React from 'react';

interface OrientationGuideProps {
  currentOrientationText: string;
}

export const OrientationGuide: React.FC<OrientationGuideProps> = ({
  currentOrientationText,
}) => {
  return (
    <div className="orientation-guide-overlay">
      {/* Mini face compass */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 3, marginBottom: 2 }}>
          <span style={{ width: 9, height: 9, borderRadius: 2, background: '#FFD500', display: 'inline-block' }} title="UP: Yellow" />
          <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace' }}>U</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <span style={{ width: 9, height: 9, borderRadius: 2, background: '#0046AD', display: 'inline-block' }} title="LEFT: Blue" />
          <span style={{ width: 9, height: 9, borderRadius: 2, background: '#B71234', display: 'inline-block' }} title="FRONT: Red" />
          <span style={{ width: 9, height: 9, borderRadius: 2, background: '#009B48', display: 'inline-block' }} title="RIGHT: Green" />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 3, marginTop: 2 }}>
          <span style={{ width: 9, height: 9, borderRadius: 2, background: '#fff', border: '1px solid rgba(255,255,255,0.2)', display: 'inline-block' }} title="DOWN: White" />
          <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace' }}>D</span>
        </div>
      </div>

      <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: 10 }}>
        <div className="orientation-guide-title">Orientation</div>
        <div className="orientation-guide-text">{currentOrientationText}</div>
      </div>
    </div>
  );
};
