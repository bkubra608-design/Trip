import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, Compass, ArrowRight, Plane, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onStartPlanningClick: () => void;
  onOpenAboutClick: () => void;
  onOpenContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onStartPlanningClick,
  onOpenAboutClick,
  onOpenContactClick,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Trip Planner', href: '#planner' },
    { label: 'Chat AI', href: '#chat' },
    { label: 'Destinations', href: '#destinations' },
    { label: 'Updates', href: '#updates' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="navbar-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          id="brand-logo-link"
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-sky-500 to-indigo-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
            <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center relative overflow-hidden">
              <Compass className="w-5 h-5 text-cyan-400 group-hover:rotate-45 transition-transform duration-500" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-ping opacity-75" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-cyan-400 rounded-full" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-bold tracking-tight text-white font-display">
                Trip<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">Mate</span>
              </span>
              <span className="px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-md">
                AI
              </span>
            </div>
            <span className="text-[10px] text-slate-400 font-medium hidden sm:inline-block">
              Your Personal AI Travel Assistant
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav id="desktop-navigation" className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/40 rounded-lg transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <button
            id="nav-btn-about"
            onClick={onOpenAboutClick}
            className="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/40 rounded-lg transition-colors duration-200"
          >
            About
          </button>
          <button
            id="nav-btn-contact"
            onClick={onOpenContactClick}
            className="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/40 rounded-lg transition-colors duration-200"
          >
            Contact
          </button>
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            id="navbar-cta-start-planning"
            onClick={onStartPlanningClick}
            className="relative group inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-teal-300 hover:from-cyan-300 hover:to-teal-200 rounded-xl shadow-md shadow-cyan-500/20 hover:shadow-lg hover:shadow-cyan-400/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <Sparkles className="w-4 h-4 text-slate-950 animate-pulse" />
            <span>Start Planning</span>
            <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-menu"
          className="lg:hidden fixed inset-x-0 top-full bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800 shadow-2xl p-5 space-y-3 transition-all animate-in fade-in slide-in-from-top-4 duration-300"
        >
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                id={`mobile-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-2.5 text-sm font-medium text-slate-200 hover:text-cyan-400 bg-slate-900/80 hover:bg-slate-800/80 rounded-xl border border-slate-800/50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/80">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAboutClick();
              }}
              className="px-3.5 py-2.5 text-sm font-medium text-slate-300 bg-slate-900/60 rounded-xl border border-slate-800/50 text-left hover:text-cyan-400"
            >
              About Us
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContactClick();
              }}
              className="px-3.5 py-2.5 text-sm font-medium text-slate-300 bg-slate-900/60 rounded-xl border border-slate-800/50 text-left hover:text-cyan-400"
            >
              Contact Team
            </button>
          </div>

          <div className="pt-2">
            <button
              id="mobile-cta-start-planning"
              onClick={() => {
                setMobileMenuOpen(false);
                onStartPlanningClick();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-base font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-300 rounded-xl shadow-lg shadow-cyan-500/25"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>Start Planning Your Trip</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
