'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight, X, Sparkles, Check, Flame } from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
import { assetPath } from '@/lib/assets';
import { STORE_INFO } from '@/data/store-info';

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

const RETAIL_BEANS: RetailBeanProduct[] = [
  {
    id: 'bean-house-blend',
    name: 'Jön House Blend Espresso',
    subName: 'Colombia Huila & Ethiopia Sidamo',
    badge: '★ İMZA HARMAN ★',
    weight: '250g / 1000g',
    origin: 'Kolombiya & Etiyopya',
    region: 'Huila & Sidamo',
    altitude: '1,650m - 1,950m',
    process: 'Yıkanmış & Doğal (Washed & Natural)',
    roastLevel: 'Orta - Yoğun Kavrum',
    roastDots: 4,
    flavorNotes: ['Bitter Çikolata', 'Fındık Kreması', 'Karamel'],
    description:
      'Dükkanımızda espresso ve sütlü kahvelerimizin temelini oluşturan imza harmanımız. Yoğun kreması, fındıksı gövdesi ve tatlı karamel bitişiyle hem ev tipi espresso makineleri hem de moka pot için idealdir.',
    brewRecommendation: {
      method: 'Espresso / Moka Pot',
      ratio: '18g in / 36g out (1:2)',
      temp: '93°C',
      grind: 'İnce (Fine)',
    },
    grindOptions: ['Çekirdek', 'Espresso', 'Moka Pot', 'Filtre Kahve'],
    bgPedestal: 'bg-[#d8e7f5]',
    image: '/assets/product-beans.jpg',
  },
  {
    id: 'bean-ethiopia-yirgacheffe',
    name: 'Ethiopia Yirgacheffe G1',
    subName: 'Single Origin Specialty Washed',
    badge: '★ 88+ SCAA PUANI ★',
    weight: '250g',
    origin: 'Etiyopya',
    region: 'Yirgacheffe, Gedeb',
    altitude: '1,900m - 2,200m',
    process: 'Tam Yıkanmış (Fully Washed)',
    roastLevel: 'Açık - Orta Kavrum',
    roastDots: 2,
    flavorNotes: ['Yasemin Çiçeği', 'Bergamot', 'Limon Otu', 'Şeftali'],
    description:
      'Dünya Nitelikli Kahve Birliği (SCA) protokolünde 88+ puan almış mikrolot seçki. İnce çiçeksi aromaları, bergamot narenciye asiditesi ve çayımsı hafif gövdesiyle pour-over ve V60 demlemelerinde eşsiz bir berraklık sunar.',
    brewRecommendation: {
      method: 'V60 / Chemex / Filtre',
      ratio: '15g kahve / 240g su (1:16)',
      temp: '92°C - 94°C',
      grind: 'Orta (Medium)',
    },
    grindOptions: ['Çekirdek', 'V60 / Chemex', 'Aeropress', 'Filtre Kağıdı'],
    bgPedestal: 'bg-[#fee9d7]',
    image: '/assets/product-beans.jpg',
  },
  {
    id: 'bean-colombia-supremo',
    name: 'Colombia Supremo Huila',
    subName: 'Single Origin Specialty Natural',
    badge: '★ YÜKSEK GÖVDE ★',
    weight: '250g / 1000g',
    origin: 'Kolombiya',
    region: 'San Agustin, Huila',
    altitude: '1,700m - 1,900m',
    process: 'Doğal & Yıkanmış (Washed)',
    roastLevel: 'Orta Kavrum',
    roastDots: 3,
    flavorNotes: ['Kırmızı Elma', 'Sütlü Çikolata', 'Bal', 'Ceviz'],
    description:
      'Günün her saati keyifle içilebilecek dengeli, meyvemsi ve tatlı bir klasik. Kırmızı elma asiditesiyle birleşen sütlü çikolata gövdesi hem filtre demlemelerde hem de cold brew hazırlığında mükemmel sonuç verir.',
    brewRecommendation: {
      method: 'Filtre Kahve / French Press',
      ratio: '16g kahve / 250g su (1:15.5)',
      temp: '93°C',
      grind: 'Orta-Kalın (Medium-Coarse)',
    },
    grindOptions: ['Çekirdek', 'Filtre Kahve', 'French Press', 'Moka Pot'],
    bgPedestal: 'bg-[#e2f3ec]',
    image: '/assets/product-beans.jpg',
  },
  {
    id: 'bean-guatemala-huehue',
    name: 'Guatemala Huehuetenango',
    subName: 'Single Origin Specialty Washed',
    badge: '★ DENGELİ & TATLI ★',
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

  return (
    <section id="blends" className="scroll-mt-28 sm:scroll-mt-32 py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#0038a8]/15 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
        {/* Section Header with Desktop Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-[#0038a8]/20">
          <div className="space-y-1">
            <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-[#0038a8]/60 font-display">
              ★ NİTELİKLİ ÇEKİRDEK & TAZE KAVRUM ★
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0038a8] tracking-tight font-display uppercase">
              PAKET KAHVELERİMİZ (250G / 1KG)
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 font-medium max-w-2xl pt-1">
              Haftalık taze kavrulan tek köken ve imza harman çekirdeklerimiz. Dilediğiniz demleme ekipmanına göre dükkanımızda taze öğütülür.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            <button
              onClick={() => scroll('left')}
              className="w-9 h-9 rounded-full border border-[#0038a8]/30 flex items-center justify-center text-[#0038a8] hover:bg-[#faf8f2] active:scale-95 transition-all cursor-pointer"
              aria-label="Önceki paket"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-9 h-9 rounded-full border border-[#0038a8]/30 flex items-center justify-center text-[#0038a8] hover:bg-[#faf8f2] active:scale-95 transition-all cursor-pointer"
              aria-label="Sonraki paket"
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
          {RETAIL_BEANS.map((prod) => (
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
                      <span className="text-[#0038a8] font-bold">Köken:</span> {prod.origin} ({prod.altitude})
                    </p>
                    <p className="text-[#0038a8]/80">
                      <span className="font-bold">İşlem:</span> {prod.process}
                    </p>
                  </div>

                  {/* Flavor Notes */}
                  <div className="pt-1 flex flex-wrap gap-1">
                    {prod.flavorNotes.slice(0, 3).map((note, nIdx) => (
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
                      <span>{prod.roastLevel}</span>
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
                <span>Çekirdek Detayları & Öğütüm</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Bean Passport Modal / Bottom Sheet */}
      {selectedBean && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={closeBeanModal}
        >
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
                aria-label="Kapat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
              {selectedBean.description}
            </p>

            {/* Specialty Passport Grid */}
            <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-white border border-[#0038a8]/15 text-xs">
              <div className="space-y-0.5">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Köken & Bölge</span>
                <p className="font-bold text-[#0038a8]">{selectedBean.origin}, {selectedBean.region}</p>
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Rakım</span>
                <p className="font-bold text-[#0038a8]">{selectedBean.altitude}</p>
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">İşleme Yöntemi</span>
                <p className="font-bold text-[#0038a8]">{selectedBean.process}</p>
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Kavrum Profili</span>
                <p className="font-bold text-[#0038a8]">{selectedBean.roastLevel}</p>
              </div>
            </div>

            {/* Tasting Notes */}
            <div className="space-y-2">
              <span className="text-xs font-black uppercase tracking-wider text-[#0038a8] font-display flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Tadım Notları</span>
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedBean.flavorNotes.map((note, idx) => (
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
                ★ Ücretsiz Taze Öğütüm Seçenekleri
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
                ★ Barista Demleme Tavsiyesi
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-white/90">
                <div>
                  <span className="text-[10px] text-white/70 block">Yöntem</span>
                  <strong>{selectedBean.brewRecommendation.method}</strong>
                </div>
                <div>
                  <span className="text-[10px] text-white/70 block">Oran (Ratio)</span>
                  <strong>{selectedBean.brewRecommendation.ratio}</strong>
                </div>
                <div>
                  <span className="text-[10px] text-white/70 block">Su Sıcaklığı</span>
                  <strong>{selectedBean.brewRecommendation.temp}</strong>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-2">
              <a
                href={`https://wa.me/${STORE_INFO.contact.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                  `Merhaba Jön Coffee, paket kahvelerinizden "${selectedBean.name} (${selectedBean.weight})" siparişi vermek istiyorum.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-chamberlain-primary w-full py-3.5 sm:py-4 px-6 text-xs sm:text-sm justify-center cursor-pointer shadow-md"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>WhatsApp ile Paket Siparişi Ver</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
