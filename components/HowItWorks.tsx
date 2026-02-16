"use client";

import { useEffect, useRef } from "react";
import { UserPlus, MapPin, CheckCircle, ClipboardList, Bike, DollarSign } from "lucide-react";

const riderSteps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Create your account",
    desc:  "Sign up with your phone number in under 60 seconds. No paperwork. No stress.",
  },
  {
    icon: MapPin,
    step: "02",
    title: "Request your ride",
    desc:  "Enter your pickup and dropoff. We match you with a nearby verified driver instantly.",
  },
  {
    icon: CheckCircle,
    step: "03",
    title: "Arrive safely — ₦500",
    desc:  "Your rider arrives, you hop on, and you pay a flat ₦500. Done. Every time.",
  },
];

const driverSteps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Apply online",
    desc:  "Fill in your details on our riders application form. Takes less than 5 minutes.",
  },
  {
    icon: CheckCircle,
    step: "02",
    title: "Get approved",
    desc:  "Our team reviews your application. Approved riders get an official employment letter.",
  },
  {
    icon: DollarSign,
    step: "03",
    title: "Start earning",
    desc:  "Get assigned rides, complete trips, and build your income — on your own schedule.",
  },
];

function StepCard({ icon: Icon, step, title, desc, accent, isLast = false }: {
  icon: React.ElementType; step: string; title: string; desc: string; accent: "lime" | "orange"; isLast?: boolean;
}) {
  const colorClass = accent === "lime" ? "text-hfc-lime border-hfc-lime" : "text-hfc-orange border-hfc-orange";
  const bgClass = accent === "lime" ? "bg-hfc-lime/10" : "bg-hfc-orange/10";

  return (
    <div className="reveal relative flex-1 flex flex-col items-center text-center group">
      {/* Dotted connector line (except last) */}
      {!isLast && (
        <div className={`absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px border-t-2 border-dotted ${
          accent === "lime" ? "border-hfc-lime/30" : "border-hfc-orange/30"
        } hidden lg:block`} />
      )}

      {/* Step bubble */}
      <div className={`relative z-10 w-16 h-16 rounded-full ${bgClass} border-2 ${colorClass} flex items-center justify-center mb-4 transition-transform group-hover:scale-110 group-hover:border-4`}>
        <Icon size={24} className={colorClass} />
        <span className={`absolute -top-2 -right-2 text-xs font-display font-black ${colorClass} bg-hfc-dark px-1 rounded-full`}>
          {step}
        </span>
      </div>

      {/* Content card */}
      <div className={`p-5 rounded-2xl border ${bgClass} border-transparent hover:border-${accent === "lime" ? "lime" : "orange"}/20 transition-all max-w-xs`}>
        <h3 className="font-display font-bold text-white text-lg mb-2">{title}</h3>
        <p className="font-body text-hfc-muted text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  // Scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="relative bg-hfc-dark py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 space-y-24">

        {/* ── Rider flow ─────────────────────────── */}
        <div>
          <div className="reveal mb-14 flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <p className="text-hfc-lime font-body text-sm font-semibold mb-2 tracking-widest uppercase">
                For Users
              </p>
              <h2 className="font-display font-black text-4xl lg:text-5xl text-white">
                Ride in 3 simple steps
              </h2>
            </div>
            <p className="text-hfc-muted max-w-sm font-body">
              From registration to your destination — the whole process is designed to be effortless.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-4 items-start justify-center relative">
            {riderSteps.map((step, i) => (
              <StepCard key={i} {...step} accent="lime" isLast={i === riderSteps.length - 1} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-hfc-border" />

        {/* ── Driver flow ────────────────────────── */}
        <div>
          <div className="reveal mb-14 flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <p className="text-hfc-orange font-body text-sm font-semibold mb-2 tracking-widest uppercase">
                For Riders
              </p>
              <h2 className="font-display font-black text-4xl lg:text-5xl text-white">
                Start earning in 3 steps
              </h2>
            </div>
            <p className="text-hfc-muted max-w-sm font-body">
              Join our growing team of verified Riders and build a steady income in Makurdi.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-4 items-start justify-center relative">
            {driverSteps.map((step, i) => (
              <StepCard key={i} {...step} accent="orange" isLast={i === driverSteps.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}