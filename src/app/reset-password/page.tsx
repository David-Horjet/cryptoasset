"use client"

import type React from "react"

import { useState, useEffect, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { resetPassword, clearError } from "@/lib/features/auth/authSlice"
import { Alert } from "@/components/ul/alert"
import { Button } from "@/components/ul/button"
import { AuthHeader } from "@/components/layout/auth-header"

function ResetPasswordForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const dispatch = useAppDispatch()
  const { isLoading, error } = useAppSelector((state) => state.auth)

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  })
  const [success, setSuccess] = useState(false)
  const token = searchParams.get("token")

  useEffect(() => {
    return () => {
      dispatch(clearError())
    }
  }, [dispatch])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!token) {
      return
    }

    if (formData.password !== formData.confirmPassword) {
      return
    }

    const result = await dispatch(
      resetPassword({
        token,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      }),
    )

    if (resetPassword.fulfilled.match(result)) {
      setSuccess(true)
      setTimeout(() => {
        router.push("/login")
      }, 2000)
    }
  }

  if (!token) {
    return (
      <Alert variant="destructive">Invalid or missing reset token. Please request a new password reset link.</Alert>
    )
  }

  return (
    <>
      {success ? (
        <Alert variant="success" className="mb-4">
          Password reset successful! Redirecting to login...
        </Alert>
      ) : (
        <>
          {error && (
            <Alert variant="destructive" className="mb-4">
              {error}
            </Alert>
          )}

          {formData.password !== formData.confirmPassword && formData.confirmPassword && (
            <Alert variant="destructive" className="mb-4">
              Passwords do not match
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                placeholder="New Password"
                value={formData.password}
                onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
                className="w-full px-4 py-4 border border-border rounded-xl bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                required
                disabled={isLoading}
                minLength={6}
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Confirm New Password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData((prev) => ({ ...prev, confirmPassword: e.target.value }))}
                className="w-full px-4 py-4 border border-border rounded-xl bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                required
                disabled={isLoading}
                minLength={6}
              />
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                className="w-full py-4 text-base font-medium"
                disabled={isLoading || formData.password !== formData.confirmPassword}
              >
                {isLoading ? "Resetting..." : "Reset Password"}
              </Button>
            </div>
          </form>
        </>
      )}
    </>
  )
}

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen bg-background">
      <AuthHeader />
      <main className="flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Reset Password</h1>
            <p className="text-muted-foreground">Enter your new password below.</p>
          </div>

          <Suspense fallback={<div>Loading...</div>}>
            <ResetPasswordForm />
          </Suspense>

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
