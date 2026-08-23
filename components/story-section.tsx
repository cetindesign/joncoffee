'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { assetPath } from '@/lib/assets';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const COMMITMENTS = [
  {
    index: '01 / 03',
    category: 'NİTELİKLİ SEÇKİ',
    title: '%100 SPECIALTY GRADE ARABICA',
    desc: 'Haftalık taze kavrum tek köken çekirdekler, hassas gramajlı espresso kalibrasyonları ve 16 saatlik soğuk damlatma Cold Brew reçeteleri.',
    meta: 'Single Origin • Günlük Kalibrasyon • 16H Soğuk Demleme',
  },
  {
    index: '02 / 03',
    category: 'YAŞAYAN ALAN',
    title: 'EVCİL HAYVAN DOSTU BAHÇE & ÇALIŞMA',
    desc: 'Dostlarınızla rahatça oturabileceğiniz açık bahçemiz, kesintisiz yüksek hızlı Wi-Fi ve laptopla çalışanlar için bol prizli masa düzeni.',
    meta: '%100 Pet-Friendly • Yüksek Hızlı Wi-Fi • Prizli Masalar',
  },
  {
    index: '03 / 03',
    category: 'MERKEZİ KONUM',
    title: "HATAY METROSU'NA 2 DK DÜZAYAK",
    desc: 'İnönü Caddesi paralelinde, metro çıkışından itibaren yokuşsuz ve kolay 120 metre yürüyüş mesafesinde düzayak konum.',
    meta: 'Yokuşsuz Düzayak • 120m Mesafe • Hatay İstasyonu',
  },
];

export function StorySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    if (clientWidth === 0) return;
    const index = Math.round(scrollLeft / clientWidth);
    setActiveIndex(Math.max(0, Math.min(index, COMMITMENTS.length - 1)));
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const targetLeft = index * scrollRef.current.clientWidth;
    scrollRef.current.scrollTo({ left: targetLeft, behavior: 'smooth' });
    setActiveIndex(index);
  };

  const nextSlide = () => {
    const next = (activeIndex + 1) % COMMITMENTS.length;
    scrollToIndex(next);
  };

  const prevSlide = () => {
    const prev = (activeIndex - 1 + COMMITMENTS.length) % COMMITMENTS.length;
    scrollToIndex(prev);
  };

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

        {/* 2-Column Grounded Layout: Atmosphere Photo + Horizontal Slider with Three Dots */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Atmosphere Photo (5 cols) */}
          <div className="lg:col-span-5 relative w-full h-72 sm:h-96 lg:h-[390px] rounded-3xl overflow-hidden border-2 border-[#0038a8]/20 shadow-sm">
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

          {/* Right: Horizontal Card Slider + Three Dots (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed">
              Jön Coffee Co., iyi kahveyi samimi mahalle kültürüyle buluşturan bağımsız bir 3. nesil kahvecidir. Gösterişten uzak, kaliteye ve detaylara odaklı bir deneyim sunarız.
            </p>

            {/* Horizontal Swipeable Track */}
            <div className="relative">
              <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 pb-1 scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {COMMITMENTS.map((item, idx) => (
                  <div
                    key={idx}
                    className="w-full shrink-0 snap-center p-6 sm:p-7 rounded-2xl bg-white border border-[#0038a8]/15 border-l-4 border-l-[#0038a8] shadow-2xs space-y-3.5 select-none"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-black uppercase tracking-widest text-[#0038a8]/75 font-display">
                        ★ {item.category}
                      </span>
                      <span className="font-mono text-xs font-bold text-[#0038a8]/40 tracking-wider">
                        {item.index}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="font-black text-lg sm:text-xl text-[#0038a8] font-display uppercase tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed min-h-[44px]">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-dashed border-[#0038a8]/15 text-xs font-bold text-[#0038a8]/80">
                      <span>{item.meta}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Three Dots Pagination Indicator & Chevrons */}
            <div className="flex items-center justify-between pt-1">
              {/* Three Dots */}
              <div className="flex items-center gap-2">
                {COMMITMENTS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollToIndex(idx)}
                    aria-label={`Kart ${idx + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      activeIndex === idx
                        ? 'w-8 bg-[#0038a8]'
                        : 'w-2.5 bg-[#0038a8]/25 hover:bg-[#0038a8]/50'
                    }`}
                  />
                ))}
              </div>

              {/* Prev / Next Chevrons */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={prevSlide}
                  aria-label="Önceki standart"
                  className="w-8 h-8 rounded-full border border-[#0038a8]/20 flex items-center justify-center text-[#0038a8] hover:bg-[#0038a8] hover:text-white transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Sonraki standart"
                  className="w-8 h-8 rounded-full border border-[#0038a8]/20 flex items-center justify-center text-[#0038a8] hover:bg-[#0038a8] hover:text-white transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
