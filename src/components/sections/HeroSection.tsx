"use client";

import { ArrowRight, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="w-full min-h-[50vh] sm:min-h-[55vh] md:h-[65vh] flex relative flex-col gap-4 items-center px-4 sm:px-6 mt-16 sm:mt-24 md:mt-42">
      <div className="mb-4">
        <Image src={"/logo.png"} alt="SolixDB" width={90} height={90} className="w-full h-full" />
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-gradient text-center">
        Index <span className="font-semibold">Less.</span> Build <span className="font-semibold">More.</span>
      </h1>
      <p className="text-base sm:text-lg md:text-xl max-w-xl text-center text-neutral-700 font-medium px-4">
        SolixDB provides pre-indexed historical Solana DeFi data with REST, GraphQL, and SQL access — built for production-scale applications.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 w-full sm:w-auto px-4 sm:px-0">
        <a href="https://docs.solixdb.xyz" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto px-6 py-2.5 sm:py-2 rounded-md bg-neutral-100 text-neutral-700 flex items-center justify-center gap-2 text-sm sm:text-base">
            Docs <ArrowRight size={18} />
          </button>
        </a>
        <a href="https://dashboard.solixdb.xyz" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto px-6 py-2.5 sm:py-2 rounded-md bg-black text-white flex items-center justify-center gap-2 text-sm sm:text-base">
            Get Your API Key <ArrowRight size={18} />
          </button>
        </a>
      </div>

      {/* Powered by - Hidden on mobile, shown on md+ */}
      <div className="hidden md:flex absolute bottom-0 left-8 lg:left-32 flex-col gap-2">
        <span className="text-neutral-700 text-sm lg:text-base font-semibold">Powered by</span>
        <div className="flex gap-1">
          <span>
            <Link href={"https://x.com/anza_xyz"} target="_blank" rel="noopener noreferrer">
              <Image src="/anza.jpg" alt="anza" width={35} height={35} className="rounded-md w-8 h-8 lg:w-[35px] lg:h-[35px]" />
            </Link>
          </span>
          <span>
            <Link href={"https://x.com/triton_one"} target="_blank" rel="noopener noreferrer">
              <Image src="/Triton.png" alt="Triton" width={35} height={35} className="rounded-md w-8 h-8 lg:w-[35px] lg:h-[35px]" />
            </Link>
          </span>
        </div>
      </div>

      {/* Open Source - Hidden on mobile, shown on md+ */}
      <div className="hidden md:flex absolute bottom-0 right-8 lg:right-32 flex-col gap-2">
        <span className="text-neutral-700 text-sm lg:text-base font-semibold">Open Source</span>
        <div className="flex gap-1 w-full justify-end">
          <span className="py-0.5 px-1 rounded-md bg-black">
            <Link href={"/"}>
              <Github size={28} className="p-1 text-white lg:w-8 lg:h-8" />
            </Link>
          </span>
        </div>
      </div>

      {/* Mobile badges - shown only on small screens */}
      <div className="flex md:hidden items-center justify-center gap-6 mt-6">
        <div className="flex items-center gap-2">
          <span className="text-neutral-500 text-xs font-medium">Powered by</span>
          <div className="flex gap-1">
            <Image src="/anza.jpg" alt="anza" width={24} height={24} className="rounded-md" />
            <Image src="/Triton.png" alt="Triton" width={24} height={24} className="rounded-md" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-neutral-500 text-xs font-medium">Open Source</span>
          <Link href={"https://github.com/solixdb"} target="_blank" rel="noopener noreferrer">
            <span className="py-0.5 px-1 rounded-md bg-black">
              <Github size={20} className="p-0.5 text-white" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
