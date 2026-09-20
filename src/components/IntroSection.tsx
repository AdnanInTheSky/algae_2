import React from 'react';

export const IntroSection: React.FC = () => {
  return (
    <section id="introduction" className="py-16 md:py-20 border-b border-[#d9c8b8]">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Heading (Multi-level: H2) */}
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-3 pb-2 border-b border-[#262a33]">
          Introduction
        </h2>

        {/* Subheading (Multi-level: H3) */}
        <h3 className="font-serif text-xl sm:text-2xl text-[#990f3d] font-semibold mb-6">
          Compounding Crises: Unmanaged Plastic Waste and Sovereign Energy Dependence
        </h3>

        {/* Text Content */}
        <div className="space-y-6 text-base sm:text-lg text-[#262a33] font-serif leading-relaxed">
          <p>
            Bangladesh faces two compounding crises: unmanaged plastic waste and energy dependence. More than 3,000 tons of plastic waste are generated daily, of which only about 37% is formally collected; the remaining 63% is dumped or openly burned, sending roughly 87,000 tons per year into the Bay of Bengal and contributing to over 30,000 premature deaths annually from open burning.
          </p>
          <p>
            At the same time, the country imports 97% of its petroleum at a cost of $5–8 billion per year.
          </p>
          <p className="bg-[#f6e9dc] p-6 border-l-4 border-[#990f3d] text-[#1a1a1a] italic">
            This project proposes a hybrid plastic–algae system that converts non-recyclable plastic into usable fuel while remediating air and water pollution.
          </p>
        </div>

        {/* Supporting Stat Overview - Simple, clean, no tags */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-[#e8ded4]">
          <div>
            <div className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1a1a]">&gt;3,000 tons</div>
            <div className="text-xs text-[#66605b] font-sans mt-1">Daily plastic waste generated</div>
          </div>
          <div>
            <div className="font-serif text-2xl sm:text-3xl font-bold text-[#990f3d]">63%</div>
            <div className="text-xs text-[#66605b] font-sans mt-1">Unmanaged, dumped, or burned</div>
          </div>
          <div>
            <div className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1a1a]">87,000 tons</div>
            <div className="text-xs text-[#66605b] font-sans mt-1">Annually into Bay of Bengal</div>
          </div>
          <div>
            <div className="font-serif text-2xl sm:text-3xl font-bold text-[#0d7680]">97%</div>
            <div className="text-xs text-[#66605b] font-sans mt-1">Petroleum imported ($5–8B/yr)</div>
          </div>
        </div>
      </div>
    </section>
  );
};
