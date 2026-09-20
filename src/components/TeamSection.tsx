import React from 'react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  photoUrl: string;
}

export const TeamSection: React.FC = () => {
  const team: TeamMember[] = [
    {
      id: 'tanvirul-saad',
      name: 'Tanvirul Md Saad',
      role: 'Team Lead',
      photoUrl: 'https://res.cloudinary.com/ynizdpgn/image/upload/v1789945517/WhatsApp_Image_2026-09-21_at_05.04.49_ojsazi.jpg',
    },
    {
      id: 'syed-adnan-rahman',
      name: 'Syed Adnan Rahman',
      role: 'Co Tech Lead',
      photoUrl: 'https://res.cloudinary.com/ynizdpgn/image/upload/v1789945526/WhatsApp_Image_2026-09-21_at_05.02.24_vgqwb0.jpg',
    },
    {
      id: 'luban-latif',
      name: 'Luban Latif',
      role: 'Co Tech Lead',
      photoUrl: 'https://res.cloudinary.com/ynizdpgn/image/upload/v1789945523/WhatsApp_Image_2026-09-21_at_05.03.33_fkzwrv.jpg',
    },
    {
      id: 'atiq-ul-alam',
      name: 'Atiq ul Alam',
      role: 'Marketing Analyst',
      photoUrl: 'https://res.cloudinary.com/ynizdpgn/image/upload/v1788538410/Atiqspassport_photo_3.5x5cm_white_background.jpg_lrc4a4.jpg',
    },
  ];

  return (
    <section id="our-team" className="py-16 md:py-20 border-b border-[#d9c8b8]">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Heading (H2) */}
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-3 pb-2 border-b border-[#262a33]">
          Our Team
        </h2>

        {/* Subheading (H3) */}
        <h3 className="font-serif text-xl sm:text-2xl text-[#990f3d] font-semibold mb-8">
          Project Leadership & Engineering Direction
        </h3>

        {/* 4 Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-[#f6e9dc] border border-[#d9c8b8] p-3 flex flex-col shadow-xs hover:border-[#262a33] transition-colors"
            >
              {/* Photo Container */}
              <div className="w-full aspect-[4/5] overflow-hidden bg-[#262a33] mb-3 border border-[#d9c8b8]">
                <img
                  src={member.photoUrl}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Name & Role */}
              <div className="flex-1 flex flex-col justify-between pt-1">
                <div>
                  <h4 className="font-serif font-bold text-base sm:text-lg text-[#1a1a1a] leading-tight">
                    {member.name}
                  </h4>
                  <p className="font-serif text-xs sm:text-sm text-[#990f3d] mt-1 font-semibold leading-snug">
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
