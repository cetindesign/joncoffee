import { ChamberlainHeader } from '@/components/chamberlain-header';
import { ChamberlainHero } from '@/components/chamberlain-hero';
import { MenuSection } from '@/components/menu-section';
import { BlendCarousel } from '@/components/blend-carousel';
import { StorySection } from '@/components/story-section';
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

      {/* 3. Full Cafe Menu & Bottom Sheet */}
      <MenuSection />

      {/* 4. Retail Packaged Coffee Showcase (250g / 1kg) */}
      <BlendCarousel />

      {/* 5. Neighborhood Culture & Craft Standards */}
      <StorySection />

      {/* 6. Location & Working Hours */}
      <LocationHours />

      {/* 7. Footer */}
      <ChamberlainFooter />

      {/* Sticky Mobile Utility Bar */}
      <FloatingAction />
    </main>
  );
}
