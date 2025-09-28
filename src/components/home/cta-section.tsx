import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">
            Ready to Start Your Crypto Journey?
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto text-pretty">
            Join thousands of investors who trust CryptoAsset for their digital wealth management. Start building your
            portfolio today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto px-8 py-3 text-lg font-semibold">
              Create Account
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto px-8 py-3 text-lg font-semibold bg-transparent border-white text-white hover:bg-white hover:text-primary"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
