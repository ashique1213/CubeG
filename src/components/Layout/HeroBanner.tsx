import React from 'react';
import { ArrowRight, BookOpen, Layers, RotateCw, X } from 'lucide-react';

interface HeroBannerProps {
  onStartLearning: () => void;
  onDismiss: () => void;
  isVisible: boolean;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onStartLearning,
  onDismiss,
  isVisible,
}) => {
  if (!isVisible) return null;

  return (
    <div className="relative w-full bg-gradient-to-r from-sky-900 via-slate-900 to-indigo-950 text-white border-b border-sky-800/40 px-4 py-8 sm:py-10 select-none overflow-hidden">
      {/* Background ambient glowing spheres */}
      <div className="absolute top-0 right-10 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-20 w-60 h-60 bg-blue-600/10 rounded-full blur-2xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center space-y-4">
        <button
          onClick={onDismiss}
          className="absolute top-0 right-0 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          title="Dismiss banner"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 text-xs font-semibold">
          <Layers className="w-3.5 h-3.5" />
          <span>Interactive 3D Visual Learning</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white max-w-2xl leading-tight">
          Learn to Solve a Rubik's Cube
        </h1>

        <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
          Follow simple, proven steps and watch every single move come to life on a real interactive 3D cube.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={onStartLearning}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm shadow-lg shadow-sky-500/25 transition-all active:scale-95"
          >
            <span>Start Learning</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Feature Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 text-xs text-slate-300 w-full max-w-lg">
          <div className="flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg bg-white/5 border border-white/10">
            <RotateCw className="w-3.5 h-3.5 text-sky-400" />
            <span>Smooth 3D Layer Rotations</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg bg-white/5 border border-white/10">
            <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
            <span>PDF-Style Simple Guide</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg bg-white/5 border border-white/10">
            <span className="text-amber-400 font-bold">9</span>
            <span>Fixed Beginner Steps</span>
          </div>
        </div>
      </div>
    </div>
  );
};
