export type Locale = 'tr' | 'en';

export interface TranslationDictionary {
  marquee: readonly string[];
  nav: {
    menu: string;
    blends: string;
    story: string;
    location: string;
    openMobileMenu: string;
    closeMobileMenu: string;
  };
  hero: {
    eyebrow: string;
    headline1: string;
    headline2: string;
    description: string;
    btnMenu: string;
    btnDirections: string;
    specBeans: string;
    specRoast: string;
    specPet: string;
    specColdBrew: string;
  };
  status: {
    openNow: string;
    closedNow: string;
    openToday: string;
    opensTomorrow: string;
    opensMonday: string;
    todayHours: string;
  };
  menu: {
    eyebrow: string;
    title: string;
    recipeDetail: string;
    modalBadge: string;
    calories: string;
    milkOptions: string;
    milkOptionsValue: string;
    servingType: string;
    servingCold: string;
    servingHot: string;
    shareWithFriend: string;
    copied: string;
    close: string;
    coldServing: string;
    hotServing: string;
    popular: string;
    allergenTitle: string;
    allergenContent: string;
    nutritionTitle: string;
    nutritionContent: string;
  };
  menuCategories: Record<string, { title: string; subtitle: string }>;
  blends: {
    eyebrow: string;
    title: string;
    subtitle: string;
    roastLevel: string;
    originAltitude: string;
    flavorNotes: string;
    brewGuide: string;
    orderWhatsApp: string;
    passportTitle: string;
    grindOptions: string;
    ratio: string;
    waterTemp: string;
    method: string;
    grindSize: string;
    freshRoastBadge: string;
    singleOriginBadge: string;
    specialtyBlendBadge: string;
  };
  story: {
    eyebrow: string;
    title: string;
    petBadge: string;
    communityTag: string;
    controlsPrev: string;
    controlsNext: string;
  };
  location: {
    eyebrow: string;
    title: string;
    metroNote: string;
    copyAddress: string;
    addressCopied: string;
    openInMaps: string;
    weeklyHoursTitle: string;
    todayBadge: string;
    closed: string;
    sundayClosed: string;
    weekdayHours: string;
    petFriendlyGarden: string;
    whatsapp: string;
  };
  floating: {
    menu: string;
    directions: string;
  };
  footer: {
    brandDesc: string;
    followInstagram: string;
    exploreTitle: string;
    hoursTitle: string;
    hoursText: string;
    sundayText: string;
    metroFootnote: string;
    rightsReserved: string;
    countryCurrency: string;
    backToTop: string;
  };
}

