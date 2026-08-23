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
    district: "Karabağlar / Hatay",
    neighborhood: "Basın Sitesi Mah.",
    addressText: "Basın Sitesi Mah. 166. Sokak No:7/F, Karabağlar / İzmir (Hatay Metro İstasyonu Yakını)",
    fullAddress: "Basın Sitesi Mah. 166. Sk. No:7/F, 35360 Karabağlar/İzmir",
    googleMapsUrl: "https://maps.google.com/?q=J%C3%B6n+Coffees+Co.+Bas%C4%B1n+Sitesi+166.+Sk.+No:7+Karaba%C4%9Flar+%C4%B0zmir",
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=Bas%C4%B1n+Sitesi+Mahallesi+166.+Sk.+No:7+Karaba%C4%9Flar+%C4%B0zmir&t=&z=16&ie=UTF8&iwloc=&output=embed",
    lat: 38.3986,
    lng: 27.1065,
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
