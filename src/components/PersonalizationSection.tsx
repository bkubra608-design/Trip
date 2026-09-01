import React, { useState } from 'react';
import {
  Sparkles,
  Sliders,
  CheckCircle2,
  ArrowRight,
  Zap,
  Check,
  RefreshCw,
} from 'lucide-react';
import { PERSONALIZATION_ITEMS } from '../data/mockData';

interface PersonalizationSectionProps {
  onStartPlanningClick: () => void;
}

export const PersonalizationSection: React.FC<PersonalizationSectionProps> = ({
  onStartPlanningClick,
}) => {
  const [selectedId, setSelectedId] = useState<string>(PERSONALIZATION_ITEMS[0].id);

  const activeItem =
    PERSONALIZATION_ITEMS.find((p) => p.id === selectedId) ||
    PERSONALIZATION_ITEMS[0];

  return (
    <section className="relative py-24 lg:py-32 bg-slate-950 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-sky-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Sliders className="w-3.5 h-3.5" />
            Hyper-Personalization
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight">
            Travel That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300">
              Feels Personal
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            TripMate AI doesn't provide the same cookie-cutter trip to everyone. Every itinerary is dynamically synthesized across 8 distinct dimensions.
          </p>
        </div>

        {/* 8 Category Interactive Grid & Visual Transformation Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: 8 Personalization Categories Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-3.5">
            {PERSONALIZATION_ITEMS.map((item) => {
              const isSelected = selectedId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-slate-900/90 border-cyan-500/60 shadow-xl shadow-cyan-500/10 scale-[1.02]'
                      : 'bg-slate-900/30 border-slate-800/80 hover:bg-slate-900/60 hover:border-slate-700/80'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <span className="text-2xl">{item.emoji}</span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    )}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-display">
                      {item.label}
                    </h4>
                    <p className="text-[11px] text-slate-400 truncate mt-0.5">
                      {item.examples[0]}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Interactive AI Transformation Engine */}
          <div className="lg:col-span-6 rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-2xl backdrop-blur-xl relative">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <span className="text-3xl p-2 rounded-2xl bg-slate-950 border border-slate-800">
                  {activeItem.emoji}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white font-display">
                    {activeItem.label} Transformation
                  </h3>
                  <span className="text-xs text-cyan-400 font-mono">
                    Adaptive Engine Active
                  </span>
                </div>
              </div>

              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                100% Tailored
              </span>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-slate-300 leading-relaxed">
                {activeItem.description}
              </p>

              {/* Sample User Inputs vs AI Outcome */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  How TripMate adapts this parameter:
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-cyan-300">
                    <Zap className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Real-time AI Adjustment</span>
                  </div>
                  <p className="text-xs text-slate-300 italic">
                    "{activeItem.aiAdaptation}"
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="text-[11px] font-semibold text-slate-400 block">
                    Supported Preference Profiles:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeItem.examples.map((ex, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white font-medium flex items-center gap-1.5"
                      >
                        <Check className="w-3.5 h-3.5 text-cyan-400" />
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-800/80">
                <button
                  onClick={onStartPlanningClick}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-cyan-400/15 hover:bg-cyan-400/25 border border-cyan-500/30 text-cyan-300 text-xs font-bold transition-all group"
                >
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>Test this parameter in the Trip Planner</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
