import React, { useState } from 'react';
import { Volume2, VolumeX, ArrowRight, CheckCircle, ShieldAlert, Award, TrendingUp, Sparkles, AlertCircle } from 'lucide-react';
import { EDITORIAL_IMAGES } from '../constants';

interface HeroDossierProps {
  onNavigateTab: (tab: string) => void;
  onOpenBriefing: () => void;
  onOpenErrata: () => void;
}

export const HeroDossier: React.FC<HeroDossierProps> = ({
  onNavigateTab,
  onOpenBriefing,
  onOpenErrata,
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const toggleAudio = () => {
    setIsPlayingAudio(!isPlayingAudio);
  };

  return (
    <section className="border-b border-[#d9c8b8] pb-12" id="front-page-hero">
      <div className="max-w-7xl mx-auto px-4 pt-6">
        {/* Editorial Eyebrow & Metadata */}
        <div className="flex flex-wrap items-center justify-between border-b border-[#262a33] pb-2 mb-4 text-xs">
          <div className="flex items-center space-x-2">
            <span className="bg-[#990f3d] text-white px-2 py-0.5 font-bold uppercase tracking-wider text-[10px]">
              Special Report
            </span>
            <span className="font-serif font-semibold text-[#1a1a1a] uppercase tracking-wide">
              Bio-Refining & Sovereign Energy Transition
            </span>
          </div>

          <div className="flex items-center space-x-3 text-[#66605b] mt-2 sm:mt-0">
            <button
              onClick={toggleAudio}
              className="flex items-center gap-1.5 px-2 py-1 bg-[#f6e9dc] hover:bg-[#ebdccc] text-[#262a33] text-[11px] font-sans border border-[#d9c8b8] transition-colors cursor-pointer"
              title="Simulated Audio Article"
            >
              {isPlayingAudio ? (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-[#990f3d]" />
                  <span className="text-[#990f3d] font-semibold">Pause Audio Briefing (4:18)</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-[#0d7680]" />
                  <span>Listen to Article (4 min read)</span>
                </>
              )}
            </button>
            <span className="hidden md:inline text-[#d9c8b8]">|</span>
            <span className="text-[11px]">Peer-Reviewed Venture Dossier</span>
          </div>
        </div>

        {/* Audio player status bar if active */}
        {isPlayingAudio && (
          <div className="mb-6 p-3 bg-[#f6e9dc] border-l-4 border-[#990f3d] text-xs flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#990f3d] animate-ping"></span>
              <span className="font-serif italic text-[#262a33]">
                Now Narrating: "Closing the Loop: How Algae-Assisted Pyrolysis Tackles Bangladesh's 3,000-Ton Plastic Crisis and $8bn Oil Deficit"
              </span>
            </div>
            <span className="font-mono text-[11px] text-[#66605b]">Synthesized Voice Broadcast</span>
          </div>
        )}

        {/* Broadsheet 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Lead Story Column (8 cols) */}
          <div className="lg:col-span-8 lg:pr-6 lg:border-r border-[#d9c8b8]">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] leading-[1.12] font-black text-[#1a1a1a] tracking-tight mb-4">
              Closing the Loop: How Algae-Assisted Pyrolysis Tackles Bangladesh’s 3,000-Ton Plastic Crisis and $8bn Oil Deficit
            </h1>

            <p className="font-serif text-lg md:text-xl text-[#4d4845] leading-relaxed italic mb-6">
              With 87,000 tonnes of discarded polymers sweeping into the Bay of Bengal yearly and a 97% dependence on foreign oil, an indigenous bio-refining model proves bench-scale viability and readies a pilot plant to convert municipal refuse into domestic fuel and biochar.
            </p>

            <div className="flex flex-wrap items-center justify-between py-3 border-y border-[#e8ded4] mb-6 text-xs text-[#66605b]">
              <div className="flex items-center space-x-2">
                <span className="font-bold text-[#1a1a1a] font-sans">Syed Adnan Rahman</span>
                <span>&bull;</span>
                <span className="font-sans">Dhaka Bureau</span>
                <span>&bull;</span>
                <span className="font-mono">September 20, 2026</span>
              </div>
              <div className="flex items-center space-x-2 mt-1 sm:mt-0 font-mono text-[11px]">
                <span className="text-[#0d7680] font-bold">Tk 1.2M Seed Committed</span>
                <span>&bull;</span>
                <span>0.5 TPD Pilot</span>
              </div>
            </div>

            {/* FT Fast Read Box */}
            <div className="bg-[#f6e9dc] border-l-4 border-[#990f3d] p-4 mb-8">
              <div className="flex items-center justify-between mb-2">
                <h2 className="font-serif text-xs font-bold uppercase tracking-wider text-[#990f3d] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  FT Fast Read: Executive Core
                </h2>
                <span className="text-[10px] text-[#66605b] font-mono">1.65M Ton TAM</span>
              </div>
              <ul className="space-y-2 text-xs md:text-sm text-[#262a33]">
                <li className="flex items-start gap-2">
                  <span className="text-[#990f3d] font-bold mt-0.5">&bull;</span>
                  <span><strong>The Compounding Crisis:</strong> Bangladesh generates &gt;3,000 tons of plastic daily, with 63% uncollected, causing 30,000 premature deaths annually from open burning, alongside an annual $5–8 billion petroleum import bill.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#990f3d] font-bold mt-0.5">&bull;</span>
                  <span><strong>Closed-Loop Innovation:</strong> Coupling a co-pyrolysis reactor with an algae photobioreactor yields 60–65% crude oil, while capturing pyrolysis CO₂ and stripping 80–90% of nitrogen from textile wastewater.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#990f3d] font-bold mt-0.5">&bull;</span>
                  <span><strong>Commercial Validation:</strong> Tk 1.2 million initial seed funding secured to deploy an 18,000-litre/year pilot plant (0.2–0.5 TPD), targeting an addressable national market of $408–522 million.</span>
                </li>
              </ul>
            </div>

            {/* Lead Editorial Image with authentic FT Caption */}
            <div className="mb-6">
              <div className="relative overflow-hidden border border-[#d9c8b8] bg-[#e9decf]">
                <img
                  src={EDITORIAL_IMAGES.heroRefinery}
                  alt="Industrial bio-reactor facility in golden hour"
                  className="w-full h-72 sm:h-96 object-cover"
                />
                <div className="absolute top-2 left-2 bg-[#1a1a1a]/90 text-white text-[10px] font-mono uppercase px-2 py-0.5">
                  Figure 1.0 &bull; Closed-Loop Architecture
                </div>
              </div>
              <p className="text-xs text-[#66605b] mt-2 font-serif italic border-b border-[#e8ded4] pb-2">
                A modern co-pyrolysis unit coupled with an algal wastewater remediation scrubber. The closed-loop system recirculates harvested algal biomass as co-feedstock while fractionating bio-crude into high-value diesel and gasoline substitutes. Photograph: Bio-Energy Research Consortium / Unsplash.
              </p>
            </div>

            {/* Editorial Lead Copy with FT Dropcap */}
            <div className="space-y-4 text-sm md:text-base text-[#262a33] leading-relaxed font-serif">
              <p className="ft-dropcap">
                Bangladesh stands at the sharp intersection of two compounding developmental bottlenecks: unchecked municipal plastic waste and crippling fiscal exposure to imported fossil fuels. Every twenty-four hours, the nation generates in excess of 3,000 tons of solid plastic waste. Only 37% enters formal collection systems; the remaining 63%—nearly 1,900 tons each day—is dumped into fragile alluvial waterways or burned openly across peri-urban settlements.
              </p>
              <p>
                The human and ecological toll is staggering. More than 87,000 tons of non-biodegradable plastics are flushed into the Bay of Bengal each year, while uncontrolled open combustion releases lethal airborne dioxins, polycyclic aromatic hydrocarbons, and furans, contributing to over 30,000 premature respiratory and cardiovascular deaths annually across Bangladesh.
              </p>
              <p>
                Simultaneously, the sovereign balance sheet remains strained by an extreme energy deficit: the country relies on foreign refineries for 97% of its liquid petroleum requirements, draining between $5 billion and $8 billion of foreign currency reserves annually.
              </p>
              <p className="bg-[#f2dfce]/50 p-4 border-l-2 border-[#0d7680] text-sm italic">
                "The fundamental flaw of single-feedstock pyrolysis has been low yield and toxic gaseous effluents. By synthesizing waste plastic with microalgae cultures, we transform an environmental crisis into high-cetane sovereign fuel while simultaneously scrubbing industrial textile wastewater."
              </p>
            </div>

            {/* Quick Interactive Actions */}
            <div className="mt-8 pt-6 border-t border-[#d9c8b8] flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigateTab('method')}
                className="bg-[#262a33] hover:bg-[#990f3d] text-white text-xs font-sans font-bold uppercase tracking-wider px-4 py-2.5 flex items-center gap-2 transition-colors cursor-pointer"
                id="explore-tech-cta"
              >
                <span>Examine Technical Architecture</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigateTab('financials')}
                className="bg-[#f6e9dc] hover:bg-[#ecd5c0] text-[#262a33] text-xs font-sans font-bold uppercase tracking-wider px-4 py-2.5 border border-[#d9c8b8] flex items-center gap-2 transition-colors cursor-pointer"
                id="explore-calc-cta"
              >
                <span>Interactive Unit Economics (0.5 TPD)</span>
                <TrendingUp className="w-4 h-4 text-[#0d7680]" />
              </button>

              <button
                onClick={onOpenBriefing}
                className="text-xs font-sans font-semibold text-[#990f3d] hover:underline px-2 py-2 flex items-center gap-1 cursor-pointer"
              >
                <span>Read Full Briefing Memo</span>
              </button>
            </div>
          </div>

          {/* Right Column: Lex Opinion, Key Financial Data & Errata (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* The Lex Column Box */}
            <div className="border-t-4 border-[#1a1a1a] bg-[#f6e9dc] p-5">
              <div className="border-b border-[#262a33] pb-2 mb-3 flex items-center justify-between">
                <span className="font-serif font-black text-xl tracking-tight text-[#1a1a1a]">
                  The Lex Column
                </span>
                <span className="text-[10px] font-mono uppercase bg-[#262a33] text-white px-1.5 py-0.5">
                  Venture Analysis
                </span>
              </div>
              <h3 className="font-serif font-bold text-base text-[#1a1a1a] mb-2">
                Can Algae Turn Bangladesh’s Plastic Plague into Sovereign Energy?
              </h3>
              <p className="text-xs text-[#4d4845] font-serif leading-relaxed mb-3">
                Decarbonization in frontier industrial economies cannot mimic Western capital intensity. Bangladesh’s textile corridors consume vast thermal energy while discharging nitrogen-heavy effluents. Algae-Plast Fuel’s genius lies not in isolated pyrolysis, but in its thermal-biological symbiosis.
              </p>
              <div className="space-y-2 border-t border-[#d9c8b8] pt-3 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-[#66605b]">TAM Addressable Volume:</span>
                  <span className="font-mono font-bold text-[#1a1a1a]">1.65M tons/year</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#66605b]">Domestic Fuel Potential:</span>
                  <span className="font-mono font-bold text-[#0d7680]">350–450M Litres</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#66605b]">Addressable Market Value:</span>
                  <span className="font-mono font-bold text-[#1a1a1a]">$408–522 Million</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#66605b]">Phase 1 Corridor Demand:</span>
                  <span className="font-mono font-bold text-[#990f3d]">60–75M Litres/yr</span>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-[#d9c8b8]">
                <button
                  onClick={() => onNavigateTab('market')}
                  className="text-xs font-sans font-bold text-[#990f3d] hover:underline flex items-center justify-between w-full cursor-pointer"
                >
                  <span>Explore Market Breakdown</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Slide Errata & Auditor's Review Card */}
            <div className="border border-[#990f3d] bg-[#fff1e5] p-4 relative overflow-hidden">
              <div className="flex items-start gap-2 mb-2">
                <AlertCircle className="w-4 h-4 text-[#990f3d] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-[#990f3d]">
                    Presentation Deck Review Note
                  </h4>
                  <p className="text-[11px] text-[#66605b]">Document Errata & Unit Rectification</p>
                </div>
              </div>
              <p className="text-xs font-serif text-[#33302e] mb-3 leading-snug">
                The deck notes flagged an inconsistency: fuel revenue stated as <em>"Tk 1M"</em> alongside tipping fees in <em>"lacs"</em>, and a slide title typo <em>"FINANCIALS"</em>.
              </p>
              <div className="bg-[#f6e9dc] p-2.5 text-[11px] font-mono text-[#262a33] space-y-1 mb-3">
                <div className="text-[#0d7680] font-bold">&check; Reconciled: 10 Lacs (Tk 1.0M Fuel)</div>
                <div>+ 3 Lacs (Tipping) + 2 Lacs (Char/Gas) + 1 Lac (Carbon)</div>
                <div className="font-bold border-t border-[#d9c8b8] pt-1 text-[#1a1a1a]">= 16 Lacs = Tk 1.60 Million Total</div>
              </div>
              <button
                onClick={onOpenErrata}
                className="w-full text-center bg-[#990f3d] hover:bg-[#7e0c32] text-white text-xs py-1.5 font-bold transition-colors cursor-pointer"
                id="view-audit-breakdown-btn"
              >
                Inspect Audit & Unit Reconciliation
              </button>
            </div>

            {/* Key Performance Indicators Card */}
            <div className="border border-[#d9c8b8] bg-[#f6e9dc] p-4">
              <h3 className="font-serif font-bold text-xs uppercase tracking-wider text-[#1a1a1a] border-b border-[#d9c8b8] pb-1.5 mb-3 flex items-center justify-between">
                <span>Key Technical Metrics</span>
                <Award className="w-3.5 h-3.5 text-[#0d7680]" />
              </h3>

              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[#e8ded4] pb-2">
                  <div>
                    <div className="font-serif font-bold text-sm text-[#1a1a1a]">60% – 65%</div>
                    <div className="text-[11px] text-[#66605b]">Crude Bio-Oil Yield</div>
                  </div>
                  <span className="text-[10px] bg-[#0d7680]/15 text-[#0d7680] font-mono px-1.5 py-0.5 font-bold">
                    +15% vs Single Feed
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-[#e8ded4] pb-2">
                  <div>
                    <div className="font-serif font-bold text-sm text-[#1a1a1a]">80% – 90%</div>
                    <div className="text-[11px] text-[#66605b]">Nitrogen Stripping</div>
                  </div>
                  <span className="text-[10px] bg-[#0d7680]/15 text-[#0d7680] font-mono px-1.5 py-0.5 font-bold">
                    Wastewater Remediated
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-[#e8ded4] pb-2">
                  <div>
                    <div className="font-serif font-bold text-sm text-[#1a1a1a]">20% – 25%</div>
                    <div className="text-[11px] text-[#66605b]">Syngas Self-Heating</div>
                  </div>
                  <span className="text-[10px] bg-[#262a33]/10 text-[#262a33] font-mono px-1.5 py-0.5 font-bold">
                    Internal Energy
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-serif font-bold text-sm text-[#1a1a1a]">10% – 12%</div>
                    <div className="text-[11px] text-[#66605b]">Soil-Grade Biochar</div>
                  </div>
                  <span className="text-[10px] bg-[#262a33]/10 text-[#262a33] font-mono px-1.5 py-0.5 font-bold">
                    Zero Solid Waste
                  </span>
                </div>
              </div>
            </div>

            {/* Prototype to Pilot Status Card */}
            <div className="border-t-2 border-[#0d7680] bg-[#f6e9dc] p-4">
              <div className="text-xs font-serif font-bold uppercase tracking-wider text-[#0d7680] mb-1">
                Development Stage & Runway
              </div>
              <h4 className="font-serif font-bold text-sm text-[#1a1a1a] mb-2">
                Laboratory Validation Achieved &bull; Pilot Underway
              </h4>
              <p className="text-xs text-[#4d4845] font-serif leading-relaxed mb-3">
                A bench-scale algal photobioreactor is successfully operating in Dhaka. Seed capital of Tk 1.2 million is committed to build a 0.2–0.5 TPD skid-mounted pilot facility producing 18,000 litres annually.
              </p>
              <div className="w-full bg-[#e8ded4] h-2 mb-2">
                <div className="bg-[#0d7680] h-2 w-2/5"></div>
              </div>
              <div className="flex justify-between text-[10px] font-mono text-[#66605b]">
                <span>Lab Prototype (100%)</span>
                <span>0.5 TPD Pilot (40%)</span>
                <span>Phase 1 (Planning)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
