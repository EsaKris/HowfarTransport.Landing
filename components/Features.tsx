"use client";

import { Shield, Zap, DollarSign, Clock, Star, MapPin } from "lucide-react";

const features = [
  {
    icon:  Shield,
    title: "Verified & trained drivers",
    desc:  "Every HFC driver goes through a rigorous application and approval process. Your safety is non-negotiable.",
    accent: "lime",
    size:  "large",  // spans 2 columns on md+
  },
  {
    icon:  DollarSign,
    title: "Always ₦500. No exceptions.",
    desc:  "Rain, rush hour, public holidays — the price never changes. Budget confidently.",
    accent: "orange",
    size:  "small",
  },
  {
    icon:  Zap,
    title: "2-minute average pickup",
    desc:  "Our drivers are spread across Makurdi so help is always close.",
    accent: "lime",
    size:  "small",
  },
  {
    icon:  Clock,
    title: "Available from 6AM – 10PM",
    desc:  "Early morning commute or late evening errand — we've got your schedule covered across the city.",
    accent: "orange",
    size:  "large",
  },
  {
    icon:  Star,
    title: "4.9 ★ rider satisfaction",
    desc:  "Our riders consistently rate us at the top. We earn your trust every trip.",
    accent: "lime",
    size:  "small",
  },
  {
    icon:  MapPin,
    title: "All of Makurdi covered",
    desc:  "North Bank, Wadata, Wurukum, GRA, Judges Quarters — name it, we'll get you there.",
    accent: "orange",
    size:  "small",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-hfc-black py-24 lg:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-hfc-lime/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-hfc-orange/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="reveal max-w-2xl mb-16">
          <p className="text-hfc-lime font-body text-sm font-semibold mb-3 tracking-widest uppercase">
            Why choose Howfar Transport Company?
          </p>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-white leading-tight">
            Built for Makurdi.{" "}
            <br className="hidden sm:block" />
            <span className="text-gradient-lime">Built for you.</span>
          </h2>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            const isLarge = feature.size === "large";
            const accentColor = feature.accent === "lime" ? "lime" : "orange";

            return (
              <div
                key={i}
                className={`reveal delay-${(i + 1) * 100} group relative rounded-3xl border border-hfc-border bg-hfc-card/60 backdrop-blur-sm p-8 hover:border-${accentColor}-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                  isLarge ? "md:col-span-2 lg:col-span-2" : ""
                } ${
                  accentColor === "lime"
                    ? "hover:shadow-hfc-lime/10"
                    : "hover:shadow-hfc-orange/10"
                } overflow-hidden`}
              >
                {/* Background glow on hover */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                    accentColor === "lime"
                      ? "bg-gradient-to-br from-hfc-lime/5 via-transparent to-transparent"
                      : "bg-gradient-to-br from-hfc-orange/5 via-transparent to-transparent"
                  }`}
                />

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl mb-5 flex items-center justify-center ${
                    accentColor === "lime"
                      ? "bg-hfc-lime/10 text-hfc-lime group-hover:bg-hfc-lime/20"
                      : "bg-hfc-orange/10 text-hfc-orange group-hover:bg-hfc-orange/20"
                  } transition-colors`}
                >
                  <Icon size={24} />
                </div>

                <h3 className="font-display font-bold text-white text-xl mb-3 leading-tight">
                  {feature.title}
                </h3>
                <p className="font-body text-hfc-muted text-sm leading-relaxed">
                  {feature.desc}
                </p>

                {/* Subtle corner accent */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 rounded-bl-3xl bg-gradient-to-br ${
                    accentColor === "lime"
                      ? "from-hfc-lime/10 to-transparent"
                      : "from-hfc-orange/10 to-transparent"
                  } pointer-events-none`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}