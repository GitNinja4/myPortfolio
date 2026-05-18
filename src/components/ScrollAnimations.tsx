import { useEffect, useRef } from "react";

export function useScrollAnimation(options?: { threshold?: number; rootMargin?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("animate-in");
            io.unobserve(el);
          }
        });
      },
      {
        threshold: options?.threshold || 0.1,
        rootMargin: options?.rootMargin || "0px 0px -50px 0px",
      }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [options?.threshold, options?.rootMargin]);

  return ref;
}

export function ScrollAnimatedText({ text, delay = 0 }: { text: string; delay?: number }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const words = el.querySelectorAll(".word");
            words.forEach((word, index) => {
              setTimeout(() => {
                word.classList.add("animate-in");
              }, delay + index * 50);
            });
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className="flex flex-wrap gap-1">
      {text.split(" ").map((word, i) => (
        <span key={i} className="word opacity-0 transition-opacity duration-500">
          {word}
        </span>
      ))}
    </div>
  );
}
