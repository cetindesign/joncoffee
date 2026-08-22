import { ChamberlainHeader } from '@/components/chamberlain-header';
import { ChamberlainHero } from '@/components/chamberlain-hero';
import { BlendCarousel } from '@/components/blend-carousel';
import { CategoryGrid } from '@/components/category-grid';
import { SignatureSpotlight } from '@/components/signature-spotlight';
import { ValueProps } from '@/components/value-props';
import { MenuSection } from '@/components/menu-section';
import { StorySection } from '@/components/story-section';
import { CoffeeQuiz } from '@/components/coffee-quiz';
import { CommunityGallery } from '@/components/community-gallery';
import { ReviewsCarousel } from '@/components/reviews-carousel';
import { LocationHours } from '@/components/location-hours';
import { FaqSection } from '@/components/faq-section';
import { NewsletterBanner } from '@/components/newsletter-banner';
import { ChamberlainFooter } from '@/components/chamberlain-footer';
import { FloatingAction } from '@/components/floating-action';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbf9f4] flex flex-col selection:bg-[#102341] selection:text-white">
      <ChamberlainHeader />
      <ChamberlainHero />
      <BlendCarousel />
      <CategoryGrid />
      <SignatureSpotlight />
      <ValueProps />
      <StorySection />
      <MenuSection />
      <CoffeeQuiz />
      <CommunityGallery />
      <ReviewsCarousel />
      <LocationHours />
      <FaqSection />
      <NewsletterBanner />
      <ChamberlainFooter />
      <FloatingAction />
    </main>
  );
}
