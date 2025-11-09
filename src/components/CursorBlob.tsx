'use client';
import { useEffect, useRef } from 'react';

export default function CursorBlob() {
  const ref = useRef<HTMLDivElement>(null);
  const raf = useRef<number | null>(null);
  const target = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const disabled = useRef(false);

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    disabled.current = isTouch || reduce;
    const el = ref.current; if (!el || disabled.current) return;

    const onMove = (e: MouseEvent) => { target.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener('mousemove', onMove);

    const loop = () => {
      const k = 0.12; // easing
      pos.current.x += (target.current.x - pos.current.x) * k;
      pos.current.y += (target.current.y - pos.current.y) * k;
      el.style.transform = `translate3d(${pos.current.x - 150}px, ${pos.current.y - 150}px, 0)`;
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  if (disabled.current) return null;

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed left-0 top-0 z-[1] h-[300px] w-[300px] rounded-full blur-3xl opacity-30"
      style={{
        background:
          'radial-gradient(40% 40% at 50% 50%, rgba(255,255,255,.5), rgba(255,255,255,0))',
        mixBlendMode: 'overlay',
      }}
    />
  );
}
