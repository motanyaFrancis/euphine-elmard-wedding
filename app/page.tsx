import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center text-rose-900">

      {/* --- Hero Image --- */}
      <section className="w-full max-w-2xl mt-2">
        <Image
          src="/images/wedding-hero.jpg"
          width={800}
          height={1200}
          alt="Wedding Couple"
          className="rounded-lg object-cover max-md:w-full"
        />
      </section>

      {/* --- Mobile Crest Section --- */}
      <section className="md:hidden w-full text-center mt-8 px-4">
        <img
          src="/images/crest.png"
          alt="Crest"
          className="h-40 mx-auto mb-4"
        />

        <h1 className="text-4xl font-serif tracking-[0.25em] text-rose-900 mb-2">
          EUPHINE & ELMARD
        </h1>

        <p className="text-rose-900 tracking-[0.3em] text-xs uppercase">
          November 2025 • Karengata, Nairobi
        </p>
      </section>

      {/* --- Date + Location --- */}
      <section className="w-full max-w-4xl text-center mt-8 mb-8 max-md:hidden px-4">
        <div className="flex items-center justify-center gap-6 text-xl font-serif tracking-widest uppercase">
          <span>November 2025</span>
          <span className="h-18 w-[1px] bg-[#6d7b67]"></span>
          <span>
            Karengata
            <br /> Nairobi
          </span>
        </div>
      </section>

      {/* --- Welcome Text --- */}
      <section className="w-full max-w-xl text-center mt-6 px-4">
        <h2 className="uppercase tracking-widest font-serif mb-3">
          Welcome!
        </h2>

        <p className="text-base leading-relaxed opacity-80">
          Welcome to our wedding website. We will be saying "I do"
          this Fall in Karengata, SDA Church, and we cannot wait to
          celebrate surrounded by the warmth and joy of our loved ones.
          <br /><br />
          Details are as follows.
        </p>
      </section>

      {/* --- Wedding Details --- */}
      <section className="w-full max-w-xl text-center mt-12 mb-20 px-4">
        <h3 className="uppercase tracking-widest text-base font-serif mb-6">
          November 30, 2025
        </h3>

        <div className="mb-10">
          <h4 className="uppercase text-2xl tracking-widest mb-2 font-serif">
            Ceremony Venue
          </h4>
          <p className="text-base opacity-80 leading-relaxed">
            10:00AM
            <br />
            Karengata
            <br />
            Seventh-day Adventist Church
            <br />
            Langata Road opposite Galleria Mall
            <br />
            Karengata, Nairobi
          </p>
        </div>

        <div>
          <h4 className="uppercase text-2xl tracking-widest mb-2 font-serif">
            Reception Venue
          </h4>
          <p className="text-base opacity-80 leading-relaxed">
            1:00PM
            <br />
            Catholic University of Eastern Africa (CUEA)
            <br />
            Main Campus, Langata Road
            <br />
            Nairobi, Kenya
          </p>
        </div>
      </section>

    </main>
  );
}
