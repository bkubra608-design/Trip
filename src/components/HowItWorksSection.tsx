import React from 'react';
import { Sliders, Cpu, Luggage, ArrowRight, CheckCircle2, Sparkles, Compass } from 'lucide-react';

interface HowItWorksSectionProps {
  onStartPlanningClick: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onStartPlanningClick }) => {
  const steps = [
    {
      stepNumber: '01',
      title: 'Tell Us Your Plans',
      tagline: 'Input your travel vision',
      description: 'Enter your destination, dates, budget, interests, and travel preferences in our straightforward intake form.',
      icon: Sliders,
      highlights: [
        'Set custom budget constraints',
        'Choose relaxed, fast, or luxury pacing',
        'Highlight food or accessibility needs',
      ],
      color: 'from-cyan-500 to-sky-500',
      badgeColor: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
    },
    {
      stepNumber: '02',
      title: 'Let TripMate Plan',
      tagline: 'Multimodal AI generation',
      description: 'Our AI creates a personalized itinerary and provides recommendations based on your requirements in under 60 seconds.',
      icon: Cpu,
      highlights: [
        'Curated morning, afternoon & evening slots',
        'Optimized geographic transit buffers',
        'Strategic hotel & dining matches',
      ],
      color: 'from-sky-500 to-indigo-500',
      badgeColor: 'bg-sky-500/10 text-sky-300 border-sky-500/30',
    },
    {
      stepNumber: '03',
      title: 'Travel With Confidence',
      tagline: 'Real-time assistant by your side',
      description: 'Follow your itinerary, manage reminders, receive updates, and enjoy your journey completely stress-free.',
      icon: Luggage,
      highlights: [
        'Real-time flight gate & delay updates',
        'Offline ticket passes & digital keys',
        '24/7 AI chat for on-the-spot changes',
      ],
      color: 'from-indigo-500 to-teal-400',
      badgeColor: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
    },
  ];

  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 bg-slate-900/40 border-y border-slate-800/80 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            Simple 3-Step Process
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight">
            Your Trip. Your Way.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300">
              In 3 Simple Steps.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            No complex spreadsheets or 40-page guides. From inspiration to departure in minutes.
          </p>
        </div>

        {/* Steps Grid with Connectors */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative rounded-3xl bg-slate-950/80 border border-slate-800 p-8 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-xl"
              >
                {/* Step number badge & icon */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${step.color} p-[1px] shadow-lg group-hover:scale-105 transition-transform`}>
                      <div className="w-full h-full bg-slate-950 rounded-[15px] flex items-center justify-center">
                        <Icon className="w-7 h-7 text-cyan-400" />
                      </div>
                    </div>

                    <span className="text-3xl font-black font-display text-slate-800 group-hover:text-cyan-500/40 transition-colors">
                      {step.stepNumber}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <span className={`inline-block px-2.5 py-0.5 rounded-md text-[11px] font-semibold border ${step.badgeColor}`}>
                      Step {idx + 1} • {step.tagline}
                    </span>
                    <h3 className="text-2xl font-bold text-white font-display">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>

                  {/* Highlight checklist */}
                  <div className="pt-4 border-t border-slate-800/80 space-y-2.5">
                    {step.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/50 flex items-center justify-between text-xs text-slate-500">
                  <span>Fast AI Execution</span>
                  <span className="font-mono text-cyan-400 font-bold">~ 0{idx + 1} mins</span>
                </div>
              </div>
            );
          })}

        </div>

        {/* Process Bottom CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={onStartPlanningClick}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-300 hover:from-cyan-300 hover:to-sky-200 rounded-2xl shadow-xl shadow-cyan-500/20 hover:scale-[1.02] transition-all"
          >
            <Sparkles className="w-5 h-5 text-slate-950" />
            <span>Try It Yourself — Generate My Trip</span>
            <ArrowRight className="w-5 h-5 text-slate-950" />
          </button>
        </div>

      </div>
    </section>
  );
};
