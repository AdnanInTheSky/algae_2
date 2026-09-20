import React from 'react';
import { Building2, Factory, Landmark, Handshake, CheckCircle2, Milestone, ArrowRight } from 'lucide-react';
import { PARTNERSHIPS_DATA } from '../constants';

interface PartnershipsSectionProps {
  onOpenBriefing: () => void;
}

export const PartnershipsSection: React.FC<PartnershipsSectionProps> = ({ onOpenBriefing }) => {
  return (
    <section className="py-12 border-b border-[#d9c8b8] bg-[#fff1e5]" id="partnerships-and-team-section">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="border-b-2 border-[#262a33] pb-3 mb-8">
          <div className="flex flex-wrap items-center justify-between">
            <div>
              <span className="font-serif font-bold text-xs uppercase tracking-widest text-[#990f3d]">
                Section VI &bull; Offtake Structure, Capital & Roadmap
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a1a] mt-1">
                Commercial Offtake, Strategic Partners & Pilot Scaling
              </h2>
            </div>
            <span className="text-xs font-mono font-bold bg-[#0d7680] text-white px-3 py-1 mt-2 sm:mt-0">
              Tk 1.2M Initial Funding Secured
            </span>
          </div>
        </div>

        {/* Stakeholder Offtake Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {PARTNERSHIPS_DATA.map((partner, pIdx) => (
            <div key={pIdx} className="bg-[#f6e9dc] border border-[#d9c8b8] p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-[#d9c8b8] pb-3 mb-3">
                  <span className="text-[10px] font-mono uppercase bg-[#262a33] text-white px-2 py-0.5">
                    {partner.category} Offtake
                  </span>
                  <span className="text-xs font-mono font-bold text-[#0d7680]">
                    {partner.status}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  {partner.category === 'Municipal' ? (
                    <Building2 className="w-5 h-5 text-[#990f3d] shrink-0" />
                  ) : partner.category === 'Industrial' ? (
                    <Factory className="w-5 h-5 text-[#0d7680] shrink-0" />
                  ) : (
                    <Landmark className="w-5 h-5 text-[#262a33] shrink-0" />
                  )}
                  <h3 className="font-serif font-bold text-base text-[#1a1a1a] leading-tight">
                    {partner.name}
                  </h3>
                </div>

                <p className="font-serif text-xs text-[#4d4845] leading-relaxed mb-4">
                  {partner.description}
                </p>
              </div>

              <div className="bg-[#fff1e5] p-3 border border-[#d9c8b8] text-xs">
                <span className="font-bold text-[#1a1a1a] block font-sans mb-0.5">Strategic Synergy:</span>
                <span className="text-[#66605b] font-serif">{partner.strategicValue}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Roadmap from Lab to Nationwide Scaling */}
        <div className="bg-[#262a33] text-white p-6 lg:p-8 mb-10">
          <div className="border-b border-[#4d4845] pb-3 mb-6 flex flex-wrap items-center justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#d9c8b8]">
                Milestone Execution Matrix
              </span>
              <h3 className="font-serif text-2xl font-bold">
                From Laboratory Prototype to Nationwide Commercial Deployment
              </h3>
            </div>
            <span className="text-xs font-mono text-[#0d7680] font-bold mt-1 sm:mt-0">
              Core Engineering Team in Place (Dhaka)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Stage 1 */}
            <div className="bg-[#1a1a1a] p-4 border-t-2 border-[#0d7680]">
              <div className="text-[10px] font-mono text-[#0d7680] font-bold mb-1">
                COMPLETED &bull; BENCH SCALE
              </div>
              <h4 className="font-serif font-bold text-base text-white mb-2">
                Laboratory Prototype
              </h4>
              <p className="text-xs text-[#a69e96] font-serif leading-relaxed mb-3">
                Fabrication of initial photobioreactor test unit. Validated 60–65% crude bio-oil yields, 80–90% wastewater nitrogen removal, and syngas recirculation.
              </p>
              <div className="text-[11px] font-mono text-[#0d7680] font-bold">
                &check; 100% Bench Verified
              </div>
            </div>

            {/* Stage 2 */}
            <div className="bg-[#1a1a1a] p-4 border-t-2 border-[#990f3d]">
              <div className="text-[10px] font-mono text-[#990f3d] font-bold mb-1">
                ACTIVE STAGE &bull; TK 1.2M SEED
              </div>
              <h4 className="font-serif font-bold text-base text-white mb-2">
                0.2–0.5 TPD Pilot Plant
              </h4>
              <p className="text-xs text-[#a69e96] font-serif leading-relaxed mb-3">
                Deployment of skid-mounted pilot facility in Gazipur. Target annual production of <strong>18,000 litres of fuel</strong> to supply industrial partner boilers.
              </p>
              <div className="text-[11px] font-mono text-[#990f3d] font-bold">
                &bull; Funding Secured (Tk 1.2M)
              </div>
            </div>

            {/* Stage 3 */}
            <div className="bg-[#1a1a1a] p-4 border-t-2 border-[#d9c8b8]">
              <div className="text-[10px] font-mono text-[#d9c8b8] font-bold mb-1">
                PHASE 1 EXPANSION
              </div>
              <h4 className="font-serif font-bold text-base text-white mb-2">
                Regional Hubs (Dhaka-CTG)
              </h4>
              <p className="text-xs text-[#a69e96] font-serif leading-relaxed mb-3">
                Establishment of 5.0 to 10.0 TPD commercial facilities servicing Dhaka, Chittagong, and Gazipur, targeting 60–75 million litres annually.
              </p>
              <div className="text-[11px] font-mono text-[#a69e96]">
                Target: Q2 2027
              </div>
            </div>

            {/* Stage 4 */}
            <div className="bg-[#1a1a1a] p-4 border-t-2 border-[#d9c8b8]">
              <div className="text-[10px] font-mono text-[#d9c8b8] font-bold mb-1">
                NATIONAL SCALE
              </div>
              <h4 className="font-serif font-bold text-base text-white mb-2">
                Sovereign Fuel Grid
              </h4>
              <p className="text-xs text-[#a69e96] font-serif leading-relaxed mb-3">
                Nationwide network tapping 1.65 million tons of uncollected plastic annually to deliver 350–450 million litres of domestic petroleum substitute.
              </p>
              <div className="text-[11px] font-mono text-[#a69e96]">
                TAM: $522M Value
              </div>
            </div>
          </div>
        </div>

        {/* Investor Briefing Callout */}
        <div className="border border-[#262a33] bg-[#f6e9dc] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-[#262a33] text-white p-3 hidden sm:block">
              <Handshake className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-[#1a1a1a]">
                Access the Full Algae-Plast Investment Dossier & Pitch Memorandum
              </h3>
              <p className="text-xs font-serif text-[#66605b]">
                Complete with audited techno-economic models, slide errata reconciliation, and engineering specifications.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenBriefing}
            className="shrink-0 bg-[#990f3d] hover:bg-[#7e0c32] text-white text-xs font-sans font-bold uppercase tracking-wider px-5 py-3 transition-colors flex items-center gap-2 cursor-pointer"
          >
            <span>Open Executive Briefing</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
