import React from 'react';

export const Proto2IncubatorSection: React.FC = () => {
  const images = [
    {
      id: 'proto-2-chamber-primary',
      url: 'https://res.cloudinary.com/ynizdpgn/image/upload/v1789939971/1000057883_rxr0jz.jpg',
      alt: 'Stainless steel reaction and incubator chamber assembly',
    },
    {
      id: 'proto-2-chamber-detail',
      url: 'https://res.cloudinary.com/ynizdpgn/image/upload/v1789939959/1000057887_cubjx5.jpg',
      alt: 'Chamber flange and manifold piping detail',
    },
  ];

  return (
    <section id="proto-2-incubator" className="py-16 md:py-20 border-b border-[#d9c8b8] bg-[#f6e9dc]/50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Heading (H2) */}
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-3 pb-2 border-b border-[#262a33]">
          Prototype 2: Stainless Steel Incubator Chamber
        </h2>

        {/* Subheading (H3) */}
        <h3 className="font-serif text-xl sm:text-2xl text-[#990f3d] font-semibold mb-6">
          Anaerobic Thermal Co-Pyrolysis Reaction Vessel
        </h3>

        {/* Descriptive Text */}
        <div className="space-y-4 text-base sm:text-lg text-[#262a33] font-serif leading-relaxed mb-8">
          <p>
            The Prototype 2 reaction chamber is fabricated from high-grade 316L stainless steel, engineered to withstand continuous anaerobic thermal decomposition at 450°C–520°C while resisting halogenated acidic gases generated during plastic decomposition.
          </p>
          <p>
            The photographic documentation below presents the constructed stainless steel incubator chamber, sealed flange interfaces, and volatile condensation manifolds under laboratory evaluation.
          </p>
        </div>

        {/* Prototype 2 Image Cards - Just the images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {images.map((img) => (
            <div
              key={img.id}
              className="border border-[#262a33] bg-[#fff1e5] p-2 sm:p-3 shadow-sm"
            >
              <div className="relative overflow-hidden bg-[#1a1a1a]">
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-80 sm:h-96 md:h-[460px] object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Technical Specification Grid (H3) */}
        <div className="pt-6 border-t border-[#d9c8b8]">
          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1a1a1a] mb-4">
            Incubator Chamber Engineering Specifications
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-serif text-xs">
            <div className="bg-[#fff1e5] p-4 border border-[#d9c8b8]">
              <div className="font-bold text-sm text-[#1a1a1a] mb-1">MOC Specification</div>
              <p className="text-[#4d4845]">316L Austenitic Stainless Steel with ceramic thermal insulation</p>
            </div>

            <div className="bg-[#fff1e5] p-4 border border-[#d9c8b8]">
              <div className="font-bold text-sm text-[#1a1a1a] mb-1">Operating Regime</div>
              <p className="text-[#4d4845]">450°C to 520°C anaerobic thermal decomposition</p>
            </div>

            <div className="bg-[#fff1e5] p-4 border border-[#d9c8b8]">
              <div className="font-bold text-sm text-[#1a1a1a] mb-1">Atmosphere Seal</div>
              <p className="text-[#4d4845]">Sub-0.1% oxygen with continuous nitrogen blanket purge</p>
            </div>

            <div className="bg-[#fff1e5] p-4 border border-[#d9c8b8]">
              <div className="font-bold text-sm text-[#1a1a1a] mb-1">Pilot Throughput</div>
              <p className="text-[#4d4845]">0.2 to 0.5 tons per day planned capacity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
