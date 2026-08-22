'use client';

import { Coffee, Flame, PawPrint, Heart, ShieldCheck } from 'lucide-react';

const PROPS = [
  {
    icon: <Coffee className="w-6 h-6 sm:w-7 sm:h-7 text-[#102341]" />,
    title: '%100 Nitelikli Arabica',
    description: 'Etik üreticilerden doğrudan temin edilen, yüksek rakım single origin çekirdekler.',
  },
  {
    icon: <Flame className="w-6 h-6 sm:w-7 sm:h-7 text-[#102341]" />,
    title: 'Haftalık Taze Kavrum',
    description: 'Aroma profilini en üst düzeye çıkaran hassas mikro parti kavurma.',
  },
  {
    icon: <PawPrint className="w-6 h-6 sm:w-7 sm:h-7 text-[#102341]" />,
    title: '%100 Pet Friendly',
    description: 'Tüylü dostlarınız mekanımızın baş misafiridir; taze su kaplarımız daima hazır.',
  },
  {
    icon: <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-[#102341]" />,
    title: 'İzmir Hatay Ruhu',
    description: 'Samimi bir karşılama, laptopla rahat çalışma ve tanıdık sıcak bir mahalle ortamı.',
  },
];

export function ValueProps() {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-1">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-gray-400">
            Değerlerimiz & Zanaatimiz
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#102341] tracking-tight font-display uppercase">
            NEDEN JÖN COFFEE?
          </h2>
        </div>

        {/* 2x2 Grid on Mobile, 4-Col on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {PROPS.map((prop, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#f8fafc] border border-gray-100 flex flex-col justify-between space-y-3 hover:bg-white hover:border-gray-200 hover:shadow-xs transition-all"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white border border-gray-200 flex items-center justify-center shadow-xs">
                {prop.icon}
              </div>

              <div className="space-y-1">
                <h3 className="text-xs sm:text-base font-extrabold text-[#102341] font-display leading-snug">
                  {prop.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed font-medium line-clamp-3">
                  {prop.description}
                </p>
              </div>

              <div className="pt-1 flex items-center gap-1 text-[9px] sm:text-[10px] font-bold text-[#102341]">
                <ShieldCheck className="w-3 h-3 text-[#fab80b]" />
                <span>Jön Standardı</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
