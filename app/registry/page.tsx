"use client";

import Image from "next/image";

type Gift = {
  name: string;
  img: string;
  store: string;
  quantityRequired: number;
  quantityFulfilled?: number;
  link?: string;
};

export default function RegistryPage() {
  const gifts: Gift[] = [
    {
      name: "Kitchen Mixer",
      img: "/images/registry/mixer.jpg",
      store: "Amazon",
      quantityRequired: 1,
      quantityFulfilled: 0,
      link: "https://www.amazon.com/"
    },
    {
      name: "Dinnerware Set",
      img: "/images/registry/dinnerware.jpg",
      store: "IKEA",
      quantityRequired: 2,
      quantityFulfilled: 1,
      link: "https://www.ikea.com/"
    },
    {
      name: "Coffee Maker",
      img: "/images/registry/coffee.jpg",
      store: "Walmart",
      quantityRequired: 1,
      quantityFulfilled: 0,
      link: "https://www.walmart.com/"
    },
    {
      name: "Wine Glass Set",
      img: "/images/registry/wine-glass.jpg",
      store: "Crate & Barrel",
      quantityRequired: 6,
      quantityFulfilled: 2,
      link: "https://www.crateandbarrel.com/"
    },
    {
      name: "Vacuum Cleaner",
      img: "/images/registry/vacuum.jpg",
      store: "Best Buy",
      quantityRequired: 1,
      quantityFulfilled: 0,
      link: "https://www.bestbuy.com/"
    },
    {
      name: "Toaster",
      img: "/images/registry/toaster.jpg",
      store: "Target",
      quantityRequired: 1,
      quantityFulfilled: 0,
      link: "https://www.target.com/"
    },
  ];

  return (
    <main className="px-6 py-16 text-rose-900 flex flex-col items-center">
      {/* Page Title */}
      <h1 className="uppercase text-2xl md:text-4xl font-serif tracking-[0.25em] mb-12 text-center">
        Desired Gifts
      </h1>

      {/* Gift Grid */}
      <section className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {gifts.map((gift, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <a href={gift.link} target="_blank" rel="noopener noreferrer">
              <Image
                src={gift.img}
                alt={gift.name}
                width={400}
                height={300}
                className="object-cover w-full h-60"
              />
            </a>

            <div className="p-4 text-center">
              <h3 className="text-lg font-serif uppercase tracking-wide mb-2">
                {gift.name}
              </h3>
              <p className="text-sm opacity-80 mb-2">Store: {gift.store}</p>
              <p className="text-sm opacity-80">
                Quantity: {gift.quantityFulfilled ?? 0} / {gift.quantityRequired}
              </p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
