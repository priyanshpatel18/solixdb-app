"use client";

import { ArrowRight, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="w-full h-[65vh] flex relative flex-col gap-4 items-center  mt-42">
      <div className="mb-4">
        <Image src={"/logo.png"} alt="SolixDB" width={90} height={90} />
      </div>
      <h1 className="text-8xl font-bold tracking-tighter leading-[0.9] text-gradient">Index <span className="font-semibold">Less.</span> Build <span className="font-semibold">More.</span></h1>
      <p className="text-xl max-w-xl text-center text-neutral-700 font-medium">SolixDB provides pre-indexed historical Solana DeFi data with REST, GraphQL, and SQL access — built for production-scale applications.</p>

      <div className="flex gap-4 mt-8">
        <button className="px-6 py-2 rounded-md bg-neutral-100 text-neutral-700 flex items-center gap-2">Docs <ArrowRight size={18} /></button>
      </div>

      <div className="absolute bottom-0 left-32 flex flex-col gap-2">
        <span className="text-neutral-700 text-base font-semibold">Powered by</span>
        <div className="flex gap-1">
          <span className="">
            <Link href={"/"} >
              <Image src="/anza.jpg" alt="anza" width={35} height={35} className="rounded-md" />
            </Link>
            {/* Anza */}
          </span>
          <span className="">
            <Link href={"/"}>
              <Image src="/helius.jpg" alt="helius" width={35} height={35} className="rounded-md" />
            </Link>
            {/* Helius */}
          </span>
        </div>
      </div>
      <div className="absolute bottom-0 right-32 flex flex-col gap-2">
        <span className="text-neutral-700 text-base font-semibold">Open Source</span>
        <div className="flex gap-1 w-full justify-end">
          <span className="py-0.5 px-1 rounded-md bg-black">
            <Link href={"/"} >
              <Github size={32} className="p-1 text-white" />
            </Link>
            {/* Anza */}
          </span>
        </div>
      </div>
    </section>
  );
}
