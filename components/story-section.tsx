'use client';

import Image from 'next/image';
import { Coffee, Sparkles, ArrowRight } from 'lucide-react';
import { assetPath } from '@/lib/assets';

export function StorySection() {
  const scrollToMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="karakterler" className="scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#faf8f2] border-b border-[#0038a8]/15">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Editorial Title */}
        <div className="max-w-3xl space-y-3">
          <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-[#0038a8]/60 font-display">
            ★ Felsefemiz & Maskotlarımız
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0038a8] tracking-tight font-display uppercase leading-tight">
            İKİ FARKLI RUH HALİ, <br />
            TEK BİR KAHVE DENEYİMİ.
          </h2>
          <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed">
            Günün her anı aynı kahveyi istemezsin. Jön Coffee&apos;de menümüzü iki temel karaktere göre kurguladık: İşine odaklananlar ve yeni tatlar keşfetmek isteyenler.
          </p>
        </div>

        {/* 2 Characters (OPEN EDITORIAL SPLIT) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 divide-y lg:divide-y-0 lg:divide-x divide-[#0038a8]/15">
          {/* Character 1: Focused */}
          <div className="space-y-6 pt-6 lg:pt-0">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0">
                <Image
                  src={assetPath('/assets/mascot-focused.png')}
                  alt="Focused Mascot"
                  fill
                  className="object-contain"
                />
              </div>

              <div>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0038a8] text-white text-[10px] font-black uppercase tracking-wider font-display">
                  <Coffee className="w-3 h-3 text-white" /> ★ FOCUSED MODU ★
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#0038a8] font-display mt-1">
                  Derin Odaklanma & Dengeli Sertlik
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">
              Laptop açık, kulaklık takılı, kesintisiz çalışma saatleri. Yoğun gövde, bitter çikolata ve fındık notaları taşıyan single-origin espresso ve sert filtre kahveler.
            </p>

            <div className="space-y-2 text-xs text-gray-700 font-bold border-l-2 border-[#0038a8] pl-4">
              <p>&bull; <strong>Öne Çıkanlar:</strong> Double Espresso, Flat White, Americano, Cortado</p>
              <p>&bull; <strong>Ortam:</strong> Hızlı Wi-Fi, bol priz ve rahat çalışma köşeleri</p>
            </div>

            <a
              href="#menu"
              onClick={scrollToMenu}
              className="inline-flex items-center gap-2 text-xs font-black text-[#0038a8] hover:opacity-75 tracking-wider uppercase cursor-pointer font-display"
            >
              <span>Focused Menüsünü Gör</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Character 2: Surprised */}
          <div className="space-y-6 pt-8 lg:pt-0 lg:pl-16">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0">
                <Image
                  src={assetPath('/assets/mascot-surprised.png')}
                  alt="Surprised Mascot"
                  fill
                  className="object-contain"
                />
              </div>

              <div>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0038a8] text-[#fab80b] text-[10px] font-black uppercase tracking-wider font-display">
                  <Sparkles className="w-3 h-3 text-[#fab80b]" /> ★ SURPRISED MODU ★
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#0038a8] font-display mt-1">
                  Merak, Keşif & Ferahlatıcı Katmanlar
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">
              Arkadaşlarla keyifli sohbetler, gün ortası molası ve ezber bozan tat kontrastları. Taze sıkılmış portakal suyuyla buluşan espresso veya İtalyan gelato üzerine sıcak ristretto.
            </p>

            <div className="space-y-2 text-xs text-gray-700 font-bold border-l-2 border-[#0038a8] pl-4">
              <p>&bull; <strong>Öne Çıkanlar:</strong> JÖN Sunrise, Affogato, 16H Cold Brew, Iced Mocha</p>
              <p>&bull; <strong>Ortam:</strong> %100 Pet-Friendly teras, bahçe masaları ve sıcak sohbet</p>
            </div>

            <a
              href="#menu"
              onClick={scrollToMenu}
              className="inline-flex items-center gap-2 text-xs font-black text-[#0038a8] hover:opacity-75 tracking-wider uppercase cursor-pointer font-display"
            >
              <span>Surprised Menüsünü Gör</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
