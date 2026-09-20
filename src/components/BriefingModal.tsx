import React from 'react';
import { X, Printer, Download, Bookmark, FileText } from 'lucide-react';

interface BriefingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BriefingModal: React.FC<BriefingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs overflow-y-auto">
      <div className="bg-[#fff1e5] border-2 border-[#262a33] max-w-4xl w-full my-8 p-6 sm:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        {/* Modal Close */}
        <div className="flex items-center justify-between border-b-2 border-[#262a33] pb-4 mb-6">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#990f3d] font-bold">
              Confidential Venture Dossier &bull; Memorandum No. BD-2026-APF
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-black text-[#1a1a1a]">
              Algae-Plast Fuel: Closed-Loop Sovereign Energy Briefing
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 border border-[#d9c8b8] bg-[#f6e9dc] hover:bg-[#ebdccc] text-[#262a33] cursor-pointer"
              title="Print Memorandum"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 border border-[#d9c8b8] bg-[#f6e9dc] hover:text-[#990f3d] text-[#262a33] cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Document Body */}
        <div className="space-y-6 font-serif text-sm md:text-base text-[#262a33] leading-relaxed">
          {/* Metadata banner */}
          <div className="bg-[#f6e9dc] p-4 border border-[#d9c8b8] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
            <div>
              <span className="text-[#66605b] block">Author & Principal:</span>
              <span className="font-bold text-[#1a1a1a]">Syed Adnan Rahman</span>
            </div>
            <div>
              <span className="text-[#66605b] block">Initial Seed Funding:</span>
              <span className="font-bold text-[#0d7680]">Tk 1.2M Secured</span>
            </div>
            <div>
              <span className="text-[#66605b] block">Next Phase Target:</span>
              <span className="font-bold text-[#1a1a1a]">18,000 Litres/yr (0.5 TPD)</span>
            </div>
            <div>
              <span className="text-[#66605b] block">Total Addressable Market:</span>
              <span className="font-bold text-[#990f3d]">$408M – $522M TAM</span>
            </div>
          </div>

          <div>
            <h3 className="font-serif font-bold text-lg text-[#1a1a1a] border-b border-[#d9c8b8] pb-1 mb-2">
              1. Executive Summary & Macro Thesis
            </h3>
            <p className="mb-2">
              Bangladesh faces two compounding crises: unmanaged plastic waste and energy dependence. More than <strong>3,000 tons of plastic waste are generated daily</strong>, of which only about <strong>37% is formally collected</strong>. The remaining <strong>63%</strong> is dumped into rivers or openly burned, sending roughly <strong>87,000 tons per year into the Bay of Bengal</strong> and contributing to <strong>over 30,000 premature deaths annually</strong> from open burning.
            </p>
            <p>
              At the same time, the country imports <strong>97% of its petroleum</strong> at an annual cost of <strong>$5–8 billion</strong>. This project proposes a hybrid plastic–algae system that converts non-recyclable plastic into usable fuel while remediating air and water pollution.
            </p>
          </div>

          <div>
            <h3 className="font-serif font-bold text-lg text-[#1a1a1a] border-b border-[#d9c8b8] pb-1 mb-2">
              2. Technical Method & Biological Integration
            </h3>
            <p className="mb-2">
              The system couples a <strong>co-pyrolysis reactor with an algae bio-reactor</strong>. Non-recyclable plastic waste is blended with algal biomass and thermally decomposed in the absence of oxygen, producing a liquid bio-crude alongside gaseous and solid fractions.
            </p>
            <p className="mb-2">
              The algae unit serves a dual role: it <strong>captures CO₂ released during pyrolysis</strong> and <strong>treats nutrient-rich wastewater</strong>, with the resulting biomass recirculated as co-feedstock. Crude output is fractionated into diesel, gasoline, and heavy oil.
            </p>
            <p>
              A <strong>final laboratory-scale prototype</strong> of the algae bio-reactor has been constructed, and a <strong>pilot plant of 0.2–0.5 tons per day</strong> is planned for the next phase.
            </p>
          </div>

          <div>
            <h3 className="font-serif font-bold text-lg text-[#1a1a1a] border-b border-[#d9c8b8] pb-1 mb-2">
              3. Empirical Performance & Comparative Rigor
            </h3>
            <p className="mb-2">
              Co-pyrolysis yields <strong>60–65% crude oil, 20–25% syngas, and 10–12% biochar</strong>, with efficiency exceeding single-feedstock pyrolysis, while the algae stage achieves <strong>80–90% nitrogen removal</strong> from wastewater.
            </p>
            <p className="mb-2">
              Market analysis indicates a total addressable volume of <strong>1.65 million tons of plastic per year</strong>, equivalent to <strong>350–450 million litres of fuel</strong> and <strong>$408–522 million in value</strong>; a Phase 1 service area covering <strong>Dhaka, Chittagong, and Gazipur</strong> represents <strong>60–75 million litres annually</strong>.
            </p>
            <p>
              A <strong>0.5 TPD facility is projected to generate approximately Tk 1.6 million per year</strong> across fuel sales, tipping fees, carbon credits, and by-products. Competing recyclers and informal pyrolysis units offer no comparable integration.
            </p>
          </div>

          <div>
            <h3 className="font-serif font-bold text-lg text-[#1a1a1a] border-b border-[#d9c8b8] pb-1 mb-2">
              4. Commercial Offtake, Capital & Scaled Trajectory
            </h3>
            <p className="mb-2">
              Algae-Plast Fuel demonstrates that plastic-to-fuel conversion, CO₂ capture, and wastewater treatment can be integrated into a single closed-loop system suited to Bangladeshi conditions. The approach simultaneously diverts waste from landfills and waterways, reduces emissions relative to open burning, and substitutes domestically produced fuel for imported petroleum.
            </p>
            <p>
              Multiple revenue streams and prospective long-term contracts with <strong>city corporations, textile industries, and the Bangladesh Petroleum Corporation (BPC)</strong> support commercial viability. With <strong>initial funding of Tk 1.2 million secured</strong> and a core team in place, the next stage targets a pilot plant producing <strong>18,000 litres of fuel annually</strong> before nationwide scaling.
            </p>
          </div>

          {/* Errata reconciliation footnote */}
          <div className="bg-[#f6e9dc] p-4 border border-[#990f3d] text-xs font-serif">
            <div className="font-sans font-bold text-[#990f3d] uppercase mb-1">
              Audit Note: Financial Units Normalization
            </div>
            <p className="text-[#33302e]">
              In the preliminary deck review, fuel revenue was stated as "Tk 1M" and tipping fees / by-products in "lacs". As verified by our audit: 1 Lac = Tk 100,000. Fuel (Tk 1.0M = 10 Lacs) + Tipping (3 Lacs) + By-products (2 Lacs) + Carbon (1 Lac) = 16 Lacs = <strong>Tk 1.60 Million</strong> exactly.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t-2 border-[#262a33] flex items-center justify-between text-xs text-[#66605b]">
          <span>Financial Times-Style Venture Dossier &bull; Bangladesh Bio-Energy</span>
          <button
            onClick={onClose}
            className="bg-[#262a33] text-white px-4 py-2 font-sans font-bold uppercase hover:bg-[#990f3d] transition-colors cursor-pointer"
          >
            Close Memorandum
          </button>
        </div>
      </div>
    </div>
  );
};
