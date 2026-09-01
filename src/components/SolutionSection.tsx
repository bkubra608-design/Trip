import React, { useState } from 'react';
import {
  Bot,
  User,
  Sparkles,
  CheckCircle2,
  DollarSign,
  MapPin,
  Calendar,
  Heart,
  Users,
  Compass,
  ArrowRight,
  Sliders,
  Send,
  Zap,
} from 'lucide-react';

interface SolutionSectionProps {
  onStartPlanningClick: () => void;
}

export const SolutionSection: React.FC<SolutionSectionProps> = ({ onStartPlanningClick }) => {
  const [activeAnalysis, setActiveAnalysis] = useState<string>('budget');

  const analysisItems = [
    {
      id: 'budget',
      label: 'Budget',
      value: '$1,500 Max',
      detail: 'Dynamic split: Hotel 40%, Dining 25%, Activities 25%, Buffer 10%',
      icon: DollarSign,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10 border-emerald-500/20',
    },
    {
      id: 'destination',
      label: 'Destination',
      value: 'Dubai, UAE',
      detail: 'Curated 5-day itinerary balancing modern luxury & historic heritage',
      icon: MapPin,
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10 border-cyan-500/20',
    },
    {
      id: 'dates',
      label: 'Travel Dates',
      value: 'Nov 12 – Nov 16',
      detail: 'Optimal weather window (26°C avg), low rain probability, seasonal events',
      icon: Calendar,
      color: 'text-sky-400',
      bg: 'bg-sky-500/10 border-sky-500/20',
    },
    {
      id: 'interests',
      label: 'Interests',
      value: 'Architecture & Desert',
      detail: 'Prioritizing Burj Khalifa, Marina Walk & Arabian Red Dune Safari',
      icon: Heart,
      color: 'text-rose-400',
      bg: 'bg-rose-500/10 border-rose-500/20',
    },
    {
      id: 'travelers',
      label: 'Number of Travelers',
      value: '2 Adults',
      detail: 'Double occupancy rate discounts & couple sunset dining spots',
      icon: Users,
      color: 'text-purple-400',
      bg: 'bg-purple-500/10 border-purple-500/20',
    },
    {
      id: 'style',
      label: 'Travel Style',
      value: 'Balanced Luxury',
      detail: '4-Star boutique accommodations + high-efficiency transit routing',
      icon: Compass,
      color: 'text-amber-400',
      bg: 'bg-amber-500/10 border-amber-500/20',
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-slate-900/60 border-t border-slate-800/80 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            The Intelligent Solution
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight">
            Meet Your Personal{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300">
              Travel AI
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            TripMate brings travel planning into one intelligent assistant. From initial inspiration and budget calibration to day-by-day scheduling and real-time reminders.
          </p>
        </div>

        {/* Interactive Chat & Analyzer Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Visual Chatbot Interaction Card */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-slate-950/90 border border-slate-700/80 shadow-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden backdrop-blur-xl">
              
              {/* Header inside assistant card */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 to-sky-500 p-[1px]">
                    <div className="w-full h-full bg-slate-950 rounded-[15px] flex items-center justify-center">
                      <Bot className="w-5 h-5 text-cyan-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-2 font-display">
                      TripMate AI Assistant
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    </h4>
                    <span className="text-xs text-slate-400">Contextual Reasoning Active</span>
                  </div>
                </div>

                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300 font-mono">
                  Analysis Engine v3.2
                </span>
              </div>

              {/* Chat Thread */}
              <div className="space-y-4">
                
                {/* User message */}
                <div className="flex items-start justify-end gap-3">
                  <div className="max-w-md bg-gradient-to-r from-cyan-500/20 to-sky-500/20 border border-cyan-500/40 rounded-2xl rounded-tr-sm p-4 text-white text-sm shadow-md">
                    <p className="font-medium">"Plan a 5-day trip to Dubai under $1,500."</p>
                    <span className="text-[10px] text-cyan-300/80 block text-right mt-1">10:24 AM</span>
                  </div>
                  <div className="w-8 h-8 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                </div>

                {/* AI response */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="max-w-xl bg-slate-900/90 border border-slate-700/80 rounded-2xl rounded-tl-sm p-4 text-slate-200 text-sm space-y-3 shadow-lg">
                    <p className="leading-relaxed">
                      "Absolutely! I've created a personalized 5-day Dubai itinerary based on your budget and interests."
                    </p>

                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-white">Synthesizing 6 Core Parameters...</span>
                        <span className="text-emerald-400 font-mono">100% Ready</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-r from-cyan-400 to-sky-400 rounded-full" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1 text-xs">
                      <div className="p-2 rounded-lg bg-slate-950/50 border border-slate-800/80 text-center">
                        <span className="text-[10px] text-slate-400 block">Total Est.</span>
                        <strong className="text-white font-mono">$1,420</strong>
                      </div>
                      <div className="p-2 rounded-lg bg-slate-950/50 border border-slate-800/80 text-center">
                        <span className="text-[10px] text-slate-400 block">Top Match</span>
                        <strong className="text-cyan-300">Red Dunes Safari</strong>
                      </div>
                      <div className="p-2 rounded-lg bg-slate-950/50 border border-slate-800/80 text-center col-span-2 sm:col-span-1">
                        <span className="text-[10px] text-slate-400 block">Lodging</span>
                        <strong className="text-emerald-300">Marina Suites</strong>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Chat Input Placeholder Mock */}
              <div className="pt-2">
                <div className="flex items-center gap-2 p-2 rounded-2xl bg-slate-900 border border-slate-800">
                  <input
                    type="text"
                    readOnly
                    value="Ask TripMate anything about your trip..."
                    className="w-full bg-transparent px-3 py-1.5 text-xs text-slate-400 focus:outline-none cursor-pointer"
                    onClick={onStartPlanningClick}
                  />
                  <button
                    onClick={onStartPlanningClick}
                    className="p-2 rounded-xl bg-cyan-400 text-slate-950 hover:bg-cyan-300 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: TripMate Analyzing 6 Parameters */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-mono">
                Multimodal Reasoning
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                TripMate is Analyzing:
              </h3>
              <p className="text-sm text-slate-300">
                Click any parameter below to view how the AI dynamically tailors your itinerary.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {analysisItems.map((item) => {
                const Icon = item.icon;
                const isSelected = activeAnalysis === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveAnalysis(item.id)}
                    className={`p-3.5 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between ${
                      isSelected
                        ? 'bg-slate-800/90 border-cyan-500/60 shadow-lg shadow-cyan-500/10 scale-[1.02]'
                        : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700/80 hover:bg-slate-900/60'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-1">
                      <div className="flex items-center gap-2">
                        <div className={`p-1.5 rounded-lg ${item.bg}`}>
                          <Icon className={`w-3.5 h-3.5 ${item.color}`} />
                        </div>
                        <span className="text-xs font-bold text-slate-300">
                          {item.label}
                        </span>
                      </div>
                      {isSelected && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      )}
                    </div>
                    <div className="text-sm font-extrabold text-white pl-0.5">
                      {item.value}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Parameter Detail Box */}
            <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 space-y-1 backdrop-blur-md animate-in fade-in duration-200">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-bold text-cyan-300 uppercase tracking-wide">
                  Active Parameter Logic
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {analysisItems.find((a) => a.id === activeAnalysis)?.detail}
              </p>
            </div>

            <div>
              <button
                onClick={onStartPlanningClick}
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 group"
              >
                <span>Try generating your own itinerary</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
