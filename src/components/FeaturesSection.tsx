import React, { useState } from 'react';
import {
  Sparkles,
  Sliders,
  Compass,
  BellRing,
  Radio,
  MessageSquareText,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Shield,
  Layers,
} from 'lucide-react';
import { FEATURES_DATA } from '../data/mockData';

interface FeaturesSectionProps {
  onStartPlanningClick: () => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onStartPlanningClick }) => {
  const [selectedFeature, setSelectedFeature] = useState<string>(FEATURES_DATA[0].id);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return Sparkles;
      case 'Sliders':
        return Sliders;
      case 'Compass':
        return Compass;
      case 'BellRing':
        return BellRing;
      case 'Radio':
        return Radio;
      case 'MessageSquareText':
      default:
        return MessageSquareText;
    }
  };

  return (
    <section id="features" className="relative py-24 lg:py-32 bg-slate-950 overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            Comprehensive Capabilities
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight">
            Everything You Need for a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300">
              Smarter Trip
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            From algorithmic itinerary generation to real-time travel alerts, explore how TripMate replaces dozens of fragmented travel apps.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES_DATA.map((feat) => {
            const Icon = getIcon(feat.iconName);
            const isSelected = selectedFeature === feat.id;

            return (
              <div
                key={feat.id}
                onMouseEnter={() => setSelectedFeature(feat.id)}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1.5 cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900/90 border-cyan-500/50 shadow-xl shadow-cyan-500/10'
                    : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700/80'
                } border`}
              >
                {/* Top Badge & Number */}
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                        isSelected
                          ? 'bg-gradient-to-tr from-cyan-500 to-sky-500 text-slate-950 shadow-md shadow-cyan-500/30'
                          : 'bg-slate-800/80 border border-slate-700 text-cyan-400 group-hover:scale-110'
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        {feat.badge}
                      </span>
                    </div>

                    <span className="text-2xl font-black font-display text-slate-700 group-hover:text-slate-500 transition-colors">
                      {feat.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
                      {feat.number} — {feat.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed font-normal">
                      {feat.description}
                    </p>
                  </div>

                  {/* Bullet Highlights */}
                  <div className="pt-4 border-t border-slate-800/80 space-y-2">
                    {feat.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-6 mt-4 flex items-center justify-between">
                  <button
                    onClick={onStartPlanningClick}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <span>Try with TripMate</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">
                    AI Automated
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
