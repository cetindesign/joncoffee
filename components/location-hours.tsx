'use client';

import Image from 'next/image';
import { STORE_INFO } from '@/data/store-info';
import { assetPath } from '@/lib/assets';
import { StatusBadge } from './status-badge';
import { MapPin, Navigation, Compass } from 'lucide-react';

export function LocationHours() {
  const currentDayIndex = new Date().getDay();

  return (
    <section id="konum" className="scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#0038a8]/15">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-[#0038a8]/20">
          <div className="space-y-1">
            <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-[#0038a8]/60 font-display">
              ★ Ziyaret & Ulaşım
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0038a8] tracking-tight font-display uppercase">
              İZMİR HATAY KAFEMİZ
            </h2>
          </div>

          <StatusBadge showDetails />
        </div>

        {/* 2-Column Editorial Store Guide */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Col: Location, Metro & Photos (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-[#0038a8]/60 font-display">
                ★ Açık Adres & Metro
              </span>
              <p className="text-lg sm:text-xl font-black text-[#0038a8] font-display">
                {STORE_INFO.location.addressText}
              </p>
              <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">
                İzmir Metrosu <strong>Hatay İstasyonu</strong> veya <strong>İzmirspor İstasyonu</strong>&apos;nda inerek sadece 2 dakikalık düzayak yürüyüşle kafemize ulaşabilirsiniz.
              </p>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={STORE_INFO.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-chamberlain-primary py-3.5 px-6 text-xs"
              >
                <MapPin className="w-4 h-4" />
                <span>Google Haritalar</span>
              </a>

              <a
                href={STORE_INFO.location.appleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-chamberlain-secondary py-3.5 px-6 text-xs"
              >
                <Navigation className="w-4 h-4 text-[#0038a8]" />
                <span>Apple Haritalar</span>
              </a>
            </div>

            {/* Atmosphere Photo */}
            <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-[#0038a8]/15">
              <Image
                src={assetPath('/assets/location-facade.jpg')}
                alt="Jön Coffee İzmir Hatay Girişi"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Col: Weekly Hours Typographic Table (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 pb-2 border-b border-[#0038a8]/20">
              <Compass className="w-4 h-4 text-[#0038a8]" />
              <h3 className="font-black text-xs uppercase tracking-widest text-[#0038a8] font-display">
                HAFTALIK ÇALIŞMA SAATLERİ
              </h3>
            </div>

            {/* Clean Typographic Hours Rows */}
            <div className="divide-y divide-[#0038a8]/10 text-xs sm:text-sm">
              {STORE_INFO.hours.map((item) => {
                const isToday = item.dayIndex === currentDayIndex;
                return (
                  <div
                    key={item.dayIndex}
                    className={`py-3 flex items-center justify-between transition-colors ${
                      isToday ? 'font-black text-[#0038a8]' : 'text-gray-700 font-medium'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span>{item.day}</span>
                      {isToday && (
                        <span className="text-[9px] font-black bg-[#0038a8] text-white px-2 py-0.5 rounded-full uppercase tracking-wider font-display">
                          Bugün
                        </span>
                      )}
                    </div>

                    <span className="font-mono text-xs tracking-tight text-right font-bold">
                      {item.isOpen ? `${item.open} - ${item.close}` : 'Kapalı'}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Note */}
            <div className="pt-4 border-t border-[#0038a8]/15 space-y-1 text-xs text-gray-600 font-medium">
              <p>&bull; Pazar günleri kapalıyız.</p>
              <p>&bull; Pazartesi - Cumartesi arası 09:00 - 20:30 hizmet vermekteyiz.</p>
              <p>&bull; Evcil hayvan dostu terasımız çalışma saatleri boyunca açıktır.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
