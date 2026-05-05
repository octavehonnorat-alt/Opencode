"use client";

import { useRef, useEffect } from "react";
import { useReducedMotion } from "@/lib/hooks";

export function GrainOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d")!;
    let raf: number;

    const generate = () => {
      const w = 256;
      const h = 256;
      canvas.width = w;
      canvas.height = h;

      const imageData = ctx.createImageData(w, h);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const v = Math.random() * 255;
        data[i] = v;
        data[i + 1] = v;
        data[i + 2] = v;
        data[i + 3] = 12;
      }

      ctx.putImageData(imageData, 0, 0);
    };

    generate();

    let frame = 0;
    const animate = () => {
      frame++;
      if (frame % 8 === 0) {
        ctx.clearRect(0, 0, 256, 256);
        const imageData = ctx.createImageData(256, 256);
        const data = imageData.data;
        for (let i = 0; i < data.length; i += 4) {
          const v = Math.random() * 255;
          data[i] = v;
          data[i + 1] = v;
          data[i + 2] = v;
          data[i + 3] = 10;
        }
        ctx.putImageData(imageData, 0, 0);
      }
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(raf);
  }, [reduced]);

  if (reduced) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1] opacity-40"
      style={{
        width: "100vw",
        height: "100vh",
        imageRendering: "pixelated",
      }}
    />
  );
}
