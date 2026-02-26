"use client";

import {
  Bike,
  CheckCircle,
  Shield,
  TrendingUp,
  Users,
  ArrowRight,
  Star,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function BikeOwner() {
  const router = useRouter();

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-hfc-lime/5 via-transparent to-hfc-orange/5" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-5 md:space-y-6">

            <div className="inline-flex items-center gap-2 bg-hfc-lime/10 border border-hfc-lime/20 rounded-full px-3 md:px-4 py-1.5 md:py-2">
              <Bike size={14} className="text-hfc-lime" />
              <span className="text-hfc-lime text-[10px] md:text-xs font-display font-bold">
                OWN A BIKE?
              </span>
            </div>

            <h2 className="font-display font-black text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
              Earn Money From
              <span className="text-gradient-lime block">Your Bike.</span>
            </h2>

            <p className="text-hfc-muted text-base md:text-lg font-body leading-relaxed max-w-xl">
              Register your motorcycle and let our professional drivers use it
              to earn rides. You get paid based on usage — it's that simple.
              Turn your idle bike into a revenue stream.
            </p>

            {/* Features */}
            <div className="space-y-3 pt-2 md:pt-4">
              {[
                "Earn passive income from your bike",
                "Comprehensive insurance coverage included",
                "Track earnings in real-time",
                "Vetted and trained drivers only",
              ].map((text) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-hfc-lime/10 border border-hfc-lime/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={14} className="text-hfc-lime" />
                  </div>
                  <p className="text-white text-sm md:text-base font-body">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 md:pt-6">
              <button
                onClick={() => router.push("/register-bike")}
                className="inline-flex items-center justify-center gap-2 bg-hfc-lime text-hfc-black font-display font-bold px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-white transition group w-full sm:w-auto"
              >
                Register Your Bike
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button
                className="inline-flex items-center justify-center gap-2 border border-hfc-border text-white font-display font-bold px-6 md:px-8 py-3 md:py-4 rounded-xl hover:border-hfc-lime/50 hover:bg-hfc-card transition w-full sm:w-auto"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="relative">

            <div className="bg-hfc-dark border border-hfc-border rounded-3xl p-5 md:p-8 space-y-5 md:space-y-6">

              {/* Earnings */}
              <div className="bg-hfc-card border border-hfc-border rounded-2xl p-5 md:p-6">
                <p className="text-hfc-muted text-xs md:text-sm font-body mb-2">
                  Monthly Earnings (Avg)
                </p>
                <p className="font-display font-black text-hfc-green text-3xl md:text-4xl">
                  ₦75,000
                </p>
                <p className="text-hfc-muted text-[10px] md:text-xs mt-1">
                  Based on 150 rides/month
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {[
                  { label: "Active Bikes", value: "50+", icon: Bike },
                  { label: "Happy Owners", value: "30+", icon: Users },
                  { label: "Total Earnings", value: "₦2M+", icon: TrendingUp },
                  { label: "Avg Rating", value: "4.8★", icon: Star },
                ].map(({ label, value, icon: Icon }) => (
                  <div
                    key={label}
                    className="bg-hfc-black border border-hfc-border rounded-xl p-3 md:p-4"
                  >
                    <Icon size={18} className="text-hfc-lime mb-2" />
                    <p className="font-display font-black text-white text-xl md:text-2xl">
                      {value}
                    </p>
                    <p className="text-hfc-muted text-[10px] md:text-xs mt-1">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Trust Footer */}
              <div className="flex items-center gap-3 pt-4 border-t border-hfc-border">
                <Shield size={14} className="text-hfc-lime flex-shrink-0" />
                <p className="text-hfc-muted text-[10px] md:text-xs font-body">
                  Fully insured • Secure payments • 24/7 support
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 md:-top-6 right-2 md:-right-6 bg-hfc-lime text-hfc-black rounded-2xl px-4 md:px-6 py-2 md:py-3 shadow-xl">
              <p className="font-display font-black text-[10px] md:text-sm">
                Registration is FREE
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}