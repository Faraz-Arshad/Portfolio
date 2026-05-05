"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const C: React.CSSProperties = { maxWidth: "1320px", margin: "0 auto", padding: "0 48px" };

const stack = [
  { name: "React",       color: "#61DAFB", desc: "UI Library",      d: "M12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM12 2C8.5 2 5.5 3.8 5.5 6s3 4 6.5 4 6.5-1.8 6.5-4-3-4-6.5-4zm0 15c-3.5 0-6.5-1.8-6.5-4s3-4 6.5-4 6.5 1.8 6.5 4-3 4-6.5 4z" },
  { name: "Three.js",    color: "#222",    desc: "3D Rendering",    d: "M3 3l7.5 18L21 3H3zm2.5 2h13L12 18.5 5.5 5z" },
  { name: "MediaPipe",   color: "#00ACC1", desc: "Hand Tracking",   d: "M12 3a2 2 0 100 4 2 2 0 000-4zM5.5 12a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm13 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM8 18a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm8 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" },
  { name: "Tailwind",    color: "#38BDF8", desc: "CSS Framework",   d: "M12 6C9.6 6 8.1 7.2 7.5 9.6c.9-1.2 1.95-1.65 3.15-1.35.71.18 1.21.69 1.77 1.26C13.38 10.5 14.28 11.4 16.5 11.4c2.4 0 3.9-1.2 4.5-3.6-.9 1.2-1.95 1.65-3.15 1.35-.71-.18-1.21-.69-1.77-1.26C15.12 6.9 14.22 6 12 6zM7.5 11.4C5.1 11.4 3.6 12.6 3 15c.9-1.2 1.95-1.65 3.15-1.35.71.18 1.21.69 1.77 1.26C8.88 15.9 9.78 16.8 12 16.8c2.4 0 3.9-1.2 4.5-3.6-.9 1.2-1.95 1.65-3.15 1.35-.71-.18-1.21-.69-1.77-1.26C10.62 12.3 9.72 11.4 7.5 11.4z" },
  { name: "GSAP",        color: "#88CE02", desc: "Animations",      d: "M4 4h16v2H4zM4 9h12v2H4zM4 14h8v2H4zM4 19h4v2H4z" },
  { name: "Framer",      color: "#0088FF", desc: "Motion Design",   d: "M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" },
  { name: "Next.js",     color: "#000",    desc: "React Framework", d: "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 14.5v-9l7 9H11z" },
  { name: "TypeScript",  color: "#3178C6", desc: "Type Safety",     d: "M3 3h18v18H3V3zm10.5 8.5v-2h-7v2h2.5v7h2v-7h2.5zm3 5.5c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-2c-.28 0-.5.22-.5.5v1c0 .28.22.5.5.5h2zm0-3.5c.28 0 .5-.22.5-.5V12c0-.28-.22-.5-.5-.5h-2.5v-1h3v-1.5h-3.5c-.83 0-1.5.67-1.5 1.5v1.5c0 .83.67 1.5 1.5 1.5H16v.5h-3V17h3.5c.83 0 1.5-.67 1.5-1.5V15c0-.83-.67-1.5-1.5-1.5H14v-.5h2.5z" },
];

export default function TechStack() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="stack" style={{ padding: "120px 0", background: "var(--bg)" }}>
      <div style={C} ref={ref}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
          style={{ marginBottom: "64px" }}>
          <span style={{ fontSize: "11px", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 600, display: "block", marginBottom: "16px" }}>Tools & Technologies</span>
          <h2 className="font-syne" style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", fontWeight: 800, color: "var(--text)", lineHeight: 1, letterSpacing: "-0.02em" }}>Tech Stack</h2>
          <div style={{ marginTop: "16px", height: "3px", width: "40px", background: "var(--accent)", borderRadius: "2px" }} />
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
          {stack.map((t, i) => (
            <motion.div key={t.name}
              initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="glass"
              data-cursor-hover
              style={{ borderRadius: "12px", padding: "28px 20px", display: "flex", flexDirection: "column", alignItems: "center", gap: "14px", cursor: "none", transition: "box-shadow 0.3s" }}
              onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.boxShadow = `0 16px 40px ${t.color}22`}
              onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow)"}
            >
              <svg viewBox="0 0 24 24" style={{ width: "34px", height: "34px", fill: t.color }}>
                <path d={t.d} />
              </svg>
              <div style={{ textAlign: "center" }}>
                <div className="font-syne" style={{ fontSize: "13px", fontWeight: 700, color: "var(--text)", letterSpacing: "0.04em", marginBottom: "4px" }}>{t.name}</div>
                <div style={{ fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)" }}>{t.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
