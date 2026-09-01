import React from 'react';
import { Compass, Sparkles, Twitter, Instagram, Linkedin, Github, Globe, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenAboutClick: () => void;
  onOpenContactClick: () => void;
  onStartPlanningClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenAboutClick,
  onOpenContactClick,
  onStartPlanningClick,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Trip Planner', href: '#planner' },
    { label: 'AI Chat', href: '#chat' },
    { label: 'Destinations', href: '#destinations' },
    { label: 'Updates', href: '#updates' },
  ];

  return (
    <footer id="footer-section" className="relative bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-sky-500 to-indigo-600 p-[1px]">
                <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                  <Compass className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-white font-display">
                  Trip<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">Mate</span>
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-md">
                  AI
                </span>
              </div>
            </div>

            <p className="text-sm font-semibold text-cyan-300">
              Your Personal AI Travel Assistant
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              TripMate helps users plan, personalize, organize, and manage their complete travel experience using artificial intelligence.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono">
              Product Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Features & AI */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono">
              Explore TripMate
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.slice(4).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={onStartPlanningClick}
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-left"
                >
                  Generate Custom Trip
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Company & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono">
              Company & Legal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={onOpenAboutClick}
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContactClick}
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <span className="text-slate-400 hover:text-cyan-400 cursor-pointer">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="text-slate-400 hover:text-cyan-400 cursor-pointer">
                  Terms of Service
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>© 2026 TripMate AI. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400 flex items-center gap-1">
              Crafted for modern travelers worldwide
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
