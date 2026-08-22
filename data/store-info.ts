export interface OperatingHours {
  day: string;
  shortDay: string;
  dayIndex: number; // 0 = Sunday, 1 = Monday, ...
  open: string;
  close: string;
  isOpen: boolean;
}

export const STORE_INFO = {
  name: 'Jön Coffees Co.',
  tagline: "İzmir Hatay'ın Yeni Nesil Mahalle Kahvecisi",
  subTagline: 'Focused & Surprised ruhuyla, özenle kavrulmuş çekirdekler ve iyi kahve tutkusu.',
  location: {
    neighborhood: 'Hatay',
    district: 'Konak / Karabağlar',
    city: 'İzmir',
    country: 'Türkiye',
    addressText: "İnönü Caddesi Yakını, Hatay / İzmir (İzmirspor & Hatay Metro İstasyonlarına Yürüme Mesafesinde)",
    googleMapsUrl: 'https://maps.google.com/?q=Jon+Coffee+Hatay+Izmir',
    appleMapsUrl: 'https://maps.apple.com/?q=Jon+Coffee+Hatay+Izmir',
    coordinates: {
      lat: 38.4065,
      lng: 27.1125,
    },
  },
  hours: [
    { day: 'Pazartesi', shortDay: 'Pzt', dayIndex: 1, open: '09:00', close: '20:30', isOpen: true },
    { day: 'Salı', shortDay: 'Sal', dayIndex: 2, open: '09:00', close: '20:30', isOpen: true },
    { day: 'Çarşamba', shortDay: 'Çar', dayIndex: 3, open: '09:00', close: '20:30', isOpen: true },
    { day: 'Perşembe', shortDay: 'Per', dayIndex: 4, open: '09:00', close: '20:30', isOpen: true },
    { day: 'Cuma', shortDay: 'Cum', dayIndex: 5, open: '09:00', close: '20:30', isOpen: true },
    { day: 'Cumartesi', shortDay: 'Cmt', dayIndex: 6, open: '09:00', close: '20:30', isOpen: true },
    { day: 'Pazar', shortDay: 'Paz', dayIndex: 0, open: '', close: '', isOpen: false },
  ] as OperatingHours[],
  socials: {
    instagram: 'https://instagram.com/joncoffees',
    instagramHandle: '@joncoffees',
  },
  features: [
    {
      icon: 'Coffee',
      title: '%100 Nitelikli Arabica',
      description: 'Single origin ve özel harman çekirdekler, ideal profilde taze kavrum.',
    },
    {
      icon: 'Zap',
      title: 'Hızlı & Kesintisiz Wi-Fi',
      description: 'Çalışmak ve üretmek isteyen "Focused" zihinler için prizli ve konforlu masalar.',
    },
    {
      icon: 'HeartHandshake',
      title: 'Samimi Mahalle Kültürü',
      description: 'Güler yüzlü baristalar ve tanıdık sıcak bir atmosfer.',
    },
    {
      icon: 'PawPrint',
      title: 'Pet Friendly',
      description: 'Tüylü dostlarınız mekanımızın en sevilen misafirleridir.',
    },
  ],
  faqs: [
    {
      q: 'Kahve çekirdekleriniz nereden geliyor?',
      a: '%100 Specialty Grade (Nitelikli) Arabica çekirdeklerimizi Kolombiya, Etiyopya ve Brezilya’nın saygın çiftliklerinden temin ediyor; profiline uygun derecelerde haftalık taze kavuruyoruz.',
    },
    {
      q: 'Kafede bilgisayarla çalışmak için uygun ortam var mı?',
      a: 'Evet! Focused masalarımızda prizler ve yüksek hızlı fiber Wi-Fi mevcuttur. İş veya ders için sessiz ve odaklanmaya uygun köşeler sunuyoruz.',
    },
    {
      q: 'Evcil hayvanımla gelebilir miyim?',
      a: 'Kesinlikle! Jön Coffee %100 pet-friendly bir mekandır. Can dostlarınızla birlikte hem iç mekanda hem terasımızda keyifle vakit geçirebilirsiniz.',
    },
    {
      q: 'Bitkisel veya laktozsuz süt alternatifleriniz var mı?',
      a: 'Evet, tüm kahvelerimizi laktozsuz süt, yulaf sütü veya badem sütü ile hazırlayabiliyoruz.',
    },
    {
      q: 'En yakın metro istasyonu hangisi?',
      a: 'İzmir Metrosu Hatay veya İzmirspor istasyonlarından çıkıp 2-3 dakikalık düzayak yürüyüşle kafemize ulaşabilirsiniz.',
    },
    {
      q: 'Çekirdek kahve satışı yapıyor musunuz?',
      a: 'Evet, kafemizde taze kavrulmuş paket çekirdeklerimizi satın alabilir; demleme yönteminize göre (V60, French Press, Espresso vb.) ücretsiz çektirebilirsiniz.',
    },
  ],
};
