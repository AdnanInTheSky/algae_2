import React from 'react';

export const Proto1AlgaeSection: React.FC = () => {
  const imageUrl = 'https://res.cloudinary.com/ynizdpgn/image/upload/v1789940654/Screenshot_2026-09-21_034342_nlbo4b.png';

  return (
    <section id="proto-1-algae" className="py-16 md:py-20 border-b border-[#d9c8b8]">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Heading (H2) */}
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-3 pb-2 border-b border-[#262a33]">
          Prototype 1: Algae Production System
        </h2>

        {/* Subheading (H3) */}
        <h3 className="font-serif text-xl sm:text-2xl text-[#0d7680] font-semibold mb-6">
          Laboratory-Scale Photobioreactor & Wastewater Remediation System
        </h3>

        {/* Descriptive Text */}
        <div className="space-y-4 text-base sm:text-lg text-[#262a33] font-serif leading-relaxed mb-8">
          <p>
            The final laboratory-scale prototype of the algae bio-reactor captures pyrolysis emissions and treats nutrient-rich wastewater in a continuous biological loop. Harvested algal biomass is subsequently dried and recirculated into the co-pyrolysis chamber as an organic hydrogen donor.
          </p>
        </div>

        {/* Prototype 1 Image Card */}
        <div className="border border-[#262a33] bg-[#fff1e5] p-2 sm:p-3 shadow-sm mb-4">
          <div className="relative overflow-hidden bg-[#1a1a1a]">
            <img
              src={imageUrl}
              alt="Prototype 1: Algae production system diagram and laboratory setup"
              className="w-full h-auto max-h-[550px] object-contain mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
