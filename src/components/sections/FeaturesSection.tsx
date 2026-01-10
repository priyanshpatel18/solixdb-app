"use client";

import { motion } from "framer-motion";
import { Database, Zap, Globe, Shield, Clock, Code, ChevronRight, Terminal } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Database,
    title: "Complete DEX Coverage",
    description: "Comprehensive Solana DEX data from Jupiter, Pump.fun, Raydium, Orca, and more. Expanding to additional protocols.",
  },
  {
    icon: Zap,
    title: "Blazingly Fast",
    description: "Sub-500ms query response times. Built for real-time applications and analytics that demand speed.",
  },
  {
    icon: Globe,
    title: "Multiple APIs",
    description: "Choose REST, GraphQL, or SQL. Use the interface that fits your workflow and team preferences.",
  },
  {
    icon: Shield,
    title: "Production Ready",
    description: "Reliable infrastructure with real-time data updates, high availability, and enterprise-grade uptime.",
  },
  {
    icon: Clock,
    title: "Historical Data",
    description: "Access complete transaction history for backtesting, analytics, and machine learning model training.",
  },
  {
    icon: Code,
    title: "Developer First",
    description: "Built by developers, for developers. Clean APIs, comprehensive documentation, and active support.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="">
      <div className="px-4 sm:px-8 md:px-16 lg:px-30 mx-auto">
        <div className="bento-grid">
          {/* Main Large Feature */}
          <div className="col-span-1 sm:col-span-2 row-span-1 sm:row-span-2 bg-white rounded-sm p-6 sm:p-8 md:p-12 flex flex-col justify-between group overflow-hidden border border-[#E5E1D8] hover:border-blue-500/30 transition-all shadow-xl shadow-[#1A1C1E]/5">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-3 sm:mb-5 tracking-tight text-[#1A1C1E]">Unmatched Query Speed</h3>
              <p className="text-[#1A1C1E]/60 max-w-sm leading-relaxed text-sm sm:text-base md:text-lg font-medium">
                Our optimized indexing engine provides sub-500ms responses, enabling truly interactive DeFi dashboards and trading tools.
              </p>
            </div>
            <Link href={"http://docs.solixdb.xyz/"} rel="noopener noreferrer" target="_blank">
              <button className="mt-6 sm:mt-10 flex items-center gap-2 text-[#1A1C1E] font-bold group/btn hover:text-blue-600 transition-colors text-sm sm:text-base">
                Explore Our Infrastructure
                <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>

          {/* Secondary Features */}
          <div className="col-span-1 sm:col-span-2 bg-white rounded-sm p-6 sm:p-8 md:p-10 flex flex-col justify-center border border-[#E5E1D8] shadow-lg shadow-[#1A1C1E]/5">
            <div className="flex items-center gap-3 sm:gap-5 mb-3 sm:mb-5">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-[#1A1C1E]">Multi-API Engine</h3>
            </div>
            <p className="text-[#1A1C1E]/60 text-sm sm:text-base font-medium leading-relaxed">Choose your interface: REST for speed, GraphQL for complexity, or SQL for deep data analysis. All on one platform.</p>
          </div>

          <div className="bg-white rounded-sm p-6 sm:p-8 md:p-10 flex flex-col justify-center border border-[#E5E1D8] hover:shadow-xl transition-shadow shadow-sm">
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 tracking-tight text-[#1A1C1E]">Zero-Loss History</h3>
            <p className="text-[#1A1C1E]/60 text-xs sm:text-sm font-medium">We preserve every byte of transaction data across 10+ major Solana protocols since inception.</p>
          </div>

          <div className="bg-white rounded-sm p-6 sm:p-8 md:p-10 flex flex-col justify-center border border-[#E5E1D8] hover:shadow-xl transition-shadow shadow-sm">
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 tracking-tight text-[#1A1C1E]">Bank-Grade SLA</h3>
            <p className="text-[#1A1C1E]/60 text-xs sm:text-sm font-medium">99.9% uptime guaranteed for production applications with dedicated support channels.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
