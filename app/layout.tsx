import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Bricolage_Grotesque } from "next/font/google";
import { MENU_ITEMS } from "@/data/menu";
import { STORE_INFO } from "@/data/store-info";
import { LanguageProvider } from "@/context/language-context";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#0038a8",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://cetindesign.github.io/joncoffee/"),
  manifest: "/joncoffee/manifest.webmanifest",
  title: {
    default: "Jön Coffee | İzmir Hatay'ın Yeni Nesil Mahalle Kahvecisi",
    template: "%s | Jön Coffee İzmir",
  },
  description:
    "İzmir Hatay'da %100 Specialty Grade Arabica espresso, 16 saatlik soğuk demlemeler, imza lezzet JÖN Sunrise ve samimi mahalle atmosferi.",
  keywords: [
    "Jön Coffee",
    "Jön Kahve",
    "İzmir Hatay Kahveci",
    "İzmir 3. Nesil Kahve",
    "Hatay Nitelikli Kahve",
    "İzmir Coffee Shop",
    "Jön Sunrise",
    "Specialty Coffee İzmir",
    "İzmir Pet Friendly Kafe",
    "Hatay Metro Kahve",
  ],
  authors: [{ name: "Jön Coffees Co." }],
  creator: "Jön Coffees Co.",
  publisher: "Jön Coffees Co.",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Jön Coffee",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://cetindesign.github.io/joncoffee/",
    siteName: "Jön Coffees Co.",
    title: "Jön Coffee | İzmir Hatay'ın Yeni Nesil Mahalle Kahvecisi",
    description:
      "100% Specialty Grade Arabica. İzmir Hatay'da nitelikli çekirdekler, samimi çalışma alanı ve pet-friendly ortam.",
    images: [
      {
        url: "https://cetindesign.github.io/joncoffee/assets/hero-coffee-lifestyle.jpg",
        width: 1200,
        height: 630,
        alt: "Jön Coffee İzmir Hatay Ambiyansı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jön Coffee | İzmir Hatay",
    description:
      "İzmir Hatay'da %100 nitelikli Arabica, imza lezzet JÖN Sunrise ve samimi mahalle kahveciliği.",
    images: ["https://cetindesign.github.io/joncoffee/assets/hero-coffee-lifestyle.jpg"],
  },
  icons: {
    icon: "/joncoffee/assets/jon-badge-circle.png",
    apple: "/joncoffee/assets/jon-badge-circle.png",
  },
};

// Deep Rich JSON-LD Schema (Restaurant/Cafe with hasMenu & openingHours)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: "Jön Coffee Co.",
  alternateName: "Jön Kahve",
  image: "https://cetindesign.github.io/joncoffee/assets/hero-coffee-lifestyle.jpg",
  logo: "https://cetindesign.github.io/joncoffee/assets/jon-badge-circle.png",
  "@id": "https://cetindesign.github.io/joncoffee/#cafe",
  url: "https://cetindesign.github.io/joncoffee/",
  telephone: "+902320000000",
  priceRange: "₺₺",
  currenciesAccepted: "TRY",
  paymentAccepted: "Cash, Credit Card, Contactless",
  servesCuisine: "Specialty Coffee, Artisanal Beverages, Desserts",
  address: {
    "@type": "PostalAddress",
    streetAddress: STORE_INFO.location.addressText,
    addressLocality: STORE_INFO.location.district,
    addressRegion: STORE_INFO.location.city,
    postalCode: "35360",
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 38.4065,
    longitude: 27.1125,
  },
  openingHoursSpecification: STORE_INFO.hours
    .filter((h) => h.isOpen)
    .map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"][
        h.dayIndex === 0 ? 6 : h.dayIndex - 1
      ],
      opens: h.open,
      closes: h.close,
    })),
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Pet Friendly",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Free High-Speed Wi-Fi",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Laptop Friendly Workspaces",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Near Metro (Hatay)",
      value: true,
    },
  ],
  hasMenu: {
    "@type": "Menu",
    name: "Jön Coffee Kafe Menüsü",
    hasMenuSection: [
      {
        "@type": "MenuSection",
        name: "İmza ve Öne Çıkanlar",
        hasMenuItem: MENU_ITEMS.slice(0, 10).map((item) => ({
          "@type": "MenuItem",
          name: item.name,
          description: item.description,
          suitableForDiet: "https://schema.org/VegetarianDiet",
          nutrition: item.calories ? { "@type": "NutritionInformation", calories: item.calories } : undefined,
        })),
      },
    ],
  },
  sameAs: [STORE_INFO.socials.instagram],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      className={`${plusJakartaSans.variable} ${bricolageGrotesque.variable} scroll-smooth`}
    >
      <head>
        <link rel="manifest" href="/joncoffee/manifest.webmanifest" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Jön Coffee" />
        <link rel="apple-touch-icon" href="/joncoffee/assets/jon-badge-circle.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#faf8f2] text-[#0038a8] font-sans selection:bg-[#0038a8] selection:text-white antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
