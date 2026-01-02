"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export function AnchorLabsSection() {
  return (
    <section className="py-20 sm:py-28 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Also check out{" "}
            <Link 
              href="https://anchorlabs.solixdb.xyz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium inline-flex items-center gap-1"
            >
              AnchorLabs
              <ExternalLink className="h-4 w-4" />
            </Link>
            {" "}— a browser-based tool for testing Solana programs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
