'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { assetPath } from '@/lib/assets';

const CATEGORIES = [
  {
    title: 'Soğuk & Cold Brew',
    subtitle: '16H Yavaş Demleme',
    image: '/assets/product-coldbrew.jpg',
    href: '#menu',
  },
  {
    title: 'Taze Çekirdek',
    subtitle: '%100 Single Origin',
    image: '/assets/product-beans.jpg',
    href: '#menu',
  },
  {
    title: 'JÖN Sunrise',
    subtitle: 'Portakal + Double Espresso',
    image: '/assets/product-sunrise.jpg',
    href: '#ozeller',
  },
  {
    title: 'Affogato & Tatlı',
    subtitle: 'İtalyan Gelato Füzyonu',
    image: '/assets/product-affogato.jpg',
    href: '#ozeller',
  },
];

export function CategoryGrid() {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#fbf9f4] border-b border-gray-200">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-10">
        <div className="space-y-1">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-gray-400">
            Kategorilere Göre Keşfet
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#102341] tracking-tight font-display uppercase">
            HER MODA UYGUN BİR YUDUM
          </h2>
        </div>

        {/* 2x2 Grid on Mobile, 4-Col on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {CATEGORIES.map((cat, idx) => (
            <Link
              key={idx}
              href={cat.href}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-4/5 sm:aspect-4/5 bg-gray-100 flex flex-col justify-end p-3.5 sm:p-6 border border-gray-200 shadow-xs"
            >
              <Image
                src={assetPath(cat.image)}
                alt={cat.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102341]/90 via-[#102341]/30 to-transparent" />

              <div className="relative z-10 space-y-0.5 sm:space-y-1">
                <span className="text-[9px] sm:text-[11px] font-bold text-amber-300 uppercase tracking-wider block">
                  {cat.subtitle}
                </span>
                <div className="flex items-center justify-between">
                  <h3 className="text-sm sm:text-xl font-black text-white font-display leading-tight">
                    {cat.title}
                  </h3>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#102341] transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
