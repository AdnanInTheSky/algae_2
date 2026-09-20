import React from 'react';

export const DataDiscussionSection: React.FC = () => {
  return (
    <section id="data-and-discussion" className="py-16 md:py-20 border-b border-[#d9c8b8]">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Heading (H2) */}
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-3 pb-2 border-b border-[#262a33]">
          Data and Discussion
        </h2>

        {/* Subheading (H3) */}
        <h3 className="font-serif text-xl sm:text-2xl text-[#990f3d] font-semibold mb-6">
          Empirical Yields, Wastewater Stripping & Market Projections
        </h3>

        {/* Text Content */}
        <div className="space-y-6 text-base sm:text-lg text-[#262a33] font-serif leading-relaxed">
          <p>
            Co-pyrolysis yields 60–65% crude oil, 20–25% syngas and 10–12% biochar, with efficiency exceeding single-feedstock pyrolysis, while the algae stage achieves 80–90% nitrogen removal from wastewater.
          </p>
          <p>
            Market analysis indicates a total addressable volume of 1.65 million tons of plastic per year, equivalent to 350–450 million litres of fuel and $408–522 million in value; a Phase 1 service area covering Dhaka, Chittagong and Gazipur represents 60–75 million litres annually.
          </p>
          <p>
            A 0.5 TPD facility is projected to generate approximately Tk 1.6 million per year across fuel sales, tipping fees, carbon credits and by-products. Competing recyclers and informal pyrolysis units offer no comparable integration.
          </p>
        </div>

        {/* Subheading (H3): Empirical Metrics Table */}
        <div className="mt-10 pt-6 border-t border-[#d9c8b8]">
          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1a1a1a] mb-4">
            Summary Data & Facility Economics
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-sm font-serif border-collapse bg-[#f6e9dc]">
              <thead>
                <tr className="border-b-2 border-[#262a33] text-left">
                  <th className="p-3 text-[#1a1a1a]">Parameter / Stream</th>
                  <th className="p-3 text-right text-[#1a1a1a]">Measured / Projected Value</th>
                  <th className="p-3 text-left text-[#1a1a1a]">Benchmark Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#d9c8b8]">
                <tr>
                  <td className="p-3 font-semibold">Crude Bio-Oil Yield</td>
                  <td className="p-3 text-right font-bold text-[#0d7680]">60% – 65%</td>
                  <td className="p-3 text-xs text-[#4d4845]">Exceeds single-feedstock pyrolysis (&lt;50%)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Synthesis Gas (Syngas)</td>
                  <td className="p-3 text-right font-bold text-[#1a1a1a]">20% – 25%</td>
                  <td className="p-3 text-xs text-[#4d4845]">Recirculated for process self-heating</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Agricultural Biochar</td>
                  <td className="p-3 text-right font-bold text-[#1a1a1a]">10% – 12%</td>
                  <td className="p-3 text-xs text-[#4d4845]">Soil remediation and carbon sequestration</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Wastewater Nitrogen Removal</td>
                  <td className="p-3 text-right font-bold text-[#0d7680]">80% – 90%</td>
                  <td className="p-3 text-xs text-[#4d4845]">Industrial textile effluent polishing</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Total Addressable Volume (TAM)</td>
                  <td className="p-3 text-right font-bold text-[#990f3d]">1.65M tons/yr</td>
                  <td className="p-3 text-xs text-[#4d4845]">Equivalent to 350–450M L fuel ($408–522M)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Phase 1 Corridor (Dhaka, CTG, Gazipur)</td>
                  <td className="p-3 text-right font-bold text-[#1a1a1a]">60–75M litres/yr</td>
                  <td className="p-3 text-xs text-[#4d4845]">Primary industrial textile corridor</td>
                </tr>
                <tr className="bg-[#fff1e5] font-bold">
                  <td className="p-3 text-[#990f3d]">0.5 TPD Projected Annual Revenue</td>
                  <td className="p-3 text-right text-[#990f3d]">Tk 1.6 Million</td>
                  <td className="p-3 text-xs text-[#4d4845]">
                    Tk 1.0M (10 Lacs) fuel + 3 Lacs tipping + 2 Lacs char + 1 Lac carbon = 16 Lacs
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
