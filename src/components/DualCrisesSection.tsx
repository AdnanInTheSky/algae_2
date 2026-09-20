import React, { useState } from 'react';
import { AlertTriangle, Flame, Droplets, Fuel, Skull, ArrowRight } from 'lucide-react';
import { EDITORIAL_IMAGES } from '../constants';

interface DualCrisesProps {
  onNavigateTab: (tab: string) => void;
}

export const DualCrisesSection: React.FC<DualCrisesProps> = ({ onNavigateTab }) => {
  const [activeMetric, setActiveMetric] = useState<'waste' | 'energy'>('waste');

  return (
    <section className="py-12 border-b border-[#d9c8b8] bg-[#fff1e5]" id="compounding-crises-section">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="border-b-2 border-[#262a33] pb-3 mb-8">
          <div className="flex flex-wrap items-center justify-between">
            <div>
              <span className="font-serif font-bold text-xs uppercase tracking-widest text-[#990f3d]">
                Section I &bull; Macro Context & Problem Statement
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a1a] mt-1">
                The Compounding Crises: Toxic Polymer Waste & Sovereign Fuel Exposure
              </h2>
            </div>
            <div className="mt-2 sm:mt-0 flex gap-2">
              <button
                onClick={() => setActiveMetric('waste')}
                className={`text-xs px-3 py-1 font-sans font-bold cursor-pointer transition-colors ${
                  activeMetric === 'waste'
                    ? 'bg-[#990f3d] text-white'
                    : 'bg-[#f6e9dc] text-[#33302e] border border-[#d9c8b8]'
                }`}
              >
                Crisis 1: Unmanaged Plastic
              </button>
              <button
                onClick={() => setActiveMetric('energy')}
                className={`text-xs px-3 py-1 font-sans font-bold cursor-pointer transition-colors ${
                  activeMetric === 'energy'
                    ? 'bg-[#0d7680] text-white'
                    : 'bg-[#f6e9dc] text-[#33302e] border border-[#d9c8b8]'
                }`}
              >
                Crisis 2: 97% Fuel Import Deficit
              </button>
            </div>
          </div>
        </div>

        {/* Two-Column Broadsheet Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
          {/* Crisis 1 Card (6 cols) */}
          <div className="lg:col-span-6 bg-[#f6e9dc] border border-[#d9c8b8] p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#d9c8b8] pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Flame className="w-5 h-5 text-[#990f3d]" />
                  <h3 className="font-serif font-bold text-xl text-[#1a1a1a]">
                    Crisis 1: The Plastic Catastrophe
                  </h3>
                </div>
                <span className="text-xs font-mono font-bold bg-[#990f3d]/10 text-[#990f3d] px-2 py-0.5">
                  63% Uncollected
                </span>
              </div>

              <div className="space-y-4 font-serif text-sm text-[#262a33] leading-relaxed mb-6">
                <p>
                  Bangladesh produces more than <strong>3,000 tons of solid plastic waste daily</strong>. Municipal infrastructure in major metropolitan zones (Dhaka North, Dhaka South, Chittagong) formally captures only approximately <strong>37%</strong> of this volume.
                </p>
                <p>
                  The uncollected balance—roughly <strong>1,890 tons every single day</strong>—is dumped in open terrain, clogged into critical urban drainage canals, or burned in unauthorized open pits.
                </p>
              </div>

              {/* Data Callout Cards */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[#fff1e5] p-3 border border-[#d9c8b8]">
                  <div className="flex items-center gap-1 text-[#990f3d] mb-1">
                    <Droplets className="w-4 h-4" />
                    <span className="font-sans text-[11px] font-bold uppercase">Bay of Bengal Runoff</span>
                  </div>
                  <div className="font-serif font-black text-2xl text-[#1a1a1a]">~87,000</div>
                  <div className="text-[11px] text-[#66605b]">Metric tons washed to sea / year</div>
                </div>

                <div className="bg-[#fff1e5] p-3 border border-[#d9c8b8]">
                  <div className="flex items-center gap-1 text-[#990f3d] mb-1">
                    <Skull className="w-4 h-4" />
                    <span className="font-sans text-[11px] font-bold uppercase">Public Health Loss</span>
                  </div>
                  <div className="font-serif font-black text-2xl text-[#1a1a1a]">&gt;30,000</div>
                  <div className="text-[11px] text-[#66605b]">Premature deaths annually (open burning)</div>
                </div>
              </div>

              {/* Visual Breakdown Bar */}
              <div className="space-y-1.5 text-xs font-mono mb-4">
                <div className="flex justify-between text-[#4d4845]">
                  <span>Daily Plastic Fate: Formally Collected (37%)</span>
                  <span>Unmanaged Dumped / Burned (63%)</span>
                </div>
                <div className="w-full h-4 bg-[#e8ded4] flex overflow-hidden border border-[#d9c8b8]">
                  <div className="bg-[#0d7680] h-full w-[37%]" title="37% Formal Collection"></div>
                  <div className="bg-[#990f3d] h-full w-[63%]" title="63% Dumped & Open Burning"></div>
                </div>
                <div className="flex justify-between text-[10px] text-[#66605b]">
                  <span>~1,110 tons/day formal</span>
                  <span>~1,890 tons/day environmental contamination</span>
                </div>
              </div>
            </div>

            <div className="border-t border-[#d9c8b8] pt-4 text-xs text-[#66605b] italic">
              Sources: Department of Environment (DoE), World Bank Bangladesh Urban Solid Waste Briefs, peer-reviewed environmental health registries.
            </div>
          </div>

          {/* Crisis 2 Card (6 cols) */}
          <div className="lg:col-span-6 bg-[#f6e9dc] border border-[#d9c8b8] p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#d9c8b8] pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Fuel className="w-5 h-5 text-[#0d7680]" />
                  <h3 className="font-serif font-bold text-xl text-[#1a1a1a]">
                    Crisis 2: The $8bn Energy Dependency
                  </h3>
                </div>
                <span className="text-xs font-mono font-bold bg-[#0d7680]/10 text-[#0d7680] px-2 py-0.5">
                  97% Imported
                </span>
              </div>

              <div className="space-y-4 font-serif text-sm text-[#262a33] leading-relaxed mb-6">
                <p>
                  As an industrializing economy with expanding textile spinning, dyeing, logistics, and power demands, Bangladesh relies almost entirely on foreign petroleum.
                </p>
                <p>
                  The country imports <strong>97% of its total liquid petroleum requirements</strong>, generating an exorbitant annual fiscal outflow of <strong>$5 billion to $8 billion</strong>. This dependency leaves domestic industrial productivity vulnerable to Middle Eastern geopolitics and foreign exchange reserves.
                </p>
              </div>

              {/* Data Callout Cards */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[#fff1e5] p-3 border border-[#d9c8b8]">
                  <div className="flex items-center gap-1 text-[#0d7680] mb-1">
                    <Fuel className="w-4 h-4" />
                    <span className="font-sans text-[11px] font-bold uppercase">Petroleum Deficit</span>
                  </div>
                  <div className="font-serif font-black text-2xl text-[#1a1a1a]">$5B – $8B</div>
                  <div className="text-[11px] text-[#66605b]">Annual foreign exchange outflow</div>
                </div>

                <div className="bg-[#fff1e5] p-3 border border-[#d9c8b8]">
                  <div className="flex items-center gap-1 text-[#0d7680] mb-1">
                    <AlertTriangle className="w-4 h-4" />
                    <span className="font-sans text-[11px] font-bold uppercase">Sovereignty Ratio</span>
                  </div>
                  <div className="font-serif font-black text-2xl text-[#1a1a1a]">97%</div>
                  <div className="text-[11px] text-[#66605b]">Imported liquid petroleum dependency</div>
                </div>
              </div>

              {/* Visual Comparison Bar */}
              <div className="space-y-1.5 text-xs font-mono mb-4">
                <div className="flex justify-between text-[#4d4845]">
                  <span>Domestic Liquid Refining (3%)</span>
                  <span>Imported Petroleum Products (97%)</span>
                </div>
                <div className="w-full h-4 bg-[#e8ded4] flex overflow-hidden border border-[#d9c8b8]">
                  <div className="bg-[#1a1a1a] h-full w-[3%]" title="3% Domestic Supply"></div>
                  <div className="bg-[#0d7680] h-full w-[97%]" title="97% Foreign Imports"></div>
                </div>
                <div className="flex justify-between text-[10px] text-[#66605b]">
                  <span>Eastern Refinery Ltd baseline</span>
                  <span>Direct import via Bangladesh Petroleum Corp (BPC)</span>
                </div>
              </div>
            </div>

            <div className="border-t border-[#d9c8b8] pt-4 text-xs text-[#66605b] italic">
              Sources: Bangladesh Petroleum Corporation (BPC) Annual Trade Statistical Review & Bangladesh Bank Foreign Exchange Reserves Monitor.
            </div>
          </div>
        </div>

        {/* Synthesis Callout Banner */}
        <div className="bg-[#262a33] text-white p-6 border-l-4 border-[#990f3d]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#d9c8b8]">
                The Circular Synthesis
              </span>
              <h3 className="font-serif text-xl md:text-2xl font-bold">
                Converting the 63% Waste Stream into Low-Cost Domestic Fuel
              </h3>
              <p className="text-sm text-[#e8ded4] max-w-3xl font-serif">
                Rather than treating plastic waste as a municipal disposal liability and petroleum as an uncontrollable import necessity, Algae-Plast Fuel bridges both crises: turning unmanaged polyolefins into liquid fuel substitutes while using algae to purify textile wastewater and sequester CO₂.
              </p>
            </div>
            <button
              onClick={() => onNavigateTab('method')}
              className="shrink-0 bg-[#fff1e5] text-[#262a33] hover:bg-white text-xs font-sans font-bold uppercase tracking-wider px-5 py-3 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>View Technical Method</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
