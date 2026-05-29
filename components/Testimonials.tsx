const testimonials = [
  {
    quote:
      "I had no idea where to start with my retirement planning. Joe sat down with me, explained everything clearly, and put together a plan that actually made sense for my life. I finally feel confident about my future.",
    name: "Maria S.",
    location: "White Plains, NY",
  },
  {
    quote:
      "Joe has been my advisor for years and I trust him completely. He's always available, always honest, and never tries to sell me something I don't need. That means everything to me.",
    name: "David R.",
    location: "Yonkers, NY",
  },
  {
    quote:
      "I came to Joe with a mess of savings and no real plan. He helped me organize everything, get the right life insurance for my family, and start investing properly. Best decision I ever made.",
    name: "Lisa M.",
    location: "New Rochelle, NY",
  },
];

export default function Testimonials() {
  return (
    <section
      className="relative py-12 px-6 overflow-hidden lv-texture-light"
      style={{ backgroundColor: "#F8F6F1" }}
    >
      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-xs uppercase tracking-[0.28em] mb-4"
            style={{ fontFamily: "var(--font-dm-sans)", color: "#B8973A", fontWeight: 500 }}
          >
            What My Clients Say
          </p>
          <h2
            className="font-normal mb-5"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              color: "#000000",
            }}
          >
            Real people, real results.
          </h2>
          <div className="flex justify-center">
            <div className="lv-rule w-14" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="lv-card flex flex-col rounded-lg p-8 bg-white"
              style={{
                border: "1px solid rgba(13,31,60,0.07)",
                boxShadow: "0 2px 16px rgba(13,31,60,0.07)",
              }}
            >
              {/* Gold quotation mark */}
              <div
                className="text-5xl leading-none mb-4 select-none"
                style={{ fontFamily: "Georgia, serif", color: "#B8973A", lineHeight: 1 }}
              >
                &ldquo;
              </div>

              {/* Quote */}
              <p
                className="text-sm leading-relaxed flex-1 mb-6"
                style={{ fontFamily: "var(--font-dm-sans)", color: "#4A4A4A" }}
              >
                {t.quote}
              </p>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#B8973A">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Client */}
              <div style={{ borderTop: "1px solid rgba(184,151,58,0.25)", paddingTop: "16px" }}>
                <p
                  className="text-sm font-semibold"
                  style={{ fontFamily: "var(--font-dm-sans)", color: "#0D1F3C" }}
                >
                  {t.name}
                </p>
                <p
                  className="text-xs"
                  style={{ fontFamily: "var(--font-dm-sans)", color: "#B8973A" }}
                >
                  {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
