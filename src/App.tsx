import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { IntroSection } from './components/IntroSection';
import { MethodSection } from './components/MethodSection';
import { DataDiscussionSection } from './components/DataDiscussionSection';
import { ConclusionSection } from './components/ConclusionSection';
import { Proto1AlgaeSection } from './components/Proto1AlgaeSection';
import { Proto2IncubatorSection } from './components/Proto2IncubatorSection';
import { TeamSection } from './components/TeamSection';
import { ReferencesSection } from './components/ReferencesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('introduction');

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = [
        'introduction',
        'method',
        'data-and-discussion',
        'conclusion',
        'proto-1-algae',
        'proto-2-incubator',
        'our-team',
        'references',
        'contact-us',
      ];

      const scrollPosition = window.scrollY + 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#fff1e5] text-[#262a33] font-sans selection:bg-[#990f3d] selection:text-white">
      {/* FT Masthead and Navigation */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Flow: Exactly the Requested Sections in Sequence */}
      <main className="flex-1">
        {/* 1st Section: Introduction */}
        <IntroSection />

        {/* 2nd Section: Method */}
        <MethodSection />

        {/* 3rd Section: Data and Discussion */}
        <DataDiscussionSection />

        {/* 4th Section: Conclusion */}
        <ConclusionSection />

        {/* 5th Section: Prototype 1 (Algae Production System with image gallery) */}
        <Proto1AlgaeSection />

        {/* 6th Section: Prototype 2 (Stainless Steel Based Incubator Chamber with video) */}
        <Proto2IncubatorSection />

        {/* Team Section */}
        <TeamSection />

        {/* Bottom Section: References */}
        <ReferencesSection />

        {/* Contact Us Section */}
        <ContactSection />
      </main>

      {/* Clean FT Broadsheet Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
