"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How do I register for the hackathon?",
    answer: "Simply fill out the registration form on this page. You'll need to provide your name, email, X (Twitter) handle, and GitHub username. Registration is open throughout the hackathon period.",
  },
  {
    question: "How does the XP system work?",
    answer: "You earn 10 XP for each X post about your daily progress that tags @solixdb. If you post on consecutive days, you get a +5 XP bonus per day. For example, if you post 3 days in a row, you'll earn 10 + 15 (bonus) = 25 XP on the third day.",
  },
  {
    question: "Can I participate as a team?",
    answer: "Yes! Teams of up to 5 members are allowed. Each team member should register individually, but you can specify your team name during registration. Team XP is shared across all members.",
  },
  {
    question: "What if I miss a day of posting?",
    answer: "If you miss a day, your streak resets to 0. You'll still earn 10 XP for your next post, but won't get the streak bonus until you build up consecutive days again.",
  },
  {
    question: "How do I submit my project?",
    answer: "Use the project submission form on this page. You'll need to provide your project name, description, GitHub repository URL, and explain how you used SolixDB. You can edit your submission until the deadline.",
  },
  {
    question: "What if I can't post on X?",
    answer: "You can manually submit your post URLs through the activity feed. Our admin team will verify and award XP. However, automatic detection via X API is preferred for faster processing.",
  },
  {
    question: "What technologies can I use?",
    answer: "You can use any technology stack you prefer. The only requirement is that your project must use the SolixDB API. Popular choices include React, Next.js, Python, TypeScript, and more.",
  },
  {
    question: "Do I need to make my code open source?",
    answer: "Yes, all submitted projects must be open source with an MIT or Apache 2.0 license. This is a requirement for participation and helps the community learn from each other.",
  },
  {
    question: "How often is the leaderboard updated?",
    answer: "The leaderboard updates every 5-15 minutes. XP is calculated automatically for posts detected via X API, or manually reviewed for submitted posts within 24 hours.",
  },
  {
    question: "What happens if I have questions during the hackathon?",
    answer: "Join our Discord community or reach out via X @solixdb. We have mentors available to help with technical questions, API usage, and project guidance throughout the hackathon.",
  },
  {
    question: "Can I submit multiple projects?",
    answer: "Each participant or team can submit one main project. However, you're welcome to build multiple projects and showcase them, but only one will be judged for prizes.",
  },
  {
    question: "What are the prizes?",
    answer: "The total prize pool is over $50,000, with $20,000 for first place, $12,000 for second, and $8,000 for third. There are also category prizes for Best Design, Most Innovative, Community Favorite, and Best ML Model.",
  },
];

export function HackathonFAQ() {
  return (
    <section id="faq" className="py-24 sm:py-32 relative overflow-hidden bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about the hackathon
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="border-2 border-cyan-500/30 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <HelpCircle className="h-6 w-6 text-cyan-400" />
                <CardTitle className="text-2xl">Common Questions</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <Accordion type="single" className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-semibold hover:text-cyan-400 transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
















