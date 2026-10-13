"use client";

import Link from "next/link";
import { useState } from "react";
import { SITE_NAME, NAV_LINKS } from "@/lib/config/site";
import { GamosaDivider } from "./GamosaDivider";
import { Button } from "@workspace/ui/components/button";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-paper/95 backdrop-blur-md border-b border-stone-200">
      <GamosaDivider />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-md bg-gamosa-red text-white flex items-center justify-center font-bold font-serif text-lg shadow-sm">
              ব
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg text-ink tracking-tight leading-tight group-hover:text-gamosa-red transition-colors">
                {SITE_NAME}
              </span>
              <span className="text-[10px] text-stone-500 font-medium tracking-wide">
                ASSAM'S VERIFIED DIRECTORY
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-ink transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/categories"
            className="hover:text-ink transition-colors"
          >
            Explore
          </Link>
          <div className="flex items-center gap-3 pl-4 border-l border-stone-200">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm" className="bg-gamosa-red hover:bg-gamosa-red/90 text-white">
                Claim Listing
              </Button>
            </Link>
          </div>
        </nav>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <Link href="/login">
            <Button variant="ghost" size="sm" className="text-xs px-2.5">
              Login
            </Button>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-2 text-stone-600 hover:text-ink focus:outline-hidden"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-stone-200 bg-paper px-4 pt-2 pb-6 space-y-3">
          <div className="flex flex-col space-y-2 text-sm font-medium">
            <Link
              href="/categories"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-stone-100"
            >
              Explore All Categories
            </Link>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-stone-100"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="pt-3 border-t border-stone-200 flex flex-col gap-2">
            <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-gamosa-red hover:bg-gamosa-red/90 text-white">
                Claim Your Listing
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
