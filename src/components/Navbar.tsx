"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Work",    href: "/#work" },
  { label: "About",   href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div style={{
      position: "fixed",
      top: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 50,
      /* Full pill */
      borderRadius: "100px",
      /* Heavy Apple glass */
      background: "rgba(255, 255, 255, 0.55)",
      backdropFilter: "saturate(200%) blur(32px)",
      WebkitBackdropFilter: "saturate(200%) blur(32px)",
      border: "0.5px solid rgba(255,255,255,0.65)",
      /* Layered shadow: outer drop + inner highlight */
      boxShadow: [
        "0 2px 20px rgba(0,0,0,0.07)",
        "0 1px 4px rgba(0,0,0,0.05)",
        "inset 0 1px 0 rgba(255,255,255,0.95)",
        "0 0 0 0.5px rgba(0,0,0,0.06)",
      ].join(", "),
      display: "flex",
      alignItems: "center",
      gap: "2px",
      padding: "6px 6px",
    }}>
      {links.map(l => {
        const isContact = l.href === "/contact" && pathname === "/contact";
        const isAbout   = l.href === "/about"   && pathname === "/about";
        const isWork    = l.href === "/#work"   && (pathname === "/" || !pathname.startsWith("/about") && !pathname.startsWith("/contact"));
        const active    = isContact || isAbout || isWork;

        return (
          <Link key={l.label} href={l.href} data-cursor-hover
            style={{
              padding: "8px 22px",
              borderRadius: "100px",
              fontSize: "14px",
              fontWeight: active ? 600 : 400,
              color: active ? "var(--text)" : "var(--text-muted)",
              background: active ? "rgba(255,255,255,0.85)" : "transparent",
              boxShadow: active ? "0 1px 4px rgba(0,0,0,0.08), inset 0 0.5px 0 rgba(255,255,255,1)" : "none",
              textDecoration: "none",
              transition: "background .18s, color .18s, box-shadow .18s",
              letterSpacing: "0.01em",
            }}
            onMouseEnter={e => { if (!active) e.currentTarget.style.color = "var(--text)"; }}
            onMouseLeave={e => { if (!active) e.currentTarget.style.color = "var(--text-muted)"; }}
          >
            {l.label}
          </Link>
        );
      })}
    </div>
  );
}
