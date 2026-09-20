import React, { useState } from 'react';
import { MapPin, Globe, Compass, ArrowUpRight, TrendingUp, Layers, Check } from 'lucide-react';

export const MarketAnalysisSection: React.FC = () => {
  const [activeGeoView, setActiveGeoView] = useState<'tam' | 'phase1'>('phase1');

  return (
    <section className="py-12 border-b border-[#d9c8b8] bg-[#f6e9dc]" id="market-analysis-section">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="border-b-2 border-[#262a33] pb-3 mb-8">
          <div className="flex flex-wrap items-center justify-between">
            <div>
              <span className="font-serif font-bold text-xs uppercase tracking-widest text-[#0d7680]">
                Section V &bull; Macro Opportunity & Geographical Footprint
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a1a] mt-1">
                Market Analysis: $522M Addressable Scale & Industrial Corridors
              </h2>
            </div>
            <div className="flex gap-2 mt-2 sm:mt-0">
              <button
                onClick={() => setActiveGeoView('phase1')}
                className={`text-xs px-3 py-1 font-sans font-bold cursor-pointer transition-colors ${
                  activeGeoView === 'phase1'
                    ? 'bg-[#262a33] text-white'
                    : 'bg-[#fff1e5] text-[#33302e] border border-[#d9c8b8]'
                }`}
              >
                Phase 1 Corridor (Dhaka-CTG-Gazipur)
              </button>
              <button
                onClick={() => setActiveGeoView('tam')}
                className={`text-xs px-3 py-1 font-sans font-bold cursor-pointer transition-colors ${
                  activeGeoView === 'tam'
                    ? 'bg-[#262a33] text-white'
                    : 'bg-[#fff1e5] text-[#33302e] border border-[#d9c8b8]'
                }`}
              >
                Total Addressable Market (TAM)
              </button>
            </div>
          </div>
        </div>

        {/* Big Macro Metric Broadsheet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-[#fff1e5] border border-[#d9c8b8] p-5">
            <div className="text-[11px] font-mono text-[#66605b] uppercase mb-1">
              Total Addressable Plastic Volume
            </div>
            <div className="font-serif text-3xl sm:text-4xl font-black text-[#1a1a1a]">
              1.65 Million
            </div>
            <div className="text-xs font-mono text-[#990f3d] mt-1 font-bold">
              Tons of Waste Plastic / Year
            </div>
            <p className="text-xs text-[#66605b] font-serif mt-3 border-t border-[#e8ded4] pt-2">
              Aggregated across municipal, industrial, packaging, and commercial waste streams throughout Bangladesh.
            </p>
          </div>

          <div className="bg-[#fff1e5] border border-[#d9c8b8] p-5">
            <div className="text-[11px] font-mono text-[#66605b] uppercase mb-1">
              National Fuel Yield Potential
            </div>
            <div className="font-serif text-3xl sm:text-4xl font-black text-[#0d7680]">
              350 – 450M
            </div>
            <div className="text-xs font-mono text-[#0d7680] mt-1 font-bold">
              Litres of Refined Liquid Fuel / Year
            </div>
            <p className="text-xs text-[#66605b] font-serif mt-3 border-t border-[#e8ded4] pt-2">
              Sufficient to replace approximately 6% to 8% of the country’s high-cost imported liquid petroleum distillate.
            </p>
          </div>

          <div className="bg-[#fff1e5] border border-[#d9c8b8] p-5">
            <div className="text-[11px] font-mono text-[#66605b] uppercase mb-1">
              Gross Addressable Market Value
            </div>
            <div className="font-serif text-3xl sm:text-4xl font-black text-[#990f3d]">
              $408M – $522M
            </div>
            <div className="text-xs font-mono text-[#990f3d] mt-1 font-bold">
              Annual Economic Opportunity
            </div>
            <p className="text-xs text-[#66605b] font-serif mt-3 border-t border-[#e8ded4] pt-2">
              Based on domestic diesel equivalent pricing ($1.05–$1.20/L) combined with gate fees and carbon credit offsets.
            </p>
          </div>
        </div>

        {/* Phase 1 Corridor vs TAM Comparison */}
        <div className="bg-[#fff1e5] border border-[#262a33] p-6 lg:p-8 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#990f3d]" />
                <h3 className="font-serif font-bold text-2xl text-[#1a1a1a]">
                  Phase 1 Priority Corridor: Dhaka, Chittagong & Gazipur
                </h3>
              </div>

              <p className="font-serif text-sm md:text-base text-[#262a33] leading-relaxed">
                Rather than deploying across dispersed rural zones, Phase 1 deliberately concentrates on Bangladesh’s primary industrial spine: <strong>Dhaka, Chittagong, and Gazipur</strong>.
              </p>

              <p className="font-serif text-sm text-[#4d4845] leading-relaxed">
                This dense triangle accounts for over 70% of the nation’s ready-made garment (RMG) factories and chemical wet-processing mills. By situating regional processing hubs here, Algae-Plast achieves:
              </p>

              <div className="space-y-2 text-xs md:text-sm font-sans text-[#33302e]">
                <div className="flex items-start gap-2 bg-[#f6e9dc] p-2.5 border border-[#d9c8b8]">
                  <Check className="w-4 h-4 text-[#0d7680] shrink-0 mt-0.5" />
                  <span><strong>Zero-Distance Effluent Supply:</strong> Textile dyeing plants generate millions of litres of nitrogen-rich wastewater daily, supplying the photobioreactors on-site.</span>
                </div>
                <div className="flex items-start gap-2 bg-[#f6e9dc] p-2.5 border border-[#d9c8b8]">
                  <Check className="w-4 h-4 text-[#0d7680] shrink-0 mt-0.5" />
                  <span><strong>Direct Industrial Thermal Offtake:</strong> Textile steam boilers and generators require steady fuel supplies, absorbing the 60–75 million litres Phase 1 output without complex retail logistics.</span>
                </div>
                <div className="flex items-start gap-2 bg-[#f6e9dc] p-2.5 border border-[#d9c8b8]">
                  <Check className="w-4 h-4 text-[#0d7680] shrink-0 mt-0.5" />
                  <span><strong>Port Logistics Hub (Chittagong):</strong> Intercepts coastal plastic flotsam and maritime discharge directly before reaching the Bay of Bengal.</span>
                </div>
              </div>
            </div>

            {/* Right Metric Card (5 cols) */}
            <div className="lg:col-span-5 bg-[#f6e9dc] border-2 border-[#262a33] p-6 space-y-4">
              <div className="border-b border-[#d9c8b8] pb-3">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#66605b]">
                  Phase 1 Service Area Target
                </span>
                <h4 className="font-serif font-bold text-xl text-[#1a1a1a]">
                  Dhaka &bull; Gazipur &bull; Chittagong
                </h4>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-[#e8ded4] pb-2">
                  <span className="text-xs text-[#66605b] font-sans">Annual Fuel Demand in Zone:</span>
                  <span className="font-mono font-bold text-base text-[#990f3d]">60 – 75M Litres</span>
                </div>

                <div className="flex justify-between items-center border-b border-[#e8ded4] pb-2">
                  <span className="text-xs text-[#66605b] font-sans">Phase 1 Plastic Diversion:</span>
                  <span className="font-mono font-bold text-sm text-[#1a1a1a]">~280,000 Tons/yr</span>
                </div>

                <div className="flex justify-between items-center border-b border-[#e8ded4] pb-2">
                  <span className="text-xs text-[#66605b] font-sans">Bay of Bengal Flotsam Reduction:</span>
                  <span className="font-mono font-bold text-sm text-[#0d7680]">~42% Avoidance</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-xs text-[#66605b] font-sans">Pilot Plant Target (Initial):</span>
                  <span className="font-mono font-bold text-sm text-[#262a33]">18,000 Litres/yr</span>
                </div>
              </div>

              <div className="p-3 bg-[#fff1e5] border border-[#d9c8b8] text-xs font-mono text-[#262a33]">
                <div className="font-bold text-[#0d7680] mb-1">&bull; Initial Seed Funding: Tk 1.2M</div>
                <div>Designated for 0.2–0.5 TPD skid fabrication and first 18,000L run.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
