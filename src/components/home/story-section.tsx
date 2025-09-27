import StoryIllustration from "./story-illustration"

export default function OurStorySection() {
  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">Our Story</h2>

            <p className="text-lg text-muted leading-relaxed">
              Founded with a simple vision—to make cryptocurrency investing accessible, transparent, and rewarding—our
              journey began when a group of blockchain enthusiasts and financial experts came together to bridge the gap
              between traditional finance and the digital economy.
            </p>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center lg:justify-end">
            <StoryIllustration />
          </div>
        </div>
      </div>
    </section>
  )
}
