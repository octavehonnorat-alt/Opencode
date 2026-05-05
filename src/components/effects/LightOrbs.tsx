"use client";

import { useRef, useEffect } from "react";
import { useReducedMotion } from "@/lib/hooks";

export function LightOrbs() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d")!;
    let raf: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouse, { passive: true });

    const orbs = [
      { x: 0.2, y: 0.3, radius: 300, color: "0.65, 0.15, 250", speed: 0.0003 },
      { x: 0.7, y: 0.6, radius: 250, color: "0.55, 0.12, 280", speed: 0.0005 },
      { x: 0.5, y: 0.8, radius: 200, color: "0.60, 0.10, 200", speed: 0.0004 },
    ];

    let time = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const mxNorm = mx / (canvas.width || 1);
      const myNorm = my / (canvas.height || 1);

      orbs.forEach((orb, i) => {
        const ox = orb.x * canvas.width + Math.sin(time * orb.speed * 1000 + i) * 100;
        const oy = orb.y * canvas.height + Math.cos(time * orb.speed * 800 + i * 2) * 80;
        const dx = (mxNorm - orb.x) * 60;
        const dy = (myNorm - orb.y) * 60;

        const gradient = ctx.createRadialGradient(
          ox + dx, oy + dy, 0,
          ox + dx, oy + dy, orb.radius
        );
        gradient.addColorStop(0, `oklch(${orb.color} / 0.08)`);
        gradient.addColorStop(0.5, `oklch(${orb.color} / 0.03)`);
        gradient.addColorStop(1, "transparent");

        ctx.beginPath();
        ctx.arc(ox + dx, oy + dy, orb.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      time++;
      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.8 }}
    />
  );
}
