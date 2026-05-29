const services = [
  {
    number: "01",
    title: "Business Solutions",
    body: "Helping business owners and employees protect what matters most — from supplemental benefits and health insurance to short and long-term disability coverage.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="10" width="22" height="15" rx="1.5" stroke="#B8973A" strokeWidth="1.4" />
        <path d="M9 10V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3" stroke="#B8973A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 17h22" stroke="#B8973A" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M12 17v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V17" stroke="#B8973A" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Retirement Planning",
    body: "Planning for retirement involves understanding what you will need, when you will need it, and how to get there so you can retire confidently and on your own terms.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="21" width="22" height="3" rx="1" stroke="#B8973A" strokeWidth="1.4" />
        <rect x="6" y="11" width="4" height="10" rx="0.5" stroke="#B8973A" strokeWidth="1.4" />
        <rect x="12" y="7" width="4" height="14" rx="0.5" stroke="#B8973A" strokeWidth="1.4" />
        <rect x="18" y="14" width="4" height="7" rx="0.5" stroke="#B8973A" strokeWidth="1.4" />
        <path d="M3 6L14 2L25 6" stroke="#B8973A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Life Insurance",
    body: "Ensuring your family is financially protected by identifying the right coverage so you can have confidence that they will be taken care of if something unexpected happens.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3L4 7V14C4 19.5 8.5 24.5 14 26C19.5 24.5 24 19.5 24 14V7L14 3Z" stroke="#B8973A" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M9 14L12.5 17.5L19 11" stroke="#B8973A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Investment Planning",
    body: "Putting your savings to work with a strategy aligned to your goals, timeline, and comfort level so your money continues working for you.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 20L10 13L15 17L22 8" stroke="#B8973A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 8H22V12" stroke="#B8973A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 24H24" stroke="#B8973A" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-20 px-6 overflow-hidden"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      {/* Subtle warm glow at bottom */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(184,151,58,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p
            className="text-xs uppercase tracking-[0.28em] mb-4"
            style={{ fontFamily: "var(--font-dm-sans)", color: "#B8973A", fontWeight: 500 }}
          >
            What I Do
          </p>
          <h2
            className="mb-5"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              color: "#FFFFFF",
              fontWeight: 400,
            }}
          >
            Personalized Financial Planning and Advice
          </h2>
          <div className="flex justify-center">
            <div className="lv-rule w-14" />
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="lv-card group relative rounded-lg p-8"
              style={{
                backgroundColor: "#1A1A1A",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {/* Gold top border */}
              <div
                className="absolute top-0 left-0 right-0 rounded-t-lg opacity-40 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  height: "2px",
                  background: "linear-gradient(90deg, transparent, #B8973A, transparent)",
                }}
              />

              {/* Number */}
              <span
                className="absolute top-6 right-6 text-xs tracking-widest"
                style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(184,151,58,0.3)" }}
              >
                {s.number}
              </span>

              {/* Icon */}
              <div className="mb-6">{s.icon}</div>

              <h3
                className="text-xl font-normal mb-3"
                style={{ fontFamily: "var(--font-cormorant)", color: "#FFFFFF", letterSpacing: "0.01em" }}
              >
                {s.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.55)" }}
              >
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
