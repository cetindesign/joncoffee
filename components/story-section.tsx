'use client';

import Image from 'next/image';
import { STORE_INFO } from '@/data/store-info';
import { assetPath } from '@/lib/assets';
import { Coffee, Sparkles } from 'lucide-react';

export function StorySection() {
  return (
    <section id="karakterler" className="py-14 sm:py-24 px-3.5 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 sm:space-y-3">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-gray-400">
            Karakterler & Felsefemiz
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#102341] tracking-tight font-display uppercase leading-tight">
            İKİ KARAKTER, TEK TUTKU
          </h2>
          <p className="text-xs sm:text-base font-medium text-gray-600">
            Jön Coffee, İzmir Hatay&apos;da kahveyi hem derin bir odaklanma aracı hem de keyifli bir sürpriz olarak görenler için kuruldu.
          </p>
        </div>

        {/* 2-Column Mascot Persona Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {/* FOCUSED Card */}
          <div className="bg-[#f8fafc] rounded-3xl p-5 sm:p-10 border border-gray-200 flex flex-col justify-between space-y-4 sm:space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#102341] text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                  <Coffee className="w-3 h-3" /> FOCUSED
                </span>
                <span className="text-[11px] sm:text-xs font-bold text-gray-400">Derin Odaklanma</span>
              </div>

              <div className="flex items-center gap-4 sm:gap-6 pt-1">
                <div className="relative w-20 h-20 sm:w-28 sm:h-28 shrink-0 rounded-2xl bg-white border border-gray-200 p-2 shadow-xs">
                  <Image
                    src={assetPath('/assets/mascot-focused.png')}
                    alt="Focused Mascot"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#102341] font-display">
                    {STORE_INFO.mascots.focused.name}
                  </h3>
                  <p className="text-xs font-bold text-gray-500 mt-0.5">
                    {STORE_INFO.mascots.focused.role}
                  </p>
                  <blockquote className="mt-1.5 text-xs italic text-[#102341] font-semibold border-l-2 border-[#102341] pl-2">
                    {STORE_INFO.mascots.focused.quote}
                  </blockquote>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium pt-1">
                {STORE_INFO.mascots.focused.description} Laptopuyla saatlerce üreten, çalışan veya kitap okuyan mahalle sakinlerinin güvenilir yol arkadaşı.
              </p>
            </div>

            <div className="pt-3 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] sm:text-xs font-bold text-[#102341]">
              <span className="text-gray-400">Favorileri:</span>
              <span className="bg-white px-2.5 py-1 rounded-full border border-gray-200 shadow-xs text-center">
                Double Espresso &bull; Cold Brew &bull; Flat White
              </span>
            </div>
          </div>

          {/* SURPRISED Card */}
          <div className="bg-[#f8fafc] rounded-3xl p-5 sm:p-10 border border-gray-200 flex flex-col justify-between space-y-4 sm:space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#fab80b] text-[#102341] text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3 h-3" /> SURPRISED
                </span>
                <span className="text-[11px] sm:text-xs font-bold text-gray-400">Merak & Keşif</span>
              </div>

              <div className="flex items-center gap-4 sm:gap-6 pt-1">
                <div className="relative w-20 h-20 sm:w-28 sm:h-28 shrink-0 rounded-2xl bg-white border border-gray-200 p-2 shadow-xs">
                  <Image
                    src={assetPath('/assets/mascot-surprised.png')}
                    alt="Surprised Mascot"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#102341] font-display">
                    {STORE_INFO.mascots.surprised.name}
                  </h3>
                  <p className="text-xs font-bold text-gray-500 mt-0.5">
                    {STORE_INFO.mascots.surprised.role}
                  </p>
                  <blockquote className="mt-1.5 text-xs italic text-[#102341] font-semibold border-l-2 border-[#fab80b] pl-2">
                    {STORE_INFO.mascots.surprised.quote}
                  </blockquote>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium pt-1">
                {STORE_INFO.mascots.surprised.description} Kahve anını bir keşif ritüeli olarak gören, mevsimsel özel reçetelerle gününü neşelendiren tat kaşifi.
              </p>
            </div>

            <div className="pt-3 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] sm:text-xs font-bold text-[#102341]">
              <span className="text-gray-400">Favorileri:</span>
              <span className="bg-white px-2.5 py-1 rounded-full border border-gray-200 shadow-xs text-center">
                JÖN Sunrise &bull; Affogato &bull; Iced Mocha
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
