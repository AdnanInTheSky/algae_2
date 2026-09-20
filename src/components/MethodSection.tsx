import React from 'react';

export const MethodSection: React.FC = () => {
  return (
    <section id="method" className="py-16 md:py-20 border-b border-[#d9c8b8] bg-[#f6e9dc]/50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Heading (H2) */}
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-3 pb-2 border-b border-[#262a33]">
          Method
        </h2>

        {/* Subheading (H3) */}
        <h3 className="font-serif text-xl sm:text-2xl text-[#0d7680] font-semibold mb-6">
          Co-Pyrolysis Reactor Coupled with an Algal Photobioreactor
        </h3>

        {/* Text Content */}
        <div className="space-y-6 text-base sm:text-lg text-[#262a33] font-serif leading-relaxed">
          <p>
            The system couples a co-pyrolysis reactor with an algae bio-reactor. Non-recyclable plastic waste is blended with algal biomass and thermally decomposed in the absence of oxygen, producing a liquid bio-crude alongside gaseous and solid fractions.
          </p>
          <p>
            The algae unit serves a dual role: it captures CO₂ released during pyrolysis and treats nutrient-rich wastewater, with the resulting biomass recirculated as co-feedstock.
          </p>
          <p>
            Crude output is fractionated into diesel, gasoline and heavy oil. A final laboratory-scale prototype of the algae bio-reactor has been constructed, and a pilot plant of 0.2–0.5 tons per day is planned for the next phase.
          </p>
        </div>

        {/* Technical Subheading (H3) */}
        <div className="mt-10 pt-6 border-t border-[#d9c8b8]">
          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1a1a1a] mb-4">
            System Fractions & Process Integration
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-serif">
            <div className="bg-[#fff1e5] p-5 border border-[#d9c8b8]">
              <div className="font-bold text-base text-[#990f3d] mb-1">Liquid Bio-Crude</div>
              <p className="text-sm text-[#4d4845]">
                Thermally decomposed under anaerobic conditions and fractionated into diesel, gasoline, and heavy industrial fuel oil.
              </p>
            </div>

            <div className="bg-[#fff1e5] p-5 border border-[#d9c8b8]">
              <div className="font-bold text-base text-[#0d7680] mb-1">Dual-Role Algae Unit</div>
              <p className="text-sm text-[#4d4845]">
                Captures flue-gas CO₂ from pyrolysis and treats nutrient-rich wastewater, recirculating fresh biomass as co-feedstock.
              </p>
            </div>

            <div className="bg-[#fff1e5] p-5 border border-[#d9c8b8]">
              <div className="font-bold text-base text-[#262a33] mb-1">Scale & Validation</div>
              <p className="text-sm text-[#4d4845]">
                Final laboratory-scale prototype constructed. Pilot facility of 0.2–0.5 tons per day planned for subsequent deployment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
