import React, { useState } from 'react';
import {
  BellRing,
  Plane,
  Building2,
  MapPin,
  Calendar,
  Briefcase,
  AlertTriangle,
  Radio,
  CheckCircle2,
  Clock,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Bell,
} from 'lucide-react';
import { TRAVEL_UPDATES_DATA } from '../data/mockData';

export const TravelUpdatesSection: React.FC = () => {
  const [activeAlert, setActiveAlert] = useState<string | null>(null);
  const [simulatedLiveToast, setSimulatedLiveToast] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Plane':
        return Plane;
      case 'Building2':
        return Building2;
      case 'MapPin':
        return MapPin;
      case 'Calendar':
        return Calendar;
      case 'Briefcase':
        return Briefcase;
      case 'AlertTriangle':
      default:
        return AlertTriangle;
    }
  };

  const triggerLiveSimulation = (title: string) => {
    setSimulatedLiveToast(title);
    setTimeout(() => {
      setSimulatedLiveToast(null);
    }, 4000);
  };

  return (
    <section id="updates" className="relative py-24 lg:py-32 bg-slate-900/40 border-t border-slate-800/80 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Simulated Live Toast Notification */}
      {simulatedLiveToast && (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm rounded-2xl bg-slate-950/95 border border-cyan-500/50 p-4 shadow-2xl backdrop-blur-2xl animate-in slide-in-from-bottom-5 fade-in duration-300">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0">
              <Bell className="w-4 h-4" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                <span>TripMate Live Alert</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              </div>
              <p className="text-xs text-slate-300">
                "{simulatedLiveToast}"
              </p>
              <span className="text-[10px] text-slate-500 block">Sent to your smartwatch & phone</span>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            Real-Time Travel Monitoring
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight">
            Stay Updated{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300">
              Throughout Your Journey
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            TripMate AI proactively tracks your flights, gate changes, check-in deadlines, weather anomalies, and local logistics so you never miss a beat.
          </p>
        </div>

        {/* 6 Updates Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TRAVEL_UPDATES_DATA.map((update) => {
            const Icon = getIcon(update.icon);
            return (
              <div
                key={update.id}
                className="relative rounded-3xl bg-slate-950/80 border border-slate-800 p-6 sm:p-7 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
              >
                <div className="space-y-4">
                  {/* Card Header */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:border-cyan-500/40 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold border ${
                        update.statusType === 'warning'
                          ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                          : update.statusType === 'success'
                          ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                          : 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                      }`}
                    >
                      {update.status}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-base font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
                      {update.title}
                    </h3>
                    <span className="text-xs text-slate-400 block mt-0.5">
                      {update.subtitle}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {update.description}
                  </p>
                </div>

                {/* Footer action */}
                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-mono flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-500" />
                    {update.time}
                  </span>

                  <button
                    onClick={() => triggerLiveSimulation(update.description)}
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                  >
                    <span>Test Alert</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
