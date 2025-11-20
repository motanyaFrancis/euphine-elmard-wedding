import Image from "next/image";

export default function OurStoryPage() {
  return (
    <main className="flex flex-col items-center text-rose-900 px-6 py-16">

      {/* --- Title --- */}
      <h1 className="uppercase text-3xl md:text-4xl font-serif tracking-[0.25em] text-center mb-12">
        The Beginning of Forever
      </h1>

      {/* --- Proposal / Ring Image --- */}
      <div className="w-full max-w-3xl mb-12">
        <Image
          src="/images/proposal.jpg"   // <-- replace with your ring/proposal image
          alt="Proposal Moment"
          width={1200}
          height={800}
          className="rounded-lg object-cover"
        />
      </div>

      {/* --- Story Section --- */}
      <section className="w-full max-w-2xl text-justify leading-relaxed">

        {/* How It Began */}
        <h2 className="uppercase tracking-widest font-serif text-xl mb-4">
          How It All Began
        </h2>
        <p className="opacity-80 mb-10">
          Every love story has a beginning, and ours started with a simple
          conversation that neither of us expected would grow into something
          so extraordinary. What began as a warm exchange quickly turned into
          a connection that felt familiar—easy, natural, and beautifully
          unexpected.
        </p>

        {/* Friendship */}
        <h2 className="uppercase tracking-widest font-serif text-xl mb-4">
          From Friendship to Something More
        </h2>
        <p className="opacity-80 mb-10">
          Over time, our friendship deepened. We discovered shared values,
          complementary personalities, and a lot of laughter. Whether it was
          long conversations, quiet moments, or spontaneous adventures, each
          chapter drew us closer together.
          <br /><br />
          Our story grew not because of grand gestures, but because of the
          small, everyday moments that revealed how effortlessly our lives
          aligned.
        </p>

        {/* Knowing */}
        <h2 className="uppercase tracking-widest font-serif text-xl mb-4">
          The Moment We Knew
        </h2>
        <p className="opacity-80 mb-10">
          There wasn’t one dramatic moment—there were countless subtle ones.
          The comfort, the support, the unwavering understanding… it became
          clear that what we had was rare and intentional.
          <br /><br />
          We realized we didn’t just love each other; we were choosing each
          other—every day, in every way.
        </p>

        {/* Proposal */}
        <h2 className="uppercase tracking-widest font-serif text-xl mb-4">
          The Proposal
        </h2>
        <p className="opacity-80 mb-10">
          The proposal was intimate and heartfelt—exactly us. Surrounded by
          love, reflection, and gratitude, we promised to continue building
          a life rooted in faith, warmth, and honesty.
          <br /><br />
          It was a moment filled with joy and overwhelming peace, marking the
          beginning of a new chapter in our journey.
        </p>

        {/* Forever */}
        <h2 className="uppercase tracking-widest font-serif text-xl mb-4">
          Forever, With Joy
        </h2>
        <p className="opacity-80">
          Today, we stand excited for what the future holds. Our story is
          still being written, and we cannot wait to step into marriage with
          the same intentional love that brought us here.
          <br /><br />
          To our family and friends—thank you for walking with us, celebrating
          with us, and supporting our story.
          <br /><br />
          With love,<br />
          <span className="font-serif text-lg">Euphine & Elmard</span>
        </p>
      </section>
    </main>
  );
}