export const TRANSLATIONS: Record<Locale, TranslationDictionary> = {
  tr: {
    marquee: [
      '★ %100 SPECIALTY GRADE ARABICA',
      '★ İZMİR HATAY METROYA 2 DK',
      '★ AYNI İYİ KAHVE, YEPYENİ HİSLER',
      '★ %100 PET FRIENDLY',
      '★ HAFTALIK TAZE KAVRUM',
      '★ 16 SAAT SOĞUK DEMLEME COLD BREW',
      '★ JÖN SUNRISE İMZA REÇETE',
    ],
    nav: {
      menu: 'Menü',
      blends: 'Paket Kahveler',
      story: 'Mahalle Kültürü',
      location: 'Konum & Saatler',
      openMobileMenu: 'Menüyü aç',
      closeMobileMenu: 'Menüyü kapat',
    },
    hero: {
      eyebrow: 'ÖZEL SEÇKİ & NİTELİKLİ KAHVE DENEYİMİ',
      headline1: 'AYNI İYİ KAHVE,',
      headline2: 'YEPYENİ HİSLER.',
      description:
        'İzmir Hatay\'da günlük taze kavrulan %100 specialty grade Arabica çekirdekler, imza reçeteler ve samimi mahalle kahveciliği deneyimi.',
      btnMenu: 'Menüyü İncele',
      btnDirections: 'Yol Tarifi Al',
      specBeans: '%100 Specialty Grade Arabica',
      specRoast: 'Haftalık Taze Kavrum',
      specPet: 'Evcil Hayvan Dostu Bahçe',
      specColdBrew: '16 Saat Cold Brew Demleme',
    },
    status: {
      openNow: 'Şu An Açığız',
      closedNow: 'Şu An Kapalıyız',
      openToday: 'Bugün 09:00 - 20:30',
      opensTomorrow: "Yarın 09:00'da Açılıyor",
      opensMonday: "Pazartesi 09:00'da Açılıyor",
      todayHours: 'Bugün: {hours}',
    },
    menu: {
      eyebrow: '★ Seçki & Reçeteler',
      title: 'MENÜ',
      recipeDetail: 'Reçete',
      modalBadge: '★ Jön Reçete Detayı',
      calories: 'Kalori:',
      milkOptions: 'Süt Seçenekleri:',
      milkOptionsValue: 'Laktozsuz, Yulaf, Badem',
      servingType: 'Servis Şekli:',
      servingCold: 'Buzlu Soğuk',
      servingHot: 'Sıcak / Gel-Al',
      shareWithFriend: 'Arkadaşına Gönder',
      copied: 'Kopyalandı!',
      close: 'Kapat',
      coldServing: '❄️ Buzlu / Soğuk',
      hotServing: '☕ Sıcak Servis',
      popular: 'Popüler',
      allergenTitle: 'ALERJEN UYARISI',
      allergenContent:
        'Ürünlerimiz süt ve süt ürünleri, kuruyemiş, gluten ve soya içeren besinlerle aynı ortamda hazırlanmaktadır. Detaylı alerjen bilgisi için lütfen personelimizden bilgi alınız.',
      nutritionTitle: 'KALORİ & BESİN DEĞERLERİ',
      nutritionContent:
        'Kalori değerleri standart porsiyonlar (laktozsuz/tam yağlı süt ve şekersiz) baz alınarak hesaplanmıştır. Şurup ve eklemeler besin değerlerini değiştirebilir.',
    },
    menuCategories: {
      'sicak-kahveler': {
        title: 'Sıcak Kahveler',
        subtitle: 'Espresso bazlı ve taze demlemeler',
      },
      'soguk-kahveler': {
        title: 'Soğuk Kahveler',
        subtitle: 'Buzlu, ferahlatıcı ve Cold Brew seçenekleri',
      },
      ozeller: {
        title: 'Jön Özeller ✦',
        subtitle: 'İmza lezzetler & tatlı dokunuşlar',
      },
      milkshake: {
        title: 'Milkshake',
        subtitle: 'Kıvamlı, soğuk ve tatlı molalar',
      },
      klasikler: {
        title: 'Klasikler',
        subtitle: 'Demleme çay, Türk kahvesi ve ferahlık',
      },
    },
    blends: {
      eyebrow: '★ Nitelikli Çekirdek Vitrini',
      title: 'PAKET KAHVELER (250G / 1KG)',
      subtitle:
        'Evinizde veya ofisinizde Jön deneyimini yaşayın. Haftalık taze kavrulan tek kökenli (Single Origin) ve harman çekirdeklerimizi dilediğiniz demleme yöntemine göre taze öğütüyoruz.',
      roastLevel: 'Kavrum Profili',
      originAltitude: 'Menşei & Rakım',
      flavorNotes: 'Tadım Notları',
      brewGuide: 'Tavsiye Edilen Demleme',
      orderWhatsApp: 'WhatsApp ile Paket Siparişi Ver',
      passportTitle: '★ Jön Çekirdek Pasaportu',
      grindOptions: 'Öğütüm Seçenekleri (Siparişte Belirtebilirsiniz):',
      ratio: 'Oran:',
      waterTemp: 'Su Sıcaklığı:',
      method: 'Metot:',
      grindSize: 'Öğütüm:',
      freshRoastBadge: 'Taze Kavrum',
      singleOriginBadge: 'Single Origin',
      specialtyBlendBadge: 'Specialty Blend',
    },
    story: {
      eyebrow: '★ Mahalle Kültürü & Karakterler',
      title: 'JÖN KARAKTERLERİ & HİKAYESİ',
      petBadge: 'İzmir Hatay &bull; Pet Friendly Açık Bahçe',
      communityTag: 'Mahallemizin Sakinleri',
      controlsPrev: 'Önceki Hikaye',
      controlsNext: 'Sonraki Hikaye',
    },
    location: {
      eyebrow: '★ Ziyaret & Ulaşım',
      title: 'KONUM VE ÇALIŞMA SAATLERİ',
      metroNote: 'İzmir Metrosu Hatay İstasyonu\'nda inerek sadece 2 dakikalık düzayak yürüyüşle kafemize ulaşabilirsiniz.',
      copyAddress: 'Adresi Kopyala',
      addressCopied: 'Adres Kopyalandı!',
      openInMaps: 'Haritada Aç',
      weeklyHoursTitle: 'HAFTALIK ÇALIŞMA SAATLERİ',
      todayBadge: 'Bugün',
      closed: 'Kapalı',
      sundayClosed: 'Pazar günleri kapalıyız.',
      weekdayHours: 'Pazartesi - Cumartesi arası 09:00 - 20:30 hizmet vermekteyiz.',
      petFriendlyGarden: 'Evcil hayvan dostu bahçemiz çalışma saatleri boyunca açıktır.',
      whatsapp: 'WhatsApp',
    },
    floating: {
      menu: 'Menü',
      directions: 'Yol Tarifi',
    },
    footer: {
      brandDesc: '%100 nitelikli Arabica çekirdekler, günlük taze kavrumlar ve samimi mahalle kahveciliği deneyimi.',
      followInstagram: 'Takip Et',
      exploreTitle: '★ KEŞFET',
      hoursTitle: '★ ÇALIŞMA SAATLERİ & İLETİŞİM',
      hoursText: 'Pzt - Cmt: 09:00 - 20:30',
      sundayText: 'Pazar: Kapalı',
      metroFootnote: "Hatay Metrosu'na 2 dk yürüyüş mesafesinde.",
      rightsReserved: 'Jön Coffees Co. Tüm Hakları Saklıdır. İzmir / Hatay.',
      countryCurrency: 'Türkiye (TRY ₺)',
      backToTop: 'Başa Dön',
    },
  },
  en: {
    marquee: [
      '★ 100% SPECIALTY GRADE ARABICA',
      '★ 2 MIN FROM IZMIR HATAY METRO',
      '★ SAME GOOD COFFEE, FRESH VIBES',
      '★ 100% PET FRIENDLY',
      '★ WEEKLY FRESH ROASTS',
      '★ 16-HOUR SLOW-DRIP COLD BREW',
      '★ SIGNATURE JÖN SUNRISE RECIPE',
    ],
    nav: {
      menu: 'Menu',
      blends: 'Packaged Coffee',
      story: 'Neighborhood Culture',
      location: 'Location & Hours',
      openMobileMenu: 'Open menu',
      closeMobileMenu: 'Close menu',
    },
    hero: {
      eyebrow: 'SPECIALTY COFFEE EXPERIENCE',
      headline1: 'SAME GOOD COFFEE,',
      headline2: 'FRESH VIBES.',
      description:
        '100% specialty grade Arabica beans roasted fresh weekly in Izmir Hatay, handcrafted signature drinks, and genuine neighborhood hospitality.',
      btnMenu: 'Explore Menu',
      btnDirections: 'Get Directions',
      specBeans: '100% Specialty Grade Arabica',
      specRoast: 'Weekly Fresh Roasts',
      specPet: 'Pet Friendly Open Garden',
      specColdBrew: '16-Hour Slow Cold Brew',
    },
    status: {
      openNow: 'Open Now',
      closedNow: 'Closed Now',
      openToday: 'Today 09:00 - 20:30',
      opensTomorrow: 'Opens Tomorrow at 09:00',
      opensMonday: 'Opens Monday at 09:00',
      todayHours: 'Today: {hours}',
    },
    menu: {
      eyebrow: '★ Selection & Recipes',
      title: 'MENU',
      recipeDetail: 'Recipe',
      modalBadge: '★ Jön Recipe Details',
      calories: 'Calories:',
      milkOptions: 'Milk Options:',
      milkOptionsValue: 'Lactose-Free, Oat, Almond',
      servingType: 'Serving Style:',
      servingCold: 'Iced / Cold',
      servingHot: 'Hot / To-Go',
      shareWithFriend: 'Share with Friend',
      copied: 'Copied!',
      close: 'Close',
      coldServing: '❄️ Iced / Cold',
      hotServing: '☕ Hot Brew',
      popular: 'Popular',
      allergenTitle: 'ALLERGEN NOTICE',
      allergenContent:
        'Our products are prepared in an environment handling dairy, nuts, gluten, and soy. Please consult our baristas for detailed allergen information.',
      nutritionTitle: 'CALORIES & NUTRITION',
      nutritionContent:
        'Calorie estimates are based on standard portions (lactose-free/whole milk, unsweetened). Syrups and extras will modify nutritional values.',
    },
    menuCategories: {
      'sicak-kahveler': {
        title: 'Hot Coffees',
        subtitle: 'Espresso-based & freshly brewed favorites',
      },
      'soguk-kahveler': {
        title: 'Cold Coffees',
        subtitle: 'Iced refreshments & slow Cold Brews',
      },
      ozeller: {
        title: 'Jön Specials ✦',
        subtitle: 'Signature drinks & artisanal touches',
      },
      milkshake: {
        title: 'Milkshakes',
        subtitle: 'Rich, thick & frosty treats',
      },
      klasikler: {
        title: 'Classics',
        subtitle: 'Turkish tea, traditional coffee & iced sodas',
      },
    },
    blends: {
      eyebrow: '★ Specialty Bean Showcase',
      title: 'PACKAGED COFFEE (250G / 1KG)',
      subtitle:
        'Bring the Jön specialty experience into your home or office. We roast single-origin and signature blends fresh weekly, freshly ground to your preferred brewing method.',
      roastLevel: 'Roast Profile',
      originAltitude: 'Origin & Altitude',
      flavorNotes: 'Tasting Notes',
      brewGuide: 'Recommended Brew',
      orderWhatsApp: 'Order Packaged Coffee via WhatsApp',
      passportTitle: '★ Jön Bean Passport',
      grindOptions: 'Grind Options (Specify in your order):',
      ratio: 'Ratio:',
      waterTemp: 'Water Temp:',
      method: 'Method:',
      grindSize: 'Grind:',
      freshRoastBadge: 'Fresh Roast',
      singleOriginBadge: 'Single Origin',
      specialtyBlendBadge: 'Specialty Blend',
    },
    story: {
      eyebrow: '★ Neighborhood Culture & Characters',
      title: 'JÖN CHARACTERS & STORY',
      petBadge: 'Izmir Hatay &bull; Pet Friendly Open Garden',
      communityTag: 'Our Neighborhood Characters',
      controlsPrev: 'Previous Story',
      controlsNext: 'Next Story',
    },
    location: {
      eyebrow: '★ Visit & Directions',
      title: 'LOCATION & OPENING HOURS',
      metroNote: 'Just a 2-minute flat walk after exiting Izmir Metro Hatay Station.',
      copyAddress: 'Copy Address',
      addressCopied: 'Address Copied!',
      openInMaps: 'Open in Maps',
      weeklyHoursTitle: 'WEEKLY OPENING HOURS',
      todayBadge: 'Today',
      closed: 'Closed',
      sundayClosed: 'Closed on Sundays.',
      weekdayHours: 'Serving Monday to Saturday from 09:00 to 20:30.',
      petFriendlyGarden: 'Our pet-friendly open garden is welcoming guests throughout working hours.',
      whatsapp: 'WhatsApp',
    },
    floating: {
      menu: 'Menu',
      directions: 'Directions',
    },
    footer: {
      brandDesc: '100% specialty grade Arabica beans, weekly fresh roasts, and authentic neighborhood coffee hospitality.',
      followInstagram: 'Follow',
      exploreTitle: '★ EXPLORE',
      hoursTitle: '★ OPENING HOURS & CONTACT',
      hoursText: 'Mon - Sat: 09:00 - 20:30',
      sundayText: 'Sunday: Closed',
      metroFootnote: '2 minutes walk from Hatay Metro Station.',
      rightsReserved: 'Jön Coffees Co. All Rights Reserved. Izmir / Hatay.',
      countryCurrency: 'Turkey (TRY ₺)',
      backToTop: 'Back to Top',
    },
  },
} as const;

