"use client";

import {
    animate,
    motion,
    useMotionTemplate,
    useMotionValue,
    useTransform,
} from "motion/react";
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export interface GlowingEffectProps {
    blur?: number;
    inactiveZone?: number;
    proximity?: number;
    spread?: number;
    variant?: "default" | "white";
    glow?: boolean;
    className?: string;
    disabled?: boolean;
    movementDuration?: number;
    borderWidth?: number;
}

export function GlowingEffect({
    blur = 0,
    inactiveZone = 0.01,
    proximity = 64,
    spread = 80,
    variant = "default",
    glow = true,
    className,
    movementDuration = 2,
    borderWidth = 2,
    disabled = false,
}: GlowingEffectProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const angle = useMotionValue(0);

    useEffect(() => {
        if (disabled) return;

        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            mouseX.set(x);
            mouseY.set(y);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY, disabled]);

    useEffect(() => {
        if (disabled) return;
        animate(angle, 360, {
            duration: movementDuration,
            ease: "linear",
            repeat: Infinity,
        });
    }, [angle, movementDuration, disabled]);

    const maskImage = useMotionTemplate`radial-gradient(
    ${spread}px circle at ${mouseX}px ${mouseY}px,
    white,
    transparent
  )`;

    const style = {
        "--border-width": `${borderWidth}px`,
    } as React.CSSProperties;

    return (
        <div
            ref={containerRef}
            className={cn(
                "pointer-events-none absolute inset-0 rounded-[inherit]",
                className
            )}
            style={style}
        >
            <motion.div
                className={cn(
                    "absolute inset-0 rounded-[inherit]",
                    "bg-gradient-to-r from-[#5100fd] via-[#4C00EC] to-[#5100fd]",
                    "opacity-0 transition-opacity duration-300",
                    glow && "opacity-100"
                )}
                style={{
                    maskImage,
                    WebkitMaskImage: maskImage,
                    padding: borderWidth,
                }}
            >
                <div className="h-full w-full rounded-[inherit] bg-transparent" />
            </motion.div>
        </div>
    );
}
