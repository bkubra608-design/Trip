import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  Bot,
  Plane,
  Building2,
  MapPin,
  Calendar,
  CheckCircle2,
  Compass,
  Zap,
  TrendingUp,
  ShieldCheck,
  Star,
  Users,
  Clock,
  ChevronRight,
} from 'lucide-react';

interface HeroSectionProps {
  onStartPlanningClick: () => void;
  onMeetAssistantClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartPlanningClick,
  onMeetAssistantClick,
}) => {
  const [activeTab, setActiveTab] = useState<'itinerary' | 'flight' | 'hotels'>('itinerary');

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-indigo-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid line background overlay */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0f_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-6 space-y-7 text-center lg:text-left">
            
            {/* AI Powered Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/15 via-sky-500/15 to-indigo-500/15 border border-cyan-500/30 backdrop-blur-md shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-xs font-semibold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
                ✦ Powered by AI
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-xs text-slate-300 font-medium">Next-Gen Travel Engine</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.1]">
              Plan Less.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300">
                Travel More.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Meet <strong className="text-white font-semibold">TripMate</strong> — your personal AI travel assistant that creates personalized trips, suggests bookings, manages reminders, and keeps you updated throughout your journey.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                id="hero-cta-start-planning"
                onClick={onStartPlanningClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-teal-300 hover:from-cyan-300 hover:to-teal-200 rounded-2xl shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <Sparkles className="w-5 h-5 text-slate-950" />
                <span>Start Planning</span>
                <ArrowRight className="w-5 h-5 text-slate-950" />
              </button>

              <button
                id="hero-cta-meet-assistant"
                onClick={onMeetAssistantClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-semibold text-white bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-cyan-500/40 rounded-2xl shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group backdrop-blur-md"
              >
                <Bot className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>Meet TripMate AI</span>
              </button>
            </div>

            {/* Trust Highlights */}
            <div className="pt-4 border-t border-slate-800/60 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">100% Tailored</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">Instant 60s Plans</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">Real-Time Sync</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Centerpiece (Mock AI Travel Dashboard) */}
          <div className="lg:col-span-6 relative">
            
            {/* Background Glow under mock card */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-sky-500/15 to-indigo-500/25 rounded-3xl blur-2xl transform -rotate-1 scale-105" />

            {/* Main Mock Assistant Window */}
            <div className="relative rounded-3xl bg-slate-900/90 border border-slate-700/80 shadow-2xl backdrop-blur-xl overflow-hidden">
              
              {/* Window Header */}
              <div className="px-5 py-3.5 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-semibold text-slate-400 flex items-center gap-1.5 font-mono">
                    <Compass className="w-3.5 h-3.5 text-cyan-400" />
                    TripMate Workspace • Dubai, UAE
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    AI Live Sync
                  </span>
                </div>
              </div>

              {/* Window Subheader Tabs */}
              <div className="px-5 py-2.5 bg-slate-900/50 border-b border-slate-800/80 flex items-center justify-between gap-2 overflow-x-auto">
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setActiveTab('itinerary')}
                    className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
                      activeTab === 'itinerary'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    5-Day Itinerary
                  </button>
                  <button
                    onClick={() => setActiveTab('flight')}
                    className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
                      activeTab === 'flight'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Plane className="w-3.5 h-3.5" />
                    Live Flights
                  </button>
                  <button
                    onClick={() => setActiveTab('hotels')}
                    className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
                      activeTab === 'hotels'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Building2 className="w-3.5 h-3.5" />
                    Hotels & Activities
                  </button>
                </div>
                <div className="text-[11px] text-cyan-400 font-mono hidden sm:block">
                  Budget: $1,450 / $1,500
                </div>
              </div>

              {/* Tab Content Display */}
              <div className="p-5 space-y-4">
                
                {activeTab === 'itinerary' && (
                  <div className="space-y-3">
                    
                    {/* Destination Banner inside mock */}
                    <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 p-4 bg-gradient-to-r from-slate-900 to-indigo-950/60 flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                            Active Itinerary
                          </span>
                          <span className="text-xs text-slate-400">• 5 Days, 2 Travelers</span>
                        </div>
                        <h4 className="text-lg font-bold text-white font-display">
                          Dubai — Modern Marvels & Desert Safari
                        </h4>
                        <p className="text-xs text-slate-300">
                          Personalized for Architecture, Food & Adventure
                        </p>
                      </div>
                      <div className="text-right hidden sm:block">
                        <span className="text-xs text-emerald-400 font-semibold bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-lg inline-block">
                          98% Match
                        </span>
                      </div>
                    </div>

                    {/* Timeline stops preview */}
                    <div className="space-y-2.5 pt-1">
                      
                      {/* Stop 1 */}
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/30 transition-colors">
                        <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 font-bold text-xs">
                          D1
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h5 className="text-xs font-semibold text-white truncate">
                              Dubai Marina Sunset Walk & Pier 7 Welcome Dinner
                            </h5>
                            <span className="text-[11px] text-slate-400 font-mono">17:30</span>
                          </div>
                          <p className="text-[11px] text-slate-400 truncate">
                            Marina Canal yacht promenade • Reserved balcony table
                          </p>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      </div>

                      {/* Stop 2 */}
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/30 transition-colors">
                        <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0 font-bold text-xs">
                          D2
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h5 className="text-xs font-semibold text-white truncate">
                              Burj Khalifa Level 124 & Dubai Fountain Show
                            </h5>
                            <span className="text-[11px] text-slate-400 font-mono">09:30</span>
                          </div>
                          <p className="text-[11px] text-slate-400 truncate">
                            Skip-the-line QR voucher synchronized • Best evening viewpoint
                          </p>
                        </div>
                        <span className="text-[10px] text-cyan-400 bg-cyan-950/80 border border-cyan-500/30 px-2 py-0.5 rounded font-medium">
                          Priority Pass
                        </span>
                      </div>

                      {/* Stop 3 */}
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/30 transition-colors">
                        <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0 font-bold text-xs">
                          D3
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h5 className="text-xs font-semibold text-white truncate">
                              Red Dunes 4x4 Safari, Sandboarding & Bedouin BBQ
                            </h5>
                            <span className="text-[11px] text-slate-400 font-mono">15:00</span>
                          </div>
                          <p className="text-[11px] text-slate-400 truncate">
                            Driver assigned (Land Cruiser) • Stargazing session included
                          </p>
                        </div>
                        <span className="text-[10px] text-amber-400 bg-amber-950/80 border border-amber-500/30 px-2 py-0.5 rounded font-medium">
                          Confirmed
                        </span>
                      </div>

                    </div>
                  </div>
                )}

                {activeTab === 'flight' && (
                  <div className="space-y-3">
                    <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Plane className="w-4 h-4 text-cyan-400" />
                          <span className="text-xs font-bold text-white">Emirates EK204 • Boeing 777-300ER</span>
                        </div>
                        <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                          On Schedule
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 items-center py-2 text-center border-y border-slate-800/80">
                        <div>
                          <div className="text-lg font-bold text-white font-mono">JFK</div>
                          <div className="text-[11px] text-slate-400">10:40 AM</div>
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="text-[10px] text-cyan-400 font-mono">12h 20m</span>
                          <div className="w-full h-0.5 bg-cyan-500/30 relative my-1">
                            <Plane className="w-3 h-3 text-cyan-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90" />
                          </div>
                          <span className="text-[10px] text-slate-400">Non-stop</span>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-white font-mono">DXB</div>
                          <div className="text-[11px] text-slate-400">08:00 AM (+1)</div>
                        </div>
                      </div>
                      <div className="text-xs text-slate-300 flex items-center justify-between">
                        <span>Terminal 3 • Gate B14 • Seat 14A</span>
                        <span className="text-cyan-400 font-medium">Baggage: 2 × 23kg</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'hotels' && (
                  <div className="space-y-3">
                    <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center gap-3">
                      <img
                        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=300&q=80"
                        alt="Hotel preview"
                        className="w-16 h-16 rounded-xl object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1 text-amber-400 text-xs">
                          <Star className="w-3 h-3 fill-amber-400" />
                          <span className="font-bold">4.9</span>
                          <span className="text-slate-400">• Luxury Marina Suite</span>
                        </div>
                        <h5 className="text-sm font-bold text-white truncate">Dubai Marina Haven Hotel</h5>
                        <p className="text-xs text-slate-400">Walk to Marina Mall • Balcony harbor view</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-cyan-400">$142<span className="text-xs text-slate-400 font-normal">/nt</span></div>
                        <span className="text-[10px] text-emerald-400">Free cancel</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* AI Assistant Live Bar on the card */}
                <div className="p-3 rounded-2xl bg-gradient-to-r from-cyan-950/50 via-slate-900 to-indigo-950/50 border border-cyan-500/20 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-cyan-300" />
                  </div>
                  <div className="flex-1 text-xs">
                    <span className="font-semibold text-white">TripMate Assistant: </span>
                    <span className="text-slate-300">
                      "I adjusted Day 3 pickup time by 15 mins to avoid Dubai Marina rush hour traffic."
                    </span>
                  </div>
                  <button
                    onClick={onMeetAssistantClick}
                    className="shrink-0 text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-0.5"
                  >
                    <span>Chat</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>

              </div>
            </div>

            {/* Floating Pill Badge 1: Top Left */}
            <div className="absolute -top-4 -left-4 sm:-left-6 p-3 rounded-2xl bg-slate-900/95 border border-slate-700/80 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-2.5 animate-bounce-slow">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-white">Budget Optimized</div>
                <div className="text-[10px] text-slate-400">$1,450 / $1,500 target</div>
              </div>
            </div>

            {/* Floating Pill Badge 2: Bottom Right */}
            <div className="absolute -bottom-4 -right-4 sm:-right-6 p-3 rounded-2xl bg-slate-900/95 border border-slate-700/80 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-white">Smart Reminders</div>
                <div className="text-[10px] text-emerald-400">All passes ready offline</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
