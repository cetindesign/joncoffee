import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Bricolage_Grotesque } from "next/font/google";
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
  themeColor: "#0b3294",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://joncoffee.com"),
  title: {
    default: "Jön Coffee | İzmir Hatay'ın Yeni Nesil Mahalle Kahvecisi",
    template: "%s | Jön Coffee İzmir",
  },
  description:
    "İzmir Hatay'da nitelikli espresso, taze soğuk kahveler, imza lezzet JÖN Sunrise ve samimi mahalle atmosferi. Focused & Surprised kahve deneyimini keşfedin.",
  keywords: [
    "Jön Coffee",
    "Jön Kahve",
    "İzmir Hatay Kahveci",
    "İzmir 3. Nesil Kahve",
    "Hatay Nitelikli Kahve",
    "İzmir Coffee Shop",
    "Jön Coffees Co",
    "Cold Brew İzmir",
    "İzmirspor Metro Kahve",
    "Hatay Metro Kahveci",
    "Pet Friendly Cafe İzmir",
  ],
  authors: [{ name: "Jön Coffees Co." }],
  creator: "Jön Coffees Co.",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://joncoffee.com",
    title: "Jön Coffee | İzmir Hatay'ın Yeni Nesil Mahalle Kahvecisi",
    description:
      "İzmir Hatay'da nitelikli kahve, imza lezzet JÖN Sunrise ve samimi mahalle atmosferi. Focused & Surprised ruhunu keşfet.",
    siteName: "Jön Coffee Co.",
    images: [
      {
        url: "/assets/jon-logo-badge.png",
        width: 1024,
        height: 682,
        alt: "Jön Coffees Co. İzmir Hatay",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jön Coffee | İzmir Hatay",
    description: "İzmir Hatay'ın Yeni Nesil Mahalle Kahvecisi. Focused & Surprised.",
    images: ["/assets/jon-logo-badge.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/assets/jon-badge-circle.png",
    apple: "/assets/jon-badge-circle.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: "Jön Coffees Co.",
  image: "https://joncoffee.com/assets/jon-logo-badge.png",
  description:
    "İzmir Hatay'ın yeni nesil mahalle kahvecisi. Nitelikli çekirdekler, imza lezzet JÖN Sunrise ve sıcak atmosfer.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "İnönü Caddesi Yakını, Hatay",
    addressLocality: "Konak",
    addressRegion: "İzmir",
    postalCode: "35290",
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 38.4065,
    longitude: 27.1125,
  },
  url: "https://joncoffee.com",
  servesCuisine: "Specialty Coffee, Beverages, Desserts",
  priceRange: "₺₺",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:30",
      closes: "23:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday"],
      opens: "08:30",
      closes: "00:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "00:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "09:30",
      closes: "23:00",
    },
  ],
  sameAs: ["https://instagram.com/joncoffees"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#fbf9f4] text-[#102341] font-sans selection:bg-[#102341] selection:text-white">
        {children}
      </body>
    </html>
  );
}
