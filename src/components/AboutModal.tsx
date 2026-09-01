import React from 'react';
import { X, Compass, Sparkles, ShieldCheck, Heart, Award, Globe, Users, CheckCircle2 } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartPlanningClick: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  onClose,
  onStartPlanningClick,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white border border-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-sky-500 p-[1px]">
            <div className="w-full h-full bg-slate-950 rounded-[15px] flex items-center justify-center">
              <Compass className="w-6 h-6 text-cyan-400" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white font-display">
              About TripMate AI
            </h3>
            <span className="text-xs text-cyan-300">
              Your Personal AI Travel Assistant
            </span>
          </div>
        </div>

        <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
          <p>
            <strong className="text-white">TripMate</strong> was born from a simple belief: planning a journey should be as exhilarating as the trip itself. Travelers spend dozens of hours wrestling with messy spreadsheets, biased blog lists, and disconnected booking tabs.
          </p>
          <p>
            We engineered an intelligent, multimodal travel engine that synthesizes individual traveler preferences, dynamic budgets, transit schedules, and real-time alerts into one unified personal assistant.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
              <Award className="w-4 h-4 text-cyan-400" />
              <div className="text-xs font-bold text-white">Precision Routing</div>
              <p className="text-[11px] text-slate-400">Eliminating backtracking & fatigue</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <div className="text-xs font-bold text-white">Honest Pricing</div>
              <p className="text-[11px] text-slate-400">No hidden affiliate markups</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <div className="text-xs font-bold text-white">Adaptive Learning</div>
              <p className="text-[11px] text-slate-400">Remembers your favorite pacing</p>
            </div>
          </div>
        </div>

        {/* Action button */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-mono">Founded in 2026</span>
          <button
            onClick={() => {
              onClose();
              onStartPlanningClick();
            }}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-950 font-bold text-xs shadow-md"
          >
            Start Planning With TripMate
          </button>
        </div>

      </div>
    </div>
  );
};
