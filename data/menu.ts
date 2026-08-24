export interface MenuItem {
  id: string;
  name: string;
  category: 'sicak-kahveler' | 'soguk-kahveler' | 'klasikler' | 'ozeller' | 'milkshake';
  description: string;
  calories?: string;
  tags?: string[];
  isSignature?: boolean;
  isPopular?: boolean;
  isCold?: boolean;
  badge?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
}

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'sicak-kahveler',
    title: 'Sıcak Kahveler',
    subtitle: 'Espresso bazlı ve taze demlemeler',
    iconName: 'Coffee',
  },
  {
    id: 'soguk-kahveler',
    title: 'Soğuk Kahveler',
    subtitle: 'Buzlu, ferahlatıcı ve Cold Brew seçenekleri',
    iconName: 'IceCream',
  },
  {
    id: 'ozeller',
    title: 'Jön Özeller ✦',
    subtitle: 'İmza lezzetler & tatlı dokunuşlar',
    iconName: 'Star',
  },
  {
    id: 'milkshake',
    title: 'Milkshake',
    subtitle: 'Kıvamlı, soğuk ve tatlı molalar',
    iconName: 'Milk',
  },
  {
    id: 'klasikler',
    title: 'Klasikler',
    subtitle: 'Demleme çay, Türk kahvesi ve ferahlık',
    iconName: 'CupSoda',
  },
];

