export interface StoreHours {
  day: string;
  dayIndex: number; // 0 = Sunday, 1 = Monday...
  open: string;
  close: string;
  isOpen: boolean;
}

export const STORE_INFO = {
  name: "Jön Coffee Co.",
  tagline: "100% Specialty Grade Arabica",
  established: "2024",
  location: {
    city: "İzmir",
    district: "Hatay",
    neighborhood: "Murat Reis / İnönü Cd.",
    addressText: "İnönü Caddesi Yakını, Hatay / İzmir (Hatay Metro İstasyonuna 2 Dk Yürüme Mesafesinde)",
    fullAddress: "İnönü Cd. No: 123, Hatay, Konak, İzmir, Türkiye",
    googleMapsUrl: "https://maps.google.com/?q=Hatay+Izmir+Coffee",
    appleMapsUrl: "https://maps.apple.com/?q=Hatay+Izmir+Coffee",
    lat: 38.4065,
    lng: 27.1125,
    transportation: {
      metro: "Hatay Metro İstasyonu (2 dk yürüme mesafesinde)",
      bus: "İnönü Caddesi Otobüs Hatları",
      parking: "Sokak Üstü Park İmkanı",
    },
  },
  hours: [
    { day: "Pazar", dayIndex: 0, open: "", close: "", isOpen: false },
    { day: "Pazartesi", dayIndex: 1, open: "09:00", close: "20:30", isOpen: true },
    { day: "Salı", dayIndex: 2, open: "09:00", close: "20:30", isOpen: true },
    { day: "Çarşamba", dayIndex: 3, open: "09:00", close: "20:30", isOpen: true },
    { day: "Perşembe", dayIndex: 4, open: "09:00", close: "20:30", isOpen: true },
    { day: "Cuma", dayIndex: 5, open: "09:00", close: "20:30", isOpen: true },
    { day: "Cumartesi", dayIndex: 6, open: "09:00", close: "20:30", isOpen: true },
  ] as StoreHours[],
  contact: {
    phone: "+90 232 000 00 00",
    email: "merhaba@joncoffee.com",
    whatsapp: "https://wa.me/902320000000",
  },
  socials: {
    instagram: "https://instagram.com/joncoffee",
    instagramHandle: "@joncoffee",
  },
  features: [
    {
      title: "%100 Specialty Grade Arabica",
      description: "Haftalık taze kavrulan, tek kökenli ve özel harman çekirdekler.",
      icon: "coffee",
    },
    {
      title: "16 Saat Soğuk Demleme",
      description: "Damla damla süzülen, düşük asiditeli pürüzsüz Cold Brew.",
      icon: "droplet",
    },
    {
      title: "Pet Friendly",
      description: "Dostlarınızla rahatça vakit geçirebileceğiniz samimi ortam.",
      icon: "heart",
    },
    {
      title: "Hatay Metroya 2 Dk",
      description: "Merkezi ve düzayak konumuyla kolay ulaşım.",
      icon: "map-pin",
    },
  ],
  faqs: [
    {
      q: 'Kafenize metroyla nasıl ulaşabilirim?',
      a: 'İzmir Metrosu Hatay istasyonundan çıkıp 2 dakikalık düzayak yürüyüşle kafemize ulaşabilirsiniz.',
    },
    {
      q: 'Evcil hayvanımla gelebilir miyim?',
      a: 'Evet, Jön Coffee %100 evcil hayvan dostudur (Pet Friendly).',
    },
    {
      q: 'Bitkisel süt seçenekleriniz var mı?',
      a: 'Evet, tüm kahvelerimizde laktozsuz süt, yulaf sütü ve badem sütü opsiyonları sunuyoruz.',
    },
    {
      q: 'Laptop ile çalışmaya uygun mu?',
      a: 'Evet, hızlı Wi-Fi bağlantımız ve prizli çalışma alanlarımız mevcuttur.',
    },
  ],
};
