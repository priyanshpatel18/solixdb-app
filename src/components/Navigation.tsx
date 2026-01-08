"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Navigation() {
  const navLinks = [
    { href: "#benchmark", label: "BenchMark" },
    { href: "#use-cases", label: "Use Cases" },
    { href: "http://docs.solixdb.xyz", label: "Docs", external: true },
    { href: "http://api.solixdb.xyz", label: "Api", external: true },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full">
      <div className="container mx-auto px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center group">
            <Image
              src="/Hero.png"
              alt="SolixDB"
              width={120}
              height={32}
              className="h-8 w-auto transition-transform group-hover:scale-105"
              priority
            />
          </Link>

          <div className="flex items-center">
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
            {/* TODO: add blue background primary */}
            <Link href={'/'} className="flex items-center gap-2 text-sm font-bold bg-neutral-100 py-2 px-4 ml-4 rounded-sm text-neutral-500 hover:text-neutral-700 transition-colors hover:text-foreground">Enterprise <ArrowRight size={18} /></Link>
            <ThemeToggle position="relative" />
          </div>
        </div>
      </div>
    </nav>
  );
}
