"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { History, Save, FlaskConical, RotateCcw } from "lucide-react";

const items = [
    {
        title: "No Confusing Commands",
        description: "Forget about terminal commands. Isotope works quietly in the background while you create.",
        header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-[#5100fd]/20 to-[#161b22] border border-[#30363d]" />,
        icon: <Save className="h-4 w-4 text-[#8b949e]" />,
        className: "md:col-span-2",
    },
    {
        title: "Automatic Backups",
        description: "Every change is saved automatically. Go back to any moment in time, instantly.",
        header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-[#21262d] to-[#161b22] border border-[#30363d]" />,
        icon: <History className="h-4 w-4 text-[#8b949e]" />,
        className: "md:col-span-1",
    },
    {
        title: "Safe Experiments",
        description: "Try new ideas without breaking your main project. We keep your experiments separate.",
        header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-[#21262d] to-[#161b22] border border-[#30363d]" />,
        icon: <FlaskConical className="h-4 w-4 text-[#8b949e]" />,
        className: "md:col-span-1",
    },
    {
        title: "Instant Undo",
        description: "Made a mistake? Restore your work with a single click. It's like a time machine for your code.",
        header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-[#5100fd]/20 to-[#161b22] border border-[#30363d]" />,
        icon: <RotateCcw className="h-4 w-4 text-[#8b949e]" />,
        className: "md:col-span-2",
    },
];

export function Features() {
    return (
        <section id="features" className="bg-[#0d1117] py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-[#e6edf3] sm:text-4xl">
                        Simple enough for beginners.
                        <br />
                        Powerful enough for pros.
                    </h2>
                    <p className="mt-4 text-lg text-[#8b949e]">
                        Isotope removes the fear of breaking things. Just install the extension and start building.
                    </p>
                </div>

                <BentoGrid>
                    {items.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            icon={item.icon}
                            className={item.className}
                        />
                    ))}
                </BentoGrid>
            </div>
        </section>
    );
}
