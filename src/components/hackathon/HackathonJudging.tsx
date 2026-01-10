"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, Code, Sparkles, Users, TrendingUp } from "lucide-react";

const criteria = [
  {
    icon: Scale,
    title: "XP Points",
    weight: "30%",
    description: "Points earned through daily X posts and building in public",
    details: [
      "Base XP: 10 points per post",
      "Daily streak bonus: +5 XP per consecutive day",
      "Consistency and engagement matter",
    ],
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Code,
    title: "Product Quality",
    weight: "50%",
    description: "Overall quality and technical implementation of your project",
    details: [
      "Innovation and creativity (20%)",
      "Technical implementation (15%)",
      "Usefulness and impact (10%)",
      "Code quality and documentation (5%)",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Sparkles,
    title: "Building in Public",
    weight: "20%",
    description: "Engagement, consistency, and community interaction",
    details: [
      "Daily progress updates",
      "Community engagement",
      "Helpful contributions to others",
      "Documentation and tutorials",
    ],
    color: "from-pink-500 to-red-500",
  },
];

const qualityBreakdown = [
  { aspect: "Innovation & Creativity", weight: "20%", description: "How unique and creative is your solution?" },
  { aspect: "Technical Implementation", weight: "15%", description: "Quality of code, architecture, and technical choices" },
  { aspect: "Usefulness & Impact", weight: "10%", description: "Does it solve a real problem? Who benefits?" },
  { aspect: "Code Quality", weight: "3%", description: "Clean code, best practices, maintainability" },
  { aspect: "Documentation", weight: "2%", description: "README, setup instructions, API docs" },
];

export function HackathonJudging() {
  return (
    <section id="judging" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Judging Criteria
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understand how your project will be evaluated
          </p>
        </motion.div>

        {/* Main Criteria */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {criteria.map((criterion, index) => (
            <motion.div
              key={criterion.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-2 border-cyan-500/30 hover:border-cyan-500/50 bg-card/80 backdrop-blur-sm transition-all hover:shadow-lg">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${criterion.color} flex items-center justify-center mb-4`}>
                    <criterion.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{criterion.title}</CardTitle>
                    <span className="text-2xl font-black text-cyan-400">{criterion.weight}</span>
                  </div>
                  <CardDescription className="text-base">{criterion.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {criterion.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Product Quality Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="border-2 border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="h-6 w-6 text-purple-400" />
                <CardTitle className="text-2xl">Product Quality Breakdown (50%)</CardTitle>
              </div>
              <CardDescription>
                Detailed breakdown of how product quality is evaluated
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {qualityBreakdown.map((item, index) => (
                  <div
                    key={item.aspect}
                    className="flex items-start justify-between gap-4 p-4 rounded-lg border border-cyan-500/20 bg-card/50"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-semibold text-lg">{item.aspect}</span>
                        <span className="text-cyan-400 font-bold">{item.weight}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Final Scoring Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <Card className="border-2 border-cyan-500/30 bg-card/50 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <Users className="h-6 w-6 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Final Scoring</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Projects will be evaluated by a panel of judges from the Solana ecosystem.
                    Scores will be calculated based on the weighted criteria above. The top projects
                    will be selected for prizes, with special recognition for outstanding work in
                    specific categories. All decisions are final.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
















