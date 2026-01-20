"use client";

import { motion } from "motion/react";
import { Clock, RotateCcw, CheckCircle2, FileCode, Plus } from "lucide-react";

const timelineItems = [
    {
        title: "Changed button color",
        time: "Just now",
        status: "active",
        file: "button.tsx",
    },
    {
        title: "Updated hero text",
        time: "5 min ago",
        status: "saved",
        file: "hero.tsx",
    },
    {
        title: "Added new section",
        time: "1 hour ago",
        status: "saved",
        file: "features.tsx",
    },
    {
        title: "Fixed mobile layout",
        time: "2 hours ago",
        status: "saved",
        file: "layout.css",
    },
];

export function ExtensionMockup() {
    return (
        <div className="relative w-full max-w-sm overflow-hidden rounded-lg border border-[#30363d] bg-[#161b22] shadow-2xl font-sans">
            {/* VS Code Sidebar Header */}
            <div className="flex items-center justify-between border-b border-[#30363d] px-4 py-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8b949e]">Isotope History</span>
                <div className="flex gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#30363d]" />
                    <div className="h-2 w-2 rounded-full bg-[#30363d]" />
                </div>
            </div>

            {/* Timeline Content */}
            <div className="p-2 space-y-1">
                {timelineItems.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`group flex items-start gap-3 rounded-md p-3 transition-colors ${item.status === "active" ? "bg-[#5100fd]/10" : "hover:bg-[#21262d]"
                            }`}
                    >
                        {/* Icon/Status */}
                        <div className="mt-0.5 relative">
                            {item.status === "active" ? (
                                <div className="h-2.5 w-2.5 rounded-full bg-[#5100fd] shadow-[0_0_8px_#5100fd]" />
                            ) : (
                                <div className="h-2.5 w-2.5 rounded-full border-2 border-[#30363d]" />
                            )}
                            {index !== timelineItems.length - 1 && (
                                <div className="absolute left-1/2 top-3 h-full w-px -translate-x-1/2 bg-[#30363d]" />
                            )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                                <span className={`text-sm font-medium truncate ${item.status === "active" ? "text-[#e6edf3]" : "text-[#8b949e]"}`}>
                                    {item.title}
                                </span>
                                <span className="text-[10px] text-[#8b949e] whitespace-nowrap ml-2">{item.time}</span>
                            </div>

                            <div className="flex items-center gap-1.5 text-xs text-[#8b949e] mb-2">
                                <FileCode className="h-3 w-3" />
                                <span>{item.file}</span>
                            </div>

                            {/* Action Buttons (Visible on Hover/Active) */}
                            <div className={`flex gap-2 ${item.status === "active" ? "opacity-100" : "opacity-0 group-hover:opacity-100"} transition-opacity`}>
                                <button className="flex items-center gap-1 rounded bg-[#21262d] px-2 py-1 text-[10px] text-[#e6edf3] hover:bg-[#30363d] border border-[#30363d]">
                                    <RotateCcw className="h-3 w-3" />
                                    Restore
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Footer / Status */}
            <div className="border-t border-[#30363d] bg-[#0d1117] px-4 py-2">
                <div className="flex items-center gap-2 text-xs text-[#8b949e]">
                    <CheckCircle2 className="h-3 w-3 text-green-500" />
                    <span>Auto-save active</span>
                </div>
            </div>
        </div>
    );
}
