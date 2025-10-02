"use client";

import { AuthHeader } from "@/components/layout/auth-header";
import { LoginForm } from "@/components/login/login-form";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background">
      <AuthHeader />
      <main className="flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Log in</h1>
          </div>
          <LoginForm />
        </div>
      </main>
    </div>
  );
}
