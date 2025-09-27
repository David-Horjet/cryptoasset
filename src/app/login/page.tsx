import Link from "next/link"
import { SignUpHeader } from "@/components/signup-header"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background">
      <SignUpHeader />
      <main className="flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Log in</h1>
          </div>
          <form className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-4 border border-border rounded-xl bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                required
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-4 border border-border rounded-xl bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                required
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 text-base font-medium bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors"
              >
                Log in
              </button>
            </div>
          </form>
          <div className="text-center mt-6">
            <p className="text-muted-foreground mb-2">Don't have an account?</p>
            <Link href="/signup" className="text-foreground hover:text-primary transition-colors font-medium">
              Sign up
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
