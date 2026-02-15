import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

const perks = [
  "Flexible hours — work when you want",
  "₦500 per trip, clear and consistent",
  "Bike provided after approval",
  "Official employment letter on acceptance",
  "Friendly, supportive team",
  "Grow with a fast-moving local startup",
];

export default function DriverCTA() {
  return (
    <section id="drive" className="relative bg-hfc-black py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-orange-glow pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-[600px] bg-gradient-to-l from-hfc-orange/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-[32px] border border-hfc-border bg-hfc-card overflow-hidden">
          {/* Inner grid bg */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "linear-gradient(rgba(255,107,44,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,44,0.08) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-10 lg:p-16 items-center">

            {/* Left */}
            <div className="space-y-8">
              <div>
                <p className="text-hfc-orange font-body text-sm font-semibold mb-3 tracking-widest uppercase">
                  Drive with Howfar Transport Company
                </p>
                <h2 className="font-display font-black text-2xl lg:text-3xl text-white leading-tight">
                  Turn your bike
                  <br />
                  into{" "}
                  <span className="text-gradient-warm">steady income.</span>
                </h2>
              </div>

              <p className="font-body text-hfc-muted text-lg leading-relaxed">
                Makurdi has thousands of daily trips waiting to be made.
                Join Howfar Transport Company as a Rider and start earning on a schedule that works for you.
              </p>

              <ul className="space-y-3">
                {perks.map((perk, i) => (
                  <li key={i} className="flex items-center gap-3 font-body text-sm text-hfc-light">
                    <CheckCircle size={16} className="text-hfc-orange flex-shrink-0" />
                    {perk}
                  </li>
                ))}
              </ul>

              <Link
                href="/apply"
                className="btn-primary inline-flex items-center gap-2 bg-hfc-orange text-white font-display font-bold text-base px-8 py-4 rounded-2xl hover:bg-[#FF8A50] transition-colors group"
              >
                Apply to Become a Rider
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right — decorative earnings card */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="w-72 space-y-4">
                {/* Earnings card */}
                <div className="card-glass rounded-3xl p-6 border border-hfc-border">
                  <p className="text-hfc-muted text-xs font-body mb-1">Today's earnings</p>
                  <p className="font-display font-black text-5xl text-white">₦6,500</p>
                  <p className="text-hfc-orange text-xs mt-1 font-body">13 trips completed ↑</p>

                  <div className="mt-5 space-y-2">
                    {[
                      { time: "08:15", amount: "₦500", from: "Wurukum", to: "GRA"         },
                      { time: "09:03", amount: "₦500", from: "North Bank", to: "Wadata"   },
                      { time: "10:44", amount: "₦500", from: "High Level", to: "Ankpa Rd" },
                    ].map((trip, i) => (
                      <div key={i} className="flex items-center justify-between text-xs border-t border-hfc-border pt-2">
                        <div>
                          <p className="text-white font-medium">{trip.from} → {trip.to}</p>
                          <p className="text-hfc-muted">{trip.time}</p>
                        </div>
                        <span className="text-hfc-orange font-display font-bold">{trip.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Badge */}
                <div className="card-glass rounded-2xl px-5 py-4 flex items-center gap-4 border border-hfc-border">
                  <div className="w-10 h-10 rounded-full bg-hfc-orange/10 flex items-center justify-center text-hfc-orange font-display font-black text-sm">
                    W
                  </div>
                  <div>
                    <p className="text-white font-display font-bold text-sm">Wisdom A.</p>
                    <p className="text-hfc-muted text-xs">⭐ 4.9 — Howfar Transport Company Rider since Jan 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
