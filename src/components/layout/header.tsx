"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import Logo from "../ul/logo";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Logo />

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/#"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/#about"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="/#features"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Features
            </Link>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors font-medium"
              >
                <span>Community</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-accent"
                  >
                    Discord
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-accent"
                  >
                    Telegram
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-accent"
                  >
                    Twitter
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* Sign Up Button */}
          <Link href={"/signup"}>
            <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 md:px-6 md:py-2.5 rounded-lg font-medium transition-colors">
              Sign Up
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <div className="w-6 h-0.5 bg-foreground mb-1"></div>
            <div className="w-6 h-0.5 bg-foreground mb-1"></div>
            <div className="w-6 h-0.5 bg-foreground"></div>
          </button>
        </div>
      </div>
    </header>
  );
}
