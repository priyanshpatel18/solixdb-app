"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section ref={ref} className="relative w-full overflow-hidden h-[calc(100vh-5rem)] flex items-center">
      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5" />
      <div className="absolute inset-0 bg-radial-primary" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          style={{ opacity, scale }}
          className="mx-auto max-w-6xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-6">
              API to query
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Solana DeFi data
              </span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-3xl leading-relaxed">
              DEX data from Jupiter, Pump.fun, Raydium, and more. Build trading bots, analytics dashboards, and ML models with historical on-chain data.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12"
          >
            <Button 
              size="lg" 
              asChild 
              className="text-lg h-16 px-10 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Link href="https://api.solixdb.xyz" target="_blank" rel="noopener noreferrer">
                Start Building
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
                Read the Docs
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex items-center gap-3"
          >
            <span className="text-sm text-muted-foreground">Powered by</span>
            <a
              href="https://x.com/anza_xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
            >
              <Image
                src="/anza.jpg"
                alt="Anza"
                width={40}
                height={40}
                className="h-10 w-10 rounded-lg"
              />
            </a>
            <a
              href="https://x.com/heliuslabs"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
            >
              <Image
                src="/helius.jpg"
                alt="Helius"
                width={40}
                height={40}
                className="h-10 w-10 rounded-lg"
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
