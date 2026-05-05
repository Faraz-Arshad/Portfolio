"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)", padding: "36px 0" }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <span className="font-display" style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text)" }}>
            Faraz<span style={{ color: "var(--accent)" }}>.</span>
          </span>
        </Link>
        <p style={{ fontSize: "12px", color: "var(--text-muted)", letterSpacing: "0.05em" }}>
          © {new Date().getFullYear()} Faraz Arshad — Crafted with precision
        </p>
        <div style={{ display: "flex", gap: "24px" }}>
          {[
            { label: "Work", href: "/work" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ].map(l => (
            <Link key={l.label} href={l.href} style={{ fontSize: "12px", fontWeight: 500, color: "var(--text-muted)", textDecoration: "none" }}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
