"use client";

import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { UseCasesSection } from "@/components/sections/UseCasesSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { ApiExamplesSection } from "@/components/sections/ApiExamplesSection";
import { SchemaSection } from "@/components/sections/SchemaSection";
import { DatasetSection } from "@/components/sections/DatasetSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <SocialProofSection />
        <ProductsSection />
        <FeaturesSection />
        <UseCasesSection />
        <StatsSection />
        <HowItWorksSection />
        <ApiExamplesSection />
        <SchemaSection />
        <DatasetSection />
      </main>
      <Footer />
    </div>
  );
}
