"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const codeSnippet = `// Isotope: Version Control, Simplified.

function startProject() {
  const project = new Isotope({
    autoSave: true,
    history: "unlimited",
    safety: "guaranteed"
  });

  // No git commands needed
  project.watch((changes) => {
    console.log("Progress saved:", changes);
  });

  return project;
}`;

export function EditorMockup() {
    const [text, setText] = useState("");
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= codeSnippet.length) {
                setText(codeSnippet.slice(0, currentIndex));
                currentIndex++;
            } else {
                setIsTyping(false);
                clearInterval(interval);
            }
        }, 30); // Typing speed

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full overflow-hidden rounded-xl border border-[#30363d] bg-[#0d1117] shadow-2xl">
            {/* Window Controls */}
            <div className="flex items-center gap-2 border-b border-[#30363d] bg-[#161b22] px-4 py-3">
                <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                    <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                    <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="ml-4 flex rounded-md bg-[#0d1117] px-3 py-1 text-xs text-[#8b949e]">
                    isotope.config.ts
                </div>
            </div>

            {/* Editor Content */}
            <div className="p-4 font-mono text-sm leading-relaxed text-[#e6edf3] overflow-x-auto">
                <pre>
                    <code dangerouslySetInnerHTML={{ __html: highlightCode(text) }} />
                    <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="inline-block h-4 w-2 bg-[#5100fd] align-middle ml-1"
                    />
                </pre>
            </div>

            {/* Status Bar */}
            <div className="flex items-center justify-between border-t border-[#30363d] bg-[#161b22] px-3 py-1 text-xs text-[#8b949e]">
                <div className="flex gap-3">
                    <span className="flex items-center gap-1">
                        <span className="h-2 w-2 rounded-full bg-[#5100fd]" />
                        Isotope Active
                    </span>
                    <span>main</span>
                </div>
                <div>TypeScript</div>
            </div>
        </div>
    );
}

// Simple syntax highlighting for demo
function highlightCode(code: string) {
    return code
        .replace(/const|function|return|new/g, '<span class="text-[#ff7b72]">$&</span>')
        .replace(/Isotope|console/g, '<span class="text-[#79c0ff]">$&</span>')
        .replace(/"[^"]*"/g, '<span class="text-[#a5d6ff]">$&</span>')
        .replace(/\/\/.*/g, '<span class="text-[#8b949e]">$&</span>')
        .replace(/true|false/g, '<span class="text-[#79c0ff]">$&</span>');
}
