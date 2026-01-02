"use client";

import { Button } from "@/components/ui/button";
import { syne } from "@/fonts/fonts";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap, Code, Database, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden py-20 sm:py-28 md:py-36 lg:py-44">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(19,98,255,0.1),transparent_50%)]" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-8"
            >
              <Sparkles className="h-4 w-4" />
              <span>390M+ Solana Transactions Indexed</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight ${syne} mb-6 leading-[1.1]`}>
              <span className="bg-gradient-to-r from-foreground via-foreground/95 to-primary bg-clip-text text-transparent">
                Solana DeFi Data
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                At Your Fingertips
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed font-light">
              Query Solana DEX data via REST, GraphQL, or SQL. Build trading bots, analytics dashboards, and ML models with historical on-chain data from Jupiter, Pump.fun, Raydium, and more.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <Button 
              size="lg" 
              asChild 
              className="text-base h-14 px-8 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
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
              className="text-base h-14 px-8 rounded-full border-2 hover:bg-accent/50 transition-all"
            >
              <Link href="http://docs.solixdb.xyz" target="_blank" rel="noopener noreferrer">
                Read the Docs
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center p-8 rounded-3xl bg-card/80 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all shadow-sm hover:shadow-lg"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-5">
                <Zap className="h-7 w-7 text-primary" />
              </div>
              <div className="text-xl font-semibold mb-2">Lightning Fast</div>
              <div className="text-sm text-muted-foreground text-center">Sub-second query responses</div>
            </motion.div>
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center p-8 rounded-3xl bg-card/80 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all shadow-sm hover:shadow-lg"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-5">
                <Database className="h-7 w-7 text-primary" />
              </div>
              <div className="text-xl font-semibold mb-2">DEX Data</div>
              <div className="text-sm text-muted-foreground text-center">Jupiter, Pump.fun, Raydium</div>
            </motion.div>
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center p-8 rounded-3xl bg-card/80 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all shadow-sm hover:shadow-lg"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-5">
                <Code className="h-7 w-7 text-primary" />
              </div>
              <div className="text-xl font-semibold mb-2">Multiple APIs</div>
              <div className="text-sm text-muted-foreground text-center">REST, GraphQL, or SQL</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
