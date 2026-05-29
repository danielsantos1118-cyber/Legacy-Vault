const points = [
  {
    title: "Independent advisor",
    body: "I work for you, not a company. I'm not tied to any one product line â€” I find what actually makes sense for your situation.",
  },
  {
    title: "1-on-1 personal service",
    body: "You always deal with me directly. No call centers, no handoffs â€” just someone who knows your name and your goals.",
  },
  {
    title: "20+ years helping New York families",
    body: "I've spent over two decades helping families across the New York area protect what they've built and plan for what comes next.",
  },
  {
    title: "Built on referrals",
    body: "My clients come back and send their friends. That's the kind of trust I work every day to earn.",
  },
];

export default function WhyJoe() {
  return (
    <section
      className="relative py-20 px-6 overflow-hidden lv-texture-light"
      style={{ backgroundColor: "#F8F6F1" }}
    >
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p
            className="text-xs uppercase tracking-[0.28em] mb-4"
            style={{ fontFamily: "var(--font-dm-sans)", color: "#B8973A" }}
          >
            Why Work With Me
          </p>
          <h2
            className="font-light mb-5"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              color: "#0D1F3C",
            }}
          >
            What makes me different
          </h2>
          <div className="flex justify-center">
            <div className="lv-rule w-14" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {points.map((p) => (
            <div
              key={p.title}
              className="group relative p-8 rounded-lg bg-white transition-all duration-300"
              style={{
                border: "1px solid rgba(28,43,42,0.08)",
                boxShadow: "0 2px 12px rgba(28,43,42,0.05)",
              }}
            >
              {/* Gold left accent bar */}
              <div
                className="absolute left-0 top-8 bottom-8 rounded-full transition-all duration-300 group-hover:top-4 group-hover:bottom-4"
                style={{ width: "2px", background: "linear-gradient(to bottom, transparent, #B8973A, transparent)" }}
              />

              <h3
                className="text-xl font-normal mb-3 pl-5"
                style={{ fontFamily: "var(--font-cormorant)", color: "#0D1F3C", letterSpacing: "0.01em" }}
              >
                {p.title}
              </h3>
              <p
                className="text-sm leading-relaxed pl-5"
                style={{ fontFamily: "var(--font-dm-sans)", color: "#4A4A4A" }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
