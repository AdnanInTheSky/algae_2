import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'method', label: 'Method' },
    { id: 'data-and-discussion', label: 'Data & Discussion' },
    { id: 'conclusion', label: 'Conclusion' },
    { id: 'proto-1-algae', label: 'Proto 1: Algae System' },
    { id: 'proto-2-incubator', label: 'Proto 2: Stainless Incubator' },
    { id: 'our-team', label: 'Our Team' },
    { id: 'references', label: 'References' },
    { id: 'contact-us', label: 'Contact Us' },
  ];

  return (
    <header className="border-b border-[#d9c8b8] bg-[#fff1e5] sticky top-0 z-40">
      {/* Main Title Masthead */}
      <div className="px-4 py-3 sm:py-4 md:py-6 max-w-6xl mx-auto">
        <div className="flex md:block items-start justify-between relative">
          {/* Title & Subtitle block with safe right margin on mobile */}
          <div className="text-left md:text-center pr-14 md:pr-0 flex-1">
            <h1 
              onClick={() => onNavigate('introduction')}
              className="font-serif text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-[#1a1a1a] cursor-pointer hover:opacity-90 transition-opacity uppercase leading-tight"
            >
              Algae-Plast Fuel
            </h1>
            <p className="mt-1 text-xs sm:text-sm font-serif italic text-[#4d4845] leading-snug">
              Hybrid Plastic–Algae Closed-Loop Co-Pyrolysis &amp; Wastewater Remediation System
            </p>
          </div>

          {/* Mobile menu toggle with dedicated touch target and clearance */}
          <div className="absolute right-0 top-0.5 md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-[#262a33] bg-[#f6e9dc] hover:bg-[#ebdccc] border border-[#d9c8b8] transition-colors flex items-center justify-center w-10 h-10"
              aria-label="Toggle Navigation"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Broadsheet Double Rule Navigation Ribbon */}
      <nav className="border-t-2 border-b border-[#262a33] bg-[#fff1e5]">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-center">
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2 py-1">
            {sections.map((sec) => {
              const isActive = activeSection === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => onNavigate(sec.id)}
                  className={`px-3 py-2 text-xs lg:text-sm font-sans font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'border-b-2 border-[#990f3d] text-[#990f3d] font-bold'
                      : 'text-[#33302e] hover:text-[#990f3d]'
                  }`}
                >
                  {sec.label}
                </button>
              );
            })}
          </div>

          <div className="md:hidden py-2 text-xs font-serif font-bold text-[#990f3d] uppercase flex items-center justify-between w-full">
            <span>Section: {sections.find((s) => s.id === activeSection)?.label || 'Overview'}</span>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-xs font-sans text-[#66605b] hover:text-[#1a1a1a] transition-colors"
            >
              {menuOpen ? 'Close ✕' : 'Browse Sections ▾'}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden border-t border-[#d9c8b8] bg-[#f6e9dc] px-4 py-3 space-y-1">
            {sections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => {
                  onNavigate(sec.id);
                  setMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2 text-sm ${
                  activeSection === sec.id
                    ? 'font-bold text-[#990f3d] bg-[#fff1e5]'
                    : 'text-[#262a33]'
                }`}
              >
                {sec.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};
