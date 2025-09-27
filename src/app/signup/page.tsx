import Link from "next/link"
import { SignUpForm } from "@/components/signup-form"
import { SignUpHeader } from "@/components/signup-header"

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-background">
      <SignUpHeader />
      <main className="flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Sign up</h1>
          </div>
          <SignUpForm />
          <div className="text-center mt-6">
            <p className="text-muted-foreground mb-2">Already have an account?</p>
            <Link href="/login" className="text-foreground hover:text-primary transition-colors font-medium">
              Log in
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
