
export default function About() {
  return (
    <section
      id="about"
      className="about-section relative py-16 px-6 overflow-hidden lv-texture-light"
      style={{ backgroundColor: "#F8F6F1" }}
    >
      <div className="about-grid relative z-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* Photo with gold border frame */}
        <div className="about-photo-outer flex justify-center md:justify-start">
          <div className="relative">
            <div className="about-photo-wrap" style={{ border: "2px solid rgba(184,151,58,0.6)", boxShadow: "0 20px 60px rgba(0,0,0,0.2)", borderRadius: "12px", overflow: "hidden" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Jose Image.png"
                alt="Joe Dos Santos"
                className="about-photo-img"
                style={{ display: "block", width: "384px", height: "560px", objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
          </div>
        </div>

        {/* Bio */}
        <div>
          <p
            className="text-sm uppercase tracking-[0.28em] mb-5"
            style={{ fontFamily: "var(--font-dm-sans)", color: "#4A4A4A", fontWeight: 500 }}
          >
            Joe Dos Santos
          </p>
          <h2
            className="leading-tight mb-6"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.2rem, 3.5vw, 3rem)",
              color: "#000000",
              fontWeight: 700,
            }}
          >
            A clearer path for
            <br />
            <span className="italic" style={{ fontWeight: 400 }}>your financial future.</span>
          </h2>
          <div className="lv-rule w-14 mb-8" />

          <div
            className="space-y-5 leading-relaxed"
            style={{ fontFamily: "var(--font-dm-sans)", color: "#4A4A4A", fontSize: "1.05rem" }}
          >
            <p>
              I&apos;m Joe Dos Santos, an Insurance and Wealth Advisor based in New York. I&apos;ve
              spent years helping individuals and families make confident financial
              decisions — from investing and retirement planning to building long-term
              wealth strategies tailored to their goals.
            </p>
            <p>
              A lot of people put off thinking about their finances because it feels complicated or overwhelming. My job is to make it simple, and I work with clients in English, Spanish, and Portuguese. Whether you&apos;re planning for retirement, protecting your family with the right insurance, growing your savings, or tax diversification &mdash; I&apos;ll help you build a plan that protects what matters most.
            </p>
          </div>

          <div className="mt-10">
            <a
              href="#contact"
              className="btn-primary inline-block text-sm px-8 py-4 rounded"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .about-section {
            padding-top: 32px !important;
            padding-bottom: 40px !important;
          }
          .about-grid {
            gap: 24px !important;
          }
          .about-photo-outer {
            padding: 0 !important;
            margin: 0 !important;
          }
          .about-photo-wrap {
            width: 100% !important;
            margin: 0 !important;
          }
          .about-photo-img {
            width: 100% !important;
            height: 350px !important;
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
}
