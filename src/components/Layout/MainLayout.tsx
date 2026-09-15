import React from 'react';

interface MainLayoutProps {
  cubeArea: React.ReactNode;
  tutorialArea: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  cubeArea,
  tutorialArea,
}) => {
  return (
    <div className="w-full h-full p-3 sm:p-4 flex flex-col lg:flex-row gap-3 sm:gap-4 items-stretch min-h-0 overflow-hidden">
      {/* Left Side: Real 3D Cube Viewport */}
      <div className="w-full lg:w-7/12 h-[340px] sm:h-[400px] lg:h-full flex-none lg:flex-1 min-h-0">
        {cubeArea}
      </div>

      {/* Right Side: PDF-Style Guided Tutorial Panel */}
      <div className="w-full lg:w-5/12 flex-1 lg:h-full min-h-0 flex flex-col">
        {tutorialArea}
      </div>
    </div>
  );
};
