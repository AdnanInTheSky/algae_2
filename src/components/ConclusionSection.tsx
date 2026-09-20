import React from 'react';

export const ConclusionSection: React.FC = () => {
  return (
    <section id="conclusion" className="py-16 md:py-20 border-b border-[#d9c8b8] bg-[#f6e9dc]/50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Heading (H2) */}
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-3 pb-2 border-b border-[#262a33]">
          Conclusion
        </h2>

        {/* Subheading (H3) */}
        <h3 className="font-serif text-xl sm:text-2xl text-[#0d7680] font-semibold mb-6">
          Closed-Loop Integration Suited to Bangladeshi Conditions
        </h3>

        {/* Text Content */}
        <div className="space-y-6 text-base sm:text-lg text-[#262a33] font-serif leading-relaxed">
          <p>
            Algae-Plast Fuel demonstrates that plastic-to-fuel conversion, CO₂ capture and wastewater treatment can be integrated into a single closed-loop system suited to Bangladeshi conditions.
          </p>
          <p>
            The approach simultaneously diverts waste from landfills and waterways, reduces emissions relative to open burning, and substitutes domestically produced fuel for imported petroleum.
          </p>
          <p>
            Multiple revenue streams and prospective long-term contracts with city corporations, textile industries and the Bangladesh Petroleum Corporation support commercial viability.
          </p>
          <p className="bg-[#fff1e5] p-6 border-l-4 border-[#0d7680] text-[#1a1a1a] font-semibold">
            With initial funding of Tk 1.2 million secured and a core team in place, the next stage targets a pilot plant producing 18,000 litres of fuel annually before nationwide scaling.
          </p>
        </div>

        {/* Commercial Offtake Overview (H3) */}
        <div className="mt-10 pt-6 border-t border-[#d9c8b8]">
          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1a1a1a] mb-4">
            Prospective Commercial Offtake Partners
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-serif">
            <div className="bg-[#fff1e5] p-5 border border-[#d9c8b8]">
              <div className="font-bold text-base text-[#1a1a1a] mb-1">City Corporations</div>
              <p className="text-sm text-[#4d4845]">
                Feedstock diversion from municipal waste streams in Dhaka and Gazipur, reducing landfill leachate and illegal open burning.
              </p>
            </div>

            <div className="bg-[#fff1e5] p-5 border border-[#d9c8b8]">
              <div className="font-bold text-base text-[#1a1a1a] mb-1">Textile Industries</div>
              <p className="text-sm text-[#4d4845]">
                On-site treatment of nitrogen-rich dyeing effluent paired with thermal boiler offtake for process steam generation.
              </p>
            </div>

            <div className="bg-[#fff1e5] p-5 border border-[#d9c8b8]">
              <div className="font-bold text-base text-[#1a1a1a] mb-1">Bangladesh Petroleum Corp</div>
              <p className="text-sm text-[#4d4845]">
                Bulk fuel blending and substitution for imported liquid distillates, bolstering national foreign exchange resilience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
