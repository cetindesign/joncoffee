'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { assetPath } from '@/lib/assets';
import { ChevronLeft, ChevronRight, Sparkles, Coffee, Navigation } from 'lucide-react';

const COMMITMENTS = [
  {
    tag: 'NİTELİKLİ SEÇKİ',
    icon: Coffee,
    heroMetric: '86+ SCAA',
    heroSub: 'NİTELİKLİ KAHVE BİRLİĞİ DERECESİ',
    title: '%100 SPECIALTY GRADE ARABICA',
    desc: 'Dünya Nitelikli Kahve Birliği (Specialty Coffee Association) tadım protokolünde 86+ puan almış tek köken çekirdekler, hassas kalibre espresso ve 16 saatlik soğuk demlemeler.',
    chips: ['SCA Sertifikalı', 'Haftalık Taze Kavrum', '16H Soğuk Demleme'],
  },
  {
    tag: 'YAŞAYAN ALAN',
    icon: Sparkles,
    heroMetric: '%100 PET',
    heroSub: 'DOSTU AÇIK BAHÇE & ÇALIŞMA',
    title: 'EVCİL HAYVAN DOSTU BAHÇE & ÇALIŞMA',
    desc: 'Dostlarınızla rahatça oturabileceğiniz açık bahçemiz, kesintisiz yüksek hızlı Wi-Fi ve laptopla çalışanlar için bol prizli masa düzeni.',
    chips: ['Pet-Friendly Bahçe', 'Yüksek Hızlı Wi-Fi', 'Prizli Masalar'],
  },
  {
    tag: 'MERKEZİ KONUM',
    icon: Navigation,
    heroMetric: '120 METRE',
    heroSub: 'HATAY METROSU DÜZAYAK',
    title: "HATAY METROSU'NA 2 DK DÜZAYAK",
    desc: 'İnönü Caddesi paralelinde, metro çıkışından itibaren yokuşsuz ve kolay 120 metre yürüyüş mesafesinde merkezi mahalle konumu.',
    chips: ['Düzayak Ulaşım', '120m Mesafe', 'Hatay İstasyonu'],
  },
];

export function StorySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const children = Array.from(container.children) as HTMLElement[];
    const scrollLeft = container.scrollLeft;

    let closestIdx = 0;
    let minDiff = Infinity;

    children.forEach((child, idx) => {
      const childOffset = child.offsetLeft - container.offsetLeft;
      const diff = Math.abs(childOffset - scrollLeft);
      if (diff < minDiff) {
        minDiff = diff;
        closestIdx = idx;
      }
    });

    setActiveIndex(closestIdx);
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const children = Array.from(container.children) as HTMLElement[];
    const targetChild = children[index];

    if (targetChild) {
      const targetLeft = targetChild.offsetLeft - container.offsetLeft;
      container.scrollTo({ left: targetLeft, behavior: 'smooth' });
    }
    setActiveIndex(index);
  };

  const nextSlide = () => {
    const next = activeIndex < COMMITMENTS.length - 1 ? activeIndex + 1 : 0;
    scrollToIndex(next);
  };

  const prevSlide = () => {
    const prev = activeIndex > 0 ? activeIndex - 1 : COMMITMENTS.length - 1;
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

        {/* 2-Column Grounded Layout: Atmosphere Photo + Specialty Craft Passport Slider */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Atmosphere Photo (5 cols) */}
          <div className="lg:col-span-5 relative w-full h-72 sm:h-96 lg:h-[440px] rounded-3xl overflow-hidden border-2 border-[#0038a8]/20 shadow-sm">
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

          {/* Right: Specialty Craft Passport Slider (7 cols) */}
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
                {COMMITMENTS.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="relative w-full shrink-0 snap-center p-6 sm:p-8 rounded-3xl bg-[#faf7ee] border-2 border-[#0038a8] shadow-xs space-y-4 select-none overflow-hidden"
                    >
                      {/* Top Header Row (without numbers) */}
                      <div className="flex items-center justify-between gap-2 border-b border-[#0038a8]/15 pb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-[#0038a8] text-white flex items-center justify-center shrink-0">
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-[11px] font-black uppercase tracking-widest text-[#0038a8] font-display">
                            ★ {item.tag}
                          </span>
                        </div>

                        <span className="text-[10px] font-black text-[#0038a8]/60 uppercase tracking-widest font-display">
                          ★ JÖN STANDART
                        </span>
                      </div>

                      {/* Standout Hero Metric */}
                      <div className="space-y-0.5 pt-1">
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl sm:text-3xl font-black text-[#0038a8] font-display tracking-tight leading-none">
                            {item.heroMetric}
                          </span>
                          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#0038a8]/70 font-display">
                            {item.heroSub}
                          </span>
                        </div>

                        <h3 className="font-black text-base sm:text-lg text-[#0038a8] font-display uppercase tracking-tight pt-1">
                          {item.title}
                        </h3>
                      </div>

                      {/* Body Copy */}
                      <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed min-h-[44px]">
                        {item.desc}
                      </p>

                      {/* Tactile Micro Tags Strip */}
                      <div className="pt-3 border-t border-dashed border-[#0038a8]/20 flex flex-wrap gap-2">
                        {item.chips.map((chip, cIdx) => (
                          <span
                            key={cIdx}
                            className="text-[10px] sm:text-[11px] font-bold text-[#0038a8] bg-white border border-[#0038a8]/20 px-2.5 py-1 rounded-lg"
                          >
                            ★ {chip}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Smart Segmented Progress Indicator & Navigation */}
            <div className="flex items-center justify-between pt-1">
              {/* Segmented Dots */}
              <div className="flex items-center gap-2 flex-1 max-w-[220px]">
                {COMMITMENTS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollToIndex(idx)}
                    aria-label={`Kart ${idx + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      activeIndex === idx
                        ? 'flex-1 bg-[#0038a8]'
                        : 'w-3 bg-[#0038a8]/20 hover:bg-[#0038a8]/40'
                    }`}
                  />
                ))}
              </div>

              {/* Counter & Prev / Next Chevrons */}
              <div className="flex items-center gap-3 pl-4">
                <span className="font-mono text-xs font-bold text-[#0038a8]/75 tracking-wider">
                  0{activeIndex + 1} / 0{COMMITMENTS.length}
                </span>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={prevSlide}
                    aria-label="Önceki kart"
                    className="w-8 h-8 rounded-full border-2 border-[#0038a8] flex items-center justify-center text-[#0038a8] hover:bg-[#0038a8] hover:text-white active:scale-95 transition-all cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextSlide}
                    aria-label="Sonraki kart"
                    className="w-8 h-8 rounded-full border-2 border-[#0038a8] flex items-center justify-center text-[#0038a8] hover:bg-[#0038a8] hover:text-white active:scale-95 transition-all cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
