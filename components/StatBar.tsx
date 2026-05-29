const stats = [
  { number: "19+",             label: "Years of Experience", large: true },
  { number: "6000+",           label: "Clients Served", large: true },
  { number: "100+",            label: "Businesses Served", large: true },
  { number: "U.S.", label: "Serving Across the", large: true },
];

export default function StatBar() {
  return (
    <section className="stat-section" style={{ backgroundColor: "#0A0A0A", paddingTop: "35px", paddingBottom: "35px" }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="stat-item flex flex-col items-center text-center px-6 py-4"
              style={{
                borderLeft: i !== 0 ? "1px solid rgba(184,151,58,0.3)" : "none",
              }}
            >
              <span
                className="stat-number"
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: s.large ? "2.8rem" : "1.5rem",
                  fontWeight: 700,
                  color: "#B8973A",
                  lineHeight: 1,
                  marginBottom: "10px",
                }}
              >
                {s.number}
              </span>
              <span
                className="stat-label"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.75)",
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stat-section {
            padding-top: 20px !important;
            padding-bottom: 20px !important;
          }
          .stat-item {
            border-left: none !important;
          }
          .stat-number {
            font-size: 32px !important;
          }
          .stat-label {
            font-size: 10px !important;
          }
        }
      `}</style>
    </section>
  );
}