export const MENU_ITEMS_EN: Record<string, { name: string; description: string; badge?: string }> = {
  'jon-sunrise': {
    name: 'JÖN Sunrise',
    description: 'Fresh double shot espresso poured over freshly squeezed chilled orange juice. A bright citrus acidity layered seamlessly with rich coffee.',
    badge: 'Signature',
  },
  'iced-salted-caramel-latte': {
    name: 'Iced Salted Caramel Latte',
    description: 'Double espresso with artisanal salted caramel syrup and cold milk over ice. The ultimate sweet-and-savory indulgence.',
    badge: 'Barista Pick',
  },
  'iced-spanish-latte': {
    name: 'Iced Spanish Latte',
    description: 'Silky double espresso blended with sweetened condensed milk and cold fresh milk over ice. Velvet smooth texture.',
  },
  'iced-caramel-macchiato': {
    name: 'Iced Caramel Macchiato',
    description: 'Vanilla-infused cold milk topped with rich espresso shot and drizzled with artisanal caramel glaze.',
  },
  'iced-white-chocolate-mocha': {
    name: 'Iced White Chocolate Mocha',
    description: 'Espresso combined with premium white chocolate sauce, cold milk, and crystal clear ice cubes.',
  },
  'iced-mocha': {
    name: 'Iced Mocha',
    description: 'Dark Belgian chocolate syrup paired with bold double espresso and chilled milk.',
  },
  'iced-cappuccino': {
    name: 'Iced Cappuccino',
    description: 'Double espresso poured over ice and cold milk, topped with dense and silky cold milk micro-foam.',
  },
  'iced-caffe-latte': {
    name: 'Iced Caffe Latte',
    description: 'Classic double shot specialty espresso combined with cold fresh milk over ice.',
  },
  'iced-americano': {
    name: 'Iced Americano',
    description: 'Double shot specialty espresso lengthened with chilled filtered water and ice. Crisp, clean, and refreshing.',
  },
  'cold-brew': {
    name: '16-Hour Cold Brew',
    description: 'Single-origin specialty beans steeped in cold water drop by drop for 16 hours. Ultra smooth, low acidity, naturally sweet.',
    badge: '16h Slow-Drip',
  },
  'caffe-latte': {
    name: 'Caffe Latte',
    description: 'Double shot specialty espresso topped with velvety steamed milk and delicate micro-foam.',
  },
  'cappuccino': {
    name: 'Cappuccino',
    description: 'Equal thirds of bold espresso, rich steamed milk, and dense microfoam dusted with fine cocoa.',
  },
  'flat-white': {
    name: 'Flat White',
    description: 'Double ristretto combined with a thin layer of velvety micro-foamed steamed milk for a strong coffee kick.',
    badge: 'Barista Choice',
  },
  'cortado': {
    name: 'Cortado',
    description: 'Equal 1:1 ratio of intense espresso and warm steamed milk to cut through the acidity.',
  },
  'caffe-americano': {
    name: 'Caffe Americano',
    description: 'Fresh double shot espresso diluted with hot filtered water, preserving the aromatic crema.',
  },
  'filtre-kahve': {
    name: 'Batch Brew Filter Coffee',
    description: 'Freshly ground daily specialty beans brewed to golden cup precision.',
  },
  'v60-pour-over': {
    name: 'V60 Hand Drip Pour Over',
    description: 'Single origin bean of your choice brewed manually to highlight nuanced floral and fruity tasting notes.',
    badge: 'Single Origin',
  },
  'espresso-single': {
    name: 'Single Espresso',
    description: 'Single shot extracted from 100% Specialty Arabica beans with a thick, golden hazelnut crema.',
  },
  'espresso-double': {
    name: 'Double Espresso (Doppio)',
    description: 'Double shot extracted for maximum body, aroma, and lingering sweet chocolate finish.',
  },
  'chocolate-milkshake': {
    name: 'Belgian Chocolate Milkshake',
    description: 'Artisanal chocolate ice cream blended with dark cocoa and cold whole milk.',
  },
  'vanilla-milkshake': {
    name: 'Madagascar Vanilla Milkshake',
    description: 'Real vanilla bean ice cream spun with whole milk into a thick, velvety shake.',
  },
  'strawberry-milkshake': {
    name: 'Fresh Strawberry Milkshake',
    description: 'Natural strawberry puree blended with cream ice cream and chilled milk.',
  },
  'caramel-milkshake': {
    name: 'Salted Caramel Milkshake',
    description: 'Salted butter caramel syrup blended with rich cream ice cream.',
  },
  'turk-kahvesi': {
    name: 'Specialty Turkish Coffee',
    description: 'Finely ground Specialty Arabica beans slowly brewed in a copper cezve, served with Turkish delight.',
  },
  'turk-kahvesi-double': {
    name: 'Double Turkish Coffee',
    description: 'Generous double portion traditional slow brew with thick golden foam.',
  },
  'demleme-cay': {
    name: 'Traditional Brewed Turkish Tea',
    description: 'Freshly steeped Black Sea whole leaf tea, served piping hot in a classic hourglass glass.',
  },
  'bitki-cayi': {
    name: 'Artisan Herbal Tea Selection',
    description: 'Whole leaf Linden, Green Tea, Sage, and Chamomile steeped in a personal teapot.',
  },
  'maden-suyu': {
    name: 'Natural Sparkling Mineral Water',
    description: 'High-mineral crisp sparkling water served with a slice of fresh lemon.',
  },
};

