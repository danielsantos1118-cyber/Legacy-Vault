export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#0A0A0A", minHeight: "100vh", height: "100vh" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden="true"
      />

      {/* Dark navy overlay */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{ backgroundColor: "rgba(0,0,0,0.70)" }}
      />

      {/* Radial warm glow from center â€” sits above overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% 60%, rgba(184,151,58,0.07) 0%, transparent 65%)",
        }}
      />


      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-32 text-center">

        {/* Headline */}
        <h1
          className="lv-hero-title font-light leading-[1.1] mb-6"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(3rem, 8vw, 5.5rem)",
            color: "#FFFFFF",
            letterSpacing: "-0.01em",
          }}
        >
          Your future deserves
          <br />
          <span className="italic">a real plan.</span>
        </h1>

        {/* Gold rule divider */}
        <div className="lv-hero-rule flex justify-center mb-7">
          <div className="lv-rule w-20" />
        </div>

        {/* Subheadline */}
        <p
          className="lv-hero-body text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(248,246,241,0.65)" }}
        >
          Providing individuals and families with trusted guidance in retirement
          planning, insurance, and long-term financial strategy.
        </p>

        {/* CTA */}
        <div className="lv-hero-cta">
          <a
            href="#contact"
            className="btn-primary inline-block text-sm px-10 py-4 rounded"
            style={{ fontFamily: "var(--font-dm-sans)", letterSpacing: "0.04em" }}
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="lv-hero-cta absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "rgba(248,246,241,0.3)" }}
      >
        <div
          className="w-px h-10"
          style={{ background: "linear-gradient(to bottom, rgba(184,151,58,0.4), transparent)" }}
        />
      </div>
    </section>
  );
}
