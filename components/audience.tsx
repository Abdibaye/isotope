"use client";

import { motion } from "motion/react";

const users = [
    {
        role: "Designers",
        desc: "Who code",
        emoji: "🎨",
    },
    {
        role: "Writers",
        desc: "Using Markdown",
        emoji: "✍️",
    },
    {
        role: "Students",
        desc: "Learning to code",
        emoji: "🎓",
    },
    {
        role: "Indie Hackers",
        desc: "Building fast",
        emoji: "🚀",
    },
];

export function Audience() {
    return (
        <section id="audience" className="relative bg-[#0d1117] py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="rounded-3xl border border-[#30363d] bg-[#161b22]/50 p-8 sm:p-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="mb-12 text-3xl font-bold tracking-tight text-[#e6edf3] sm:text-4xl">
                            Built for creators, not just engineers.
                        </h2>

                        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                            {users.map((user, index) => (
                                <div key={index} className="group flex flex-col items-center">
                                    <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#0d1117] border border-[#30363d] text-4xl shadow-lg transition-transform group-hover:scale-110">
                                        {user.emoji}
                                    </div>
                                    <h3 className="text-lg font-semibold text-[#e6edf3]">{user.role}</h3>
                                    <p className="text-sm text-[#8b949e]">{user.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
