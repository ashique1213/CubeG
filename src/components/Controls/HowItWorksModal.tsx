import React from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

interface HowItWorksModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartSolving: () => void;
}

export const HowItWorksModal: React.FC<HowItWorksModalProps> = ({
  isOpen,
  onClose,
  onStartSolving,
}) => {
  if (!isOpen) return null;

  const stepsOverview = [
    { title: 'The Daisy & White Cross', desc: 'Gather 4 white petals around yellow center, then rotate 180° down.' },
    { title: 'First Layer Corners', desc: 'Insert the 4 bottom white corners using the fundamental R U R\' U\' trigger.' },
    { title: 'Middle Layer Edges', desc: 'Slot the 4 middle belt edges into left or right positions.' },
    { title: 'Yellow Cross & Face', desc: 'Create the top yellow cross and complete the yellow face using the Fish/Sune algorithm.' },
    { title: 'Yellow Corners & Edges', desc: 'Position headlights, cycle the last 3 edges, and solve the cube!' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative space-y-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          How This Guide Works
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          This website is your interactive personal tutor. Rather than memorizing confusing diagrams from a sheet of paper, you follow 10 guided steps while watching the 3D cube perform each move in real-time.
        </p>

        <div className="space-y-2.5 pt-2">
          {stepsOverview.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-bold text-slate-800 dark:text-slate-200 block">
                  {idx + 1}. {item.title}
                </span>
                <span className="text-slate-500 dark:text-slate-400 mt-0.5 block">
                  {item.desc}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-3 flex items-center justify-end gap-2">
          <button
            onClick={() => {
              onClose();
              onStartSolving();
            }}
            className="flex items-center gap-2 px-5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl shadow-md transition-all active:scale-95"
          >
            <span>Start Solving Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
