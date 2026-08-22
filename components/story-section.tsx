'use client';

import Image from 'next/image';
import { STORE_INFO } from '@/data/store-info';
import { assetPath } from '@/lib/assets';
import { Coffee, Sparkles, ArrowRight } from 'lucide-react';

export function StorySection() {
  const scrollToMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="karakterler" className="scroll-mt-20 sm:scroll-mt-24 py-14 sm:py-20 px-3.5 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
        {/* Header */}
        <div className="space-y-1">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-gray-400">
            Karakterler & Felsefemiz
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#102341] tracking-tight font-display uppercase leading-tight">
            İKİ KARAKTER, TEK TUTKU
          </h2>
          <p className="text-xs sm:text-base font-medium text-gray-600 max-w-xl">
            Jön Coffee, İzmir Hatay&apos;da kahveyi hem derin bir odaklanma aracı hem de keyifli bir sürpriz olarak görenler için kuruldu.
          </p>
        </div>

        {/* 2-Column Mascot Persona Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {/* FOCUSED Card */}
          <a
            href="#menu"
            onClick={scrollToMenu}
            className="group bg-[#f8fafc] hover:bg-white hover:shadow-md hover:border-gray-300 transition-all rounded-3xl p-5 sm:p-8 border border-gray-200 flex flex-col justify-between space-y-4 cursor-pointer"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#102341] text-white text-[11px] font-bold uppercase tracking-wider">
                  <Coffee className="w-3 h-3" /> FOCUSED
                </span>
                <span className="text-[11px] font-bold text-gray-400">Derin Odaklanma</span>
              </div>

              <div className="flex items-center gap-4 pt-1">
                <div className="relative w-18 h-18 sm:w-24 sm:h-24 shrink-0 rounded-2xl bg-white border border-gray-200 p-1.5 shadow-xs aspect-square">
                  <Image
                    src={assetPath('/assets/mascot-focused.png')}
                    alt="Focused Mascot"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform"
                  />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#102341] font-display">
                    {STORE_INFO.mascots.focused.name}
                  </h3>
                  <p className="text-xs font-bold text-gray-500 mt-0.5">
                    {STORE_INFO.mascots.focused.role}
                  </p>
                  <blockquote className="mt-1 text-xs italic text-[#102341] font-semibold border-l-2 border-[#102341] pl-2">
                    {STORE_INFO.mascots.focused.quote}
                  </blockquote>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                {STORE_INFO.mascots.focused.description} Laptopuyla saatlerce üreten ve çalışanların güvenilir yol arkadaşı.
              </p>
            </div>

            <div className="pt-3 border-t border-gray-200 flex items-center justify-between text-xs font-bold text-[#102341]">
              <span className="text-gray-400">Favorileri:</span>
              <span className="text-xs font-bold text-[#102341] group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                Focused Menüsünü Gör <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </a>

          {/* SURPRISED Card */}
          <a
            href="#menu"
            onClick={scrollToMenu}
            className="group bg-[#f8fafc] hover:bg-white hover:shadow-md hover:border-gray-300 transition-all rounded-3xl p-5 sm:p-8 border border-gray-200 flex flex-col justify-between space-y-4 cursor-pointer"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#fab80b] text-[#102341] text-[11px] font-bold uppercase tracking-wider">
                  <Sparkles className="w-3 h-3" /> SURPRISED
                </span>
                <span className="text-[11px] font-bold text-gray-400">Merak & Keşif</span>
              </div>

              <div className="flex items-center gap-4 pt-1">
                <div className="relative w-18 h-18 sm:w-24 sm:h-24 shrink-0 rounded-2xl bg-white border border-gray-200 p-1.5 shadow-xs aspect-square">
                  <Image
                    src={assetPath('/assets/mascot-surprised.png')}
                    alt="Surprised Mascot"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform"
                  />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#102341] font-display">
                    {STORE_INFO.mascots.surprised.name}
                  </h3>
                  <p className="text-xs font-bold text-gray-500 mt-0.5">
                    {STORE_INFO.mascots.surprised.role}
                  </p>
                  <blockquote className="mt-1 text-xs italic text-[#102341] font-semibold border-l-2 border-[#fab80b] pl-2">
                    {STORE_INFO.mascots.surprised.quote}
                  </blockquote>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                {STORE_INFO.mascots.surprised.description} Kahve anını ritüele dönüştüren, mevsimsel özel reçetelerle gününü neşelendiren tat kaşifi.
              </p>
            </div>

            <div className="pt-3 border-t border-gray-200 flex items-center justify-between text-xs font-bold text-[#102341]">
              <span className="text-gray-400">Favorileri:</span>
              <span className="text-xs font-bold text-[#102341] group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                Surprised Menüsünü Gör <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
