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
    tag: 'Focused Blend & Espresso',
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
    <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
        {/* Okendo header */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="flex items-center justify-center gap-1 text-[#fab80b]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#fab80b]" />
            ))}
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-[#102341] tracking-tight font-display uppercase">
            1.200+ MUTLU YUDUM
          </h2>

          <p className="text-xs sm:text-base font-medium text-gray-600">
            İzmir Hatay mahallemizden ve misafirlerimizden doğrulanmış değerlendirmeler.
          </p>
        </div>

        {/* Mobile: Horizontal Snap Carousel | Desktop: 3-Col Grid */}
        <div className="flex sm:grid sm:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-4 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
          {REVIEWS.map((r) => (
            <div
              key={r.id}
              className="min-w-[270px] max-w-[300px] sm:min-w-0 sm:max-w-none snap-start shrink-0 p-5 sm:p-7 rounded-3xl bg-[#f8fafc] border border-gray-200 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex text-[#fab80b]">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#fab80b]" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[9px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-2.5 h-2.5" /> Doğrulanmış
                  </span>
                </div>

                <h3 className="font-extrabold text-sm sm:text-base text-[#102341] font-display">
                  &ldquo;{r.title}&rdquo;
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                  {r.review}
                </p>
              </div>

              <div className="pt-3 border-t border-gray-200 flex items-center justify-between text-xs">
                <div>
                  <strong className="font-bold text-[#102341] block text-xs">{r.name}</strong>
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
