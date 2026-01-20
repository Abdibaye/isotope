"use client";

import { motion } from "motion/react";
import { Download, Zap, RotateCcw } from "lucide-react";

const steps = [
    {
        icon: <Download className="h-6 w-6 text-white" />,
        title: "1. Install Extension",
        description: "Search for 'Isotope' in the VS Code marketplace and click install. It takes seconds.",
    },
    {
        icon: <Zap className="h-6 w-6 text-white" />,
        title: "2. Work Normally",
        description: "Write code, edit text, or design. Isotope saves every change automatically in the background.",
    },
    {
        icon: <RotateCcw className="h-6 w-6 text-white" />,
        title: "3. Undo Anytime",
        description: "Made a mistake? Open the Isotope sidebar and jump back to any previous version instantly.",
    },
];

export function HowItWorks() {
    return (
        <section id="how-it-works" className="relative bg-[#0d1117] py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-[#e6edf3] sm:text-4xl">
                        It works like magic.
                    </h2>
                    <p className="mt-4 text-lg text-[#8b949e]">
                        No setup required. Isotope just works.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative flex flex-col items-center text-center"
                        >
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#161b22] border border-[#30363d] shadow-lg">
                                <div className="absolute inset-0 rounded-2xl bg-[#5100fd]/10 blur-xl" />
                                <div className="relative z-10">{step.icon}</div>
                            </div>
                            <h3 className="mb-3 text-xl font-semibold text-[#e6edf3]">{step.title}</h3>
                            <p className="text-[#8b949e] leading-relaxed max-w-xs">{step.description}</p>

                            {index !== steps.length - 1 && (
                                <div className="absolute top-8 left-1/2 w-full h-px bg-gradient-to-r from-[#30363d] to-transparent hidden md:block -z-10 translate-x-1/2" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
