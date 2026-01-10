"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#benchmark", label: "Benchmark" },
    { href: "#use-cases", label: "Use Cases" },
    { href: "http://docs.solixdb.xyz", label: "Docs", external: true },
    { href: "http://api.solixdb.xyz", label: "Api", external: true },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <Link href="/" className="flex items-center group">
            <Image
              src="https://ox35safakaidjuzg.public.blob.vercel-storage.com/hero.webp"
              alt="SolixDB"
              width={120}
              height={32}
              className="h-6 sm:h-8 w-auto transition-transform group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-sm font-bold hover:bg-neutral-100 py-0.5 px-2 rounded-sm text-neutral-500 hover:text-neutral-700 transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Link href={'https://t.me/priyansh_ptl18'} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold bg-neutral-100 py-2 px-4 ml-4 rounded-sm text-neutral-500 hover:text-neutral-700 transition-colors hover:text-foreground">Enterprise <ArrowRight size={18} /></Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-neutral-600 hover:text-neutral-900 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-100">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="text-sm font-bold py-2 px-3 rounded-sm text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={'https://t.me/priyansh_ptl18'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-sm font-bold bg-neutral-100 py-2.5 px-4 mt-2 rounded-sm text-neutral-500 hover:text-neutral-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Enterprise <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
