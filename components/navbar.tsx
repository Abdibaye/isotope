"use client";

import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/isotope_logo2.png"
                            alt="Isotope"
                            width={60}
                            height={66}
                            className="h-26 w-20 object-contain"
                            priority
                        />
                        <div className="flex flex-col leading-none">
                            <span className="text-lg font-semibold text-white">Isotope</span>
                        </div>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="#features" className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors">
                            Features
                        </Link>
                        <Link href="#how-it-works" className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors">
                            How it Works
                        </Link>
                        <Link href="https://marketplace.visualstudio.com" className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors">
                            Marketplace
                        </Link>
                    </div>

                    {/* CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <button className="flex items-center gap-2 rounded-full border border-[#00F0FF]/40 bg-[#050505] px-4 py-2 text-sm font-medium text-white shadow-[0_0_12px_rgba(0,240,255,0.2)] transition-all hover:border-[#00F0FF]">
                            <Download className="h-4 w-4" />
                            Get the extension
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="border-t border-white/10 bg-[#050505] px-4 py-6 md:hidden">
                    <div className="flex flex-col gap-4">
                        <Link
                            href="#features"
                            className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70 hover:text-white"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Features
                        </Link>
                        <Link
                            href="#how-it-works"
                            className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70 hover:text-white"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            How it Works
                        </Link>
                        <Link
                            href="https://marketplace.visualstudio.com"
                            className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70 hover:text-white"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Marketplace
                        </Link>
                        <div className="h-px bg-white/10" />
                        <button className="flex w-full items-center justify-center gap-2 rounded-full border border-[#00F0FF]/40 bg-[#050505] py-2 text-sm font-medium text-white">
                            <Download className="h-4 w-4" />
                            Get the extension
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
