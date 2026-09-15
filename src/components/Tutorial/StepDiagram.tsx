import React from 'react';

interface StepDiagramProps {
  type?: string;
}

export const StepDiagram: React.FC<StepDiagramProps> = ({ type }) => {
  if (!type) return null;

  // Render pedagogical 2D diagrams matching the physical Rubik's cube top view or target patterns
  switch (type) {
    case 'daisy':
      return (
        <div className="flex flex-col items-center p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700/60">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
            Target Top Face: Daisy
          </div>
          <div className="grid grid-cols-3 gap-1.5 p-2 bg-slate-900 rounded-lg shadow-inner">
            {/* Row 1 */}
            <div className="w-8 h-8 rounded bg-slate-800 border border-slate-700"></div>
            <div className="w-8 h-8 rounded bg-white border border-slate-300 flex items-center justify-center font-bold text-[9px] text-slate-800 shadow-sm">W</div>
            <div className="w-8 h-8 rounded bg-slate-800 border border-slate-700"></div>
            {/* Row 2 */}
            <div className="w-8 h-8 rounded bg-white border border-slate-300 flex items-center justify-center font-bold text-[9px] text-slate-800 shadow-sm">W</div>
            <div className="w-8 h-8 rounded bg-[#FFD500] border border-amber-600 flex items-center justify-center font-bold text-[9px] text-amber-950 shadow-sm">Y</div>
            <div className="w-8 h-8 rounded bg-white border border-slate-300 flex items-center justify-center font-bold text-[9px] text-slate-800 shadow-sm">W</div>
            {/* Row 3 */}
            <div className="w-8 h-8 rounded bg-slate-800 border border-slate-700"></div>
            <div className="w-8 h-8 rounded bg-white border border-slate-300 flex items-center justify-center font-bold text-[9px] text-slate-800 shadow-sm">W</div>
            <div className="w-8 h-8 rounded bg-slate-800 border border-slate-700"></div>
          </div>
          <span className="text-[11px] text-slate-600 dark:text-slate-400 mt-2 text-center">
            4 white petals surrounding the yellow center
          </span>
        </div>
      );

    case 'bottom-cross':
      return (
        <div className="flex flex-col items-center p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700/60">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
            Bottom Face: White Cross
          </div>
          <div className="grid grid-cols-3 gap-1.5 p-2 bg-slate-900 rounded-lg shadow-inner">
            <div className="w-8 h-8 rounded bg-slate-800 border border-slate-700"></div>
            <div className="w-8 h-8 rounded bg-white border border-slate-300 flex items-center justify-center font-bold text-[9px] text-slate-800 shadow-sm">W</div>
            <div className="w-8 h-8 rounded bg-slate-800 border border-slate-700"></div>
            <div className="w-8 h-8 rounded bg-white border border-slate-300 flex items-center justify-center font-bold text-[9px] text-slate-800 shadow-sm">W</div>
            <div className="w-8 h-8 rounded bg-white border border-slate-300 flex items-center justify-center font-bold text-[9px] text-slate-800 shadow-sm">W</div>
            <div className="w-8 h-8 rounded bg-white border border-slate-300 flex items-center justify-center font-bold text-[9px] text-slate-800 shadow-sm">W</div>
            <div className="w-8 h-8 rounded bg-slate-800 border border-slate-700"></div>
            <div className="w-8 h-8 rounded bg-white border border-slate-300 flex items-center justify-center font-bold text-[9px] text-slate-800 shadow-sm">W</div>
            <div className="w-8 h-8 rounded bg-slate-800 border border-slate-700"></div>
          </div>
          <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium mt-2 text-center">
            All 4 side colors match their center!
          </span>
        </div>
      );

    case 'yellow-progression':
      return (
        <div className="flex flex-col items-center p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700/60 w-full">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
            Top Face Progression
          </div>
          <div className="flex items-center justify-center gap-2 sm:gap-4 overflow-x-auto py-1">
            {/* Dot */}
            <div className="flex flex-col items-center">
              <div className="grid grid-cols-3 gap-0.5 p-1 bg-slate-900 rounded">
                {[0,1,2,3,4,5,6,7,8].map(i => (
                  <div key={i} className={`w-3.5 h-3.5 rounded-sm ${i === 4 ? 'bg-[#FFD500]' : 'bg-slate-700'}`} />
                ))}
              </div>
              <span className="text-[9px] text-slate-500 mt-1">Dot</span>
            </div>
            <span className="text-slate-400 font-bold text-xs">→</span>

            {/* L Shape */}
            <div className="flex flex-col items-center">
              <div className="grid grid-cols-3 gap-0.5 p-1 bg-slate-900 rounded ring-2 ring-sky-500/40">
                {[0,1,2,3,4,5,6,7,8].map(i => (
                  <div key={i} className={`w-3.5 h-3.5 rounded-sm ${[1,3,4].includes(i) ? 'bg-[#FFD500]' : 'bg-slate-700'}`} />
                ))}
              </div>
              <span className="text-[9px] text-sky-600 dark:text-sky-400 font-bold mt-1">'L' Shape</span>
            </div>
            <span className="text-slate-400 font-bold text-xs">→</span>

            {/* Line */}
            <div className="flex flex-col items-center">
              <div className="grid grid-cols-3 gap-0.5 p-1 bg-slate-900 rounded">
                {[0,1,2,3,4,5,6,7,8].map(i => (
                  <div key={i} className={`w-3.5 h-3.5 rounded-sm ${[3,4,5].includes(i) ? 'bg-[#FFD500]' : 'bg-slate-700'}`} />
                ))}
              </div>
              <span className="text-[9px] text-slate-500 mt-1">Line</span>
            </div>
            <span className="text-slate-400 font-bold text-xs">→</span>

            {/* Cross */}
            <div className="flex flex-col items-center">
              <div className="grid grid-cols-3 gap-0.5 p-1 bg-slate-900 rounded ring-1 ring-emerald-500/50">
                {[0,1,2,3,4,5,6,7,8].map(i => (
                  <div key={i} className={`w-3.5 h-3.5 rounded-sm ${[1,3,4,5,7].includes(i) ? 'bg-[#FFD500]' : 'bg-slate-700'}`} />
                ))}
              </div>
              <span className="text-[9px] text-emerald-500 font-bold mt-1">Cross</span>
            </div>
          </div>
        </div>
      );

    case 'fish':
      return (
        <div className="flex flex-col items-center p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700/60">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
            Yellow Fish Shape (Nose at Bottom-Left)
          </div>
          <div className="grid grid-cols-3 gap-1.5 p-2 bg-slate-900 rounded-lg shadow-inner">
            <div className="w-8 h-8 rounded bg-slate-800 border border-slate-700"></div>
            <div className="w-8 h-8 rounded bg-[#FFD500] border border-amber-600 flex items-center justify-center font-bold text-[9px] text-amber-950 shadow-sm">Y</div>
            <div className="w-8 h-8 rounded bg-slate-800 border border-slate-700"></div>

            <div className="w-8 h-8 rounded bg-[#FFD500] border border-amber-600 flex items-center justify-center font-bold text-[9px] text-amber-950 shadow-sm">Y</div>
            <div className="w-8 h-8 rounded bg-[#FFD500] border border-amber-600 flex items-center justify-center font-bold text-[9px] text-amber-950 shadow-sm">Y</div>
            <div className="w-8 h-8 rounded bg-[#FFD500] border border-amber-600 flex items-center justify-center font-bold text-[9px] text-amber-950 shadow-sm">Y</div>

            <div className="w-8 h-8 rounded bg-[#FFD500] border border-amber-400 flex items-center justify-center font-bold text-[9px] text-amber-950 shadow-sm ring-2 ring-amber-400 animate-pulse" title="Fish Nose">Y</div>
            <div className="w-8 h-8 rounded bg-[#FFD500] border border-amber-600 flex items-center justify-center font-bold text-[9px] text-amber-950 shadow-sm">Y</div>
            <div className="w-8 h-8 rounded bg-slate-800 border border-slate-700"></div>
          </div>
          <span className="text-[11px] text-amber-600 dark:text-amber-400 font-semibold mt-2 text-center">
            Notice the nose points toward bottom-left!
          </span>
        </div>
      );

    case 'headlights':
      return (
        <div className="flex flex-col items-center p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700/60">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
            Back Face Headlights
          </div>
          <div className="flex items-center gap-1.5 p-2 bg-slate-900 rounded-lg shadow-inner">
            <div className="w-8 h-8 rounded bg-amber-400 border border-amber-500 flex items-center justify-center font-bold text-[9px] text-amber-950 shadow ring-2 ring-amber-400">HL</div>
            <div className="w-8 h-8 rounded bg-slate-800 border border-slate-700 flex items-center justify-center text-[9px] text-slate-400">Edge</div>
            <div className="w-8 h-8 rounded bg-amber-400 border border-amber-500 flex items-center justify-center font-bold text-[9px] text-amber-950 shadow ring-2 ring-amber-400">HL</div>
          </div>
          <span className="text-[11px] text-slate-600 dark:text-slate-400 mt-2 text-center">
            Two matching corners positioned at the BACK
          </span>
        </div>
      );

    default:
      return null;
  }
};
