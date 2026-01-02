"use client";

import Link from "next/link";
import { syne } from "@/fonts/fonts";
import { Twitter, Github, MessageCircle, ExternalLink } from "lucide-react";

const links = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "API", href: "#api" },
  ],
  resources: [
    { label: "Documentation", href: "http://docs.solixdb.xyz", external: true },
    { label: "API Reference", href: "https://api.solixdb.xyz", external: true },
    { label: "AnchorLabs", href: "https://anchorlabs.solixdb.xyz", external: true },
  ],
  community: [
    { label: "Twitter", href: "https://x.com/solixdb", external: true },
    { label: "Telegram", href: "https://t.me/solixdb", external: true },
    { label: "GitHub", href: "https://github.com/solixdb", external: true },
  ],
};

export function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className={`text-2xl font-bold ${syne} mb-4 inline-block bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent`}>
              SolixDB
            </Link>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              The data platform for Solana. 390M+ transactions at your fingertips.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://x.com/solixdb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com/solixdb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://t.me/solixdb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {links.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {links.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    {link.external && <ExternalLink className="h-3 w-3" />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              {links.community.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    {link.external && <ExternalLink className="h-3 w-3" />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} SolixDB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

