"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: "#0A0A0A", boxShadow: "0 1px 0 rgba(0,0,0,0.3), 0 2px 16px rgba(0,0,0,0.2)" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Wordmark */}
        <a href="#" style={{ textDecoration: "none", textAlign: "center" }}>
          {/* Desktop */}
          <span className="navbar-wordmark navbar-wordmark-full">
            Legacy Vault Wealth Management
          </span>
          <span className="navbar-tagline">
            Protecting What Matters. Preserving What Lasts.
          </span>
          {/* Mobile */}
          <span className="navbar-wordmark-short">
            Legacy Vault
          </span>
        </a>

        {/* Desktop Nav links + CTA */}
        <div className="hidden sm:flex items-center gap-8">
          <div className="flex items-center gap-7">
            {["About", "Services", "Contact"].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="text-sm transition-colors"
                style={{ fontFamily: "var(--font-dm-sans)", color: "#B8973A" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#D4AF55")}
                onMouseLeave={e => (e.currentTarget.style.color = "#B8973A")}
              >
                {label}
              </a>
            ))}
            <a
              href="tel:9142537025"
              className="text-sm transition-colors flex items-center gap-1.5"
              style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.75)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#FFFFFF")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              914-253-7025
            </a>
          </div>
          <a
            href="#contact"
            className="btn-primary navbar-cta inline-block rounded"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden flex flex-col justify-center items-center gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <span
            style={{
              display: "block", width: "22px", height: "2px",
              backgroundColor: "#B8973A",
              transition: "transform 0.25s ease, opacity 0.25s ease",
              transform: menuOpen ? "translateY(6px) rotate(45deg)" : "none",
            }}
          />
          <span
            style={{
              display: "block", width: "22px", height: "2px",
              backgroundColor: "#B8973A",
              transition: "opacity 0.25s ease",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block", width: "22px", height: "2px",
              backgroundColor: "#B8973A",
              transition: "transform 0.25s ease, opacity 0.25s ease",
              transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "none",
            }}
          />
        </button>

      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="sm:hidden"
          style={{
            backgroundColor: "#0A0A0A",
            borderTop: "1px solid rgba(184,151,58,0.15)",
            padding: "16px 24px 20px",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "15px",
              color: "#B8973A",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            About
          </a>
          <a
            href="#services"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "15px",
              color: "#B8973A",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            Services
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "15px",
              color: "#B8973A",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            Contact
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="btn-primary inline-block rounded text-center"
            style={{ fontFamily: "var(--font-dm-sans)", fontSize: "14px", padding: "10px 20px", marginTop: "4px" }}
          >
            Let&apos;s Talk
          </a>
        </div>
      )}

      <style>{`
        .navbar-wordmark {
          font-family: var(--font-cinzel);
          font-size: 20px;
          font-weight: 700;
          color: #B8973A;
          letter-spacing: 0.05em;
          display: block;
        }
        .navbar-tagline {
          font-family: var(--font-dm-sans);
          font-size: 10px;
          font-weight: 400;
          color: #FFFFFF;
          letter-spacing: 0.08em;
          display: block;
          margin-top: 2px;
        }
        .navbar-cta {
          font-size: 14px;
          padding: 10px 20px;
        }
        .navbar-wordmark-short {
          display: none;
          font-family: var(--font-cinzel);
          font-size: 16px;
          font-weight: 700;
          color: #B8973A;
          letter-spacing: 0.05em;
        }
        @media (max-width: 768px) {
          .navbar-wordmark-full {
            display: none;
          }
          .navbar-tagline {
            display: none;
          }
          .navbar-wordmark-short {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
}
