"use client";

import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";

type FormState = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({ from_name: "", from_email: "", phone: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setState("sending");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.from_name,
          from_email: form.from_email,
          phone: form.phone || "Not provided",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setState("success");
      setForm({ from_name: "", from_email: "", phone: "", message: "" });
    } catch {
      setState("error");
    }
  }

  const inputClass =
    "w-full rounded px-4 py-3 text-sm transition-all duration-200 focus:outline-none";

  const inputStyle = {
    fontFamily: "var(--font-dm-sans)",
    background: "#FFFFFF",
    border: "1px solid rgba(255,255,255,0.2)",
    color: "#0D1F3C",
  };

  const focusStyle = {
    borderColor: "#B8973A",
    boxShadow: "0 0 0 3px rgba(184,151,58,0.12)",
  };

  return (
    <section
      id="contact"
      className="relative py-12 px-6 overflow-hidden lv-texture-dark"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      {/* Warm center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(184,151,58,0.06) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-lg mx-auto">
        <div className="text-center mb-10">
          <p
            className="text-xs uppercase tracking-[0.28em] mb-4"
            style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(184,151,58,0.8)" }}
          >
            Get in Touch
          </p>
          <h2
            className="font-light mb-4"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              color: "#FFFFFF",
            }}
          >
            Ready to take the first step?
          </h2>
          <div className="flex justify-center mb-5">
            <div className="lv-rule w-14" />
          </div>
          <p
            className="text-sm"
            style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.65)" }}
          >
            Fill out the form and I&apos;ll be in touch within one business day.
          </p>
        </div>

        {state === "success" ? (
          <div
            className="rounded-lg p-12 text-center"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(184,151,58,0.3)",
            }}
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
              style={{ background: "rgba(184,151,58,0.12)", border: "1px solid rgba(184,151,58,0.4)" }}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M4 11L9 16L18 6" stroke="#B8973A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3
              className="text-2xl font-light mb-2"
              style={{ fontFamily: "var(--font-cormorant)", color: "#F8F6F1" }}
            >
              Message sent.
            </h3>
            <p
              className="text-sm"
              style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(248,246,241,0.55)" }}
            >
              I&apos;ll be in touch within one business day.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-lg p-8 space-y-5"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(184,151,58,0.18)",
              boxShadow: "0 24px 64px rgba(0,0,0,0.3)",
            }}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label
                  className="block text-xs font-medium mb-2 uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(248,246,241,0.7)" }}
                  htmlFor="from_name"
                >
                  Name <span style={{ color: "#B8973A" }}>*</span>
                </label>
                <input
                  id="from_name" name="from_name" type="text" required
                  placeholder="Your full name"
                  value={form.from_name} onChange={handleChange}
                  className={inputClass}
                  style={inputStyle}
                  onFocus={e => Object.assign(e.target.style, focusStyle)}
                  onBlur={e => Object.assign(e.target.style, { borderColor: "rgba(255,255,255,0.2)", boxShadow: "none" })}
                />
              </div>
              <div>
                <label
                  className="block text-xs font-medium mb-2 uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(248,246,241,0.7)" }}
                  htmlFor="from_email"
                >
                  Email <span style={{ color: "#B8973A" }}>*</span>
                </label>
                <input
                  id="from_email" name="from_email" type="email" required
                  placeholder="your@email.com"
                  value={form.from_email} onChange={handleChange}
                  className={inputClass}
                  style={inputStyle}
                  onFocus={e => Object.assign(e.target.style, focusStyle)}
                  onBlur={e => Object.assign(e.target.style, { borderColor: "rgba(255,255,255,0.2)", boxShadow: "none" })}
                />
              </div>
            </div>

            <div>
              <label
                className="block text-xs font-medium mb-2 uppercase tracking-wider"
                style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(248,246,241,0.7)" }}
                htmlFor="phone"
              >
                Phone{" "}
                <span className="normal-case font-normal tracking-normal" style={{ color: "rgba(248,246,241,0.35)" }}>
                  (optional)
                </span>
              </label>
              <input
                id="phone" name="phone" type="tel"
                placeholder="(555) 555-5555"
                value={form.phone} onChange={handleChange}
                className={inputClass}
                style={inputStyle}
                onFocus={e => Object.assign(e.target.style, focusStyle)}
                onBlur={e => Object.assign(e.target.style, { borderColor: "rgba(255,255,255,0.2)", boxShadow: "none" })}
              />
            </div>

            <div>
              <label
                className="block text-xs font-medium mb-2 uppercase tracking-wider"
                style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(248,246,241,0.7)" }}
                htmlFor="message"
              >
                Message <span style={{ color: "#B8973A" }}>*</span>
              </label>
              <textarea
                id="message" name="message" required rows={4}
                placeholder="Tell me a little about what you're looking for..."
                value={form.message} onChange={handleChange}
                className={`${inputClass} resize-none`}
                style={inputStyle}
                onFocus={e => Object.assign(e.target.style, focusStyle)}
                onBlur={e => Object.assign(e.target.style, { borderColor: "rgba(255,255,255,0.2)", boxShadow: "none" })}
              />
            </div>

            {state === "error" && (
              <p className="text-red-400 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                Something went wrong. Email me directly at{" "}
                <a href="mailto:legacy.vault.jds@gmail.com" className="underline hover:text-red-300">
                  legacy.vault.jds@gmail.com
                </a>.
              </p>
            )}

            <button
              type="submit"
              disabled={state === "sending"}
              className="btn-primary w-full py-4 rounded disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none text-sm"
              style={{ fontFamily: "var(--font-dm-sans)", letterSpacing: "0.04em" }}
            >
              {state === "sending" ? "Sending…" : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
