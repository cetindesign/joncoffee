import { ChamberlainHeader } from '@/components/chamberlain-header';
import { ChamberlainHero } from '@/components/chamberlain-hero';
import { BlendCarousel } from '@/components/blend-carousel';
import { StorySection } from '@/components/story-section';
import { MenuSection } from '@/components/menu-section';
import { LocationHours } from '@/components/location-hours';
import { ChamberlainFooter } from '@/components/chamberlain-footer';
import { FloatingAction } from '@/components/floating-action';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbf9f4] flex flex-col selection:bg-[#102341] selection:text-white">
      {/* 1. Header with Continuous Marquee */}
      <ChamberlainHeader />

      {/* 2. Hero: Brand Promise & Direct Action */}
      <ChamberlainHero />

      {/* 3. Showcase: 4 Key Drinks & Roasts */}
      <BlendCarousel />

      {/* 4. Philosophy: Focused & Surprised Mascot Characters */}
      <StorySection />

      {/* 5. Full Cafe Menu & Bottom Sheet */}
      <MenuSection />

      {/* 6. Visit: İzmir Hatay Location, Metro & Weekly Hours */}
      <LocationHours />

      {/* 7. Footer */}
      <ChamberlainFooter />

      {/* Sticky Mobile Utility Bar */}
      <FloatingAction />
    </main>
  );
}
