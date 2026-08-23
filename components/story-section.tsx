'use client';

import Image from 'next/image';
import { assetPath } from '@/lib/assets';

const COMMITMENTS = [
  {
    num: '01',
    title: '%100 SPECIALTY GRADE ARABICA',
    desc: 'Haftalık taze kavrum tek köken çekirdekler, hassas gramajlı espresso kalibrasyonları ve 16 saatlik soğuk damlatma Cold Brew reçeteleri.',
    badge: '★ TAZE KAVRUM',
  },
  {
    num: '02',
    title: 'EVCİL HAYVAN DOSTU BAHÇE & ÇALIŞMA',
    desc: 'Dostlarınızla rahatça oturabileceğiniz açık bahçemiz, kesintisiz yüksek hızlı Wi-Fi ve laptopla çalışanlar için prizli masa düzeni.',
    badge: '★ PET FRIENDLY',
  },
  {
    num: '03',
    title: "HATAY METROSU'NA 2 DK DÜZAYAK",
    desc: 'İnönü Caddesi paralelinde, metro çıkışından itibaren yokuşsuz ve kolay 120 metre yürüyüş mesafesinde merkezi konum.',
    badge: '★ METRO 2 DK',
  },
];

export function StorySection() {
  return (
    <section id="karakterler" className="scroll-mt-28 sm:scroll-mt-32 py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#faf8f2] border-b border-[#0038a8]/15">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
        {/* Section Header */}
        <div className="space-y-1 pb-3 border-b border-[#0038a8]/20">
          <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-[#0038a8]/60 font-display">
            ★ MAHALLE KÜLTÜRÜ ★
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0038a8] tracking-tight font-display uppercase">
            İZMİR HATAY&apos;IN YENİ NESİL KAHVE DURAĞI
          </h2>
        </div>

        {/* 2-Column Grounded Layout: Atmosphere Photo + Editorial Numbered Index */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Atmosphere Photo (5 cols) */}
          <div className="lg:col-span-5 relative w-full h-72 sm:h-96 lg:h-[420px] rounded-3xl overflow-hidden border-2 border-[#0038a8]/20 shadow-sm">
            <Image
              src={assetPath('/assets/hero-coffee-lifestyle.jpg')}
              alt="Jön Coffee Kafe ve Bahçe Atmosferi"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-3 left-3 bg-[#0038a8] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider font-display">
              ★ İZMİR HATAY &bull; PET FRIENDLY ★
            </div>
          </div>

          {/* Right: Editorial Numbered Index (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed">
              Jön Coffee Co., iyi kahveyi samimi mahalle kültürüyle buluşturan bağımsız bir 3. nesil kahvecidir. Gösterişten uzak, kaliteye ve detaylara odaklı bir deneyim sunarız.
            </p>

            {/* Editorial Numbered Rows with Razor-Thin Dividers */}
            <div className="divide-y divide-[#0038a8]/15 border-y border-[#0038a8]/15">
              {COMMITMENTS.map((item) => (
                <div key={item.num} className="py-4.5 sm:py-5 flex items-start gap-4 sm:gap-6 group select-none">
                  {/* Big Editorial Numeral */}
                  <span className="font-display font-black text-2xl sm:text-3xl text-[#0038a8]/35 leading-none shrink-0 pt-0.5 group-hover:text-[#0038a8] transition-colors">
                    {item.num}
                  </span>

                  {/* Content */}
                  <div className="space-y-1 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-black text-sm sm:text-base text-[#0038a8] font-display uppercase tracking-tight">
                        {item.title}
                      </h3>
                      <span className="text-[9px] font-black bg-[#0038a8]/10 text-[#0038a8] px-2 py-0.5 rounded-full uppercase tracking-wider font-display">
                        {item.badge}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
