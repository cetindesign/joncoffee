'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight, X, Sparkles, Check, Flame } from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
import { assetPath } from '@/lib/assets';
import { STORE_INFO } from '@/data/store-info';
import { useLanguage } from '@/context/language-context';
import { RETAIL_BEANS_EN } from '@/data/translations';

export interface RetailBeanProduct {
  id: string;
  name: string;
  subName: string;
  badge: string;
  weight: string;
  origin: string;
  region: string;
  altitude: string;
  process: string;
  roastLevel: string;
  roastDots: number;
  flavorNotes: string[];
  description: string;
  brewRecommendation: {
    method: string;
    ratio: string;
    temp: string;
    grind: string;
  };
  grindOptions: string[];
  bgPedestal: string;
  image: string;
}

export const RETAIL_BEANS: RetailBeanProduct[] = [
  {
    id: 'bean-house-blend',
    name: 'JÖN House Blend',
    subName: 'Signature Espresso Blend',
    badge: 'Specialty Blend',
    weight: '250g',
    origin: 'Brezilya & Kolombiya',
    region: 'Cerrado / Huila',
    altitude: '1,200m - 1,750m',
    process: 'Natural & Yıkanmış Harman',
    roastLevel: 'Orta Kavrum',
    roastDots: 3,
    flavorNotes: ['Sütlü Çikolata', 'Kavrulmuş Fındık', 'Karamel'],
    description:
      'Dükkanımızda espresso bazlı içeceklerimizde ve sütlü reçetelerimizde kullandığımız imza harmanımız. Dengeli asiditesi, yoğun gövdesi ve tatlı kakao bitişiyle ev tipi espresso ve moka pot için kusursuz uyum sağlar.',
    brewRecommendation: {
      method: 'Espresso / Moka Pot / Sütlü İçecekler',
      ratio: '18g kahve / 36g espresso (1:2)',
      temp: '93°C',
      grind: 'İnce (Fine / Espresso)',
    },
    grindOptions: ['Çekirdek', 'Espresso', 'Moka Pot', 'Filtre Kahve', 'V60'],
    bgPedestal: 'bg-[#faf8f2]',
    image: '/assets/product-beans.jpg',
  },
  {
    id: 'bean-ethiopia-yirgacheffe',
    name: 'Ethiopia Yirgacheffe G1',
    subName: 'Single Origin Floral & Fruity',
    badge: 'Single Origin',
    weight: '250g',
    origin: 'Etiyopya',
    region: 'Yirgacheffe G1 Chelchele',
    altitude: '1,950m - 2,200m',
    process: 'Doğal (Natural Process)',
    roastLevel: 'Açık-Orta Kavrum',
    roastDots: 2,
    flavorNotes: ['Bergamot', 'Yasemin', 'Yaban Mersini', 'Şeftali'],
    description:
      'Kahvenin anavatanından gelen yüksek rakımlı ata tohum (Heirloom) varyetesi. Fincanda açan zarif yasemin çiçeği kokusu, bergamot narenciyesi ve tatlı şeftali asiditesiyle pour-over filtre demlemelerin yıldızı.',
    brewRecommendation: {
      method: 'V60 / Chemex / Aeropress / Cold Brew',
      ratio: '15g kahve / 250g su (1:16.6)',
      temp: '91°C - 93°C',
      grind: 'Orta-Kalın (Medium-Coarse)',
    },
    grindOptions: ['Çekirdek', 'V60', 'Chemex', 'Aeropress', 'Filtre Kahve', 'Cold Brew'],
    bgPedestal: 'bg-[#fef9ee]',
    image: '/assets/product-beans.jpg',
  },
  {
    id: 'bean-colombia-supremo',
    name: 'Colombia Supremo Huila',
    subName: 'Single Origin Sweet & Balanced',
    badge: 'Single Origin',
    weight: '250g',
    origin: 'Kolombiya',
    region: 'Huila San Agustin',
    altitude: '1,500m - 1,850m',
    process: 'Tam Yıkanmış (Fully Washed)',
    roastLevel: 'Orta Kavrum',
    roastDots: 3,
    flavorNotes: ['Kırmızı Elma', 'Panela Şekeri', 'Portakal'],
    description:
      'Huila dağlarının zengin mineral yapısında olgunlaşan iri Supremo çekirdekler. Sulu kırmızı elma tazeliği, şeker kamışı tatlılığı ve dengeli asiditesiyle gün boyu içimi son derece keyifli bir filtre kahve deneyimi.',
    brewRecommendation: {
      method: 'V60 / Batch Brew / French Press',
      ratio: '16g kahve / 250g su (1:15.5)',
      temp: '92°C',
      grind: 'Orta (Medium)',
    },
    grindOptions: ['Çekirdek', 'V60', 'Filtre Kahve', 'French Press', 'Moka Pot'],
    bgPedestal: 'bg-[#f5f7fa]',
    image: '/assets/product-beans.jpg',
  },
  {
    id: 'bean-guatemala-huehuetenango',
    name: 'Guatemala Huehuetenango',
    subName: 'Single Origin High Altitude',
    badge: 'Single Origin',
    weight: '250g',
    origin: 'Guatemala',
    region: 'Huehuetenango',
    altitude: '1,600m - 2,000m',
    process: 'Yıkanmış (Washed)',
    roastLevel: 'Orta Kavrum',
    roastDots: 3,
    flavorNotes: ['Kakao Nibs', 'Kavrulmuş Badem', 'Esmer Şeker'],
    description:
      'Volkanik dağ eteklerinde yetişen yüksek rakımlı sert çekirdekler. Düşük asiditesi, yoğun kakao gövdesi ve damağı saran tatlı badem notalarıyla özellikle sütle buluştuğunda zengin bir lezzet vadeder.',
    brewRecommendation: {
      method: 'V60 / Filtre / Moka Pot',
      ratio: '16g kahve / 250g su (1:15.5)',
      temp: '92°C',
      grind: 'Orta (Medium)',
    },
    grindOptions: ['Çekirdek', 'V60', 'Filtre Kahve', 'Moka Pot', 'Espresso'],
    bgPedestal: 'bg-[#fdf2d0]',
    image: '/assets/product-beans.jpg',
  },
];

