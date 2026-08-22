'use client';

export function AnnouncementBar() {
  const messages = [
    '✦ İZMİR HATAY’IN YENİ NESİL MAHALLE KAHVECİSİ',
    '✦ %100 SPECIALTY GRADE ARABICA ÇEKİRDEKLER',
    '✦ FOCUSED & SURPRISED RUHUYLA',
    '✦ İMZA LEZZET JÖN SUNRISE ŞİMDİ SERVİSTE',
    '✦ PET FRIENDLY & YÜKSEK HIZLI WI-FI',
    '✦ 350₺ ÜZERİ PAKET KAHVELERDE ÜCRETSİZ KARGO',
  ];

  return (
    <div className="bg-jon-blue text-white overflow-hidden py-2 text-[11px] sm:text-xs font-black tracking-widest uppercase select-none border-b border-jon-blue-hover">
      <div className="flex w-max animate-marquee">
        {[...messages, ...messages, ...messages].map((msg, i) => (
          <span key={i} className="mx-4 flex items-center gap-2 shrink-0">
            <span>{msg}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
