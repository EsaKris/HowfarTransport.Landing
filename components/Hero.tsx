"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Star, Shield, Zap } from "lucide-react";

const floatingCards = [
  { icon: MapPin,  label: "Pickup located",  value: "Wurukum Market",    color: "lime",   delay: "0s"    },
  { icon: Star,    label: "Driver rating",    value: "4.9 ★ Emmanuel",   color: "orange", delay: "1.5s"  },
  { icon: Shield,  label: "Verified driver",  value: "Ride secured ✓",   color: "lime",   delay: "0.8s"  },
  { icon: Zap,     label: "ETA",             value: "Arriving in 2 min", color: "orange", delay: "2.2s"  },
];

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  // Scroll reveal for hero children
  useEffect(() => {
    const els = document.querySelectorAll(".hero-reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-hfc-black pt-16">

      {/* Background layers (unchanged) */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-100" />
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute inset-0 bg-orange-glow" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-hfc-lime/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-hfc-orange/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* ── Left: Text ───────────────────────────── */}
        <div className="space-y-6 lg:space-y-8">          {/* 👈 reduced spacing */}

          {/* Eyebrow */}
          <div className="reveal hero-reveal inline-flex items-center gap-2 border border-hfc-lime/30 bg-hfc-lime/5 rounded-full px-4 py-1.5">
            <span className="w-2 h-2 rounded-full bg-hfc-lime animate-pulse" />
            <span className="text-hfc-lime text-sm font-medium font-body">
              Now live in Makurdi, Benue State
            </span>
          </div>

          {/* Main headline — smaller */}
          <h1
            ref={headlineRef}
            className="reveal hero-reveal delay-100 font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.0] tracking-tight text-white"
          >
            Your ride,{" "}
            <br className="hidden sm:block" />
            <span className="text-gradient-lime">anywhere</span>
            <br />
            in Makurdi.
          </h1>

          {/* Sub — smaller */}
          <p className="reveal hero-reveal delay-200 font-body text-hfc-muted text-base sm:text-lg leading-relaxed max-w-md">
            Fast, safe, and reliable bike rides across the city — always at a
            fixed fare.{" "}
            <span className="text-white font-semibold">No surge pricing. Ever.</span>
          </p>

          {/* Price badge — smaller */}
          <div className="reveal hero-reveal delay-300 inline-flex items-baseline gap-2">
            <span className="font-display font-black text-5xl text-gradient-lime">₦500</span>
            <span className="text-hfc-muted font-body">flat / trip</span>
          </div>

          {/* CTAs (unchanged) */}
          <div className="reveal hero-reveal delay-400 flex flex-col sm:flex-row gap-4">
            <Link
              href="https://riders.howfar.ng/register"
              className="btn-primary group bg-hfc-lime text-hfc-black font-display font-bold text-base px-7 py-4 rounded-2xl hover:bg-white transition-colors flex items-center justify-center gap-2 glow-lime-sm"
            >
              Request a Ride
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/apply/"
              className="btn-primary group border border-hfc-border text-white font-display font-semibold text-base px-7 py-4 rounded-2xl hover:border-hfc-lime/50 hover:bg-hfc-card transition-all flex items-center justify-center gap-2"
            >
              Drive With Us
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform opacity-50 group-hover:opacity-100" />
            </Link>
          </div>

          {/* Social proof (unchanged) */}
          <div className="reveal hero-reveal delay-500 flex items-center gap-4 pt-2">
            <div className="flex -space-x-2">
              {["E","A","C","T","R"].map((letter, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-hfc-black bg-gradient-to-br from-hfc-lime/80 to-hfc-orange/80 flex items-center justify-center text-hfc-black text-xs font-bold"
                >
                  {letter}
                </div>
              ))}
            </div>
            <div>
              <p className="text-white text-sm font-semibold">500+ happy riders</p>
              <p className="text-hfc-muted text-xs">⭐⭐⭐⭐⭐ 4.9 average rating</p>
            </div>
          </div>
        </div>

        {/* ── Right: Floating UI mockup (unchanged) ── */}
        <div className="relative hidden lg:flex justify-center items-center h-[520px]">
          <div className="relative w-64 h-[480px] bg-hfc-card border border-hfc-border rounded-[40px] shadow-2xl shadow-black/60 overflow-hidden">
            {/* Map mock background */}
            <div className="absolute inset-0 bg-gradient-to-b from-hfc-dark to-hfc-black opacity-90" />
            <div className="absolute inset-0" style={{
              backgroundImage: "radial-gradient(circle at 50% 60%, rgba(200,245,63,0.08) 0%, transparent 60%)",
            }} />

            {/* Map grid lines */}
            <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 256 480">
              {Array.from({ length: 12 }).map((_, i) => (
                <line key={`h${i}`} x1="0" y1={i * 40} x2="256" y2={i * 40} stroke="#C8F53F" strokeWidth="0.5" />
              ))}
              {Array.from({ length: 8 }).map((_, i) => (
                <line key={`v${i}`} x1={i * 36} y1="0" x2={i * 36} y2="480" stroke="#C8F53F" strokeWidth="0.5" />
              ))}
            </svg>

            {/* Ride request card inside phone */}
            <div className="absolute bottom-6 left-3 right-3 bg-hfc-dark border border-hfc-border rounded-2xl p-4 space-y-3">
              <p className="text-hfc-muted text-xs font-body">Your ride is confirmed</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-display font-bold text-sm">Wisdom is on his way</p>
                  <p className="text-hfc-lime text-xs mt-0.5">ETA: 3 minutes</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-hfc-lime/10 border border-hfc-lime/30 flex items-center justify-center text-hfc-lime font-bold text-sm font-display">
                  W
                </div>
              </div>
              <div className="w-full bg-hfc-border rounded-full h-1.5">
                <div className="bg-hfc-lime h-1.5 rounded-full w-2/3 transition-all" />
              </div>
              <div className="flex justify-between text-xs text-hfc-muted">
                <span>Fare</span>
                <span className="text-white font-bold">₦500</span>
              </div>
            </div>

            {/* Pulse dot on "map" */}
            <div className="absolute top-[38%] left-[48%] -translate-x-1/2 -translate-y-1/2">
              <span className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-hfc-lime opacity-50" />
                <span className="relative inline-flex rounded-full h-4 w-4 bg-hfc-lime" />
              </span>
            </div>
          </div>

          {/* Floating info cards (positions unchanged) */}
          {floatingCards.map((card, i) => {
            const positions = [
              "top-6 -left-20",
              "top-20 -right-24",
              "bottom-36 -left-20",
              "bottom-8 -right-20",
            ];
            const Icon = card.icon;
            return (
              <div
                key={i}
                className={`absolute ${positions[i]} card-glass rounded-2xl px-4 py-3 space-y-0.5 w-44`}
                style={{ animation: `floatBadge 5s ease-in-out ${card.delay} infinite` }}
              >
                <div className={`flex items-center gap-1.5 text-xs text-hfc-muted`}>
                  <Icon size={12} className={card.color === "lime" ? "text-hfc-lime" : "text-hfc-orange"} />
                  {card.label}
                </div>
                <p className={`font-display font-bold text-sm ${card.color === "lime" ? "text-hfc-lime" : "text-hfc-orange"}`}>
                  {card.value}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scroll indicator (unchanged) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-hfc-muted">
        <span className="text-xs font-body">Scroll to explore</span>
        <div className="w-px h-8 bg-gradient-to-b from-hfc-muted to-transparent" />
      </div>
    </section>
  );
}