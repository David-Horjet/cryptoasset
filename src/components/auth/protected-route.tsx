"use client"

import type React from "react"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAppSelector, useAppDispatch } from "@/lib/hooks"
import { loadUserFromStorage, fetchProfile } from "@/lib/features/auth/authSlice"

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { isAuthenticated, accessToken, user } = useAppSelector((state) => state.auth)

  useEffect(() => {
    // Load user from storage on mount
    dispatch(loadUserFromStorage())
  }, [dispatch])

  useEffect(() => {
    if (isAuthenticated && accessToken && !user) {
      dispatch(fetchProfile())
    }
  }, [isAuthenticated, accessToken, user, dispatch])

  useEffect(() => {
    // Check if user is authenticated
    if (!isAuthenticated && !accessToken) {
      router.push("/login")
    }
  }, [isAuthenticated, accessToken, router])

  // Show loading or nothing while checking auth
  if (!isAuthenticated && !accessToken) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
