import FeaturesSection from "@/components/home/features-section";
import HeroSection from "@/components/home/hero-section";
import OurStorySection from "@/components/home/story-section";
import Header from "@/components/layout/header";


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
