"use client";

import { useEffect } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name:   "Amaka O.",
    role:   "Student, BSU",
    quote:  "I use Howfar Transports every morning to get to campus. ₦500 is fair, the rider always shows up fast, and I feel safe. Best transport option in Makurdi by far.",
    rating: 5,
    accent: "lime",
    image:  "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=150&h=150&fit=crop&auto=format&q=80",
  },
  {
    name:   "Terver M.",
    role:   "Civil Servant, Makurdi",
    quote:  "No more negotiating with regular bike guys. I just tap, my rider comes, I pay ₦500. It's that simple. Howfar Transports has changed my daily commute completely.",
    rating: 5,
    accent: "orange",
    image:  "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&auto=format&q=80",
  },
  {
    name:   "Grace I.",
    role:   "Trader, Wurukum Market",
    quote:  "As a market woman, I appreciate knowing exactly what I'll pay. ₦500 is consistent. The riders are always polite and on time. I recommend Howfar Transports to everyone.",
    rating: 5,
    accent: "lime",
    image:  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&auto=format&q=80",
  },
  {
    name:   "Emmanuel D.",
    role:   "Howfar Transport Company Rider",
    quote:  "I've been driving with Howfar Transports for 6 months. Good pay, flexible hours, and the team treats us well. I make up to ₦8,000 on busy days. Best decision I made.",
    rating: 5,
    accent: "orange",
    image:  "https://images.unsplash.com/photo-1507152791913-9a27e2b3a082?w=150&h=150&fit=crop&auto=format&q=80",
  },
];

export default function Testimonials() {
  // Scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-hfc-dark py-24 lg:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-hfc-lime/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[300px] h-[300px] bg-hfc-orange/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="reveal max-w-2xl mb-16">
          <p className="text-hfc-lime font-body text-sm font-semibold mb-3 tracking-widest uppercase">
            Real stories
          </p>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-white leading-tight">
            Makurdi loves Howfar Transport Company.
          </h2>
        </div>

        {/* Testimonial grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`reveal delay-${(i + 1) * 100} group relative rounded-2xl border border-hfc-border bg-gradient-to-br from-hfc-card to-hfc-dark p-6 hover:border-${
                t.accent === "lime" ? "hfc-lime" : "hfc-orange"
              }/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                t.accent === "lime" ? "hover:shadow-hfc-lime/10" : "hover:shadow-hfc-orange/10"
              } flex flex-col justify-between gap-4`}
            >
              {/* Image + quote mark */}
              <div className="flex items-start justify-between">
                <div className="relative">
                  <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-hfc-lime/50 to-hfc-orange/50 opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
                  <img
                    src={t.image}
                    alt={t.name}
                    className="relative w-14 h-14 rounded-full object-cover border-2 border-hfc-border"
                  />
                </div>
                <span className="text-6xl leading-none font-display font-black text-hfc-border/20 select-none">
                  &quot;
                </span>
              </div>

              {/* Quote */}
              <p className="font-body text-hfc-muted text-sm leading-relaxed flex-1 -mt-2">
                {t.quote}
              </p>

              {/* Rating stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star
                    key={s}
                    size={16}
                    className={t.accent === "lime" ? "fill-hfc-lime text-hfc-lime" : "fill-hfc-orange text-hfc-orange"}
                  />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-hfc-border/30 pt-4">
                <div>
                  <p className="font-display font-bold text-white text-sm">{t.name}</p>
                  <p className="font-body text-hfc-muted text-xs">{t.role}</p>
                </div>
              </div>

              {/* Accent corner */}
              <div
                className={`absolute top-0 right-0 w-16 h-16 rounded-bl-2xl bg-gradient-to-br ${
                  t.accent === "lime"
                    ? "from-hfc-lime/10 to-transparent"
                    : "from-hfc-orange/10 to-transparent"
                } pointer-events-none`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}