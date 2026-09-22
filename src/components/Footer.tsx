import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#262a33] text-[#e8ded4] border-t-4 border-[#990f3d] py-12 text-xs font-sans">
      <div className="max-w-4xl mx-auto px-4">
        {/* Top Masthead in Footer */}
        <div className="flex flex-wrap items-center justify-between border-b border-[#4d4845] pb-6 mb-6 gap-4">
          <div>
            <span className="font-serif font-black text-xl tracking-tight text-white uppercase">
              Algae-Plast Fuel
            </span>
            <p className="text-xs text-[#a69e96] font-serif mt-0.5">
              Closed-Loop Plastic-to-Fuel & Algal Bioreactor Portfolio &bull; Dhaka, Bangladesh
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#d9c8b8] hover:text-white border border-[#4d4845] px-3 py-1.5 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Section Navigation Links */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8 text-xs font-serif">
          <button
            onClick={() => onNavigate('introduction')}
            className="hover:text-white hover:underline text-[#d9c8b8] cursor-pointer"
          >
            Introduction
          </button>
          <button
            onClick={() => onNavigate('method')}
            className="hover:text-white hover:underline text-[#d9c8b8] cursor-pointer"
          >
            Method
          </button>
          <button
            onClick={() => onNavigate('data-and-discussion')}
            className="hover:text-white hover:underline text-[#d9c8b8] cursor-pointer"
          >
            Data and Discussion
          </button>
          <button
            onClick={() => onNavigate('conclusion')}
            className="hover:text-white hover:underline text-[#d9c8b8] cursor-pointer"
          >
            Conclusion
          </button>
          <button
            onClick={() => onNavigate('proto-1-algae')}
            className="hover:text-white hover:underline text-[#d9c8b8] cursor-pointer"
          >
            Proto 1: Algae System
          </button>
          <button
            onClick={() => onNavigate('proto-2-incubator')}
            className="hover:text-white hover:underline text-[#d9c8b8] cursor-pointer"
          >
            Proto 2: Stainless Incubator
          </button>
          <button
            onClick={() => onNavigate('our-team')}
            className="hover:text-white hover:underline text-[#d9c8b8] cursor-pointer"
          >
            Our Team
          </button>
          <button
            onClick={() => onNavigate('references')}
            className="hover:text-white hover:underline text-[#d9c8b8] cursor-pointer"
          >
            References
          </button>
          <button
            onClick={() => onNavigate('contact-us')}
            className="hover:text-white hover:underline text-[#d9c8b8] cursor-pointer"
          >
            Contact Us
          </button>
        </div>

        {/* Disclaimers & Copyright */}
        <div className="border-t border-[#4d4845] pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#a69e96] gap-2 font-serif">
          <span>
            Financial Times Editorial Aesthetic &bull; Research & Venture Portfolio by Syed Adnan Rahman
          </span>
          <span>&copy; {new Date().getFullYear()} Algae-Plast Fuel. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};