export const MENU_ITEMS: MenuItem[] = [
  // JÖN ÖZELLER
  {
    id: 'jon-sunrise',
    name: 'JÖN Sunrise',
    category: 'ozeller',
    description: 'Taze sıkılmış soğuk portakal suyu üzerine dökülen taze double shot espresso. Narenciye asiditesi ve kahvenin muazzam katmanlı uyumu.',
    calories: '90 - 150 kcal',
    tags: ['İmza Lezzet', 'Soğuk', 'Katmanlı'],
    isSignature: true,
    isPopular: true,
    isCold: true,
    badge: 'JÖN SIGNATURE',
  },
  {
    id: 'affogato',
    name: 'Affogato',
    category: 'ozeller',
    description: 'Kadifemsi vanilyalı İtalyan dondurması üzerine sıcak, taze çekilmiş yoğun double shot espresso.',
    calories: '180 - 320 kcal',
    tags: ['Tatlı Dokunuş', 'İtalyan Klasiği'],
    isSignature: true,
    isPopular: true,
    badge: 'TATLI DOKUNUŞ',
  },

  // SOĞUK KAHVELER
  {
    id: 'iced-americano',
    name: 'Iced Americano',
    category: 'soguk-kahveler',
    description: 'Buz küpleri ve soğuk su ile harmanlanan zengin aromalı taze double shot espresso.',
    calories: '5 - 15 kcal',
    tags: ['Şekersiz', 'Ferahlatıcı'],
    isCold: true,
    isPopular: true,
  },
  {
    id: 'iced-latte',
    name: 'Iced Latte',
    category: 'soguk-kahveler',
    description: 'Buzlu soğuk sütün taze çekilmiş espresso ile kadifemsi buluşması.',
    calories: '90 - 190 kcal',
    tags: ['Sütlü', 'En Çok Tercih Edilen'],
    isCold: true,
    isPopular: true,
  },
  {
    id: 'cold-brew',
    name: 'Cold Brew',
    category: 'soguk-kahveler',
    description: 'Özel seçki çekirdeklerle 16 saat boyunca soğuk suyla damla damla demlenen düşük asiditeli, yoğun gövdeli kahve.',
    calories: '5 - 15 kcal',
    tags: ['16 Saat Demleme', 'Düşük Asidite'],
    isCold: true,
    isPopular: true,
    badge: 'ÖZEL DEMLEME',
  },
  {
    id: 'iced-mocha',
    name: 'Iced Mocha',
    category: 'soguk-kahveler',
    description: 'Buz, soğuk süt, espresso ve kaliteli çikolata sosunun lezzetli dengesi.',
    calories: '180 - 320 kcal',
    tags: ['Çikolatalı', 'Tatlı Kahve'],
    isCold: true,
  },
  {
    id: 'frappe',
    name: 'Frappe',
    category: 'soguk-kahveler',
    description: 'Yoğun köpüklü, buzlu ve enerji veren serinletici kahve içeceği.',
    calories: '120 - 240 kcal',
    tags: ['Köpüklü', 'Yaz Favorisi'],
    isCold: true,
  },
  {
    id: 'soguk-espresso',
    name: 'Soğuk Espresso',
    category: 'soguk-kahveler',
    description: 'Buzla hızlıca şoklanıp çalkalanan, gövdesi yüksek saf espresso deneyimi.',
    calories: '5 - 15 kcal',
    tags: ['Yoğun', 'Sert'],
    isCold: true,
  },

  // SICAK KAHVELER
  {
    id: 'espresso',
    name: 'Espresso',
    category: 'sicak-kahveler',
    description: '%100 yüksek rakım Arabica çekirdeklerinden taze çekilip 9 bar basınçla demlenen altın rengi kremalı saf lezzet.',
    calories: '5 - 15 kcal',
    tags: ['Single / Double', 'Yoğun Gövde'],
    isPopular: true,
  },
  {
    id: 'americano',
    name: 'Americano',
    category: 'sicak-kahveler',
    description: 'Sıcak kaynak suyu üzerine eklenen taze espresso ile berrak ve dengeli bir kahve keyfi.',
    calories: '5 - 15 kcal',
    tags: ['Klasik', 'Dengeli'],
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    category: 'sicak-kahveler',
    description: 'Kusursuz espresso, buharda ısıtılmış süt ve ipeksi kalın süt köpüğünün geleneksel dengesi.',
    calories: '90 - 180 kcal',
    tags: ['İtalyan Klasiği', 'Köpüklü'],
  },
  {
    id: 'latte',
    name: 'Latte',
    category: 'sicak-kahveler',
    description: 'Buharla mikro köpük haline getirilmiş bol sıcak süt ve espressonun yumuşak içimli buluşması.',
    calories: '120 - 220 kcal',
    tags: ['Yumuşak İçim', 'Latte Art'],
    isPopular: true,
  },
  {
    id: 'flat-white',
    name: 'Flat White',
    category: 'sicak-kahveler',
    description: 'Çift shot ristretto espresso üzerine ince ve parlak mikro süt köpüğü. Yoğun kahve tadı arayanlara.',
    calories: '110 - 190 kcal',
    tags: ['Çift Ristretto', 'Yoğun & İpeksi'],
  },
  {
    id: 'mocha',
    name: 'Mocha',
    category: 'sicak-kahveler',
    description: 'Taze espresso, buharda köpürtülmüş süt ve zengin kakao çikolata şöleni.',
    calories: '190 - 300 kcal',
    tags: ['Çikolatalı', 'Tatlı'],
  },
  {
    id: 'filtre-kahve',
    name: 'Filtre Kahve',
    category: 'sicak-kahveler',
    description: 'Günün taze kavrum single origin çekirdeklerinden özenle demlenmiş berrak ve aromatik filtre kahve.',
    calories: '5 - 10 kcal',
    tags: ['Günün Kahvesi', 'Taze Demleme'],
    isPopular: true,
  },

  // MILKSHAKE
  {
    id: 'vanilya-milkshake',
    name: 'Vanilya Milkshake',
    category: 'milkshake',
    description: 'Gerçek vanilya özütü, kremalı süt ve dondurmanın yoğun kıvamlı soğuk keyfi.',
    calories: '290 - 420 kcal',
    tags: ['Klasik', 'Kremalı'],
    isCold: true,
  },
  {
    id: 'cilek-milkshake',
    name: 'Çilek Milkshake',
    category: 'milkshake',
    description: 'Doğal çilek püresi ve dondurmanın taptaze meyvemsi lezzeti.',
    calories: '280 - 400 kcal',
    tags: ['Meyveli', 'Ferah'],
    isCold: true,
  },
  {
    id: 'cikolata-milkshake',
    name: 'Çikolata Milkshake',
    category: 'milkshake',
    description: 'Zengin Belçika tarzı kakao, soğuk süt ve çikolatalı dondurma harmanı.',
    calories: '310 - 450 kcal',
    tags: ['Yoğun Çikolata', 'Favori'],
    isCold: true,
    isPopular: true,
  },

  // KLASİKLER
  {
    id: 'siyah-cay',
    name: 'Siyah Çay',
    category: 'klasikler',
    description: 'Doğu Karadeniz yaylalarından seçme filiz yapraklarla taze demlenen berrak geleneksel Türk çayı.',
    calories: '0 - 5 kcal',
    tags: ['Taze Demleme', 'İnce Belli'],
  },
  {
    id: 'turk-kahvesi',
    name: 'Türk Kahvesi',
    category: 'klasikler',
    description: 'Taş değirmende incecik çekilmiş çekirdeklerle bakır cezvede pişirilen bol köpüklü geleneksel lezzet.',
    calories: '5 kcal',
    tags: ['Geleneksel', 'Bol Köpüklü'],
    isPopular: true,
  },
  {
    id: 'soda',
    name: 'Soda (Maden Suyu)',
    category: 'klasikler',
    description: 'Doğal mineralli soğuk maden suyu (Limon dilimi ile servis edilir).',
    calories: '0 kcal',
    tags: ['Doğal Mineral'],
    isCold: true,
  },
  {
    id: 'su',
    name: 'Doğal Kaynak Suyu',
    category: 'klasikler',
    description: 'Cam şişede berrak doğal kaynak suyu.',
    calories: '0 kcal',
    tags: ['Cam Şişe'],
    isCold: true,
  },
];

export const ALLERGEN_INFO = {
  title: 'Alerjen ve Tüketici Bilgilendirmesi',
  content: 'Ürünlerimiz süt ve süt ürünleri (laktoz), kafein içerebilir; bazı ürünlerde gluten, soya ve sert kabuklu yemiş izleri bulunabilir. Çapraz bulaşma riski mevcuttur. Detaylı bilgi ve bitkisel süt (Yulaf / Badem) tercihleri için lütfen baristamıza danışınız.',
  calorieDisclaimer: 'Kalori değerleri standart reçetelere göre genel bilgilendirme amaçlıdır; porsiyon, süt tipi ve şurup tercihlerine göre değişkenlik gösterebilir.',
};
