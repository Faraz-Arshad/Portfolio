"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export const projects = [
  {
    id: "3d-particle-system",
    num: "01",
    title: "3D Particle System",
    tags: ["Three.js", "MediaPipe", "WebGL"],
    year: "2024",
    description: "A 'Force-style' interactive environment using MediaPipe for real-time hand-tracking and Three.js for 3D rendering. Control particle fields with your bare hands.",
    live: "https://your-3d-project.vercel.app",
    github: "https://github.com/farazarshad",
    featured: true,
  },
  {
    id: "hand-tracking-interface",
    num: "02",
    title: "Hand-Tracking Interface",
    tags: ["MediaPipe", "React", "Computer Vision"],
    year: "2024",
    description: "A touchless UI system that interprets hand gestures in real-time to navigate, select, and interact with web elements — no controller required.",
    live: "https://your-handtrack.vercel.app",
    github: "https://github.com/farazarshad",
    featured: false,
  },
  {
    id: "ui-explorations",
    num: "03",
    title: "Front-End UI Explorations",
    tags: ["Framer Motion", "GSAP", "CSS"],
    year: "2024",
    description: "A curated collection of micro-interaction experiments and motion design studies — pushing the creative limits of CSS, SVG, and JavaScript animation.",
    live: "https://your-ui-explorations.vercel.app",
    github: "https://github.com/farazarshad",
    featured: false,
  },
  {
    id: "ai-resume-enhancer",
    num: "04",
    title: "AI Resume Enhancer",
    tags: ["Next.js", "Gemini API", "TypeScript"],
    year: "2024",
    description: "A high-precision, premium-designed web application that enables users to upload resumes for enhancement via the Gemini API.",
    live: "https://ai-resume-enhancer-lake.vercel.app/",
    github: "https://github.com/farazarshad",
    featured: false,
  },
];

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function WorkSection() {
  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <section id="work" style={{ background: "var(--bg)", padding: "100px 0 120px" }}>
      <div className="container">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "64px" }}
        >
          <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--accent)", display: "block", marginBottom: "10px" }}>
            Selected Work
          </span>
          <h2 className="font-display" style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)", fontWeight: 700, color: "var(--text)", letterSpacing: "-0.03em", lineHeight: 1.05 }}>
            Projects
          </h2>
          <div style={{ marginTop: "14px", display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ height: "2px", width: "32px", background: "var(--accent)", borderRadius: "2px" }} />
            <span style={{ fontSize: "14px", color: "var(--text-muted)" }}>{projects.length} projects</span>
          </div>
        </motion.div>

        {/* Featured card — full width */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          style={{ marginBottom: "20px" }}
        >
          <Link href={`/work/${featured.id}`} style={{ textDecoration: "none" }} data-cursor-hover>
            <div
              style={{
                display: "grid", gridTemplateColumns: "55% 45%",
                borderRadius: "20px", overflow: "hidden",
                border: "0.5px solid rgba(0,0,0,0.08)",
                background: "#fff",
                transition: "box-shadow .25s, transform .25s",
                cursor: "none",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 20px 60px rgba(0,0,0,0.10)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = ""; (e.currentTarget as HTMLDivElement).style.transform = ""; }}
            >
              {/* Left */}
              <div style={{ padding: "52px 48px", display: "flex", flexDirection: "column", gap: "18px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--accent)" }}>Featured</span>
                  <span style={{ fontSize: "12px", color: "var(--text-light)" }}>{featured.year}</span>
                </div>
                <h3 className="font-display" style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 700, color: "var(--text)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                  {featured.title}
                </h3>
                <div style={{ display: "flex", gap: "7px", flexWrap: "wrap" }}>
                  {featured.tags.map(t => (
                    <span key={t} style={{ fontSize: "11px", padding: "4px 12px", borderRadius: "100px", background: "var(--accent-soft)", color: "var(--accent)", fontWeight: 600 }}>{t}</span>
                  ))}
                </div>
                <p style={{ fontSize: "14px", lineHeight: 1.8, color: "var(--text-muted)" }}>{featured.description}</p>
                <div style={{ display: "flex", gap: "20px", marginTop: "8px" }}>
                  <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--accent)", letterSpacing: "0.05em", textTransform: "uppercase" }}>View Project →</span>
                  <a href={featured.live} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}
                    style={{ fontSize: "12px", fontWeight: 500, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", textDecoration: "none" }}>
                    Live Demo ↗
                  </a>
                </div>
              </div>
              {/* Right — visual */}
              <div style={{ background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "380px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 30% 70%, rgba(255,255,255,0.1) 0%, transparent 60%)" }} />
                <div className="font-display" style={{ fontSize: "10rem", fontWeight: 900, color: "rgba(255,255,255,0.1)", lineHeight: 1, position: "relative" }}>
                  {featured.num}
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* 3-col grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
          {rest.map((p, i) => (
            <motion.div key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.09, ease }}>
              <Link href={`/work/${p.id}`} style={{ textDecoration: "none" }} data-cursor-hover>
                <div
                  style={{
                    background: "#fff", borderRadius: "16px", padding: "36px 28px",
                    border: "0.5px solid rgba(0,0,0,0.08)", display: "flex",
                    flexDirection: "column", gap: "14px", cursor: "none",
                    transition: "box-shadow .25s, transform .25s",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.09)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = ""; (e.currentTarget as HTMLDivElement).style.transform = ""; }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span className="font-display" style={{ fontSize: "2.2rem", fontWeight: 900, color: "var(--accent)", opacity: 0.12, lineHeight: 1 }}>{p.num}</span>
                    <span style={{ fontSize: "11px", color: "var(--text-light)" }}>{p.year}</span>
                  </div>
                  <h3 className="font-display" style={{ fontSize: "1.35rem", fontWeight: 700, color: "var(--text)", lineHeight: 1.2, letterSpacing: "-0.01em" }}>{p.title}</h3>
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                    {p.tags.slice(0, 2).map(t => (
                      <span key={t} style={{ fontSize: "10px", padding: "3px 10px", borderRadius: "100px", background: "var(--accent-soft)", color: "var(--accent)", fontWeight: 600 }}>{t}</span>
                    ))}
                  </div>
                  <p style={{ fontSize: "13px", lineHeight: 1.75, color: "var(--text-muted)", flex: 1 }}>{p.description}</p>
                  <div style={{ display: "flex", gap: "16px", paddingTop: "10px", borderTop: "0.5px solid rgba(0,0,0,0.07)" }}>
                    <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.07em" }}>Details →</span>
                    <a href={p.live} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}
                      style={{ fontSize: "11px", fontWeight: 500, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.07em", textDecoration: "none" }}>
                      Live ↗
                    </a>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
