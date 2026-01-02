"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  GraduationCap,
} from "lucide-react";

const useCases = [
  {
    icon: TrendingUp,
    title: "Trading Bot Backtesting",
    description: "Test strategies against historical Pumpfun trades with prices and volumes.",
    category: "Trading",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: Rocket,
    title: "Token Launch Analytics",
    description: "Analyze which tokens succeed vs fail after launch (first 24h volume, holder growth).",
    category: "Analytics",
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    icon: Users,
    title: "Whale Wallet Tracking",
    description: "Monitor large holders (>10 SOL volume) and their trading patterns.",
    category: "Monitoring",
    color: "bg-green-500/10 text-green-500",
  },
  {
    icon: BarChart3,
    title: "DEX Aggregator Comparison",
    description: "Compare Jupiter vs Raydium vs Orca performance (volumes, fees, success rates).",
    category: "Analytics",
    color: "bg-orange-500/10 text-orange-500",
  },
  {
    icon: DollarSign,
    title: "Gas/Fee Optimization",
    description: "Analyze fee distribution by protocol, time of day, transaction type.",
    category: "Optimization",
    color: "bg-yellow-500/10 text-yellow-500",
  },
  {
    icon: Shield,
    title: "Rug Pull Detection AI",
    description: "Train ML models using failed transactions, token metadata, early trading patterns.",
    category: "Security",
    color: "bg-red-500/10 text-red-500",
  },
  {
    icon: Activity,
    title: "Market Maker Performance",
    description: "Analyze LP position changes, volume, fees earned over time.",
    category: "Analytics",
    color: "bg-indigo-500/10 text-indigo-500",
  },
  {
    icon: ArrowLeftRight,
    title: "Arbitrage Opportunity Scanner",
    description: "Find price differences across DEXs in real-time.",
    category: "Trading",
    color: "bg-teal-500/10 text-teal-500",
  },
  {
    icon: LineChart,
    title: "Protocol Health Dashboard",
    description: "Public analytics for Solana ecosystem (daily active users, volumes, trends).",
    category: "Analytics",
    color: "bg-pink-500/10 text-pink-500",
  },
  {
    icon: GraduationCap,
    title: "Academic Research Dataset",
    description: "Clean data for papers on DeFi, MEV, market microstructure.",
    category: "Research",
    color: "bg-cyan-500/10 text-cyan-500",
  },
];

const categories = ["All", "Trading", "Analytics", "Monitoring", "Optimization", "Security", "Research"];

export function UseCasesSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredUseCases =
    selectedCategory === "All"
      ? useCases
      : useCases.filter((uc) => uc.category === selectedCategory);

  return (
    <section id="use-cases" className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight`}>
            Built for Real Use Cases
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            See how developers and researchers are using SolixDB to build the next generation of Solana applications.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="cursor-pointer px-5 py-2 text-sm font-medium transition-all hover:scale-105"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUseCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Card className="h-full hover:border-primary/50 transition-all hover:shadow-lg group">
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-xl ${useCase.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-xl mb-3">{useCase.title}</CardTitle>
                    <Badge variant="outline" className="w-fit">
                      {useCase.category}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {useCase.description}
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
