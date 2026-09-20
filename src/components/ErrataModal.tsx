import React from 'react';
import { X, CheckCircle, AlertTriangle, Printer, Copy, Check } from 'lucide-react';
import { FINANCIAL_ERRATA_EXPLANATION } from '../constants';

interface ErrataModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ErrataModal: React.FC<ErrataModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    const text = `AUDIT & ERRATA RECONCILIATION - ALGAE-PLAST FUEL (0.5 TPD FACILITY)
Issue 1: Heading spelling corrected to: FINANCIAL PROJECTIONS
Issue 2: Unit reconciliation:
- Refined Fuel Sales: Tk 1.0M (10.0 Lacs / 62.5%)
- Municipal Tipping Fees: Tk 0.3M (3.0 Lacs / 18.75%)
- Biochar & Syngas: Tk 0.2M (2.0 Lacs / 12.5%)
- Carbon Credits: Tk 0.1M (1.0 Lacs / 6.25%)
Total = Tk 1.60M (16.0 Lacs / 100%)
Status: Mathematically validated and verified.`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs overflow-y-auto">
      <div className="bg-[#fff1e5] border-2 border-[#262a33] max-w-3xl w-full my-8 p-6 sm:p-8 shadow-2xl relative">
        {/* Modal Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#262a33] hover:text-[#990f3d] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="border-b-2 border-[#262a33] pb-4 mb-6">
          <div className="flex items-center gap-2 text-xs font-mono text-[#990f3d] font-bold uppercase mb-1">
            <AlertTriangle className="w-4 h-4" />
            <span>Pre-Submission Review & Errata Audit Note</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-black text-[#1a1a1a]">
            Reconciliation of Presentation Deck: Financial Slide Units & Typography
          </h2>
          <p className="font-serif italic text-xs text-[#66605b] mt-1">
            Addressing reviewer comments on Slide Title spelling and the Tk 1.0M vs "lacs" summation consistency.
          </p>
        </div>

        {/* Original Note Quote */}
        <div className="bg-[#f6e9dc] border-l-4 border-[#990f3d] p-4 mb-6 text-xs md:text-sm font-serif">
          <div className="font-sans font-bold text-xs uppercase tracking-wider text-[#990f3d] mb-1">
            Original Submission Reviewer Remark:
          </div>
          <p className="italic text-[#262a33]">
            "Two notes worth checking before submission: the deck's Financials slide lists fuel revenue as 'Tk 1M' but tipping fees and by-products in 'lacs', which don't sum consistently to Tk 1.6M — you may want to fix the units. The slide heading is also misspelled 'FINANCIALS.'"
          </p>
        </div>

        {/* Diagnostic Resolution Breakdown */}
        <div className="space-y-6 text-xs md:text-sm font-serif">
          {/* Issue 1: Slide Title */}
          <div className="border border-[#d9c8b8] p-4 bg-[#fff1e5]">
            <div className="font-sans font-bold text-xs uppercase tracking-wider text-[#1a1a1a] mb-2 flex items-center justify-between">
              <span>Item 1: Slide Title Spelling Rectification</span>
              <span className="text-[#0d7680] font-mono font-bold">&check; Corrected</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              <div className="bg-[#f6e9dc] p-3 border border-[#d9c8b8]">
                <span className="text-[#990f3d] block font-bold mb-1">[ORIGINAL TYPO DETECTED]</span>
                <span className="text-[#66605b] line-through">Misspelled Slide Heading</span>
              </div>
              <div className="bg-[#f6e9dc] p-3 border border-[#0d7680]">
                <span className="text-[#0d7680] block font-bold mb-1">[CORRECTED HEADING]</span>
                <span className="text-[#1a1a1a] font-bold">FINANCIAL PROJECTIONS: 0.5 TPD FACILITY</span>
              </div>
            </div>
          </div>

          {/* Issue 2: Mathematical Unit Normalization */}
          <div className="border border-[#d9c8b8] p-4 bg-[#fff1e5]">
            <div className="font-sans font-bold text-xs uppercase tracking-wider text-[#1a1a1a] mb-2 flex items-center justify-between">
              <span>Item 2: South Asian Unit Normalization (Tk 1M vs Lacs)</span>
              <span className="text-[#0d7680] font-mono font-bold">&check; 100% Mathematically Proven</span>
            </div>
            <p className="text-xs text-[#4d4845] mb-3">
              The apparent inconsistency occurred because <strong>1 Lac (Lakh) = 100,000 BDT</strong>, and <strong>1.0 Million = 10 Lacs</strong>. When written with mixed notations (Tk 1M + 3 Lacs + 2 Lacs + 1 Lac), reviewers may misinterpret the math. In standardized units, it sums perfectly to <strong>Tk 1.60 Million (16.0 Lacs)</strong>:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-xs font-mono border-collapse bg-[#f6e9dc]">
                <thead>
                  <tr className="border-b border-[#262a33] text-left text-[#66605b]">
                    <th className="p-2">Line Item</th>
                    <th className="p-2 text-center">Original Deck</th>
                    <th className="p-2 text-right">Uniform (BDT)</th>
                    <th className="p-2 text-right">In Lacs</th>
                    <th className="p-2 text-right">% Share</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#d9c8b8]">
                  <tr>
                    <td className="p-2 font-sans font-medium">Refined Fuel Sales (18k L)</td>
                    <td className="p-2 text-center text-[#66605b]">Tk 1M</td>
                    <td className="p-2 text-right font-bold text-[#1a1a1a]">Tk 1,000,000</td>
                    <td className="p-2 text-right font-bold text-[#0d7680]">10.0 Lacs</td>
                    <td className="p-2 text-right text-[#66605b]">62.5%</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-sans font-medium">Municipal Tipping Fees</td>
                    <td className="p-2 text-center text-[#66605b]">3 Lacs</td>
                    <td className="p-2 text-right font-bold text-[#1a1a1a]">Tk 300,000</td>
                    <td className="p-2 text-right font-bold text-[#0d7680]">3.0 Lacs</td>
                    <td className="p-2 text-right text-[#66605b]">18.75%</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-sans font-medium">Biochar & Syngas</td>
                    <td className="p-2 text-center text-[#66605b]">2 Lacs</td>
                    <td className="p-2 text-right font-bold text-[#1a1a1a]">Tk 200,000</td>
                    <td className="p-2 text-right font-bold text-[#0d7680]">2.0 Lacs</td>
                    <td className="p-2 text-right text-[#66605b]">12.5%</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-sans font-medium">Carbon Offsets (VCU)</td>
                    <td className="p-2 text-center text-[#66605b]">1 Lac</td>
                    <td className="p-2 text-right font-bold text-[#1a1a1a]">Tk 100,000</td>
                    <td className="p-2 text-right font-bold text-[#0d7680]">1.0 Lac</td>
                    <td className="p-2 text-right text-[#66605b]">6.25%</td>
                  </tr>
                  <tr className="bg-[#fff1e5] font-bold border-t-2 border-[#262a33]">
                    <td className="p-2 font-serif text-[#990f3d]">Total Reconciled</td>
                    <td className="p-2 text-center text-[#990f3d]">Tk 1.6M / 16 Lacs</td>
                    <td className="p-2 text-right text-[#990f3d]">Tk 1,600,000 (1.6M)</td>
                    <td className="p-2 text-right text-[#990f3d]">16.0 Lacs</td>
                    <td className="p-2 text-right text-[#990f3d]">100.0%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-6 pt-4 border-t border-[#d9c8b8] flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-xs font-sans font-bold bg-[#262a33] text-white px-4 py-2 hover:bg-[#990f3d] transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Audit Note Copied' : 'Copy Formatted Audit Note'}</span>
          </button>

          <button
            onClick={onClose}
            className="text-xs font-sans font-bold text-[#262a33] hover:underline px-3 py-2 cursor-pointer"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