export const STORY_CARDS_EN = [
  {
    id: 1,
    characterName: 'MIA',
    characterRole: 'Neighborhood Chief Quality Inspector',
    tag: 'Pet Friendly Garden',
    title: 'Mia\'s Daily Garden Inspection',
    description:
      'Mia arrives at the garden early every morning to inspect the sunniest spot, greet fellow dogs, and ensure the calm neighborhood atmosphere is at its finest.',
  },
  {
    id: 2,
    characterName: 'BARISTA EMRE',
    characterRole: 'Head Roaster & Extraction Specialist',
    tag: '100% Specialty Grade',
    title: 'Precision Extraction & Roasting',
    description:
      'We test water temperature, TDS levels, and grinder micron tolerances every single morning before serving the very first cup of coffee.',
  },
  {
    id: 3,
    characterName: 'HATAY RESIDENTS',
    characterRole: 'Our Regular Guests & Working Community',
    tag: 'Local Spirit',
    title: 'The Third Place of the Neighborhood',
    description:
      'Whether you drop by for a quick 2-minute morning espresso from the metro or spend the afternoon working remotely on your laptop in our garden.',
  },
];

export const RETAIL_BEANS_EN: Record<
  string,
  {
    origin: string;
    region: string;
    process: string;
    roastLevel: string;
    flavorNotes: string[];
    description: string;
    brewMethod: string;
    brewRatio: string;
    brewGrind: string;
  }
