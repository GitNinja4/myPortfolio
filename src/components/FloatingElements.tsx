import React, { useEffect, useRef } from "react";

export function FloatingElements() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create floating orbs
    const createOrb = (delay: number, left: string, top: string, size: number, color: string) => {
      const orb = document.createElement("div");
      orb.className = "float-orb pulse-glow";
      orb.style.cssText = `
        position: fixed;
        left: ${left};
        top: ${top};
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: 50%;
        filter: blur(40px);
        opacity: 0.15;
        pointer-events: none;
        z-index: 1;
        animation-delay: ${delay}s;
      `;
      containerRef.current?.appendChild(orb);
      return orb;
    };

    // Add multiple floating orbs at different positions
    createOrb(0, "10%", "20%", 150, "oklch(0.78 0.16 220)");
    createOrb(2, "80%", "40%", 200, "oklch(0.65 0.20 295)");
    createOrb(4, "50%", "60%", 180, "oklch(0.78 0.16 220)");
    createOrb(1, "15%", "70%", 160, "oklch(0.65 0.20 295)");
    createOrb(3, "85%", "10%", 140, "oklch(0.82 0.16 200)");

    // Create animated particles
    const createParticle = () => {
      const particle = document.createElement("div");
      particle.className = `particle particle-${Math.floor(Math.random() * 3) + 1}`;
      const size = Math.random() * 3 + 1;
      const left = Math.random() * 100;
      particle.style.cssText = `
        left: ${left}%;
        width: ${size}px;
        height: ${size}px;
        background: oklch(0.78 0.16 220 / 0.6);
        border-radius: 50%;
        animation-duration: ${Math.random() * 5 + 15}s;
        animation-delay: ${Math.random() * 5}s;
      `;
      containerRef.current?.appendChild(particle);

      // Remove particle after animation
      setTimeout(() => particle.remove(), 25000);
    };

    // Create particles periodically
    const particleInterval = setInterval(createParticle, 500);

    return () => clearInterval(particleInterval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
