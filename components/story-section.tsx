'use client';

import Image from 'next/image';
import { assetPath } from '@/lib/assets';

const COMMITMENTS = [
  {
    stamp: '★ 01. NİTELİKLİ KAHVE ★',
    title: '%100 SPECIALTY GRADE ARABICA',
    desc: 'Haftalık taze kavrum tek köken çekirdekler, hassas gramajlı espresso kalibrasyonları ve 16 saatlik soğuk damlatma Cold Brew reçeteleri.',
    meta: 'Haftalık Taze Kavrum • Hassas Kalibrasyon • Single Origin',
  },
  {
    stamp: '★ 02. MAHALLE & DOSTLAR ★',
    title: 'EVCİL HAYVAN DOSTU BAHÇE & ÇALIŞMA',
    desc: 'Dostlarınızla rahatça oturabileceğiniz açık bahçemiz, kesintisiz yüksek hızlı Wi-Fi ve laptopla çalışanlar için prizli masa düzeni.',
    meta: '%100 Pet-Friendly • Yüksek Hızlı Wi-Fi • Prizli Masalar',
  },
  {
    stamp: '★ 03. MERKEZİ ULAŞIM ★',
    title: "HATAY METROSU'NA 2 DK DÜZAYAK",
    desc: 'İnönü Caddesi paralelinde, metro çıkışından itibaren yokuşsuz ve kolay 120 metre yürüyüş mesafesinde merkezi konum.',
    meta: 'Düzayak Konum • 120 Metre Mesafe • Kolay Ulaşım',
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

        {/* 2-Column Grounded Layout: Atmosphere Photo + Poster-Stamped Tactile Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Atmosphere Photo (5 cols) */}
          <div className="lg:col-span-5 relative w-full h-72 sm:h-96 lg:h-[480px] rounded-3xl overflow-hidden border-2 border-[#0038a8]/20 shadow-sm">
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

          {/* Right: Poster-Stamped Tactile Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed">
              Jön Coffee Co., iyi kahveyi samimi mahalle kültürüyle buluşturan bağımsız bir 3. nesil kahvecidir. Gösterişten uzak, kaliteye ve detaylara odaklı bir deneyim sunarız.
            </p>

            {/* 3 Tactile Cards */}
            <div className="space-y-4 pt-1">
              {COMMITMENTS.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-5.5 rounded-2xl bg-white/80 border-2 border-[#0038a8]/20 shadow-xs space-y-2.5 transition-all hover:border-[#0038a8]/40 hover:bg-white select-none"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-block bg-[#0038a8] text-white text-[10px] sm:text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider font-display">
                      {item.stamp}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-black text-base sm:text-lg text-[#0038a8] font-display uppercase tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-dashed border-[#0038a8]/20 flex items-center justify-between text-[11px] font-bold text-[#0038a8]/80">
                    <span>{item.meta}</span>
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
