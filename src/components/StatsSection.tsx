import React from 'react';
import { Compass, Globe, Sparkles, Clock, Users, ShieldCheck } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const stats = [
    {
      value: '10K+',
      label: 'Trips Planned',
      description: 'Custom multi-day itineraries generated with smart routing.',
      icon: Compass,
      gradient: 'from-cyan-400 to-sky-400',
    },
    {
      value: '50+',
      label: 'Destinations',
      description: 'Worldwide cities, cultural capitals & tropical islands.',
      icon: Globe,
      gradient: 'from-sky-400 to-indigo-400',
    },
    {
      value: '24/7',
      label: 'AI Assistance',
      description: 'Real-time travel updates, translation & gate changes.',
      icon: Clock,
      gradient: 'from-indigo-400 to-purple-400',
    },
    {
      value: '100%',
      label: 'Personalized Experiences',
      description: 'Tailored to your budget, food tastes & travel pacing.',
      icon: Sparkles,
      gradient: 'from-cyan-400 to-emerald-400',
    },
  ];

  return (
    <section className="relative py-12 bg-slate-950/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="relative p-6 rounded-2xl bg-slate-900/40 border border-slate-800/60 hover:border-slate-700/80 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2.5 rounded-xl bg-slate-800/60 text-cyan-400 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-mono">
                    STAT 0{idx + 1}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className={`text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold text-white tracking-wide">
                    {stat.label}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pt-1">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
