"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const C: React.CSSProperties = { maxWidth: "1320px", margin: "0 auto", padding: "0 48px" };

const stats = [
  { value: "3+", label: "Years of Experience" },
  { value: "20+", label: "Projects Delivered" },
  { value: "∞", label: "Animations Crafted" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" style={{ padding: "120px 0", background: "var(--bg-alt)" }}>
      <div style={C} ref={ref}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>

          {/* Left */}
          <div>
            <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}
              style={{ fontSize: "11px", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 600, display: "block", marginBottom: "16px" }}>
              About Me
            </motion.span>

            <motion.h2 initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
              className="font-syne"
              style={{ fontSize: "clamp(2.5rem, 4.5vw, 4.5rem)", fontWeight: 800, color: "var(--text)", lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: "32px" }}>
              Code meets<br />
              <span style={{ color: "var(--accent)" }}>Art.</span>
            </motion.h2>

            <div style={{ height: "3px", width: "40px", background: "var(--accent)", borderRadius: "2px", marginBottom: "32px" }} />

            {[
              "A Front-End Developer and UI enthusiast focused on the intersection of code and art. I specialize in building interfaces that feel alive, using modern animation libraries and local AI integration.",
              "My work lives at the intersection of immersive UI design, real-time 3D rendering, and hand-tracking AI — pushing the boundaries of what a web experience can feel like."
            ].map((text, i) => (
              <motion.p key={i} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.25 + i * 0.1 }}
                style={{ fontSize: "15px", lineHeight: 1.9, color: "var(--text-muted)", marginBottom: "16px" }}>
                {text}
              </motion.p>
            ))}

            <motion.button initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.5 }}
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              data-cursor-hover
              style={{ marginTop: "24px", padding: "13px 32px", background: "var(--accent)", color: "#fff", border: "none", borderRadius: "4px", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600, cursor: "none", boxShadow: "0 4px 20px rgba(124,58,237,0.3)", transition: "box-shadow 0.2s" }}>
              Let&apos;s Collaborate
            </motion.button>
          </div>

          {/* Right */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
              {stats.map((s, i) => (
                <motion.div key={s.label} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  className="glass"
                  style={{ borderRadius: "12px", padding: "28px 16px", textAlign: "center" }}>
                  <div className="font-syne" style={{ fontSize: "2.8rem", fontWeight: 800, color: "var(--accent)", lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-muted)", marginTop: "8px" }}>{s.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.5 }}
              className="glass"
              style={{ borderRadius: "12px", padding: "32px 28px", borderLeft: "3px solid var(--accent)" }}>
              <p style={{ fontSize: "16px", fontStyle: "italic", color: "var(--text)", lineHeight: 1.7, fontFamily: "var(--font-dm)" }}>
                &ldquo;Every pixel is intentional. Every animation is a breath. The web is a canvas — and I intend to paint on it.&rdquo;
              </p>
              <div style={{ marginTop: "16px", display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "20px", height: "2px", background: "var(--accent)", borderRadius: "2px" }} />
                <span style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 600 }}>Faraz Arshad</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
