'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { assetPath } from '@/lib/assets';
import { useLanguage } from '@/context/language-context';
import { ChevronLeft, ChevronRight, Sparkles, Coffee, Navigation } from 'lucide-react';

const COMMITMENTS_TR = [
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

const COMMITMENTS_EN = [
  {
    tag: 'SPECIALTY SELECTION',
    icon: Coffee,
    heroMetric: '86+ SCAA',
    heroSub: 'SPECIALTY COFFEE GRADE',
    title: '100% SPECIALTY GRADE ARABICA',
    desc: 'Single origin beans scoring 86+ on the Specialty Coffee Association cupping protocol, precision-calibrated espresso, and 16-hour slow cold brew.',
    chips: ['SCA Certified', 'Weekly Fresh Roast', '16H Cold Brew'],
  },
  {
    tag: 'LIVING SPACE',
    icon: Sparkles,
    heroMetric: '100% PET',
    heroSub: 'FRIENDLY GARDEN & WORKSPACE',
    title: 'PET FRIENDLY OPEN GARDEN & WORKSPACE',
    desc: 'An open green garden to unwind with your pets, seamless high-speed Wi-Fi, and power-equipped tables designed for remote workers.',
    chips: ['Pet-Friendly Garden', 'High-Speed Wi-Fi', 'Power Outlets'],
  },
  {
    tag: 'CENTRAL LOCATION',
    icon: Navigation,
    heroMetric: '120 METERS',
    heroSub: 'FLAT WALK FROM HATAY METRO',
    title: '2 MIN FLAT WALK FROM HATAY METRO',
    desc: 'Parallel to Inönü Street, an effortless 120-meter flat walk from the metro station exit in the heart of the neighborhood.',
    chips: ['Flat Walk', '120m Distance', 'Hatay Station'],
  },
];

export function StorySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { t, locale } = useLanguage();

  const commitments = locale === 'en' ? COMMITMENTS_EN : COMMITMENTS_TR;

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
    const next = activeIndex < commitments.length - 1 ? activeIndex + 1 : 0;
    scrollToIndex(next);
  };

  const prevSlide = () => {
    const prev = activeIndex > 0 ? activeIndex - 1 : commitments.length - 1;
    scrollToIndex(prev);
  };

  return (
    <section id="karakterler" className="scroll-mt-28 sm:scroll-mt-32 py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#faf8f2] border-b border-[#0038a8]/15">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
        {/* Section Header */}
        <div className="space-y-1 pb-3 border-b border-[#0038a8]/20">
          <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-[#0038a8]/60 font-display">
            {t.story.eyebrow}
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0038a8] tracking-tight font-display uppercase">
            {locale === 'tr'
              ? "İZMİR HATAY'IN YENİ NESİL KAHVE DURAĞI"
              : "IZMIR HATAY'S NEW GENERATION COFFEE STOP"}
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
            {/* Floating Glassmorphism Status Badge */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto flex items-center gap-2.5 p-2 pr-4 rounded-2xl bg-[#faf8f2]/90 backdrop-blur-md border border-[#0038a8]/25 shadow-lg text-[#0038a8]">
              <div className="w-8 h-8 rounded-xl bg-[#0038a8] text-white flex items-center justify-center shrink-0 shadow-2xs">
                <Sparkles className="w-4 h-4 text-[#fab80b]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#0038a8]/70 leading-none font-display">
                  {locale === 'tr' ? 'İzmir Hatay • Açık Bahçe' : 'Izmir Hatay • Open Garden'}
                </span>
                <span className="text-xs font-black text-[#0038a8] uppercase font-display tracking-tight leading-snug pt-0.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                  {locale === 'tr' ? 'Evcil Hayvan Dostu' : 'Pet Friendly'}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Specialty Craft Passport Slider (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed">
              {locale === 'tr'
                ? 'Jön Coffee Co., iyi kahveyi samimi mahalle kültürüyle buluşturan bağımsız bir 3. nesil kahvecidir. Gösterişten uzak, kaliteye ve detaylara odaklı bir deneyim sunarız.'
                : 'Jön Coffee Co. is an independent specialty coffee shop uniting exceptional specialty coffee with warm neighborhood hospitality.'}
            </p>

            {/* Horizontal Swipeable Track */}
            <div className="relative">
              <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 pb-1 scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {commitments.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="relative w-full shrink-0 snap-center p-6 sm:p-8 rounded-3xl bg-[#faf7ee] border-2 border-[#0038a8] shadow-xs space-y-4 select-none overflow-hidden"
                    >
                      {/* Top Header Row */}
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
                          ★ JÖN STANDARD
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
                {commitments.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollToIndex(idx)}
                    aria-label={`Slide ${idx + 1}`}
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
                  0{activeIndex + 1} / 0{commitments.length}
                </span>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={prevSlide}
                    aria-label={t.story.controlsPrev}
                    className="w-8 h-8 rounded-full border-2 border-[#0038a8] flex items-center justify-center text-[#0038a8] hover:bg-[#0038a8] hover:text-white active:scale-95 transition-all cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextSlide}
                    aria-label={t.story.controlsNext}
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
