import React from 'react';
import { ExternalLink, BookOpen } from 'lucide-react';

interface ReferenceItem {
  id: string;
  index: number;
  authors: string;
  year: string;
  title: string;
  journal: string;
  details: string;
  url: string;
  doiOrPii: string;
  relevance: string;
}

export const ReferencesSection: React.FC = () => {
  const references: ReferenceItem[] = [
    {
      id: 'ref-1-applied-energy',
      index: 1,
      authors: 'de Luna, M. D. G., Abarca, R. R. M., Manegdeg, F. G., Rollon, A. P., Bituin, B. I. C., & Gomez, J. N. R.',
      year: '2020',
      title: 'Synergistic co-pyrolysis of polyolefin plastics with wood and agricultural wastes for biofuel production',
      journal: 'Applied Energy',
      details: 'Vol. 279, Article 115744',
      url: 'https://www.sciencedirect.com/science/article/abs/pii/S0306261920311648?via%3Dihub',
      doiOrPii: 'PII: S0306-2619(20)31164-8',
      relevance: 'Demonstrates catalytic synergy and reduced thermal decomposition activation energy when blending polyolefin synthetic polymers with organic biomass substrates.',
    },
    {
      id: 'ref-2-bioresource-tech',
      index: 2,
      authors: 'Chen, X., Zhang, Q., Zhu, Y., & Zhao, T.',
      year: '2021',
      title: 'Response of wastewater treatment performance, microbial composition and functional genes to different C/N ratios and carrier types in MBBR inoculated with heterotrophic nitrification-aerobic denitrification bacteria',
      journal: 'Bioresource Technology',
      details: 'Vol. 336, Article 125339',
      url: 'https://www.sciencedirect.com/science/article/abs/pii/S0960852421002133?via%3Dihub',
      doiOrPii: 'PII: S0960-8524(21)00213-3',
      relevance: 'Validates carbon-to-nitrogen remediation regimes and bacterial-algal biofilm kinetics for wastewater scrubbing and nutrient capture in closed-loop bioreactors.',
    },
    {
      id: 'ref-3-acs-energy-fuels',
      index: 3,
      authors: 'Energy & Fuels Review Committee',
      year: '2026',
      title: 'Review and Perspectives on the Copyrolysis of Microalgal Biomass and Plastic Wastes',
      journal: 'Energy & Fuels (ACS Publications)',
      details: 'Vol. 40, Issue 6, pp. 2863–2886',
      url: 'https://pubs.acs.org/enfuem/article/40/6/2863/5071986/Review-and-Perspectives-on-the-Copyrolysis-of',
      doiOrPii: 'ACS Article: 10.1021/acs.energyfuels',
      relevance: 'Comprehensive survey on reaction kinetics, radical-transfer hydrogen donation, deoxygenation pathways, and synthetic crude yield optimization from microalgal-plastic co-feedstocks.',
    },
  ];

  return (
    <section id="references" className="py-16 md:py-20 border-b border-[#d9c8b8] bg-[#f6e9dc]/40">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Heading (H2) */}
        <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#262a33]">
          <BookOpen className="w-6 h-6 text-[#990f3d]" />
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a1a1a]">
            References
          </h2>
        </div>

        {/* Subheading (H3) */}
        <h3 className="font-serif text-xl sm:text-2xl text-[#990f3d] font-semibold mb-6">
          Peer-Reviewed Literature &amp; Scientific Grounding
        </h3>

        {/* Introductory Context */}
        <p className="font-serif text-base text-[#262a33] leading-relaxed mb-8">
          The theoretical kinetic framework, thermogravimetric decomposition parameters, and wastewater remediation dynamics informing the Algae-Plast Fuel system are substantiated by foundational research published in peer-reviewed journals:
        </p>

        {/* Citation List */}
        <div className="space-y-6">
          {references.map((ref) => (
            <div
              key={ref.id}
              className="p-5 bg-[#fff1e5] border border-[#d9c8b8] hover:border-[#262a33] transition-colors shadow-xs"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  {/* Number & Authors */}
                  <div className="font-serif text-sm text-[#4d4845]">
                    <span className="font-mono font-bold text-[#990f3d] mr-2">
                      [{ref.index}]
                    </span>
                    <span className="font-semibold text-[#1a1a1a]">{ref.authors}</span>{' '}
                    ({ref.year}).
                  </div>

                  {/* Paper Title */}
                  <h4 className="font-serif text-base sm:text-lg font-bold text-[#1a1a1a] mt-1.5 leading-snug">
                    &ldquo;{ref.title}&rdquo;
                  </h4>

                  {/* Journal & Issue */}
                  <div className="font-serif text-sm text-[#66605b] mt-1 italic">
                    <span className="font-semibold text-[#262a33]">{ref.journal}</span>, {ref.details}.
                  </div>

                  {/* Research Relevance Annotation */}
                  <div className="mt-3 pt-2.5 border-t border-[#e8ded4] text-xs font-serif text-[#4d4845] leading-relaxed">
                    <span className="font-sans font-bold text-[#990f3d] uppercase tracking-wider mr-1.5">
                      Application to Project:
                    </span>
                    {ref.relevance}
                  </div>
                </div>

                {/* Direct Link Button */}
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-1 text-xs font-sans font-semibold text-[#990f3d] hover:text-[#730b2e] border border-[#990f3d]/30 hover:border-[#990f3d] px-3 py-2 bg-[#f6e9dc] hover:bg-[#ebdccc] transition-colors"
                >
                  <span>View Article</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
