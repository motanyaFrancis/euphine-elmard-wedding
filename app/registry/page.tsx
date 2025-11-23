"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import PhoneCrest from "@/components/PhoneCrest";

type Gift = {
  name: string;
  img: string;
  store: string;
  quantityRequired: number;
  quantityFulfilled: number; // always start at 0
  code: string;
  unitPrice: number;
  isLocked?: boolean; // locked if another device fulfilled it
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
      quantityFulfilled: 0,
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
      quantityFulfilled: 0,
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

  // Load from device storage
  useEffect(() => {
    const updated = initialGifts.map((gift) => {
      const qtyKey = `gift-${gift.code}-qty`;
      const lockKey = `gift-${gift.code}-lock`;

      const savedQty = Number(localStorage.getItem(qtyKey) || 0);
      const savedLock = localStorage.getItem(lockKey) === "true";

      return {
        ...gift,
        quantityFulfilled: savedQty,
        isLocked: savedLock,
      };
    });

    setGifts(updated);
  }, []);

  // Update quantity
  const updateQty = (code: string, qty: number) => {
    setGifts((prev) =>
      prev.map((gift) => {
        if (gift.code !== code) return gift;

        const qtyKey = `gift-${code}-qty`;
        const lockKey = `gift-${code}-lock`;

        // Device lock — only this device can lower quantity
        if (gift.isLocked && qty < gift.quantityFulfilled) {
          return gift; // Prevent undo on other devices
        }

        localStorage.setItem(qtyKey, String(qty));

        if (qty > 0) {
          localStorage.setItem(lockKey, "true");
        }

        if (qty === 0) {
          localStorage.removeItem(lockKey);
        }

        return {
          ...gift,
          quantityFulfilled: qty,
          isLocked: qty > 0,
        };
      })
    );
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

      <section className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {gifts.map((gift) => (
          <div
            key={gift.code}
            className="flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <Image
              src={gift.img || "/images/registry/placeholder.avif"}
              alt={gift.name}
              width={400}
              height={300}
              className="object-contain w-full h-60"
            />

            <div className="p-4 text-center space-y-2">
              <h3 className="text-lg font-serif uppercase tracking-wide">
                {gift.name}
              </h3>

              <p className="text-sm opacity-80">Store: {gift.store}</p>

              <p className="text-sm opacity-90 font-medium">
                Product Code: <span className="font-mono">{gift.code}</span>
              </p>

              <p className="text-sm opacity-90 font-semibold">
                Unit Price: KES {gift.unitPrice.toLocaleString()}
              </p>

              <p className="text-sm opacity-80">
                Needed: {gift.quantityRequired}
              </p>

              {/* Quantity selector */}
              <div className="mt-3">
                <select
                  value={gift.quantityFulfilled}
                  onChange={(e) =>
                    updateQty(gift.code, Number(e.target.value))
                  }
                  disabled={gift.isLocked && gift.quantityFulfilled > 0}
                  className="border p-2 rounded text-sm"
                >
                  {Array.from(
                    { length: gift.quantityRequired + 1 },
                    (_, i) => (
                      <option key={i} value={i}>
                        {i === 0 ? "Not acquired" : `${i} acquired`}
                      </option>
                    )
                  )}
                </select>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
