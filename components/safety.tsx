"use client";

import { motion } from "motion/react";
import { ShieldCheck, Lock, HardDrive } from "lucide-react";

export function Safety() {
    return (
        <section id="safety" className="relative bg-[#0d1117] py-24 sm:py-32 overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="mb-6 text-3xl font-bold tracking-tight text-[#e6edf3] sm:text-4xl">
                            Private by design.
                            <br />
                            <span className="text-[#5100fd]">Your code stays yours.</span>
                        </h2>
                        <p className="mb-8 text-lg text-[#8b949e] leading-relaxed">
                            Isotope runs entirely locally on your machine. We don't track your keystrokes, we don't see your code, and we don't upload anything to the cloud.
                        </p>

                        <div className="space-y-6">
                            {[
                                {
                                    icon: <HardDrive className="h-5 w-5 text-[#5100fd]" />,
                                    title: "Local Storage",
                                    desc: "All history is stored locally in your project folder.",
                                },
                                {
                                    icon: <Lock className="h-5 w-5 text-[#5100fd]" />,
                                    title: "No Cloud Uploads",
                                    desc: "Your intellectual property never leaves your device.",
                                },
                                {
                                    icon: <ShieldCheck className="h-5 w-5 text-[#5100fd]" />,
                                    title: "Open Source",
                                    desc: "Our code is open for audit. Trust through transparency.",
                                },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#161b22] border border-[#30363d]">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-[#e6edf3]">{item.title}</h3>
                                        <p className="text-sm text-[#8b949e]">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative aspect-square overflow-hidden rounded-2xl border border-[#30363d] bg-[#161b22] p-8 shadow-2xl">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#5100fd_0%,transparent_70%)] opacity-10 blur-xl" />

                            {/* Abstract Lock Visual */}
                            <div className="flex h-full w-full items-center justify-center">
                                <div className="relative">
                                    <div className="absolute inset-0 animate-pulse bg-[#5100fd] blur-3xl opacity-20" />
                                    <ShieldCheck className="h-32 w-32 text-[#e6edf3]" />
                                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[#30363d] bg-[#0d1117] px-4 py-1 text-xs text-[#5100fd]">
                                        100% Local & Secure
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
