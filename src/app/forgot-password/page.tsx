"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { forgotPassword } from "@/lib/features/auth/authSlice"
import { AuthHeader } from "@/components/layout/auth-header"
import { Alert } from "@/components/ul/alert"
import { Button } from "@/components/ul/button"

export default function ForgotPasswordPage() {
  const dispatch = useAppDispatch()
  const { isLoading, error } = useAppSelector((state) => state.auth)
  const [email, setEmail] = useState("")
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const result = await dispatch(forgotPassword(email))
    if (forgotPassword.fulfilled.match(result)) {
      setSuccess(true)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <AuthHeader />
      <main className="flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Forgot Password</h1>
            <p className="text-muted-foreground">
              Enter your email address and we'll send you a link to reset your password.
            </p>
          </div>

          {success ? (
            <Alert variant="success" className="mb-4">
              Password reset email sent! Check your inbox for further instructions.
            </Alert>
          ) : (
            <>
              {error && (
                <Alert variant="destructive" className="mb-4">
                  {error}
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-4 border border-border rounded-xl bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    required
                    disabled={isLoading}
                  />
                </div>

                <div className="pt-2">
                  <Button type="submit" className="w-full py-4 text-base font-medium" disabled={isLoading}>
                    {isLoading ? "Sending..." : "Send Reset Link"}
                  </Button>
                </div>
              </form>
            </>
          )}

          <div className="text-center mt-6">
            <Link href="/login" className="text-foreground hover:text-primary transition-colors font-medium">
              Back to Log in
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
