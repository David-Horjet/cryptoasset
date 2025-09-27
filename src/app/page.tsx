import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import OurStorySection from "@/components/our-story-section"
import FeaturesSection from "@/components/features-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <OurStorySection />
      <FeaturesSection />
    </main>
  )
}
