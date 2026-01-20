"use client";

import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";

export function CTA() {
    return (
        <section className="relative overflow-hidden bg-[#0d1117] py-24 sm:py-32">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#5100fd_0%,transparent_70%)] opacity-10 blur-[100px]" />

            <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="mb-6 text-4xl font-bold tracking-tight text-[#e6edf3] sm:text-5xl">
                        Stop worrying about version control.
                    </h2>
                    <p className="mb-10 text-xl text-[#8b949e]">
                        Join 10,000+ creators who trust Isotope to keep their work safe.
                        <br />
                        Free forever for individuals.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <button className="group relative flex items-center gap-3 rounded-md bg-[#5100fd] px-8 py-4 text-lg font-medium text-white transition-all hover:bg-[#4c00ec] hover:scale-105">
                            <Download className="h-5 w-5" />
                            Install Free Extension
                        </button>
                        <button className="rounded-md border border-[#30363d] bg-[#21262d] px-8 py-4 text-lg font-medium text-[#e6edf3] transition-all hover:bg-[#30363d]">
                            View on Marketplace
                        </button>
                    </div>

                    <p className="mt-8 text-sm text-[#8b949e]">
                        Available for VS Code on Mac, Windows, and Linux.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
