"use client";

import { useEffect, useRef } from "react";

const items = [
  "🛵  Fixed ₦500 fare",
  "⚡  2-minute pickup",
  "🔒  Verified drivers",
  "📍  All of Makurdi covered",
  "⭐  4.9 average rating",
  "🚀  500+ rides completed",
  "🇳🇬  Proudly Nigerian",
  "💰  No surge pricing",
];

export default function MarqueeBanner() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Inject keyframes once on mount
  useEffect(() => {
    // Check if keyframes already exist
    if (document.getElementById('marquee-keyframes')) return;

    const style = document.createElement('style');
    style.id = 'marquee-keyframes';
    style.innerHTML = `
      @keyframes marquee-left {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }
      @keyframes marquee-right {
        from { transform: translateX(-50%); }
        to { transform: translateX(0); }
      }
      .animate-marquee-left {
        animation: marquee-left 40s linear infinite;
      }
      .animate-marquee-right {
        animation: marquee-right 40s linear infinite;
      }
    `;
    document.head.appendChild(style);

    return () => {
      // Clean up on unmount (optional)
      const existingStyle = document.getElementById('marquee-keyframes');
      if (existingStyle) existingStyle.remove();
    };
  }, []);

  // Pause animation on hover
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const rows = container.querySelectorAll('.marquee-row');
    const handleMouseEnter = () => {
      rows.forEach(row => (row as HTMLElement).style.animationPlayState = 'paused');
    };
    const handleMouseLeave = () => {
      rows.forEach(row => (row as HTMLElement).style.animationPlayState = 'running');
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative bg-hfc-black border-y border-hfc-border py-8 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #C8F53F 1px, transparent 0)`,
        backgroundSize: '24px 24px'
      }} />

      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-hfc-black to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-hfc-black to-transparent z-10" />

      {/* First row - scrolls left */}
      <div className="marquee-row mb-4 flex animate-marquee-left whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={`row1-${i}`}
            className="mx-3 px-5 py-2 bg-hfc-lime/10 border border-hfc-lime/30 rounded-full font-display font-medium text-sm text-hfc-lime shadow-lg shadow-hfc-lime/5 whitespace-nowrap"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Second row - scrolls right */}
      <div className="marquee-row flex animate-marquee-right whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={`row2-${i}`}
            className="mx-3 px-5 py-2 bg-hfc-orange/10 border border-hfc-orange/30 rounded-full font-display font-medium text-sm text-hfc-orange shadow-lg shadow-hfc-orange/5 whitespace-nowrap"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}