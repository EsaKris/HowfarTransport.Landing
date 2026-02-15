import { Bike, Tag, Users, Star } from "lucide-react";

const stats = [
  { value: "500+",  label: "Rides completed",    icon: Bike,  accent: "lime"   },
  { value: "₦500",  label: "Fixed fare always",  icon: Tag,   accent: "white"  },
  { value: "50+",   label: "Active drivers",     icon: Users, accent: "orange" },
  { value: "4.9★",  label: "Average rating",     icon: Star,  accent: "lime"   },
];

export default function Stats() {
  return (
    <section className="relative bg-hfc-dark border-y border-hfc-border py-20 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-hfc-lime/5 via-transparent to-hfc-orange/5 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            const isLime = stat.accent === "lime";
            const isOrange = stat.accent === "orange";

            return (
              <div
                key={i}
                className="reveal group relative bg-hfc-card/40 backdrop-blur-sm border border-hfc-border rounded-3xl p-8 hover:border-hfc-lime/30 hover:shadow-xl hover:shadow-hfc-lime/5 transition-all duration-300"
              >
                {/* Icon with accent background */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${
                    isLime
                      ? "bg-hfc-lime/10 text-hfc-lime group-hover:bg-hfc-lime/20"
                      : isOrange
                      ? "bg-hfc-orange/10 text-hfc-orange group-hover:bg-hfc-orange/20"
                      : "bg-white/10 text-white group-hover:bg-white/20"
                  } transition-colors`}
                >
                  <Icon size={28} />
                </div>

                {/* Value with gradient */}
                <div
                  className={`font-display font-black text-5xl lg:text-6xl leading-none mb-2 ${
                    isLime
                      ? "text-gradient-lime"
                      : isOrange
                      ? "text-gradient-warm"
                      : "text-white"
                  }`}
                >
                  {stat.value}
                </div>

                {/* Label */}
                <div className="font-body text-hfc-muted text-base">{stat.label}</div>

                {/* Decorative corner accent */}
                <div
                  className={`absolute top-0 right-0 w-16 h-16 rounded-bl-3xl rounded-tr-3xl bg-gradient-to-br ${
                    isLime
                      ? "from-hfc-lime/20 to-transparent"
                      : isOrange
                      ? "from-hfc-orange/20 to-transparent"
                      : "from-white/10 to-transparent"
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