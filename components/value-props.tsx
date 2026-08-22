'use client';

import { Coffee, Flame, PawPrint, Heart, Sparkles, ShieldCheck } from 'lucide-react';

const PROPS = [
  {
    icon: <Coffee className="w-8 h-8 text-[#102341]" />,
    title: '%100 Nitelikli Arabica',
    description: 'Etik üreticilerden doğrudan temin edilen, yüksek rakım single origin ve özel harman çekirdekler.',
  },
  {
    icon: <Flame className="w-8 h-8 text-[#102341]" />,
    title: 'Haftalık Taze Kavrum',
    description: 'Her çekirdeğin gövde ve aroma profilini en üst düzeye çıkaran hassas mikro parti kavurma.',
  },
  {
    icon: <PawPrint className="w-8 h-8 text-[#102341]" />,
    title: '%100 Pet Friendly',
    description: 'Tüylü dostlarınız mekanımızın baş misafiridir; taze su kaplarımız ve ödül mamalarımız daima hazır.',
  },
  {
    icon: <Heart className="w-8 h-8 text-[#102341]" />,
    title: 'İzmir Hatay Mahalle Ruhu',
    description: 'Samimi bir karşılama, laptopla rahat çalışma imkanı ve tanıdık sıcak bir atmosfer.',
  },
];

export function ValueProps() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
            Değerlerimiz & Zanaatimiz
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#102341] tracking-tight font-display uppercase">
            NEDEN JÖN COFFEE?
          </h2>
          <p className="text-sm sm:text-base font-medium text-gray-600">
            Özenle seçilmiş çekirdeklerden masanıza uzanan samimi ve dürüst kahve deneyimi.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROPS.map((prop, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#f8fafc] border border-gray-100 flex flex-col justify-between space-y-4 hover:bg-white hover:border-gray-200 hover:shadow-sm transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 flex items-center justify-center shadow-xs">
                {prop.icon}
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-extrabold text-[#102341] font-display">
                  {prop.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                  {prop.description}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-1.5 text-[11px] font-bold text-[#102341]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#fab80b]" />
                <span>Jön Kalite Standardı</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
