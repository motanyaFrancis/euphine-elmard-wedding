export default function QAPage() {
  const faqs = [
    {
      q: "Where will the ceremony take place?",
      a: "The ceremony will be held at Karengata Seventh-day Adventist Church, Langata Road opposite Galleria Mall, Nairobi."
    },
    {
      q: "Where is the reception?",
      a: "The reception will be held at Catholic University of Eastern Africa (CUEA), Main Campus, Langata Road, Nairobi."
    },
    {
      q: "What time should I arrive?",
      a: "Please plan to arrive at least 20–30 minutes before 10:00 AM so you can be seated before the ceremony begins."
    },
    {
      q: "Is there parking available?",
      a: "Yes. Both the ceremony and reception venues offer ample parking for all guests."
    },
    {
      q: "Can I bring a plus one?",
      a: "We kindly ask that you only bring a plus one if your invitation specifically includes one."
    },
    {
      q: "Is there a dress code?",
      a: "Yes! The dress code is formal. Neutrals and soft tones are welcome, but please avoid wearing white."
    },
    {
      q: "Can we take pictures during the ceremony?",
      a: "We kindly request that the ceremony remain unplugged. Our photographer will capture every moment for you to enjoy."
    },
    {
      q: "Is there accessibility for guests with disabilities?",
      a: "Yes. Both venues provide wheelchair accessibility and can accommodate guests with mobility needs."
    },
    {
      q: "Is the wedding indoor or outdoor?",
      a: "The ceremony will take place indoors. The reception will be outdoors under a covered setting."
    },
    {
      q: "How do I RSVP?",
      a: "Please RSVP through the RSVP page on this website. It only takes a moment!"
    },
    {
      q: "What if I need to change my RSVP?",
      a: "If your plans change, simply revisit the RSVP page and submit an updated response. You may also contact us directly."
    },
    {
      q: "Are children allowed?",
      a: "We love your little ones, but this will be an adults-only celebration unless they are part of the wedding party."
    }
  ];

  return (
    <main className="px-6 py-16 text-rose-900 flex flex-col items-center">
      
      {/* Page Title */}
      <h1 className="uppercase text-3xl md:text-4xl font-serif tracking-[0.25em] mb-12 text-center">
        Q + A
      </h1>

      {/* FAQ Section */}
      <section className="w-full max-w-3xl space-y-10">
        {faqs.map((item, index) => (
          <div key={index} className="border-b border-gray-300 pb-6">
            <h2 className="text-lg md:text-xl font-serif uppercase tracking-widest mb-3">
              {item.q}
            </h2>
            <p className="leading-relaxed opacity-80 text-base">
              {item.a}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
