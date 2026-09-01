import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Mail, Send } from 'lucide-react';

interface CTASectionProps {
  onStartPlanningClick: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onStartPlanningClick }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <section className="relative py-24 lg:py-32 bg-slate-950 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-cyan-950/20 to-slate-950 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="rounded-3xl bg-gradient-to-tr from-slate-900 via-slate-900/90 to-cyan-950/50 border border-cyan-500/30 p-8 sm:p-14 text-center space-y-8 shadow-2xl backdrop-blur-2xl">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Begin Your Next Journey
          </div>

          {/* Headline & Subheading */}
          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight leading-tight">
              Your Next Adventure{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300">
                Starts Here.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Let TripMate AI plan the journey while you focus on making memories.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              id="cta-bottom-start-planning"
              onClick={onStartPlanningClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-teal-300 hover:from-cyan-300 hover:to-teal-200 rounded-2xl shadow-xl shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Sparkles className="w-5 h-5 text-slate-950" />
              <span>Start Planning My Trip →</span>
            </button>
          </div>

          {/* Quick email invite / newsletter option */}
          <div className="pt-6 max-w-md mx-auto">
            {subscribed ? (
              <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>You're on the priority list! Welcome to TripMate.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center gap-2">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    placeholder="Enter email for VIP travel perks & guides..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950/90 border border-slate-800 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/60"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-colors shrink-0"
                >
                  Get Access
                </button>
              </form>
            )}
          </div>

          {/* Trust Guarantees */}
          <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Free instant itinerary generator</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Offline mobile export</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
