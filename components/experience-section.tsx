'use client';

import { STORE_INFO } from '@/data/store-info';
import { Coffee, Wifi, Heart, PawPrint, Sparkles, ShieldCheck, Sun } from 'lucide-react';

const ICONS_MAP: Record<string, React.ReactNode> = {
  Coffee: <Coffee className="w-6 h-6 text-jon-blue" />,
  Zap: <Wifi className="w-6 h-6 text-jon-blue" />,
  HeartHandshake: <Heart className="w-6 h-6 text-rose-600" />,
  PawPrint: <PawPrint className="w-6 h-6 text-amber-600" />,
};

export function ExperienceSection() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-jon-cream-paper relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border-2 border-jon-blue text-xs font-black tracking-wider uppercase text-jon-blue retro-shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-jon-yellow" />
            Mekan Deneyimi
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-jon-blue font-display">
            HATAY&apos;DA KENDİ EVİN GİBİ.
          </h2>
          <p className="text-jon-text-muted font-medium text-sm sm:text-base">
            Sadece iyi kahve değil; çalışabileceğin, dostlarınla buluşabileceğin, nefes alabileceğin konforlu bir yaşam alanı.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STORE_INFO.features.map((feat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border-2 border-jon-blue p-6 retro-shadow retro-shadow-hover flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-jon-cream border-2 border-jon-blue/20 flex items-center justify-center mb-4 retro-shadow-sm">
                  {ICONS_MAP[feat.icon] || <Coffee className="w-6 h-6 text-jon-blue" />}
                </div>
                <h3 className="text-lg font-black text-jon-blue font-display">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-jon-text-muted leading-relaxed font-medium mt-2">
                  {feat.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-jon-blue/10 flex items-center gap-1.5 text-[11px] font-bold text-jon-blue">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Jön Güvencesi</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
