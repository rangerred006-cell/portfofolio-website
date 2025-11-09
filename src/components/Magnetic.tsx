'use client';
import { useRef } from 'react';

export default function Magnetic({
  children,
  strength = 30,
}: { children: React.ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${(relX / rect.width) * strength}px, ${(relY / rect.height) * strength}px)`;
  };
  const onLeave = () => { if (ref.current) ref.current.style.transform = 'translate(0,0)'; };

  return (
    <div onMouseMove={onMove} onMouseLeave={onLeave} className="inline-block will-change-transform">
      <div ref={ref} className="transition-transform duration-200 ease-out">
        {children}
      </div>
    </div>
  );
}
