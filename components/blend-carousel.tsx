'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { assetPath } from '@/lib/assets';

interface BlendProduct {
  id: string;
  menuId: string;
  name: string;
  subName: string;
  badge: string;
  bgPedestal: string;
  roastLevel: string;
  roastDots: number;
  flavorNotes: string[];
  reviewsCount: number;
  image: string;
}

const PRODUCTS: BlendProduct[] = [
  {
    id: 'blend-house-espresso',
    menuId: 'espresso',
    name: 'Jön House Blend Espresso',
    subName: 'Single Origin Colombia & Ethiopia (250g)',
    badge: '★ EN ÇOK TERCİH EDİLEN ★',
    bgPedestal: 'bg-[#d8e7f5]',
    roastLevel: 'Orta - Yoğun Kavrum',
    roastDots: 4,
    flavorNotes: ['Bitter Çikolata', 'Fındık', 'Karamel'],
    reviewsCount: 148,
    image: '/assets/product-beans.jpg',
  },
  {
    id: 'blend-jon-sunrise',
    menuId: 'jon-sunrise',
    name: 'JÖN Sunrise (İmza İçecek)',
    subName: 'Taze Portakal Suyu + Soğuk Double Espresso',
    badge: '★ İMZA REÇETE ★',
    bgPedestal: 'bg-[#fee9d7]',
    roastLevel: 'Ferahlatıcı & Katmanlı',
    roastDots: 2,
    flavorNotes: ['Taze Portakal', 'Narenciye', 'Yoğun Espresso'],
    reviewsCount: 215,
    image: '/assets/product-sunrise.jpg',
  },
  {
    id: 'blend-cold-brew-bottle',
    menuId: 'cold-brew',
    name: '16 Saat Demleme Cold Brew',
    subName: 'Özel Seçki Yavaş Soğuk Damlatma (Şişe)',
    badge: '★ 16H SOĞUK DEMLEME ★',
    bgPedestal: 'bg-[#e2f3ec]',
    roastLevel: 'Yumuşak & İpeksi İçim',
    roastDots: 3,
    flavorNotes: ['Kakao Nibs', 'Kuru Üzüm', 'Düşük Asidite'],
    reviewsCount: 96,
    image: '/assets/product-coldbrew.jpg',
  },
  {
    id: 'blend-affogato-gelato',
    menuId: 'affogato',
    name: 'Affogato Al Caffe',
    subName: 'Vanilyalı İtalyan Gelato + Sıcak Espresso',
    badge: '★ TATLI DOKUNUŞ ★',
    bgPedestal: 'bg-[#fdf2d0]',
    roastLevel: 'Sıcak & Soğuk Füzyon',
    roastDots: 3,
    flavorNotes: ['Vanilya', 'Süt Kreması', 'Ristretto'],
    reviewsCount: 84,
    image: '/assets/product-affogato.jpg',
  },
];

export function BlendCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleOpenItem = (e: React.MouseEvent, menuId: string) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('item', menuId);
      window.history.replaceState(null, '', url.toString());
      window.dispatchEvent(new CustomEvent('open-menu-item', { detail: { itemId: menuId } }));
    }
  };

  return (
    <section id="blends" className="scroll-mt-20 sm:scroll-mt-24 py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#0038a8]/15 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
        {/* Section Header with Desktop Controls */}
        <div className="flex items-end justify-between gap-4 pb-4 border-b border-[#0038a8]/20">
          <div className="space-y-1">
            <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-[#0038a8]/60 font-display">
              ★ Koleksiyon & Reçeteler
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0038a8] tracking-tight font-display uppercase">
              ÖNE ÇIKAN KAHVELERİMİZ
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-9 h-9 rounded-full border border-[#0038a8]/30 flex items-center justify-center text-[#0038a8] hover:bg-[#faf8f2] active:scale-95 transition-all cursor-pointer"
              aria-label="Önceki"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-9 h-9 rounded-full border border-[#0038a8]/30 flex items-center justify-center text-[#0038a8] hover:bg-[#faf8f2] active:scale-95 transition-all cursor-pointer"
              aria-label="Sonraki"
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
          {PRODUCTS.map((prod) => (
            <button
              key={prod.id}
              onClick={(e) => handleOpenItem(e, prod.menuId)}
              className="shrink-0 w-[72vw] sm:w-[280px] lg:w-[270px] snap-start group flex flex-col justify-between cursor-pointer select-none text-left"
            >
              <div>
                {/* Product Photo */}
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
                </div>

                {/* Typography */}
                <div className="space-y-1.5 mb-3">
                  <h3 className="font-extrabold text-base text-[#0038a8] leading-snug font-display group-hover:opacity-80 transition-opacity">
                    {prod.name}
                  </h3>

                  <p className="text-xs text-gray-600 font-medium line-clamp-1">
                    {prod.subName}
                  </p>

                  <p className="text-[11px] font-bold text-gray-700 pt-0.5">
                    Notalar: {prod.flavorNotes.join(' • ')}
                  </p>

                  <div className="pt-2 flex items-center justify-between text-[11px] font-semibold text-gray-500">
                    <span>{prod.roastLevel}</span>
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
              <div className="pt-2 flex items-center justify-between text-xs font-black text-[#0038a8] group-hover:translate-x-1 transition-transform uppercase tracking-wider font-display">
                <span>Reçeteyi İncele</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
