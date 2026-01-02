"use client";

import { motion } from "framer-motion";
import { Database, Zap, Globe, Shield, Clock, Code } from "lucide-react";

const features = [
  {
    icon: Database,
    title: "Complete DEX Coverage",
    description: "Comprehensive Solana DEX data from Jupiter, Pump.fun, Raydium, Orca, and more. Expanding to additional protocols.",
  },
  {
    icon: Zap,
    title: "Blazingly Fast",
    description: "Sub-500ms query response times. Built for real-time applications and analytics that demand speed.",
  },
  {
    icon: Globe,
    title: "Multiple APIs",
    description: "Choose REST, GraphQL, or SQL. Use the interface that fits your workflow and team preferences.",
  },
  {
    icon: Shield,
    title: "Production Ready",
    description: "Reliable infrastructure with real-time data updates, high availability, and enterprise-grade uptime.",
  },
  {
    icon: Clock,
    title: "Historical Data",
    description: "Access complete transaction history for backtesting, analytics, and machine learning model training.",
  },
  {
    icon: Code,
    title: "Developer First",
    description: "Built by developers, for developers. Clean APIs, comprehensive documentation, and active support.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Everything You Need
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
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
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className="h-full p-8 rounded-3xl bg-card/50 backdrop-blur-xl border border-border/50 hover:border-primary/30 transition-all hover:shadow-xl">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {feature.description}
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
