import React from 'react';
import { SearchX, FolderX, BellOff, Layers, Clock, AlertCircle } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      title: 'Too Much Research',
      description: 'Finding the right destination, hotel, activities, and transportation takes time.',
      painPoints: [
        'Endless tabs with contradicting blog reviews',
        'Unclear hidden fees, transit costs and tourist traps',
        'Overwhelming choices without budget clarity',
      ],
      icon: SearchX,
      iconColor: 'text-rose-400',
      badgeBg: 'bg-rose-500/10 border-rose-500/20 text-rose-300',
      gradient: 'from-rose-500/10 to-transparent',
    },
    {
      title: 'Unorganized Plans',
      description: 'Managing flights, hotels, activities, and schedules can become confusing.',
      painPoints: [
        'Booking confirmations scattered across emails & PDFs',
        'Clashing reservation times and unrealistic routes',
        'Zero offline access when mobile signal drops',
      ],
      icon: FolderX,
      iconColor: 'text-amber-400',
      badgeBg: 'bg-amber-500/10 border-amber-500/20 text-amber-300',
      gradient: 'from-amber-500/10 to-transparent',
    },
    {
      title: 'Missed Updates & Reminders',
      description: 'Important travel tasks and schedule changes can easily be forgotten.',
      painPoints: [
        'Last-minute airport gate changes unnoticed',
        'Expired visa timelines and missed check-in hours',
        'Forgotten packing essentials and attraction passes',
      ],
      icon: BellOff,
      iconColor: 'text-orange-400',
      badgeBg: 'bg-orange-500/10 border-orange-500/20 text-orange-300',
      gradient: 'from-orange-500/10 to-transparent',
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-slate-950 overflow-hidden">
      {/* Background soft red/amber hint glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-rose-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-semibold uppercase tracking-wider">
            <AlertCircle className="w-3.5 h-3.5" />
            The Travel Planning Dilemma
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight">
            Travel Planning{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-300 to-orange-400">
              Shouldn't Be Complicated
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Travelers often spend hours searching for destinations, comparing hotels, planning activities, organizing schedules, and remembering important travel tasks.
          </p>
        </div>

        {/* 3 Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <div
                key={idx}
                className="relative rounded-3xl bg-slate-900/60 border border-slate-800/80 p-8 flex flex-col justify-between hover:border-slate-700 transition-all duration-300 group hover:-translate-y-1 shadow-lg shadow-black/30"
              >
                {/* Subtle top gradient accent */}
                <div className={`absolute top-0 inset-x-0 h-32 rounded-t-3xl bg-gradient-to-b ${prob.gradient} pointer-events-none`} />

                <div className="relative z-10 space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className={`w-6 h-6 ${prob.iconColor}`} />
                    </div>
                    <span className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold uppercase tracking-wider border ${prob.badgeBg}`}>
                      Pain Point 0{idx + 1}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white font-display">
                      {prob.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {prob.description}
                    </p>
                  </div>

                  {/* Bullet breakdown */}
                  <div className="pt-4 border-t border-slate-800/80 space-y-2.5">
                    {prob.painPoints.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400/80 mt-1.5 shrink-0" />
                        <span className="leading-snug">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 mt-6 pt-4 text-xs font-semibold text-slate-500 font-mono">
                  Average time wasted: 18+ hours
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
