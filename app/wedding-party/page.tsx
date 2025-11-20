import Image from "next/image";

export default function WeddingPartyPage() {
  const bridesmaids = [
    { name: "Name 1", role: "Maid of Honour", img: "/images/bridesmaids/1.jpg" },
    { name: "Name 2", role: "Bridesmaid", img: "/images/bridesmaids/2.jpg" },
    { name: "Name 3", role: "Bridesmaid", img: "/images/bridesmaids/3.jpg" },
    { name: "Name 4", role: "Bridesmaid", img: "/images/bridesmaids/4.jpg" },
    { name: "Name 5", role: "Bridesmaid", img: "/images/bridesmaids/5.jpg" },
    { name: "Name 6", role: "Bridesmaid", img: "/images/bridesmaids/6.jpg" },
    { name: "Name 7", role: "Bridesmaid", img: "/images/bridesmaids/7.jpg" },
    { name: "Name 8", role: "Bridesmaid", img: "/images/bridesmaids/8.jpg" },
  ];

  const groomsmen = [
    { name: "Name 1", role: "Best Man", img: "/images/groomsmen/1.jpg" },
    { name: "Name 2", role: "Groomsman", img: "/images/groomsmen/2.jpg" },
    { name: "Name 3", role: "Groomsman", img: "/images/groomsmen/3.jpg" },
    { name: "Name 4", role: "Groomsman", img: "/images/groomsmen/4.jpg" },
    { name: "Name 5", role: "Groomsman", img: "/images/groomsmen/5.jpg" },
    { name: "Name 6", role: "Groomsman", img: "/images/groomsmen/6.jpg" },
    { name: "Name 7", role: "Groomsman", img: "/images/groomsmen/7.jpg" },
    { name: "Name 8", role: "Groomsman", img: "/images/groomsmen/8.jpg" },
  ];

  return (
    <main className="px-6 py-16 text-rose-900 flex flex-col items-center">
      
      {/* Bride & Groom Section */}
      <section className="w-full max-w-4xl mb-16 text-center">
        <h2 className="uppercase font-serif tracking-[0.2em] text-xl mb-10">
          The Bride & Groom
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Bride */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/bride.jpg"
              width={300}
              height={300}
              alt="Bride"
              className="rounded-full object-cover h-60 w-60"
            />
            <h3 className="mt-4 text-lg font-serif">Bride</h3>
            <p>Daisy</p>
          </div>

          {/* Groom */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/groom.jpg"
              width={300}
              height={300}
              alt="Groom"
              className="rounded-full object-cover h-60 w-60"
            />
            <h3 className="mt-4 text-lg font-serif">Groom</h3>
            <p>Jasper</p>
          </div>
        </div>
      </section>

      {/* Bridesmaids Section */}
      <section className="w-full max-w-4xl mb-16 text-center">
        <h2 className="uppercase font-serif tracking-[0.2em] text-xl mb-10">
          The Bridesmaids
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {bridesmaids.map((person, i) => (
            <div key={i} className="flex flex-col items-center">
              <Image
                src={person.img}
                width={250}
                height={250}
                alt={person.name}
                className="rounded-full object-cover h-56 w-56"
              />
              <h3 className="mt-4 text-lg font-serif">{person.role}</h3>
              <p>{person.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Groomsmen Section */}
      <section className="w-full max-w-4xl mb-10 text-center">
        <h2 className="uppercase font-serif tracking-[0.2em] text-xl mb-10">
          The Groomsmen
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {groomsmen.map((person, i) => (
            <div key={i} className="flex flex-col items-center">
              <Image
                src={person.img}
                width={250}
                height={250}
                alt={person.name}
                className="rounded-full object-cover h-56 w-56"
              />
              <h3 className="mt-4 text-lg font-serif">{person.role}</h3>
              <p>{person.name}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