> = {
  'bean-house-blend': {
    origin: 'Brazil & Colombia',
    region: 'Cerrado / Huila',
    process: 'Natural & Washed Blend',
    roastLevel: 'Medium Roast',
    flavorNotes: ['Milk Chocolate', 'Roasted Hazelnut', 'Caramel'],
    description:
      'Our house specialty espresso blend crafted specifically for milk pairings and everyday clean espresso brewing. High sweetness with low citric acidity.',
    brewMethod: 'Espresso / Moka Pot / Milk Drinks',
    brewRatio: '18g coffee / 36g espresso (1:2)',
    brewGrind: 'Fine / Espresso',
  },
  'bean-ethiopia-yirgacheffe': {
    origin: 'Ethiopia',
    region: 'Yirgacheffe G1 Chelchele',
    process: 'Natural Process',
    roastLevel: 'Light-Medium Roast',
    flavorNotes: ['Bergamot', 'Jasmine', 'Blueberry', 'Peach'],
    description:
      'High altitude heritage heirloom variety from the birthplace of coffee. Explodes with vibrant jasmine florality and clean peach sweetness.',
    brewMethod: 'V60 / Chemex / Aeropress / Cold Brew',
    brewRatio: '15g coffee / 250g water (1:16.6)',
    brewGrind: 'Medium-Coarse',
  },
  'bean-colombia-supremo': {
    origin: 'Colombia',
    region: 'Huila San Agustin',
    process: 'Fully Washed',
    roastLevel: 'Medium Roast',
    flavorNotes: ['Red Apple', 'Panela Cane Sugar', 'Orange'],
    description:
      'High grown Supremo beans from the Huila mountains. Balances crisp juicy red apple acidity with warm sugarcane panela finish.',
    brewMethod: 'V60 / Batch Brew / French Press',
    brewRatio: '16g coffee / 250g water (1:15.5)',
    brewGrind: 'Medium',
  },
  'bean-guatemala-huehuetenango': {
    origin: 'Guatemala',
    region: 'Huehuetenango',
    process: 'Washed Process',
    roastLevel: 'Medium Roast',
    flavorNotes: ['Cacao Nibs', 'Toasted Almond', 'Brown Sugar'],
    description:
      'Hard beans grown on volcanic mountain slopes at high altitudes. Delivers deep cocoa body and sweet almond mouthfeel with low acidity.',
    brewMethod: 'V60 / Filter / Moka Pot',
    brewRatio: '16g coffee / 250g water (1:15.5)',
    brewGrind: 'Medium',
  },
};
