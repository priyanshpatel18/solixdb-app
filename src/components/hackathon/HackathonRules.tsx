"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users, Code, Award, Shield, Clock } from "lucide-react";

const rulesCategories = [
  {
    icon: Users,
    title: "Eligibility",
    color: "from-cyan-500 to-blue-500",
    items: [
      "Open to developers worldwide",
      "Individuals or teams (max 5 members)",
      "Must be 18+ years old",
      "Must have a GitHub account",
    ],
  },
  {
    icon: Code,
    title: "Submission Guidelines",
    color: "from-purple-500 to-pink-500",
    items: [
      "Project must use SolixDB API",
      "Code must be open source (MIT or Apache 2.0)",
      "Include README with setup instructions",
      "Provide live demo or video walkthrough",
      "Submit before the deadline",
    ],
  },
  {
    icon: FileText,
    title: "X Posting Rules",
    color: "from-pink-500 to-red-500",
    items: [
      "Must tag @solixdb in every post",
      "Share daily progress updates",
      "Base XP: 10 points per post",
      "Daily streak bonus: +5 XP per consecutive day",
      "Posts must be about building in public",
      "No spam or duplicate content",
    ],
  },
  {
    icon: Award,
    title: "XP Earning",
    color: "from-blue-500 to-cyan-500",
    items: [
      "10 XP per X post about daily progress",
      "+5 XP bonus for consecutive daily posts",
      "Posts must include @solixdb tag",
      "Manual submission available for verification",
      "XP calculated automatically or by admin review",
    ],
  },
  {
    icon: Shield,
    title: "Code of Conduct",
    color: "from-green-500 to-emerald-500",
    items: [
      "Respect all participants and judges",
      "No harassment or discrimination",
      "Original work only (no plagiarism)",
      "Follow all platform terms of service",
      "Maintain professional communication",
    ],
  },
  {
    icon: Clock,
    title: "Deadlines",
    color: "from-orange-500 to-yellow-500",
    items: [
      "Registration: Open until hackathon ends",
      "Project submission: End of hackathon period",
      "Late submissions not accepted",
      "All times in UTC",
      "Check leaderboard for countdown timer",
    ],
  },
];

export function HackathonRules() {
  return (
    <section id="rules" className="py-24 sm:py-32 relative overflow-hidden bg-muted/30">
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
              Rules & Guidelines
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Make sure you understand all the rules and guidelines before participating.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rulesCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-2 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/20 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Intellectual Property Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <Card className="border-2 border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl mb-2">Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                All submitted projects remain the intellectual property of their creators. By participating,
                you grant SolixDB the right to showcase your project in promotional materials. All code
                must be open source and available on GitHub. Participants are responsible for ensuring
                they have the right to use any third-party libraries or services in their projects.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
















