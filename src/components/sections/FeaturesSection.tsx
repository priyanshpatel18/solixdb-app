"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Database, Zap, Globe, Shield, TrendingUp, Clock } from "lucide-react";

const features = [
  {
    icon: Database,
    title: "DEX Data Coverage",
    description: "Comprehensive Solana DEX data from Jupiter, Pump.fun, Raydium, Orca, and more. Expanding to additional protocols.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Sub-500ms query response times. Built for real-time applications and analytics.",
  },
  {
    icon: Globe,
    title: "Multiple APIs",
    description: "Choose REST, GraphQL, or SQL. Use the interface that fits your workflow.",
  },
  {
    icon: Shield,
    title: "Production Ready",
    description: "Reliable infrastructure with real-time data updates and high availability.",
  },
  {
    icon: TrendingUp,
    title: "Real-Time Updates",
    description: "Always up-to-date with the latest Solana DEX transactions as they happen.",
  },
  {
    icon: Clock,
    title: "Historical Data",
    description: "Access complete transaction history for backtesting, analytics, and model training.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 sm:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-50" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent`}>
            Everything You Need
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A complete DeFi data platform designed for Solana developers and researchers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <Card className="h-full hover:border-primary/50 transition-all hover:shadow-lg rounded-3xl border-2 bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-5">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed text-muted-foreground">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
