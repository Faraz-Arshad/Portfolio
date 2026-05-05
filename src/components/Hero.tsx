"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -999, y: -999 });
  const raf = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const GAP = 36, R = 1.0, MAX = 180;
    let dots: { x: number; y: number }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      dots = [];
      for (let y = GAP / 2; y < canvas.height; y += GAP)
        for (let x = GAP / 2; x < canvas.width; x += GAP)
          dots.push({ x, y });
    };
    resize();
    window.addEventListener("resize", resize);

    const sec = canvas.parentElement;
    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    const onLeave = () => { mouse.current = { x: -999, y: -999 }; };
    sec?.addEventListener("mousemove", onMove);
    sec?.addEventListener("mouseleave", onLeave);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const { x: mx, y: my } = mouse.current;
      for (const d of dots) {
        const dist = Math.hypot(d.x - mx, d.y - my);
        if (dist > MAX) continue; // Only draw when hovered
        const t = Math.max(0, 1 - dist / MAX);
        ctx.beginPath();
        ctx.arc(d.x, d.y, R * (1 + t * 1.5), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,113,227,${t * 0.45})`;
        ctx.fill();
      }
      raf.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      sec?.removeEventListener("mousemove", onMove);
      sec?.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: "var(--bg)",
        overflow: "hidden",
      }}
    >
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} />

      {/* Radial glow to make glassmorphism visible at the top */}
      <div style={{
        position: "absolute",
        top: "-150px", left: "50%",
        transform: "translateX(-50%)",
        width: "800px", height: "400px",
        background: "radial-gradient(ellipse at center, rgba(0,113,227,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 0,
      }} />

      {/* Main central glow behind text */}
      <div style={{
        position: "absolute",
        top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "900px", height: "500px",
        background: "radial-gradient(ellipse at center, rgba(0,113,227,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 1, padding: "0 24px" }}>

        {/* NAME — Vogue Style (Bodoni Moda) */}
        <div style={{ overflow: "hidden", marginBottom: "-8px" }}>
          <motion.h1
            initial={{ y: "104%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.0, delay: 0.05, ease }}
            style={{
              fontFamily: "var(--font-hero, serif)",
              fontSize: "clamp(5.5rem, 15vw, 15rem)",
              fontWeight: 600,
              lineHeight: 0.92,
              color: "var(--text)",
              letterSpacing: "-0.01em",
            }}
          >
            Faraz
          </motion.h1>
        </div>
        <div style={{ overflow: "hidden", marginBottom: "40px" }}>
          <motion.h1
            initial={{ y: "104%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.0, delay: 0.18, ease }}
            style={{
              fontFamily: "var(--font-hero, serif)",
              fontSize: "clamp(5.5rem, 15vw, 15rem)",
              fontWeight: 600,
              lineHeight: 0.92,
              color: "var(--text)",
              letterSpacing: "-0.01em",
            }}
          >
            Arshad
          </motion.h1>
        </div>

        {/* Role */}
        <motion.p
          className="font-body"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          style={{
            fontSize: "clamp(14px, 1.6vw, 20px)",
            fontWeight: 500,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            marginBottom: "52px",
          }}
        >
          Full Stack Developer
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          style={{ display: "flex", gap: "12px", justifyContent: "center" }}
        >
          <Link
            href="/contact"
            data-cursor-hover
            className="font-body"
            style={{
              padding: "14px 36px",
              background: "var(--accent)",
              color: "#fff",
              borderRadius: "100px",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.02em",
              boxShadow: "0 4px 20px rgba(0,113,227,0.32)",
              transition: "opacity .18s, box-shadow .18s, transform .18s",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.02)"; e.currentTarget.style.boxShadow = "0 6px 28px rgba(0,113,227,0.42)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,113,227,0.32)"; }}
          >
            Contact Me
          </Link>
          <Link
            href="/#work"
            data-cursor-hover
            className="font-body"
            style={{
              padding: "14px 36px",
              background: "rgba(255,255,255,0.72)",
              color: "var(--text)",
              borderRadius: "100px",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 600,
              border: "0.5px solid rgba(0,0,0,0.10)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              transition: "background .18s, transform .18s",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.02)"; e.currentTarget.style.background = "rgba(255,255,255,0.92)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.background = "rgba(255,255,255,0.72)"; }}
          >
            View My Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
