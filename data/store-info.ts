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
    { day: 'Pazartesi', shortDay: 'Pzt', dayIndex: 1, open: '08:30', close: '23:30', isOpen: true },
    { day: 'Salı', shortDay: 'Sal', dayIndex: 2, open: '08:30', close: '23:30', isOpen: true },
    { day: 'Çarşamba', shortDay: 'Çar', dayIndex: 3, open: '08:30', close: '23:30', isOpen: true },
    { day: 'Perşembe', shortDay: 'Per', dayIndex: 4, open: '08:30', close: '23:30', isOpen: true },
    { day: 'Cuma', shortDay: 'Cum', dayIndex: 5, open: '08:30', close: '00:00', isOpen: true },
    { day: 'Cumartesi', shortDay: 'Cmt', dayIndex: 6, open: '09:00', close: '00:00', isOpen: true },
    { day: 'Pazar', shortDay: 'Paz', dayIndex: 0, open: '09:30', close: '23:00', isOpen: true },
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
  mascots: {
    focused: {
      name: 'Focused',
      role: 'Odaklı & Kararlı Kahve Sever',
      quote: '"İyi bir kahve, sadece zihni değil günü de berraklaştırır."',
      description: 'Şapkalı, sakallı, işine odaklanmış; sert bir double shot espresso ya da berrak bir filtre kahve ile dünyayı fethetmeye hazır.',
    },
    surprised: {
      name: 'Surprised',
      role: 'Meraklı & Kaşif Kahve Sever',
      quote: '"Kahvede sınır yoktur; her yeni yudum yeni bir sürprizdir."',
      description: 'Yıldız küpeleri ve enerjisiyle; JÖN Sunrise, tatlı dokunuşlar ve buzlu yeniliklerle heyecanlanan tat kaşifi.',
    },
  },
  faqs: [
    {
      q: "Jön Coffee'ye metro ile nasıl ulaşabilirim?",
      a: "İzmir Metrosu'nun Hatay veya İzmirspor duraklarından sadece birkaç dakikalık keyifli bir yürüyüşle kafemize rahatça ulaşabilirsiniz.",
    },
    {
      q: 'Mekanda çalışmak için priz ve Wi-Fi imkanı var mı?',
      a: 'Evet! Laptopuyla çalışmak veya ders çalışmak isteyen "Focused" misafirlerimiz için yüksek hızlı fiber internet ve priz erişimli özel masalarımız mevcuttur.',
    },
    {
      q: 'Evcil hayvanımla gelebilir miyim?',
      a: 'Kesinlikle. Jön Coffee %100 pet-friendly bir mekandır. Can dostlarınızla birlikte hem iç hem dış alanda rahatça vakit geçirebilirsiniz; su kaplarımız her zaman hazır!',
    },
    {
      q: 'Bitkisel süt alternatifiniz bulunuyor mu?',
      a: 'Evet, laktozsuz sütün yanı sıra yulaf sütü ve badem sütü seçeneklerimiz tüm sıcak/soğuk kahve çeşitlerimizde mevcuttur.',
    },
    {
      q: 'Paket kahve veya çekirdek satışı yapıyor musunuz?',
      a: 'Taze kavrulmuş nitelikli çekirdeklerimizi dilediğiniz demleme ekipmanına (V60, French Press, Mokapot, Espresso vb.) göre anında öğüterek paketli olarak teslim alabilirsiniz.',
    },
  ],
};
