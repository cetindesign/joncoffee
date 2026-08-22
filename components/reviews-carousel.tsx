'use client';

import { Star, CheckCircle2 } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: 'Deniz K.',
    location: 'İzmir, Hatay',
    tag: 'JÖN Sunrise Müdavimi',
    rating: 5,
    title: 'Hayatımda içtiğim en iyi kahve füzyonu!',
    review: 'Portakal suyuyla kahve mi olur demiştim ama JÖN Sunrise resmen ezberimi bozdu. Narenciye asiditesi ile espressonun katmanı efsane. Hatay metrosundan çıkıp hemen uğruyorum.',
    date: '2 gün önce',
  },
  {
    id: 2,
    name: 'Caner T.',
    location: 'İzmir, Konak',
    tag: 'Focused Blend & Espresso Sever',
    rating: 5,
    title: 'Çalışmak için İzmir’in en iyi kafesi',
    review: 'Saatlerce laptopla kod yazdım, prizler ve Wi-Fi hızı kusursuz. Focused blendin gövdesi tam istediğim sertlikte. Baristaların enerjisi de harika.',
    date: '1 hafta önce',
  },
  {
    id: 3,
    name: 'Selin A.',
    location: 'İzmir, Göztepe',
    tag: 'Affogato & Cold Brew',
    rating: 5,
    title: 'Köpeğimle en rahat ettiğimiz mekan!',
    review: 'Pet friendly olması benim için 1 numara. Dondurmalı Affogato’su inanılmaz lezzetli. Mahallenin böyle kaliteli bir kahveciye ihtiyacı vardı.',
    date: 'Geçen hafta',
  },
];

export function ReviewsCarousel() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Okendo header */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-1 text-[#fab80b]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#fab80b]" />
            ))}
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#102341] tracking-tight font-display uppercase">
            1.200+ MUTLU YUDUM
          </h2>

          <p className="text-sm sm:text-base font-medium text-gray-600">
            İzmir Hatay mahallemizden ve kahve severlerimizden gerçek değerlendirmeler.
          </p>
        </div>

        {/* 3-Column Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((r) => (
            <div
              key={r.id}
              className="p-8 rounded-3xl bg-[#f8fafc] border border-gray-200 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-[#fab80b]">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#fab80b]" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3" /> Doğrulanmış Misafir
                  </span>
                </div>

                <h3 className="font-extrabold text-base text-[#102341] font-display">
                  &ldquo;{r.title}&rdquo;
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                  {r.review}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200 flex items-center justify-between text-xs">
                <div>
                  <strong className="font-bold text-[#102341] block">{r.name}</strong>
                  <span className="text-[10px] text-gray-500 font-medium">{r.tag}</span>
                </div>
                <span className="text-[10px] text-gray-400">{r.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
