"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const sponsors = [
  {
    name: "Anza",
    logo: "/anza.jpg",
    url: "https://x.com/anza_xyz",
    tier: "Platinum",
    description: "Supporting Solana infrastructure",
  },
  {
    name: "Helius",
    logo: "/helius.jpg",
    url: "https://x.com/heliuslabs",
    tier: "Platinum",
    description: "Powering Solana development",
  },
];

export function HackathonSponsors() {
  return (
    <section id="sponsors" className="py-24 sm:py-32 relative overflow-hidden">
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
              Sponsors
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Thank you to our amazing sponsors for making this hackathon possible
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-2 border-cyan-500/30 hover:border-cyan-500/50 bg-card/80 backdrop-blur-sm transition-all hover:shadow-lg">
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <Link
                      href={sponsor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-opacity hover:opacity-80"
                    >
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={120}
                        height={120}
                        className="rounded-lg"
                      />
                    </Link>
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <CardTitle className="text-2xl">{sponsor.name}</CardTitle>
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="text-sm font-semibold text-cyan-400 mb-2">{sponsor.tier} Sponsor</div>
                  <p className="text-sm text-muted-foreground">{sponsor.description}</p>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Card className="border-2 border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-sm max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Heart className="h-6 w-6 text-pink-400" />
                <h3 className="text-2xl font-bold">Interested in Sponsoring?</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Help support the Solana developer community and get your brand in front of top builders.
                Contact us at <a href="mailto:sponsors@solixdb.xyz" className="text-cyan-400 hover:underline">sponsors@solixdb.xyz</a>
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
















