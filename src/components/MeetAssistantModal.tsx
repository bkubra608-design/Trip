import React from 'react';
import { X, Bot, Sparkles, Zap, ShieldCheck, ArrowRight, Compass, MessageSquare, Bell } from 'lucide-react';

interface MeetAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  onScrollToChat: () => void;
  onScrollToPlanner: () => void;
}

export const MeetAssistantModal: React.FC<MeetAssistantModalProps> = ({
  isOpen,
  onClose,
  onScrollToChat,
  onScrollToPlanner,
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

        {/* Header */}
        <div className="flex items-center gap-4">
          <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 via-sky-400 to-indigo-600 p-[1px] shadow-lg">
            <div className="w-full h-full bg-slate-950 rounded-[15px] flex items-center justify-center">
              <Bot className="w-7 h-7 text-cyan-400" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-slate-950 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-950" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-2xl font-bold text-white font-display">
                TripMate AI Assistant
              </h3>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                v3.2
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-0.5">
              Your autonomous 24/7 personal travel co-pilot
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="space-y-3 text-sm text-slate-300">
          <p className="leading-relaxed">
            TripMate is trained on millions of geospatial data points, live transit feeds, flight status schedules, local restaurant guides, and budget optimization algorithms.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold">
                <Compass className="w-4 h-4" />
                <span>Autonomous Itineraries</span>
              </div>
              <p className="text-xs text-slate-400">
                Balances your daily pace, energy levels, and travel logistics with precision.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
              <div className="flex items-center gap-2 text-sky-400 text-xs font-bold">
                <Bell className="w-4 h-4" />
                <span>Proactive Flight & Hotel Sync</span>
              </div>
              <p className="text-xs text-slate-400">
                Alerts you to gate changes, terminal paths, and check-in times before airlines do.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold">
                <MessageSquare className="w-4 h-4" />
                <span>Natural Language Chat</span>
              </div>
              <p className="text-xs text-slate-400">
                Ask any travel question anytime: translation, tipping customs, or local hidden gems.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold">
                <Zap className="w-4 h-4" />
                <span>Live On-The-Fly Rerouting</span>
              </div>
              <p className="text-xs text-slate-400">
                Rains or schedule delays? TripMate swaps indoor alternatives instantly.
              </p>
            </div>
          </div>
        </div>

        {/* Action Choices */}
        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={() => {
              onClose();
              onScrollToChat();
            }}
            className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-center gap-2 border border-slate-700 transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-cyan-400" />
            <span>Chat Live with TripMate</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onScrollToPlanner();
            }}
            className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>Generate Itinerary Now</span>
          </button>
        </div>

      </div>
    </div>
  );
};
