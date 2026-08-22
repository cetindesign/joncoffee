'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Star, ArrowRight } from 'lucide-react';
import { assetPath } from '@/lib/assets';

interface BlendProduct {
  id: string;
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
    id: 'blend-focused-espresso',
    name: 'Focused Espresso Blend',
    subName: 'Single Origin Colombia & Ethiopia (250g)',
    badge: 'EN ÇOK TERCİH EDİLEN',
    bgPedestal: 'bg-[#d8e7f5]',
    roastLevel: 'Orta - Yoğun Kavrum',
    roastDots: 4,
    flavorNotes: ['Bitter Çikolata', 'Fındık', 'Karamel'],
    reviewsCount: 148,
    image: '/assets/product-beans.jpg',
  },
  {
    id: 'blend-jon-sunrise',
    name: 'JÖN Sunrise (İmza İçecek)',
    subName: 'Taze Portakal Suyu + Soğuk Double Espresso',
    badge: 'İMZA REÇETE',
    bgPedestal: 'bg-[#fee9d7]',
    roastLevel: 'Ferahlatıcı & Katmanlı',
    roastDots: 2,
    flavorNotes: ['Taze Portakal', 'Narenciye', 'Yoğun Espresso'],
    reviewsCount: 215,
    image: '/assets/product-sunrise.jpg',
  },
  {
    id: 'blend-cold-brew-bottle',
    name: '16 Saat Demleme Cold Brew',
    subName: 'Özel Seçki Yavaş Soğuk Damlatma (Şişe)',
    badge: '16H DEMLEME',
    bgPedestal: 'bg-[#e2f3ec]',
    roastLevel: 'Yumuşak & İpeksi İçim',
    roastDots: 3,
    flavorNotes: ['Kakao Nibs', 'Kuru Üzüm', 'Düşük Asidite'],
    reviewsCount: 96,
    image: '/assets/product-coldbrew.jpg',
  },
  {
    id: 'blend-affogato-gelato',
    name: 'Affogato Al Caffe',
    subName: 'Vanilyalı İtalyan Gelato + Sıcak Espresso',
    badge: 'TATLI DOKUNUŞ',
    bgPedestal: 'bg-[#fdf2d0]',
    roastLevel: 'Sıcak & Soğuk Füzyon',
    roastDots: 3,
    flavorNotes: ['Vanilya', 'Süt Kreması', 'Ristretto'],
    reviewsCount: 84,
    image: '/assets/product-affogato.jpg',
  },
];

export function BlendCarousel() {
  return (
    <section id="blends" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-gray-100">
          <div className="space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
              Koleksiyon & Reçeteler
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#102341] tracking-tight font-display uppercase leading-tight">
              ÖNE ÇIKAN KAHVELERİMİZ
            </h2>
            <p className="text-xs sm:text-base font-medium text-gray-600 max-w-lg">
              İzmir Hatay kafemizde taze kavrulan ve özenle hazırlanan favori lezzetlerimiz.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#102341] uppercase tracking-wider bg-gray-100 px-3.5 py-1.5 rounded-full">
              ✦ %100 SPECIALTY ARABICA
            </span>
          </div>
        </div>

        {/* 4-Card Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-3xl border border-gray-200 p-5 sm:p-6 flex flex-col justify-between hover:border-gray-300 hover:shadow-md transition-all duration-200"
            >
              <div>
                {/* Top Badge & Rating */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-bold tracking-wider uppercase bg-[#e3ecf1] text-[#102341] px-2.5 py-0.5 rounded-full">
                    {prod.badge}
                  </span>

                  <div className="flex items-center gap-1 text-xs text-gray-600 font-semibold">
                    <Star className="w-3.5 h-3.5 fill-[#fab80b] text-[#fab80b]" />
                    <span>4.9 ({prod.reviewsCount})</span>
                  </div>
                </div>

                {/* Product Photo Container */}
                <div className={`relative w-full aspect-square ${prod.bgPedestal} rounded-2xl overflow-hidden mb-5`}>
                  <Image
                    src={assetPath(prod.image)}
                    alt={prod.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Info */}
                <div className="space-y-1.5 mb-6">
                  <h3 className="font-extrabold text-base sm:text-lg text-[#102341] leading-snug font-display">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-gray-500 font-medium line-clamp-1">
                    {prod.subName}
                  </p>

                  {/* Flavor Notes */}
                  <div className="flex flex-wrap gap-1 pt-2">
                    {prod.flavorNotes.map((note) => (
                      <span
                        key={note}
                        className="text-[10px] font-semibold text-gray-600 bg-gray-100 px-2 py-0.5 rounded-md"
                      >
                        {note}
                      </span>
                    ))}
                  </div>

                  {/* Roast Meter */}
                  <div className="pt-2.5 flex items-center justify-between text-[11px] font-semibold text-gray-500">
                    <span>{prod.roastLevel}</span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((dot) => (
                        <span
                          key={dot}
                          className={`w-2 h-2 rounded-full ${
                            dot <= prod.roastDots ? 'bg-[#102341]' : 'bg-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="pt-3 border-t border-gray-100">
                <Link
                  href="#menu"
                  className="btn-chamberlain-secondary w-full py-3 text-xs tracking-wider justify-center"
                >
                  <span>Menüde İncele</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
