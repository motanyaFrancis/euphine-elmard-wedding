"use client";

import { X } from "lucide-react";
import Link from "next/link";

export default function MobileMenu({ open, onClose }: any) {
    const items = [
        "Home",
        "Our Story",
        "Photos",
        "Wedding Party",
        "Q + A",
        // "Travel",
        "Registry",
        // "RSVPS",
    ];

    return (
        <div
            className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ${open ? "translate-y-0" : "-translate-y-full"
                }`}
        >
            {/* Top Bar */}
            <div className="px-6 py-6 flex justify-between items-center ">
                <button onClick={onClose} className="text-rose-900">
                    <X size={32} strokeWidth={1.25} />
                </button>

                <h1 className="text-2xl tracking-[0.1em] font-serif font-light text-rose-900">
                    E & E
                </h1>

                <div className="w-8"></div>
            </div>

            {/* NAVIGATION */}
            <nav className="mt-8 text-center">
                {items.map((item) => (
                    <div key={item} className="mb-5">
                        <hr className="w-full mb-4 border-gray-300" />
                        <Link
                            href={
                                item.toLowerCase().trim() === "home"
                                    ? "/" // redirect "Home" to root
                                    : `/${item
                                        .toLowerCase()
                                        .replace(/[^a-z0-9]+/gi, " ")
                                        .trim()
                                        .replace(/\s+/g, "-")}`
                            }
                            onClick={onClose}
                            className="block text-rose-900 tracking-[0.25em] text-lg"
                        >
                            {item}
                        </Link>
                    </div>
                ))}
                <hr className="border-gray-300" />
            </nav>
        </div>
    );
}
