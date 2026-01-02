"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20" />
      <div className="absolute inset-0 bg-radial-primary-lg" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Ready to build?
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-12 leading-relaxed">
            Start querying Solana data in minutes. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              size="lg" 
              asChild 
              className="text-lg h-16 px-10 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Link href="https://api.solixdb.xyz" target="_blank" rel="noopener noreferrer">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild 
              className="text-lg h-16 px-10 rounded-full border-2 hover:bg-accent/50 transition-all"
            >
              <Link href="http://docs.solixdb.xyz" target="_blank" rel="noopener noreferrer">
                View Documentation
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

