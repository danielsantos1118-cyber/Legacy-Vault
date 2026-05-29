"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;

    // if (sessionStorage.getItem("splash_shown")) return;
    setVisible(true);

    const fadeOutTimer = setTimeout(() => {
      if (mounted.current) setFading(true);
    }, 2500);

    const hideTimer = setTimeout(() => {
      if (mounted.current) {
        setVisible(false);
        // sessionStorage.setItem("splash_shown", "1");
      }
    }, 3200);

    return () => {
      mounted.current = false;
      clearTimeout(fadeOutTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "#0A0A0A",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "36px",
        opacity: fading ? 0 : 1,
        transition: "opacity 0.7s ease",
        pointerEvents: fading ? "none" : "all",
      }}
    >
      {/* Logo */}
      <div style={{ animation: "splash-logo-in 0.8s ease forwards" }}>
        <Image
          src="/Vault_Logo-removebg-preview.png"
          alt="Legacy Vault"
          height={420}
          width={1180}
          className="splash-logo"
          style={{ height: "420px", width: "auto", maxWidth: "90vw" }}
          priority
        />
        <style>{`
          @media (max-width: 768px) {
            .splash-logo {
              height: 200px !important;
              max-width: 85vw !important;
            }
          }
        `}</style>
      </div>

      {/* Dots loader */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#B8973A",
              animation: `splash-dot-bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes splash-logo-in {
          from { opacity: 0; transform: scale(0.95); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes splash-dot-bounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
          40%            { transform: translateY(-10px); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
