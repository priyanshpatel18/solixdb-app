"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { HackathonHero } from "@/components/hackathon/HackathonHero";
import { HackathonAbout } from "@/components/hackathon/HackathonAbout";
import { HackathonRules } from "@/components/hackathon/HackathonRules";
import { HackathonPrizes } from "@/components/hackathon/HackathonPrizes";
import { HackathonLeaderboard } from "@/components/hackathon/HackathonLeaderboard";
import { HackathonRegistration } from "@/components/hackathon/HackathonRegistration";
import { HackathonSubmission } from "@/components/hackathon/HackathonSubmission";
import { HackathonJudging } from "@/components/hackathon/HackathonJudging";
import { HackathonFAQ } from "@/components/hackathon/HackathonFAQ";
import { HackathonSponsors } from "@/components/hackathon/HackathonSponsors";
import { HackathonActivity } from "@/components/hackathon/HackathonActivity";

export default function HackathonPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />
      <main className="flex-1">
        <HackathonHero />
        <HackathonAbout />
        <HackathonRules />
        <HackathonPrizes />
        <HackathonLeaderboard />
        <HackathonActivity />
        <HackathonRegistration />
        <HackathonSubmission />
        <HackathonJudging />
        <HackathonFAQ />
        <HackathonSponsors />
      </main>
      <Footer />
    </div>
  );
}
















