"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Medal, Award, Gift, Sparkles } from "lucide-react";

const prizeTiers = [
  {
    rank: 1,
    title: "First Place",
    icon: Trophy,
    amount: "$20,000",
    color: "from-yellow-400 to-yellow-600",
    borderColor: "border-yellow-500/50",
    shadowColor: "shadow-yellow-500/30",
    description: "Grand prize for the most innovative and impactful project",
  },
  {
    rank: 2,
    title: "Second Place",
    icon: Medal,
    amount: "$12,000",
    color: "from-gray-300 to-gray-500",
    borderColor: "border-gray-400/50",
    shadowColor: "shadow-gray-400/30",
    description: "Runner-up prize for exceptional technical execution",
  },
  {
    rank: 3,
    title: "Third Place",
    icon: Award,
    amount: "$8,000",
    color: "from-orange-400 to-orange-600",
    borderColor: "border-orange-500/50",
    shadowColor: "shadow-orange-500/30",
    description: "Third place prize for outstanding innovation",
  },
];

const additionalPrizes = [
  {
    title: "Best Design",
    amount: "$3,000",
    description: "Most beautiful and user-friendly interface",
  },
  {
    title: "Most Innovative",
    amount: "$3,000",
    description: "Most creative and unique use case",
  },
  {
    title: "Community Favorite",
    amount: "$2,000",
    description: "Highest community engagement and votes",
  },
  {
    title: "Best ML Model",
    amount: "$2,000",
    description: "Most accurate and useful machine learning implementation",
  },
];

const milestoneRewards = [
  { xp: 100, reward: "Early access to new features" },
  { xp: 250, reward: "SolixDB swag pack" },
  { xp: 500, reward: "1-on-1 mentorship session" },
  { xp: 1000, reward: "Featured on SolixDB blog" },
];

export function HackathonPrizes() {
  return (
    <section id="prizes" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-900/5 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
              Prizes & Rewards
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Compete for over $50,000 in prizes and exclusive rewards
          </p>
        </motion.div>

        {/* Top 3 Prizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {prizeTiers.map((prize, index) => (
            <motion.div
              key={prize.rank}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={index === 0 ? "md:col-span-1 md:row-span-1" : ""}
            >
              <Card className={`h-full border-2 ${prize.borderColor} bg-card/80 backdrop-blur-sm hover:shadow-xl ${prize.shadowColor} transition-all relative overflow-hidden`}>
                {/* Rank Badge */}
                <div className="absolute top-4 right-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${prize.color} flex items-center justify-center text-white font-black text-lg shadow-lg`}>
                    #{prize.rank}
                  </div>
                </div>

                <CardHeader className="text-center pb-4">
                  <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${prize.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <prize.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{prize.title}</CardTitle>
                  <div className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    {prize.amount}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{prize.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Prizes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8">Additional Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalPrizes.map((prize, index) => (
              <motion.div
                key={prize.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 border-purple-500/30 hover:border-purple-500/50 bg-card/50 backdrop-blur-sm transition-all hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg">{prize.title}</CardTitle>
                    <div className="text-2xl font-bold text-purple-400">{prize.amount}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{prize.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* XP Milestone Rewards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="border-2 border-cyan-500/30 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="h-6 w-6 text-cyan-400" />
                <CardTitle className="text-2xl">XP Milestone Rewards</CardTitle>
              </div>
              <p className="text-muted-foreground">
                Earn exclusive rewards as you build in public and accumulate XP
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {milestoneRewards.map((milestone, index) => (
                  <div
                    key={milestone.xp}
                    className="bg-card/50 rounded-lg p-4 border border-cyan-500/20"
                  >
                    <div className="text-2xl font-black text-cyan-400 mb-2">
                      {milestone.xp} XP
                    </div>
                    <div className="text-sm text-muted-foreground">{milestone.reward}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
















