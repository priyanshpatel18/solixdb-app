"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  TrendingUp,
  Rocket,
  Users,
  BarChart3,
  DollarSign,
  Shield,
  Activity,
  ArrowLeftRight,
  LineChart,
} from "lucide-react";

const useCases = [
  {
    icon: TrendingUp,
    title: "Trading Bot Backtesting",
    description: "Test strategies against historical Pumpfun trades with prices and volumes.",
  },
  {
    icon: Rocket,
    title: "Token Launch Analytics",
    description: "Analyze which tokens succeed vs fail after launch (first 24h volume, holder growth).",
  },
  {
    icon: Users,
    title: "Whale Wallet Tracking",
    description: "Monitor large holders (>10 SOL volume) and their trading patterns.",
  },
  {
    icon: BarChart3,
    title: "DEX Aggregator Comparison",
    description: "Compare Jupiter vs Raydium vs Orca performance (volumes, fees, success rates).",
  },
  {
    icon: DollarSign,
    title: "Gas/Fee Optimization",
    description: "Analyze fee distribution by protocol, time of day, transaction type.",
  },
  {
    icon: Shield,
    title: "Rug Pull Detection AI",
    description: "Train ML models using failed transactions, token metadata, early trading patterns.",
  },
  {
    icon: Activity,
    title: "Market Maker Performance",
    description: "Analyze LP position changes, volume, fees earned over time.",
  },
  {
    icon: ArrowLeftRight,
    title: "Arbitrage Opportunity Scanner",
    description: "Find price differences across DEXs in real-time.",
  },
  {
    icon: LineChart,
    title: "Protocol Health Dashboard",
    description: "Public analytics for Solana ecosystem (daily active users, volumes, trends).",
  },
];

export function UseCasesSection() {
  return (
    <section id="use-cases" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/10 to-transparent" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Built for Real Use Cases
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            See how developers and researchers are using SolixDB to build the next generation of Solana applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className="h-full p-8 rounded-3xl bg-card/50 backdrop-blur-xl border border-border/50 hover:border-primary/30 transition-all hover:shadow-xl">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {useCase.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
