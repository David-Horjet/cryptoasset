import HeroIllustration from "./hero-illustration"

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              <span className="text-balance">Welcome to CryptoAsset — The Future of Wealth is Here</span>
            </h1>

            <p className="text-lg md:text-xl text-muted leading-relaxed max-w-lg">
              Making cryptocurrency investing accessible, transparent and rewarding.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 md:px-10 md:py-4 rounded-lg font-semibold text-lg transition-colors">
                Create Account
              </button>
              <button className="border-2 border-gray-300 hover:border-primary text-foreground hover:text-primary px-8 py-3 md:px-10 md:py-4 rounded-lg font-semibold text-lg transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center lg:justify-end">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  )
}
