"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "../page";

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === params.id);
  if (!project) notFound();

  return (
    <main style={{ paddingTop: "100px", background: "var(--bg)", minHeight: "100vh" }}>
      <div className="container" style={{ paddingTop: "48px", paddingBottom: "120px" }}>

        {/* Back */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} style={{ marginBottom: "48px" }}>
          <Link href="/work" data-cursor-hover style={{ fontSize: "13px", fontWeight: 500, color: "var(--text-muted)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
            ← Back to Work
          </Link>
        </motion.div>

        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", marginBottom: "80px", alignItems: "center" }}>
          <div>
            <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--accent)", display: "block", marginBottom: "16px" }}>{project.year}</span>
            <h1 className="font-display" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 700, color: "var(--text)", lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: "24px" }}>
              {project.title}
            </h1>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "28px" }}>
              {project.tags.map(t => (
                <span key={t} style={{ fontSize: "12px", padding: "5px 14px", borderRadius: "100px", background: "var(--accent-soft)", color: "var(--accent)", fontWeight: 600 }}>{t}</span>
              ))}
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.85, color: "var(--text-muted)", marginBottom: "40px" }}>{project.longDescription}</p>
            <div style={{ display: "flex", gap: "16px" }}>
              <a href={project.live} target="_blank" rel="noopener noreferrer" data-cursor-hover
                style={{ padding: "13px 28px", background: "var(--accent)", color: "#fff", borderRadius: "6px", fontSize: "13px", fontWeight: 600, textDecoration: "none", boxShadow: "0 4px 16px rgba(38,64,139,0.25)" }}>
                Live Demo ↗
              </a>
              <a href={project.github} target="_blank" rel="noopener noreferrer" data-cursor-hover
                style={{ padding: "13px 28px", background: "#fff", color: "var(--text)", borderRadius: "6px", fontSize: "13px", fontWeight: 500, textDecoration: "none", border: "1px solid var(--border-dark)" }}>
                GitHub →
              </a>
            </div>
          </div>

          {/* Visual */}
          <div style={{ background: "var(--accent)", borderRadius: "16px", aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 30% 70%, rgba(255,255,255,0.1) 0%, transparent 60%)" }} />
            <span className="font-display" style={{ fontSize: "10rem", fontWeight: 900, color: "rgba(255,255,255,0.1)", lineHeight: 1 }}>{project.num}</span>
          </div>
        </motion.div>

        {/* Next project */}
        {(() => {
          const idx = projects.findIndex(p => p.id === project.id);
          const next = projects[(idx + 1) % projects.length];
          return (
            <div style={{ borderTop: "1px solid var(--border)", paddingTop: "48px" }}>
              <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--text-light)", display: "block", marginBottom: "12px" }}>Next Project</span>
              <Link href={`/work/${next.id}`} data-cursor-hover style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "12px" }}>
                <span className="font-display" style={{ fontSize: "1.8rem", fontWeight: 700, color: "var(--text)" }}>{next.title}</span>
                <span style={{ fontSize: "1.4rem", color: "var(--accent)" }}>→</span>
              </Link>
            </div>
          );
        })()}
      </div>
    </main>
  );
}
