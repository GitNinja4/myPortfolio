import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const outlinePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });

      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${clientX}px`;
        cursorDotRef.current.style.top = `${clientY}px`;
      }

      // Smooth follow effect for outline
      if (cursorOutlineRef.current) {
        outlinePosition.current.x += (clientX - outlinePosition.current.x) * 0.2;
        outlinePosition.current.y += (clientY - outlinePosition.current.y) * 0.2;

        cursorOutlineRef.current.style.left = `${outlinePosition.current.x}px`;
        cursorOutlineRef.current.style.top = `${outlinePosition.current.y}px`;
      }
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("clickable")
      ) {
        setIsHovering(true);
        if (cursorOutlineRef.current) {
          cursorOutlineRef.current.classList.add("scale-150");
        }
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("clickable")
      ) {
        setIsHovering(false);
        if (cursorOutlineRef.current) {
          cursorOutlineRef.current.classList.remove("scale-150");
        }
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mouseout", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Hide default cursor */}
      <style>{`* { cursor: none !important; }`}</style>

      {/* Cursor dot */}
      <div
        ref={cursorDotRef}
        className="fixed w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-[9999] mix-blend-screen"
        style={{
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 10px rgba(34, 211, 238, 0.8)",
        }}
      />

      {/* Cursor outline */}
      <div
        ref={cursorOutlineRef}
        className="fixed w-8 h-8 border-2 border-cyan-400 rounded-full pointer-events-none z-[9999] transition-transform duration-200"
        style={{
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 20px rgba(34, 211, 238, 0.4), inset 0 0 20px rgba(34, 211, 238, 0.2)",
        }}
      />
    </>
  );
}
