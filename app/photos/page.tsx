"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import PhoneCrest from "@/components/PhoneCrest";

export default function PhotosPage() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [photos, setPhotos] = useState<string[]>([]);

    // List of your image filenames
    const imageList = [
        "/images/gallery/1.jpg",
        "/images/gallery/2.jpg",
        "/images/gallery/3.jpg",
        "/images/gallery/4.jpg",
        "/images/gallery/5.jpg",
        "/images/gallery/6.jpg",
        "/images/gallery/7.jpg",
        "/images/gallery/8.png",
    ];

    // Shuffle images on load
    useEffect(() => {
        setPhotos([...imageList].sort(() => Math.random() - 0.5));
    }, []);

    // Navigate to next image
    const goNext = useCallback(() => {
        if (selectedIndex === null) return;
        setSelectedIndex((prev) => (prev! + 1) % photos.length);
    }, [selectedIndex, photos]);

    // Navigate to previous image
    const goPrev = useCallback(() => {
        if (selectedIndex === null) return;
        setSelectedIndex((prev) =>
            prev! === 0 ? photos.length - 1 : prev! - 1
        );
    }, [selectedIndex, photos]);

    // Keyboard navigation
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (selectedIndex === null) return;

            if (e.key === "ArrowRight") goNext();
            if (e.key === "ArrowLeft") goPrev();
            if (e.key === "Escape") setSelectedIndex(null);
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [selectedIndex, goNext, goPrev]);

    return (
        <main className="px-6 py-16 text-[#6d7b67] flex flex-col items-center">
            <PhoneCrest />

            {/* Masonry Grid */}
            <section
                className="
          columns-1 sm:columns-2 md:columns-3 lg:columns-4
          gap-4 w-full max-w-6xl
        "
            >
                {photos.map((src, index) => (
                    <div key={src} className="mb-4 break-inside-avoid cursor-pointer">
                        <Image
                            src={src}
                            alt="Wedding Photo"
                            width={800}
                            height={1200}
                            className="rounded-lg object-cover hover:opacity-80 transition"
                            onClick={() => setSelectedIndex(index)}
                        />
                    </div>
                ))}
            </section>

            {/* Lightbox Popup */}
            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center p-4 backdrop-blur-sm"
                    onClick={() => setSelectedIndex(null)}
                >
                    <div
                        className="relative max-w-4xl w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-2 right-2 text-white bg-black/40 rounded-full p-2"
                            onClick={() => setSelectedIndex(null)}
                        >
                            <X size={30} />
                        </button>

                        {/* Prev Button */}
                        <button
                            className="absolute top-1/2 left-2 -translate-y-1/2 text-white bg-black/40 rounded-full p-2"
                            onClick={goPrev}
                        >
                            <ChevronLeft size={32} />
                        </button>

                        {/* Next Button */}
                        <button
                            className="absolute top-1/2 right-2 -translate-y-1/2 text-white bg-black/40 rounded-full p-2"
                            onClick={goNext}
                        >
                            <ChevronRight size={32} />
                        </button>

                        {/* Main Image */}
                        <Image
                            src={photos[selectedIndex]}
                            alt="Selected Photo"
                            width={1600}
                            height={1000}
                            className="rounded-lg shadow-lg mx-auto max-h-[80vh] object-contain"
                        />

                        {/* Thumbnail Strip */}
                        <div className="flex gap-2 overflow-x-auto mt-6 pb-3 hide-scrollbar">
                            {photos.map((src, idx) => (
                                <div
                                    key={idx}
                                    className={`cursor-pointer border rounded-md ${idx === selectedIndex ? "border-white" : "border-transparent"
                                        }`}
                                    onClick={() => setSelectedIndex(idx)}
                                >
                                    <Image
                                        src={src}
                                        alt="Thumbnail"
                                        width={80}
                                        height={80}
                                        className="object-cover aspect-square rounded-md opacity-80 hover:opacity-100 transition"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