export function BlendCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedBean, setSelectedBean] = useState<RetailBeanProduct | null>(null);
  const { t, locale } = useLanguage();

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const openBeanModal = useCallback((bean: RetailBeanProduct) => {
    setSelectedBean(bean);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('bean', bean.id);
      window.history.replaceState(null, '', url.toString());
    }
  }, []);

  const closeBeanModal = useCallback(() => {
    setSelectedBean(null);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.delete('bean');
      window.history.replaceState(null, '', url.toString());
    }
  }, []);

  // Escape key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeBeanModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeBeanModal]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedBean) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedBean]);

  // Deep Link listener
  useEffect(() => {
    const checkDeepLink = () => {
      const params = new URLSearchParams(window.location.search);
      const beanId = params.get('bean');
      if (beanId) {
        const match = RETAIL_BEANS.find((b) => b.id === beanId);
        if (match) setSelectedBean(match);
      }
    };

    checkDeepLink();
    window.addEventListener('popstate', checkDeepLink);
    return () => window.removeEventListener('popstate', checkDeepLink);
  }, []);

  const getBeanData = (bean: RetailBeanProduct) => {
    if (locale === 'en' && RETAIL_BEANS_EN[bean.id]) {
      const en = RETAIL_BEANS_EN[bean.id];
      return {
        origin: en.origin,
        region: en.region,
        process: en.process,
        roastLevel: en.roastLevel,
        flavorNotes: en.flavorNotes,
        description: en.description,
        brewMethod: en.brewMethod,
        brewRatio: en.brewRatio,
        brewGrind: en.brewGrind,
      };
    }
    return {
      origin: bean.origin,
      region: bean.region,
      process: bean.process,
      roastLevel: bean.roastLevel,
      flavorNotes: bean.flavorNotes,
      description: bean.description,
      brewMethod: bean.brewRecommendation.method,
      brewRatio: bean.brewRecommendation.ratio,
      brewGrind: bean.brewRecommendation.grind,
    };
  };

  return (
    <section id="blends" className="scroll-mt-28 sm:scroll-mt-32 py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#0038a8]/15 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
        {/* Section Header with Desktop Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-[#0038a8]/20">
          <div className="space-y-1">
            <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-[#0038a8]/60 font-display">
              {t.blends.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0038a8] tracking-tight font-display uppercase">
              {t.blends.title}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 font-medium max-w-2xl pt-1">
              {t.blends.subtitle}
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            <button
              onClick={() => scroll('left')}
              className="w-9 h-9 rounded-full border border-[#0038a8]/30 flex items-center justify-center text-[#0038a8] hover:bg-[#faf8f2] active:scale-95 transition-all cursor-pointer"
              aria-label="Previous blend"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-9 h-9 rounded-full border border-[#0038a8]/30 flex items-center justify-center text-[#0038a8] hover:bg-[#faf8f2] active:scale-95 transition-all cursor-pointer"
              aria-label="Next blend"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Snap Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 scroll-smooth scroll-pl-1"
        >
          {RETAIL_BEANS.map((prod) => {
            const bData = getBeanData(prod);

            return (
              <div
                key={prod.id}
                onClick={() => openBeanModal(prod)}
                className="shrink-0 w-[78vw] sm:w-[300px] lg:w-[290px] snap-start group flex flex-col justify-between cursor-pointer select-none text-left p-4 sm:p-5 rounded-3xl bg-[#faf8f2] border-2 border-[#0038a8]/15 hover:border-[#0038a8] hover:shadow-md transition-all duration-300"
              >
                <div>
                  {/* Product Photo & Badge */}
                  <div className={`relative w-full aspect-square ${prod.bgPedestal} rounded-2xl overflow-hidden mb-4 border border-[#0038a8]/10`}>
                    <Image
                      src={assetPath(prod.image)}
                      alt={prod.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-400"
                    />
                    <div className="absolute top-3 left-3 bg-[#0038a8] text-white text-[9px] font-black px-2.5 py-0.5 rounded-full tracking-wider uppercase font-display">
                      {prod.badge}
                    </div>
                    <div className="absolute bottom-2.5 right-2.5 bg-white/90 backdrop-blur-xs text-[#0038a8] font-mono text-[10px] font-bold px-2 py-0.5 rounded-md border border-[#0038a8]/15">
                      {prod.weight}
                    </div>
                  </div>

                  {/* Typography */}
                  <div className="space-y-2 mb-3">
                    <div>
                      <h3 className="font-extrabold text-base text-[#0038a8] leading-snug font-display group-hover:opacity-80 transition-opacity">
                        {prod.name}
                      </h3>
                      <p className="text-xs text-gray-600 font-medium">
                        {prod.subName}
                      </p>
                    </div>

                    {/* Origin & Altitude */}
                    <div className="text-[11px] text-gray-700 font-semibold space-y-0.5">
                      <p className="flex items-center gap-1">
                        <span className="text-[#0038a8] font-bold">{locale === 'tr' ? 'Köken:' : 'Origin:'}</span> {bData.origin} ({prod.altitude})
                      </p>
                      <p className="text-[#0038a8]/80">
                        <span className="font-bold">{locale === 'tr' ? 'İşlem:' : 'Process:'}</span> {bData.process}
                      </p>
                    </div>

                    {/* Flavor Notes */}
                    <div className="pt-1 flex flex-wrap gap-1">
                      {bData.flavorNotes.slice(0, 3).map((note, nIdx) => (
                        <span
                          key={nIdx}
                          className="text-[10px] font-bold text-[#0038a8] bg-white border border-[#0038a8]/15 px-2 py-0.5 rounded-md"
                        >
                          {note}
                        </span>
                      ))}
                    </div>

                    {/* Roast Level Meter */}
                    <div className="pt-2 border-t border-dashed border-[#0038a8]/15 flex items-center justify-between text-[11px] font-semibold text-gray-600">
                      <span className="flex items-center gap-1">
                        <Flame className="w-3.5 h-3.5 text-[#0038a8]" />
                        <span>{bData.roastLevel}</span>
                      </span>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((dot) => (
                          <span
                            key={dot}
                            className={`w-1.5 h-1.5 rounded-full ${
                              dot <= prod.roastDots ? 'bg-[#0038a8]' : 'bg-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action */}
                <div className="pt-3 border-t border-[#0038a8]/15 flex items-center justify-between text-xs font-black text-[#0038a8] group-hover:translate-x-1 transition-transform uppercase tracking-wider font-display">
                  <span>{locale === 'tr' ? 'Çekirdek Detayları & Öğütüm' : 'Bean Specs & Grinds'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detailed Bean Passport Modal / Bottom Sheet */}
      {selectedBean && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={closeBeanModal}
        >
          {(() => {
            const bData = getBeanData(selectedBean);
            return (
              <div
                className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-[#faf8f2] rounded-t-3xl sm:rounded-3xl border-2 border-[#0038a8] shadow-2xl p-6 sm:p-8 space-y-6 animate-in slide-in-from-bottom-4 duration-300 select-none"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex items-start justify-between gap-4 border-b border-[#0038a8]/20 pb-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#0038a8] bg-[#0038a8]/10 px-2.5 py-0.5 rounded-full font-display">
                      {selectedBean.badge}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-[#0038a8] uppercase font-display tracking-tight">
                      {selectedBean.name}
                    </h3>
                    <p className="text-xs text-gray-600 font-medium">
                      {selectedBean.subName} &bull; <strong className="text-[#0038a8]">{selectedBean.weight}</strong>
                    </p>
                  </div>

                  <button
                    onClick={closeBeanModal}
                    className="w-9 h-9 rounded-full bg-white border border-[#0038a8]/20 flex items-center justify-center text-[#0038a8] hover:bg-[#0038a8] hover:text-white transition-colors cursor-pointer shrink-0"
                    aria-label={locale === 'tr' ? 'Kapat' : 'Close'}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
                  {bData.description}
                </p>

                {/* Specialty Passport Grid */}
                <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-white border border-[#0038a8]/15 text-xs">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                      {locale === 'tr' ? 'Köken & Bölge' : 'Origin & Region'}
                    </span>
                    <p className="font-bold text-[#0038a8]">{bData.origin}, {bData.region}</p>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                      {locale === 'tr' ? 'Rakım' : 'Altitude'}
                    </span>
                    <p className="font-bold text-[#0038a8]">{selectedBean.altitude}</p>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                      {locale === 'tr' ? 'İşleme Yöntemi' : 'Processing'}
                    </span>
                    <p className="font-bold text-[#0038a8]">{bData.process}</p>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                      {locale === 'tr' ? 'Kavrum Profili' : 'Roast Profile'}
                    </span>
                    <p className="font-bold text-[#0038a8]">{bData.roastLevel}</p>
                  </div>
                </div>

                {/* Tasting Notes */}
                <div className="space-y-2">
                  <span className="text-xs font-black uppercase tracking-wider text-[#0038a8] font-display flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{t.blends.flavorNotes}</span>
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {bData.flavorNotes.map((note, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-bold text-[#0038a8] bg-[#0038a8]/10 border border-[#0038a8]/20 px-3 py-1 rounded-full"
                      >
                        ★ {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Grinding Options */}
                <div className="space-y-2">
                  <span className="text-xs font-black uppercase tracking-wider text-[#0038a8] font-display">
                    ★ {locale === 'tr' ? 'Ücretsiz Taze Öğütüm Seçenekleri' : 'Free Custom Grinding Options'}
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                    {selectedBean.grindOptions.map((grind, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-xl bg-white border border-[#0038a8]/15 flex items-center gap-1.5 font-bold text-[#0038a8]"
                      >
                        <Check className="w-3.5 h-3.5 text-[#0038a8] shrink-0" />
                        <span>{grind}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommended Brew Parameters */}
                <div className="p-4 rounded-2xl bg-[#0038a8] text-white space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#fab80b] font-display">
                    ★ {t.blends.brewGuide}
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-white/90">
                    <div>
                      <span className="text-[10px] text-white/70 block">{t.blends.method}</span>
                      <strong>{bData.brewMethod}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-white/70 block">{t.blends.ratio}</span>
                      <strong>{bData.brewRatio}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-white/70 block">{t.blends.waterTemp}</span>
                      <strong>{selectedBean.brewRecommendation.temp}</strong>
                    </div>
                  </div>
                </div>

                {/* Action Bar */}
                <div className="pt-2">
                  <a
                    href={`https://wa.me/${STORE_INFO.contact.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                      locale === 'tr'
                        ? `Merhaba Jön Coffee, paket kahvelerinizden "${selectedBean.name} (${selectedBean.weight})" siparişi vermek istiyorum.`
                        : `Hello Jön Coffee, I would like to order packaged beans: "${selectedBean.name} (${selectedBean.weight})".`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-chamberlain-primary w-full py-3.5 sm:py-4 px-6 text-xs sm:text-sm justify-center cursor-pointer shadow-md"
                  >
                    <WhatsAppIcon className="w-4 h-4 shrink-0" />
                    <span>{t.blends.orderWhatsApp}</span>
                  </a>
                </div>
              </div>
            );
          })()}
        </div>
      )}
    </section>
  );
}
