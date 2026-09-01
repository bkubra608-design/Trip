/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { FeaturesSection } from './components/FeaturesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { InteractivePlannerSection } from './components/InteractivePlannerSection';
import { AIChatSection } from './components/AIChatSection';
import { PersonalizationSection } from './components/PersonalizationSection';
import { TravelUpdatesSection } from './components/TravelUpdatesSection';
import { DestinationsSection } from './components/DestinationsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { AboutModal } from './components/AboutModal';
import { ContactModal } from './components/ContactModal';
import { SaveItineraryModal } from './components/SaveItineraryModal';
import { MeetAssistantModal } from './components/MeetAssistantModal';
import { Destination, GeneratedItinerary } from './types';
import { DUBAI_DEFAULT_ITINERARY } from './data/mockData';

export default function App() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMeetAssistantOpen, setIsMeetAssistantOpen] = useState(false);
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const [selectedItineraryToSave, setSelectedItineraryToSave] = useState<GeneratedItinerary | null>(
    DUBAI_DEFAULT_ITINERARY
  );

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartPlanningClick = () => {
    scrollToSection('planner');
  };

  const handleSelectDestination = (dest: Destination) => {
    scrollToSection('planner');
  };

  const handleOpenSaveModal = (itinerary: GeneratedItinerary) => {
    setSelectedItineraryToSave(itinerary);
    setIsSaveModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950 font-sans relative">
      
      {/* Navigation Bar */}
      <Navbar
        onStartPlanningClick={handleStartPlanningClick}
        onOpenAboutClick={() => setIsAboutOpen(true)}
        onOpenContactClick={() => setIsContactOpen(true)}
      />

      {/* Main Landing Page Content */}
      <main id="main-content">
        {/* 1. Hero Section */}
        <HeroSection
          onStartPlanningClick={handleStartPlanningClick}
          onMeetAssistantClick={() => setIsMeetAssistantOpen(true)}
        />

        {/* 2. Marketing Statistics Section */}
        <StatsSection />

        {/* 3. Problem Section */}
        <ProblemSection />

        {/* 4. Solution Section */}
        <SolutionSection onStartPlanningClick={handleStartPlanningClick} />

        {/* 5. Features Section (01 - 06) */}
        <FeaturesSection onStartPlanningClick={handleStartPlanningClick} />

        {/* 6. How It Works (3 Steps) */}
        <HowItWorksSection onStartPlanningClick={handleStartPlanningClick} />

        {/* 7. Interactive Trip Planner Section */}
        <InteractivePlannerSection onOpenSaveModal={handleOpenSaveModal} />

        {/* 8. AI Chat Section ("Just Ask TripMate AI") */}
        <AIChatSection />

        {/* 9. Personalization Section ("Travel That Feels Personal") */}
        <PersonalizationSection onStartPlanningClick={handleStartPlanningClick} />

        {/* 10. Travel Updates Section ("Stay Updated Throughout Your Journey") */}
        <TravelUpdatesSection />

        {/* 11. Destinations Section ("Explore Your Next Destination") */}
        <DestinationsSection onSelectDestination={handleSelectDestination} />

        {/* 12. Testimonials Section ("Travelers Love TripMate AI") */}
        <TestimonialsSection />

        {/* 13. Call To Action Section */}
        <CTASection onStartPlanningClick={handleStartPlanningClick} />
      </main>

      {/* Footer */}
      <Footer
        onOpenAboutClick={() => setIsAboutOpen(true)}
        onOpenContactClick={() => setIsContactOpen(true)}
        onStartPlanningClick={handleStartPlanningClick}
      />

      {/* Modals */}
      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
        onStartPlanningClick={handleStartPlanningClick}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <MeetAssistantModal
        isOpen={isMeetAssistantOpen}
        onClose={() => setIsMeetAssistantOpen(false)}
        onScrollToChat={() => scrollToSection('chat')}
        onScrollToPlanner={() => scrollToSection('planner')}
      />

      <SaveItineraryModal
        isOpen={isSaveModalOpen}
        itinerary={selectedItineraryToSave}
        onClose={() => setIsSaveModalOpen(false)}
      />

    </div>
  );
}
