"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";

const navItems = [
    "Home",
    "Our Story",
    "Photos",
    "Wedding Party",
    "Q + A",
    // "Travel",
    "Registry",
    // "RSVPS",
];

export default function Navigation() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* DESKTOP HEADER */}
            <header className="hidden md:flex flex-col items-center pt-12 pb-6">
                {/* Crest */}
                <img
                    src="/images/crest.png"
                    alt="Crest"
                    className="h-52 w-auto mb-6"
                />

                {/* Names */}
                <h1 className="text-4xl font-serif text-rose-900 tracking-[0.25em] mb-4">
                    EUPHINE & ELMARD
                </h1>

                {/* Date + Location */}
                <p className="text-rose-900 tracking-[0.3em] text-sm">
                    NOVEMBER 2025 • KARENGATA, NAIROBI
                </p>

                {/* Desktop Nav */}
                <nav className="flex gap-10 mt-10 text-rose-900 text-sm tracking-[0.25em]">
                    {navItems.map((item) => (
                        <Link
                            key={item}
                            href={
                                item.toLowerCase().trim() === "home"
                                    ? "/" // redirect "Home" to root
                                    : `/${item
                                        .toLowerCase()
                                        .replace(/[^a-z0-9]+/gi, " ")
                                        .trim()
                                        .replace(/\s+/g, "-")}`
                            }
                            className="hover:opacity-60"
                        >
                            {item}
                        </Link>

                    ))}
                </nav>
            </header>

            {/* MOBILE HEADER */}
            <header className="md:hidden fixed top-0 left-0 w-full bg-white z-40 border-b border-gray-200">
                <div className="px-6 py-4 flex justify-between items-center">

                    {/* Hamburger */}
                    <button onClick={() => setOpen(true)} className="text-rose-900">
                        <Menu size={30} strokeWidth={1.25} />
                    </button>

                    {/* Center Text Logo */}
                    <h1 className="text-2xl tracking-[0.1em] font-serif font-light text-rose-900">
                        E & E
                    </h1>

                    {/* Blank spacer to visually center */}
                    <div className="w-6"></div>
                </div>
            </header>

            {/* MOBILE SLIDE MENU */}
            <MobileMenu open={open} onClose={() => setOpen(false)} />
        </>
    );
}
