"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import PhoneCrest from "@/components/PhoneCrest";

type Gift = {
  name: string;
  img: string;
  store: string;
  quantityRequired: number;
  quantityFulfilled: number;
  code: string;
  unitPrice: number;
  isConfirmed?: boolean;
};

export default function RegistryPage() {
   const initialGifts: Gift[] = [
    {
      name: "TCL Washer/Dryer 10/6KG",
      img: "/images/registry/tcl-washer.webp",
      store: "Carrefour Kenya",
      quantityRequired: 1,
      quantityFulfilled: 0,
      code: "6933749509630",
      unitPrice: 80903,
    },
    {
      name: "VON Fridge 334L VRT334 NVAK",
      img: "/images/registry/von-fridge.avif",
      store: "Carrefour Kenya",
      quantityRequired: 1,
      quantityFulfilled: 0,
      code: "6161106509034",
      unitPrice: 74995,
    },
    {
      name: "BEKO Microwave BM0383UK",
      img: "/images/registry/beko-microwave.avif",
      store: "Carrefour Kenya",
      quantityRequired: 1,
      quantityFulfilled: 1,
      code: "8690842472688",
      unitPrice: 14995,
    },
    {
      name: "VON Cooker VCF6631 FSX",
      img: "/images/registry/von-cooker.webp",
      store: "Carrefour Kenya",
      quantityRequired: 1,
      quantityFulfilled: 0,
      code: "6161106509560",
      unitPrice: 63995,
    },
    {
      name: "Ramtons Blender RM 597",
      img: "/images/registry/ramtons-blender.jpg",
      store: "Carrefour Kenya",
      quantityRequired: 1,
      quantityFulfilled: 0,
      code: "61620032085332",
      unitPrice: 6035,
    },
    {
      name: "VON Pressure Cooker VSCP60MMX",
      img: "/images/registry/von-pressure-cooker.avif",
      store: "Carrefour Kenya",
      quantityRequired: 1,
      quantityFulfilled: 1,
      code: "6161106506897",
      unitPrice: 13495,
    },
    {
      name: "VON Water Dispenser VDE312CLK",
      img: "/images/registry/von-dispenser.avif",
      store: "Carrefour Kenya",
      quantityRequired: 1,
      quantityFulfilled: 0,
      code: "61611066508624",
      unitPrice: 13195,
    },
    {
      name: "VON Iron Box VIS242CS9",
      img: "/images/registry/von-iron.avif",
      store: "Carrefour Kenya",
      quantityRequired: 1,
      quantityFulfilled: 0,
      code: "6161106508440",
      unitPrice: 3495,
    },
    {
      name: "Estilo Fibre Pillow",
      img: "/images/registry/pillow.avif",
      store: "Carrefour Kenya",
      quantityRequired: 4,
      quantityFulfilled: 0,
      code: "97000041312",
      unitPrice: 642,
    },
    {
      name: "Hisense Soundbar HS2100",
      img: "/images/registry/hisense-soundbar.avif",
      store: "Carrefour Kenya",
      quantityRequired: 1,
      quantityFulfilled: 0,
      code: "6942147497937",
      unitPrice: 19890,
    },
    {
      name: "Korkmaz Cookware Set",
      img: "/images/registry/korkmaz-cookware.avif",
      store: "Carrefour Kenya",
      quantityRequired: 1,
      quantityFulfilled: 0,
      code: "8691607016604",
      unitPrice: 37569,
    },

    // Sarit Centre items (reset to 0)
    {
      name: "Scatter: Velvet fleck 48×84 gold",
      img: "",
      store: "Sarit Centre",
      code: "6102047983001",
      unitPrice: 2700,
      quantityRequired: 6,
      quantityFulfilled: 0,
    },
    {
      name: "Door mat: Coir home heart 40×60",
      img: "",
      store: "Sarit Centre",
      code: "104029394",
      unitPrice: 2400,
      quantityRequired: 1,
      quantityFulfilled: 0,
    },
    {
      name: "Bath mat: Mem foam rib border tobacco",
      img: "",
      store: "Sarit Centre",
      code: "104707191",
      unitPrice: 3800,
      quantityRequired: 2,
      quantityFulfilled: 0,
    },
    {
      name: "Candle accessory: TH statue single tact",
      img: "",
      store: "Sarit Centre",
      code: "104558882",
      unitPrice: 2600,
      quantityRequired: 2,
      quantityFulfilled: 0,
    },
    {
      name: "Alarm clock: Retro alarm ELK",
      img: "",
      store: "Sarit Centre",
      code: "105343661",
      unitPrice: 2100,
      quantityRequired: 1,
      quantityFulfilled: 0,
    },
    {
      name: "Decorative accessory: Wooden calendar",
      img: "",
      store: "Sarit Centre",
      code: "104196996",
      unitPrice: 1400,
      quantityRequired: 2,
      quantityFulfilled: 0,
    },
    {
      name: "Bath accessory: Embossed block dispenser",
      img: "",
      store: "Sarit Centre",
      code: "104648336",
      unitPrice: 4400,
      quantityRequired: 2,
      quantityFulfilled: 0,
    },
    {
      name: "Premium towel: Ripple zero twist blue",
      img: "",
      store: "Sarit Centre",
      code: "210201009001",
      unitPrice: 3300,
      quantityRequired: 2,
      quantityFulfilled: 0,
    },
    {
      name: "Essential towel: Chenille teal xl BS",
      img: "",
      store: "Sarit Centre",
      code: "2101114287001",
      unitPrice: 6000,
      quantityRequired: 2,
      quantityFulfilled: 0,
    },
    {
      name: "Utility hold-all: Mini kwezi utility black M",
      img: "",
      store: "Sarit Centre",
      code: "104055214",
      unitPrice: 6000,
      quantityRequired: 1,
      quantityFulfilled: 0,
    },
  ];

  const [gifts, setGifts] = useState<Gift[]>(initialGifts);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Load from localStorage
  useEffect(() => {
    const updated = initialGifts.map((gift) => {
      const qtyKey = `gift-${gift.code}-qty`;
      const confirmKey = `gift-${gift.code}-confirmed`;

      const savedQty = Number(localStorage.getItem(qtyKey) || 0);
      const savedConfirm = localStorage.getItem(confirmKey) === "true";

      return {
        ...gift,
        quantityFulfilled: savedQty,
        isConfirmed: savedConfirm,
      };
    });

    setGifts(updated);
  }, []);

  // Update quantity locally
  const updateQty = (code: string, qty: number) => {
    setGifts((prev) =>
      prev.map((gift) => {
        if (gift.code !== code) return gift;
        localStorage.setItem(`gift-${code}-qty`, String(qty));
        return { ...gift, quantityFulfilled: qty };
      })
    );
  };

  // Confirm acquisition
  const confirmGift = (code: string) => {
    setGifts((prev) =>
      prev.map((gift) => {
        if (gift.code !== code) return gift;
        localStorage.setItem(`gift-${code}-confirmed`, "true");
        return { ...gift, isConfirmed: true };
      })
    );
    setSuccessMessage("Gift confirmed successfully!");
    setTimeout(() => setSuccessMessage(null), 5000);
  };

  return (
    <main className="px-6 py-16 text-rose-900 flex flex-col items-center">
      <PhoneCrest />

      <h1 className="uppercase text-2xl md:text-4xl font-serif tracking-[0.25em] mb-6 text-center">
        Desired Gifts
      </h1>

      <p className="text-center text-rose-800 max-w-2xl mb-12 leading-relaxed">
        Your presence in our lives is the greatest gift of all.  
        If you prefer, <span className="font-semibold">gift cards and shopping vouchers</span>  
        from any supermarket, store, or mall are also warmly welcome.  
      </p>

      {successMessage && (
        <div className="mb-4 px-4 py-2 bg-green-200 text-green-800 rounded">
          {successMessage}
        </div>
      )}

      <section className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {gifts.map((gift) => {
          const stillNeeded = gift.quantityRequired - gift.quantityFulfilled;

          return (
            <div
              key={gift.code}
              className="flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition p-4"
            >
              <Image
                src={gift.img || "/images/registry/placeholder.avif"}
                alt={gift.name}
                width={400}
                height={300}
                className="object-contain w-full h-60"
              />

              <div className="text-center space-y-2 mt-2">
                <h3 className="text-lg font-serif uppercase tracking-wide">{gift.name}</h3>
                <p className="text-sm opacity-80">Store: {gift.store}</p>
                <p className="text-sm opacity-90 font-medium">
                  Product Code: <span className="font-mono">{gift.code}</span>
                </p>
                <p className="text-sm opacity-90 font-semibold">
                  Unit Price: KES {gift.unitPrice.toLocaleString()}
                </p>
                <p className="text-sm font-semibold text-rose-900">
                  Still needed: {stillNeeded}
                </p>

                {/* Quantity selector */}
                <select
                  value={gift.quantityFulfilled}
                  onChange={(e) => updateQty(gift.code, Number(e.target.value))}
                  className="border p-2 rounded text-sm mt-2 w-full"
                >
                  {Array.from({ length: gift.quantityRequired + 1 }, (_, i) => (
                    <option key={i} value={i}>
                      {i === 0 ? "Not acquired" : `${i} acquired`}
                    </option>
                  ))}
                </select>

                {/* Confirm button */}
                <button
                  onClick={() => confirmGift(gift.code)}
                  disabled={gift.quantityFulfilled === 0 || gift.isConfirmed}
                  className={`mt-2 px-4 py-2 rounded text-white font-medium ${
                    gift.quantityFulfilled === 0 || gift.isConfirmed
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-rose-900 hover:bg-rose-700"
                  }`}
                >
                  {gift.isConfirmed ? "Confirmed" : "Confirm"}
                </button>

                {/* Status */}
                {gift.isConfirmed && (
                  <p className="text-green-700 font-semibold mt-1">✅ Confirmed acquired</p>
                )}
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
