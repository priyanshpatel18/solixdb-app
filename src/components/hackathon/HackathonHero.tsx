"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Trophy, Zap, Users, Calendar } from "lucide-react";
import { CountdownTimer } from "./CountdownTimer";
import Link from "next/link";

export function HackathonHero() {
  const hackathonStartDate = new Date("2024-12-01T00:00:00Z");
  const hackathonEndDate = new Date("2025-01-01T00:00:00Z");
  const now = new Date();
  const isActive = now >= hackathonStartDate && now <= hackathonEndDate;

  return (
    <section className="relative w-full overflow-hidden min-h-[90vh] flex items-center justify-center">
      {/* Animated gaming background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.1),transparent_50%)]" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            initial={{
              x: typeof window !== "undefined" ? Math.random() * window.innerWidth : Math.random() * 1000,
              y: typeof window !== "undefined" ? Math.random() * window.innerHeight : Math.random() * 800,
              opacity: 0.3,
            }}
            animate={{
              y: [null, -100],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Neon grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-6xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-8"
          >
            <Zap className="h-4 w-4 text-cyan-400" />
            <span className="text-sm font-semibold text-cyan-300">1 Month Hackathon</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              SolixDB
            </span>
            <br />
            <span className="text-foreground">Hackathon</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Build innovative projects on Solana's most powerful blockchain data platform.
            <br />
            <span className="text-cyan-400 font-semibold">Compete. Build. Win.</span>
          </motion.p>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-12"
          >
            <CountdownTimer targetDate={isActive ? hackathonEndDate : hackathonStartDate} />
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto"
          >
            <div className="bg-card/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-4">
              <Trophy className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">$50K+</div>
              <div className="text-sm text-muted-foreground">Prize Pool</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4">
              <Users className="h-6 w-6 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">500+</div>
              <div className="text-sm text-muted-foreground">Participants</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-pink-500/20 rounded-lg p-4">
              <Zap className="h-6 w-6 text-pink-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">10 XP</div>
              <div className="text-sm text-muted-foreground">Per Post</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-4">
              <Calendar className="h-6 w-6 text-cyan-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">30 Days</div>
              <div className="text-sm text-muted-foreground">Duration</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              asChild
              className="text-lg h-14 px-8 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/50 transition-all hover:scale-105"
            >
              <Link href="#registration">Register Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg h-14 px-8 rounded-full border-2 border-cyan-500/50 hover:bg-cyan-500/10 hover:border-cyan-500 transition-all"
            >
              <Link href="#leaderboard">View Leaderboard</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

