"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "3+", label: "Years of Experience" },
  { value: "20+", label: "Projects Delivered" },
  { value: "∞", label: "Animations Crafted" },
];

const stack = [
  "React", "Next.js", "Three.js", "MediaPipe",
  "Framer Motion", "GSAP", "TypeScript", "Tailwind CSS",
];

export default function AboutPage() {
  const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

  return (
    <main style={{ paddingTop: "100px", background: "var(--bg)", minHeight: "100vh" }}>
      <div className="container" style={{ paddingTop: "48px", paddingBottom: "120px" }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} style={{ marginBottom: "80px" }}>
          <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--accent)", display: "block", marginBottom: "12px" }}>About</span>
          <h1 className="font-display" style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", fontWeight: 700, color: "var(--text)", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
            Code meets <em style={{ fontWeight: 400 }}>Art.</em>
          </h1>
        </motion.div>

        {/* 2-col layout */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start", marginBottom: "80px" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <div style={{ height: "2px", width: "40px", background: "var(--accent)", borderRadius: "2px", marginBottom: "32px" }} />
            {["A Front-End Developer and UI enthusiast focused on the intersection of code and art. I specialize in building interfaces that feel alive, using modern animation libraries and local AI integration.",
              "My work lives at the intersection of immersive UI design, real-time 3D rendering, and hand-tracking AI — pushing the boundaries of what a web experience can feel like.",
              "Based in Pakistan, I work with clients globally to create digital products that are both beautiful and technically ambitious."
            ].map((t, i) => (
              <p key={i} style={{ fontSize: "16px", lineHeight: 1.9, color: "var(--text-muted)", marginBottom: "20px" }}>{t}</p>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease }} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }}>
              {stats.map(s => (
                <div key={s.label} style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "12px", padding: "24px 16px", textAlign: "center" }}>
                  <div className="font-display" style={{ fontSize: "2.8rem", fontWeight: 700, color: "var(--text)", lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", marginTop: "8px" }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <blockquote style={{ background: "#fff", border: "1px solid var(--border)", borderLeft: "3px solid var(--accent)", borderRadius: "0 12px 12px 0", padding: "28px 24px" }}>
              <p className="font-display" style={{ fontSize: "1.2rem", fontStyle: "italic", color: "var(--text)", lineHeight: 1.7 }}>
                &ldquo;Every pixel is intentional. Every animation is a breath. The web is a canvas — and I intend to paint on it.&rdquo;
              </p>
              <footer style={{ marginTop: "14px", display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "20px", height: "2px", background: "var(--accent)", borderRadius: "2px" }} />
                <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)" }}>Faraz Arshad</span>
              </footer>
            </blockquote>
          </motion.div>
        </div>

        {/* Tech Stack */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
          <h2 className="font-display" style={{ fontSize: "2rem", fontWeight: 700, color: "var(--text)", marginBottom: "24px" }}>Tools I Use</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {stack.map(t => (
              <span key={t} style={{ padding: "10px 20px", background: "#fff", border: "1px solid var(--border)", borderRadius: "8px", fontSize: "13px", fontWeight: 500, color: "var(--text)" }}>{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
