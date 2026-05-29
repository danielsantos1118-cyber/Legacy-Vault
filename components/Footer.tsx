import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="pt-6 pb-10 px-6"
      style={{ backgroundColor: "#0A0A0A", borderTop: "1px solid rgba(184,151,58,0.15)" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-6">

        {/* Logo */}
        <Image
          src="/Vault_Logo-removebg-preview.png"
          alt="Legacy Vault"
          height={200}
          width={560}
          style={{ height: "200px", width: "auto" }}
        />

        {/* Phone | Email */}
        <div
          className="flex items-center gap-4 text-sm"
          style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(248,246,241,0.5)" }}
        >
          <a href="tel:9142537025" className="transition-colors hover:text-white">
            914-253-7025
          </a>
          <span style={{ color: "rgba(184,151,58,0.5)" }}>|</span>
          <a href="mailto:legacy.vault.jds@gmail.com" className="transition-colors hover:text-white">
            legacy.vault.jds@gmail.com
          </a>
        </div>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/legacyvaultwealthmanagement"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm transition-colors hover:text-white"
          style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(248,246,241,0.5)" }}
        >
          @legacyvaultwealthmanagement
        </a>

        {/* Divider */}
        <div style={{ width: "100%", height: "1px", background: "rgba(248,246,241,0.08)", marginTop: "8px" }} />

        {/* Copyright */}
        <p
          className="text-xs"
          style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(248,246,241,0.3)" }}
        >
          © 2026 Legacy Vault, LLC. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
