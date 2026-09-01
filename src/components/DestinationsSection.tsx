import React from 'react';
import {
  MapPin,
  Star,
  Calendar,
  DollarSign,
  ArrowRight,
  Globe,
  Compass,
} from 'lucide-react';
import { POPULAR_DESTINATIONS } from '../data/mockData';
import { Destination } from '../types';

interface DestinationsSectionProps {
  onSelectDestination: (dest: Destination) => void;
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({
  onSelectDestination,
}) => {
  return (
    <section id="destinations" className="relative py-24 lg:py-32 bg-slate-950 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Globe className="w-3.5 h-3.5" />
            Curated Global Escapes
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight">
            Explore Your Next{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300">
              Destination
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Choose from world-leading cultural capitals, futuristic skylines, and serene island paradises curated with pre-optimized AI travel templates.
          </p>
        </div>

        {/* 6 Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {POPULAR_DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              className="rounded-3xl bg-slate-900/80 border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1.5 shadow-xl"
            >
              {/* Image Container */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-950/80 text-white backdrop-blur-md border border-white/10 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    {dest.country}
                  </span>

                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-950/80 text-amber-300 backdrop-blur-md border border-white/10 flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    {dest.rating}
                  </span>
                </div>

                {/* Bottom text overlay on image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-black text-white font-display drop-shadow-md">
                    {dest.name}
                  </h3>
                  <span className="text-xs text-cyan-300 font-medium drop-shadow">
                    {dest.tagline}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {dest.description}
                  </p>

                  {/* Highlights Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {dest.popularFor.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-lg text-[11px] font-medium bg-slate-950 text-slate-300 border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Meta & Plan Button */}
                <div className="pt-4 border-t border-slate-800/80 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      Best: {dest.bestSeason}
                    </span>
                    <span className="font-mono text-emerald-400 font-medium">
                      {dest.avgDailyBudget}/day
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectDestination(dest)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-sky-400 text-white hover:text-slate-950 text-xs font-bold transition-all group-hover:shadow-md"
                  >
                    <span>Plan Trip to {dest.name}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
