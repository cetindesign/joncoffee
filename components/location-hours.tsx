'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { STORE_INFO } from '@/data/store-info';
import { StatusBadge } from './status-badge';
import { assetPath } from '@/lib/assets';
import { MapPin, Navigation, Clock, Train, ExternalLink } from 'lucide-react';

export function LocationHours() {
  const [currentDayIndex, setCurrentDayIndex] = useState<number | null>(null);

  useEffect(() => {
    setCurrentDayIndex(new Date().getDay());
  }, []);

  return (
    <section id="konum" className="scroll-mt-20 sm:scroll-mt-24 py-14 sm:py-24 px-3.5 sm:px-6 lg:px-8 bg-[#fbf9f4] border-b border-gray-200">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2 sm:space-y-3">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-gray-400">
            Ziyaret & Ulaşım
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#102341] tracking-tight font-display uppercase leading-tight">
            İZMİR HATAY KAFEMİZ
          </h2>
          <p className="text-xs sm:text-base font-medium text-gray-600">
            İzmir Hatay&apos;ın merkezinde, metroya ve ana akslara yürüme mesafesinde sıcacık bir mola noktası.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left Column: Address & Photo */}
          <div className="lg:col-span-7 space-y-5">
            <div className="bg-white rounded-3xl p-5 sm:p-8 border border-gray-200 shadow-xs space-y-4 sm:space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#102341]">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  <h3 className="text-base sm:text-lg font-black font-display uppercase tracking-wide">
                    Adres & Konum
                  </h3>
                </div>
                <StatusBadge />
              </div>

              <p className="text-xs sm:text-base font-bold text-[#102341] leading-relaxed">
                {STORE_INFO.location.addressText}
              </p>

              {/* Metro Transport */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#f8fafc] border border-gray-100 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#102341] uppercase">
                  <Train className="w-3.5 h-3.5" />
                  Metro ile Ulaşım:
                </div>
                <p className="text-[11px] sm:text-xs text-gray-600 leading-relaxed font-medium">
                  <strong>İzmir Metrosu</strong> ile <strong>Hatay</strong> veya <strong>İzmirspor İstasyonu</strong>&apos;nda inerek 2-3 dakikalık yürüyüşle kafemize ulaşabilirsiniz.
                </p>
              </div>

              {/* Navigation CTAs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <a
                  href={STORE_INFO.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-chamberlain-primary text-xs py-3.5 text-center justify-center"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Google Haritalar</span>
                </a>

                <a
                  href={STORE_INFO.location.appleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-chamberlain-secondary text-xs py-3.5 text-center justify-center"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Apple Haritalar</span>
                </a>
              </div>
            </div>

            {/* Atmosphere Photo */}
            <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-xs h-60 sm:h-80 w-full">
              <Image
                src={assetPath('/assets/jon-table-atmosphere.jpg')}
                alt="Jön Coffee Atmosphere"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-3.5 left-3.5 bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded-full text-[11px] font-bold text-[#102341] shadow-sm">
                ☕ Jön Coffee Masa & Ambiyans
              </div>
            </div>
          </div>

          {/* Right Column: Weekly Hours */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-5 sm:p-8 border border-gray-200 shadow-xs space-y-5">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <div className="flex items-center gap-2 text-[#102341]">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                  <h3 className="text-base sm:text-lg font-black font-display uppercase tracking-wide">
                    Çalışma Saatleri
                  </h3>
                </div>
                <span className="text-[10px] sm:text-xs font-semibold text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">
                  Haftalık
                </span>
              </div>

              {/* Days List */}
              <div className="space-y-1.5">
                {STORE_INFO.hours.map((schedule) => {
                  const isToday = currentDayIndex === schedule.dayIndex;
                  return (
                    <div
                      key={schedule.day}
                      className={`flex items-center justify-between p-2.5 sm:p-3.5 rounded-2xl transition-all ${
                        isToday
                          ? 'bg-[#102341] text-white font-bold shadow-xs'
                          : 'bg-[#f8fafc] text-gray-700'
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        {isToday && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#fab80b] animate-pulse" />
                        )}
                        <span className="text-xs sm:text-sm font-bold">
                          {schedule.day}
                        </span>
                        {isToday && (
                          <span className="text-[9px] bg-white text-[#102341] font-bold px-1.5 py-0.2 rounded-full uppercase">
                            Bugün
                          </span>
                        )}
                      </div>

                      <span className="text-xs sm:text-sm font-semibold">
                        {schedule.open} - {schedule.close}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="p-3 rounded-2xl bg-amber-50 border border-amber-100 text-[11px] sm:text-xs text-amber-900 leading-relaxed font-medium">
                💡 Cuma ve Cumartesi günleri gece 00:00&apos;a kadar açık olup kahve ve tatlı servisimiz aralıksız sürmektedir.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
