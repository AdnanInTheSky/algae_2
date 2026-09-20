import React, { useState } from 'react';
import { SYSTEM_STEPS, EDITORIAL_IMAGES } from '../constants';
import { Layers, RefreshCw, Flame, Droplets, CheckCircle2, ChevronRight, Gauge, Cpu } from 'lucide-react';

export const ClosedLoopMethodSection: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState<string>(SYSTEM_STEPS[1].id); // default to step 2 (reactor)

  const currentStep = SYSTEM_STEPS.find((s) => s.id === activeStepId) || SYSTEM_STEPS[1];

  return (
    <section className="py-12 border-b border-[#d9c8b8] bg-[#f6e9dc]" id="closed-loop-method-section">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="border-b-2 border-[#262a33] pb-3 mb-8">
          <div className="flex flex-wrap items-center justify-between">
            <div>
              <span className="font-serif font-bold text-xs uppercase tracking-widest text-[#0d7680]">
                Section II &bull; Engineering Architecture & Reaction Kinetics
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a1a] mt-1">
                The Hybrid Method: Coupling Co-Pyrolysis with an Algal Photobioreactor
              </h2>
            </div>
            <span className="text-xs font-mono font-bold bg-[#fff1e5] border border-[#d9c8b8] text-[#262a33] px-3 py-1 mt-2 sm:mt-0">
              Lab-Scale Prototype Validated &bull; Pilot 0.2–0.5 TPD
            </span>
          </div>
        </div>

        {/* Narrative Intro */}
        <div className="bg-[#fff1e5] border border-[#d9c8b8] p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 font-serif text-sm md:text-base text-[#262a33] leading-relaxed">
              <p className="mb-3">
                Conventional pyrolysis of municipal plastic waste suffers from high wax yields, heavy tar condensation, and toxic exhaust emissions. The <strong>Algae-Plast Fuel</strong> system solves these engineering constraints by coupling an anaerobic co-pyrolysis thermal reactor with a closed-loop microalgal photobioreactor.
              </p>
              <p className="text-[#66605b] italic text-xs md:text-sm">
                "Non-recyclable plastics (LDPE, HDPE, PP) are blended with algal biomass. Microalgae acts as an organic hydrogen donor, suppressing coke formation and elevating liquid bio-crude yields to 60–65%. Meanwhile, the photobioreactor scrubs the combustion flue gas CO₂ and strips 80–90% nitrogen from industrial wastewater."
              </p>
            </div>
            <div className="lg:col-span-4 bg-[#f6e9dc] p-4 border border-[#d9c8b8] space-y-2 text-xs">
              <div className="font-serif font-bold uppercase tracking-wider text-[#990f3d]">
                Core Engineering Advantages
              </div>
              <ul className="space-y-1.5 text-[#33302e]">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0d7680] shrink-0" />
                  <span>Zero oxygen atmosphere avoids toxic dioxin generation</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0d7680] shrink-0" />
                  <span>Flue-gas CO₂ repurposed into photosynthetic cellular biomass</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0d7680] shrink-0" />
                  <span>Recirculated algae provides self-replenishing co-catalyst</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Interactive Step Navigator */}
        <div className="mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2">
            {SYSTEM_STEPS.map((step, idx) => {
              const isActive = step.id === activeStepId;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStepId(step.id)}
                  className={`p-3 text-left border transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#262a33] text-white border-[#262a33] shadow-sm'
                      : 'bg-[#fff1e5] hover:bg-[#ebdccc] text-[#262a33] border-[#d9c8b8]'
                  }`}
                  id={`method-step-tab-${idx + 1}`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-[10px] font-mono font-bold uppercase ${isActive ? 'text-[#e8562a]' : 'text-[#66605b]'}`}>
                      Stage 0{idx + 1}
                    </span>
                    <ChevronRight className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-[#8c827a]'}`} />
                  </div>
                  <div className="font-serif font-bold text-xs truncate">
                    {step.title.replace(/^\d+\.\s*/, '')}
                  </div>
                  <div className="text-[11px] font-mono mt-1 opacity-90 truncate">
                    {step.metric}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Step Detailed Diagnostic Panel */}
        <div className="bg-[#fff1e5] border-2 border-[#262a33] p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-[#990f3d] text-white text-[10px] font-mono uppercase px-2 py-0.5 font-bold">
                  {currentStep.category} Module
                </span>
                <span className="font-mono text-xs text-[#66605b]">
                  Diagnostic Spec ID: {currentStep.id.toUpperCase()}
                </span>
              </div>

              <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#1a1a1a]">
                {currentStep.title}
              </h3>

              <p className="font-serif text-base text-[#4d4845] leading-relaxed">
                {currentStep.description}
              </p>

              {/* Scientific principle callout */}
              <div className="bg-[#f6e9dc] p-4 border-l-3 border-[#0d7680] text-xs md:text-sm font-serif">
                <div className="font-sans font-bold uppercase text-[11px] text-[#0d7680] mb-1">
                  Chemical Mechanism & Reaction Kinetics:
                </div>
                <p className="text-[#262a33] italic">
                  "{currentStep.scientificPrinciple}"
                </p>
              </div>

              {/* Key Details Bullet points */}
              <div>
                <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-[#1a1a1a] mb-2">
                  Technical Specifications & Operational Safeguards:
                </h4>
                <ul className="space-y-2">
                  {currentStep.keyDetails.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2 text-xs md:text-sm text-[#33302e]">
                      <span className="text-[#990f3d] font-bold mt-1">&bull;</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Media / Metric Display (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-[#f6e9dc] border border-[#d9c8b8] p-5">
                <div className="flex items-center justify-between border-b border-[#d9c8b8] pb-2 mb-3">
                  <span className="font-serif font-bold text-xs uppercase tracking-wider text-[#1a1a1a]">
                    Stage Benchmark Metric
                  </span>
                  <Gauge className="w-4 h-4 text-[#0d7680]" />
                </div>
                <div className="font-serif text-3xl font-black text-[#990f3d] mb-1">
                  {currentStep.metric}
                </div>
                <div className="text-xs font-sans text-[#66605b] font-medium">
                  {currentStep.metricLabel}
                </div>
              </div>

              <div className="border border-[#d9c8b8] overflow-hidden bg-[#262a33]">
                <img
                  src={
                    currentStep.category === 'algae'
                      ? EDITORIAL_IMAGES.laboratoryAlgae
                      : currentStep.category === 'pyrolysis'
                      ? EDITORIAL_IMAGES.industrialReactor
                      : EDITORIAL_IMAGES.heroRefinery
                  }
                  alt={currentStep.title}
                  className="w-full h-48 sm:h-60 object-cover opacity-90"
                />
                <div className="p-2.5 bg-[#262a33] text-white text-[11px] font-mono flex items-center justify-between">
                  <span>Lab Testing Verification Rig</span>
                  <span className="text-[#0d7680] font-bold">100% Bench Validated</span>
                </div>
              </div>

              <div className="p-3 bg-[#e8ded4]/50 border border-[#d9c8b8] text-xs text-[#4d4845]">
                <span className="font-bold text-[#1a1a1a]">Pilot Plant Integration Note:</span> A continuous rotary pyrolysis reactor and modular raceway photobioreactor are designed for a 0.2–0.5 TPD skid deployment in the Dhaka–Gazipur industrial corridor.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
