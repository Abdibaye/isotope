"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export function Hero() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setLoaded(true), 600);
        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = 0;
        let height = 0;
        let dpr = window.devicePixelRatio || 1;
        const pointCount = 120;
        const points = Array.from({ length: pointCount }, () => ({ offset: 0 }));
        const mouse = { x: 0, y: 0, active: false };

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            dpr = window.devicePixelRatio || 1;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.scale(dpr, dpr);
        };

        const handleMove = (event: MouseEvent) => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
            mouse.active = true;
        };

        const handleLeave = () => {
            mouse.active = false;
        };

        resize();
        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", handleMove);
        window.addEventListener("mouseleave", handleLeave);

        let animationId = 0;
        let startTime: number | null = null;
        const drawDuration = 4200;

        const render = (timestamp: number) => {
            if (startTime === null) {
                startTime = timestamp;
            }

            const elapsed = timestamp - startTime;
            const progress = Math.min(1, elapsed / drawDuration);
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            const drawComplete = progress >= 1;

            ctx.clearRect(0, 0, width, height);
            const centerX = width * 0.65;
            const spacing = height / (pointCount - 1);
            const radius = 160;
            const maxOffset = 18;
            const orbitRadius = 64;
            const centerY = height / 2;
            const topCircleY = centerY - orbitRadius;
            const bottomCircleY = centerY + orbitRadius;
            const drawY = height * easedProgress;

            for (let i = 0; i < pointCount; i += 1) {
                const point = points[i];
                const y = i * spacing;
                let targetOffset = 0;

                if (mouse.active && drawComplete) {
                    const dx = centerX - mouse.x;
                    const dy = y - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < radius) {
                        const strength = (1 - dist / radius) * maxOffset;
                        targetOffset = (dx / (dist || 1)) * strength;
                    }
                }

                const proximity = Math.max(0, 1 - Math.abs(y - centerY) / (orbitRadius + 40));
                const dampenedTarget = drawComplete ? targetOffset * (1 - proximity * 0.9) : 0;
                point.offset += (dampenedTarget - point.offset) * 0.08;
            }

            ctx.save();
            ctx.beginPath();
            let started = false;
            points.forEach((point, index) => {
                const y = index * spacing;
                if (y > Math.min(drawY, topCircleY)) return;
                const x = centerX + (drawComplete ? point.offset : 0);
                if (!started) {
                    ctx.moveTo(x, y);
                    started = true;
                } else {
                    ctx.lineTo(x, y);
                }
            });

            if (drawY >= topCircleY) {
                const arcProgress = Math.min(1, Math.max(0, (drawY - topCircleY) / (orbitRadius * 2)));
                const endAngle = -Math.PI / 2 + arcProgress * Math.PI * 2;
                ctx.lineTo(centerX, topCircleY);
                ctx.arc(centerX, centerY, orbitRadius, -Math.PI / 2, endAngle);
            }

            if (drawY >= bottomCircleY) {
                const tailEnd = Math.min(drawY, height);
                points.forEach((point, index) => {
                    const y = index * spacing;
                    if (y < bottomCircleY || y > tailEnd) return;
                    const x = centerX + (drawComplete ? point.offset : 0);
                    ctx.lineTo(x, y);
                });
            }

            ctx.strokeStyle = "rgba(0, 240, 255, 0.45)";
            ctx.lineWidth = 1.4;
            ctx.shadowColor = "rgba(0, 240, 255, 0.65)";
            ctx.shadowBlur = 14;
            ctx.stroke();
            ctx.restore();

            animationId = window.requestAnimationFrame(render);
        };

        animationId = window.requestAnimationFrame(render);

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMove);
            window.removeEventListener("mouseleave", handleLeave);
            window.cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-[#050505]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0A0A0A_0%,#050505_70%)]" />

            <canvas ref={canvasRef} className="absolute inset-0 z-0" aria-hidden />

            <div className="absolute left-[65%] top-1/2 z-10 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                <motion.div
                    className="absolute h-4 w-4 rounded-full bg-[#00F0FF] shadow-[0_0_16px_#00F0FF]"
                    animate={{ scale: [1, 1.06, 1] }}
                    transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
                />

                <div className="absolute h-32 w-32 orbit orbit-slow">
                    <span
                        className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]"
                        style={{ transform: "rotate(0deg) translateY(-64px)" }}
                    />
                    <span
                        className="absolute left-1/2 top-1/2 h-1 w-1 rounded-full bg-[#7DF9FF] shadow-[0_0_6px_#7DF9FF]"
                        style={{ transform: "rotate(120deg) translateY(-64px)" }}
                    />
                    <span
                        className="absolute left-1/2 top-1/2 h-1 w-1 rounded-full bg-[#00F0FF] shadow-[0_0_6px_#00F0FF]"
                        style={{ transform: "rotate(240deg) translateY(-64px)" }}
                    />
                </div>
            </div>

            <div className="relative z-20 flex min-h-screen flex-col items-start justify-center px-6 text-left">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="max-w-3xl w-full sm:w-auto"
                >
                    <div className="relative inline-block">
                        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                            Development without fear.
                        </h1>
                        <motion.div
                            className="absolute inset-0 pointer-events-none"
                            style={{ clipPath: "inset(50% 0 0 0)" }}
                            initial={{ opacity: 1 }}
                            animate={{ opacity: loaded ? 0 : 1 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                        >
                            <h1 className="text-5xl font-bold tracking-tight text-white blur-[4px] sm:text-6xl lg:text-7xl">
                                Development without fear.
                            </h1>
                        </motion.div>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                        className="mt-5 text-base text-white/75 sm:text-lg"
                    >
                        Isotope quietly manages versions, saves progress, and keeps your code safe —
                        so you can focus on building.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
                        className="mt-6 text-xs font-semibold tracking-[0.4em] text-white/60 sm:text-sm"
                    >
                        THE INVISIBLE SAFETY LAYER FOR YOUR CODE
                    </motion.p>
                </motion.div>
            </div>

            <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2">
                <div className="flex flex-col items-center gap-2 text-white/70">
                    <span className="h-8 w-px bg-[#00F0FF]/60 shadow-[0_0_10px_#00F0FF]" />
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-[#00F0FF]"
                    >
                        <path
                            d="M6 9L12 15L18 9"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>

            <style jsx>{`
                @keyframes orbit {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }

                .orbit {
                    animation: orbit 16s linear infinite;
                }

                .orbit-slow {
                    animation-duration: 18s;
                }
            `}</style>
        </section>
    );
}
