import React from 'react';
import { Star, Quote, Heart, ShieldCheck, MapPin } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/mockData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-slate-900/50 border-t border-slate-800/80 overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 fill-cyan-400 text-cyan-400" />
            Verified Traveler Stories
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight">
            Travelers Love{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300">
              TripMate AI
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Join thousands of travelers who plan stress-free, personalized vacations around the globe.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-slate-950/80 border border-slate-800 p-6 sm:p-7 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-xl"
            >
              <div className="space-y-4">
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-700 group-hover:text-cyan-500/40 transition-colors" />
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic font-normal">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-5 mt-4 border-t border-slate-800/80 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-10 h-10 rounded-full object-cover border border-cyan-500/30"
                />
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-white truncate font-display">
                    {item.author}
                  </h4>
                  <p className="text-[11px] text-slate-400 truncate">
                    {item.role}
                  </p>
                  <span className="text-[10px] text-cyan-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-2.5 h-2.5" />
                    {item.tripDestination}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
