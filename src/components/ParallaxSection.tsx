"use client";
import { useEffect, useRef } from "react";

/**
 * Bungkus layer partikel dengan komponen ini.
 * Setiap child yang punya data-parallax-speed (mis: 0.25 atau -0.35)
 * bakal digeser translateY berdasarkan posisi section saat di-scroll.
 */
export default function ParallaxSection({
  children,
  className = "",
  factor = 60, // seberapa kuat geraknya (px)
}: {
  children: React.ReactNode;
  className?: string;
  factor?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (rafId.current) return;
      rafId.current = requestAnimationFrame(() => {
        rafId.current = null;
        const el = ref.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        // progress negatif = di atas tengah viewport, positif = di bawah
        const progress = (rect.top + rect.height / 2 - vh / 2) / vh;

        // select semua child yang dikasi speed
        const targets = el.querySelectorAll<HTMLElement>("[data-parallax-speed]");
        targets.forEach((t) => {
          const s = parseFloat(t.dataset.parallaxSpeed || "0");
          const y = progress * s * factor; // px
          // gabung dengan transform existing (biar animasi hover tetap jalan)
          t.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
        });
      });
    };

    onScroll(); // initial
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [factor]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
