"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { Safety } from "@/components/safety";
import { Audience } from "@/components/audience";
import { CTA } from "@/components/cta";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="min-h-screen bg-background text-white selection:bg-[#5100fd] selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Safety />
      <Audience />

      {/* Footer (Simple) */}
      <footer className="border-t border-zinc-900 bg-background py-8 text-center text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} Isotope. All rights reserved.</p>
      </footer>
    </main>
  );
}
