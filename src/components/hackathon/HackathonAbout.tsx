"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Zap, Code2, BarChart3, Shield, Rocket } from "lucide-react";

const solixdbFeatures = [
  {
    icon: Database,
    title: "Multi-Protocol Support",
    description: "Access data from Jupiter, Pump.fun, Raydium, Orca, and more protocols in one unified API.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Sub-500ms query response times powered by ClickHouse's optimized columnar storage engine.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Code2,
    title: "Multiple APIs",
    description: "Choose REST, GraphQL, or SQL—use the interface that fits your workflow best.",
    color: "from-pink-500 to-red-500",
  },
  {
    icon: BarChart3,
    title: "Analytics Ready",
    description: "Perfect for building trading bots, analytics dashboards, ML models, and research tools.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Shield,
    title: "Production Ready",
    description: "Reliable infrastructure with real-time data updates, high availability, and built-in rate limiting.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Rocket,
    title: "Developer First",
    description: "Simple authentication, comprehensive documentation, and examples to get you building quickly.",
    color: "from-orange-500 to-yellow-500",
  },
];

export function HackathonAbout() {
  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About SolixDB
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            SolixDB is a high-performance Solana blockchain data collection system that provides
            fast and flexible access to DeFi transaction data from major DEX protocols.
          </p>
        </motion.div>

        {/* SolixDB Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {solixdbFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-2 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/20 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Hackathon Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="border-2 border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-3xl mb-4">Hackathon Overview</CardTitle>
              <CardDescription className="text-lg">
                Join us for an exciting 1-month hackathon where developers build innovative projects
                on top of SolixDB's powerful data infrastructure.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-cyan-400">What You'll Build</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>Trading bots and strategy backtesting tools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>Analytics dashboards and data visualization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>ML models for price prediction and rug pull detection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>Research tools and academic datasets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>Whale tracking and market analysis tools</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-purple-400">Why Participate</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Compete for $50K+ in prizes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Build in public and earn XP for daily progress</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Learn from the Solana developer community</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Showcase your project to potential employers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Get early access to new SolixDB features</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
















