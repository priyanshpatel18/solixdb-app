"use client";

import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ApiExamplesSection } from "@/components/sections/ApiExamplesSection";
import { UseCasesSection } from "@/components/sections/UseCasesSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navigation />
      <main className="w-full">
        <HeroSection />
        <div className="flex flex-col gap-8 mt-36">
          <span className="text-4xl text-neutral-400 font-semibold px-30"># Statistics</span>
          <StatsSection />
        </div>
        <div className="flex flex-col gap-8 mt-36">
          <span className="text-4xl text-neutral-400 font-semibold px-30"># Features</span>
          <FeaturesSection />
        </div>
        <ApiExamplesSection />
        <UseCasesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
