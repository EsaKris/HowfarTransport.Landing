"use client";
import { useRouter } from "next/navigation";
import { ArrowLeft, Bike, Users, TrendingUp, Shield, Heart, Target } from "lucide-react";

export default function AboutPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-hfc-black">
      {/* Header */}
      <header className="border-b border-hfc-border bg-hfc-black/90 backdrop-blur sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center gap-4">
          <button
            onClick={() => router.push("/")}
            className="text-hfc-muted hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-hfc-lime rounded-xl flex items-center justify-center">
              <Bike size={20} className="text-hfc-black" />
            </div>
            <div>
              <p className="font-display font-bold text-white">HowFar Transport</p>
              <p className="text-hfc-lime text-xs">About Us</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="font-display font-black text-white text-5xl md:text-6xl">
            About <span className="text-hfc-lime">Howfar Transport</span>
          </h1>
          <p className="text-hfc-muted text-lg font-body max-w-2xl mx-auto leading-relaxed">
            Revolutionizing urban mobility in Makurdi and beyond through safe, affordable, and sustainable bike-hailing services.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-hfc-card border border-hfc-border rounded-2xl p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-hfc-lime/10 border border-hfc-lime/20 flex items-center justify-center">
              <Target size={24} className="text-hfc-lime" />
            </div>
            <h2 className="font-display font-bold text-white text-2xl">Our Mission</h2>
            <p className="text-hfc-muted font-body leading-relaxed">
              To provide accessible, safe, and affordable transportation solutions that connect people, create opportunities, and reduce traffic congestion in urban Nigeria.
            </p>
          </div>

          <div className="bg-hfc-card border border-hfc-border rounded-2xl p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-hfc-orange/10 border border-hfc-orange/20 flex items-center justify-center">
              <TrendingUp size={24} className="text-hfc-orange" />
            </div>
            <h2 className="font-display font-bold text-white text-2xl">Our Vision</h2>
            <p className="text-hfc-muted font-body leading-relaxed">
              To become Nigeria's leading mobility platform, transforming how people move within cities while empowering drivers and bike owners to build sustainable livelihoods.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="space-y-6">
          <h2 className="font-display font-bold text-white text-3xl">Our Story</h2>
          <div className="bg-hfc-card border border-hfc-border rounded-2xl p-8 space-y-4 text-hfc-muted font-body leading-relaxed">
            <p>
              HowFar Transport was born from a simple observation: Makurdi needed a better way to move. Founded in 2024, we started with a vision to make bike transportation safe, reliable, and accessible to everyone.
            </p>
            <p>
              What makes us different is our three-sided platform approach. We don't just connect riders with drivers — we also empower bike owners to earn passive income by letting professional drivers use their motorcycles. This creates a win-win-win scenario for everyone involved.
            </p>
            <p>
              Today, we're proud to serve thousands of riders, support hundreds of drivers, and help bike owners turn their idle assets into revenue streams. But we're just getting started.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="space-y-8">
          <h2 className="font-display font-bold text-white text-3xl text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Safety First",
                description: "Every driver is vetted, trained, and insured. Your safety is our top priority.",
              },
              {
                icon: Heart,
                title: "Community-Driven",
                description: "We're building more than a service — we're building a community of riders, drivers, and partners.",
              },
              {
                icon: Users,
                title: "Empowerment",
                description: "We create opportunities for drivers to earn and bike owners to prosper.",
              },
            ].map((value) => (
              <div key={value.title} className="bg-hfc-card border border-hfc-border rounded-xl p-6 space-y-3 text-center">
                <div className="w-12 h-12 rounded-xl bg-hfc-lime/10 border border-hfc-lime/20 flex items-center justify-center mx-auto">
                  <value.icon size={24} className="text-hfc-lime" />
                </div>
                <h3 className="font-display font-bold text-white text-lg">{value.title}</h3>
                <p className="text-hfc-muted text-sm font-body leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-br from-hfc-lime/5 to-hfc-orange/5 border border-hfc-border rounded-2xl p-8">
          <h2 className="font-display font-bold text-white text-2xl text-center mb-8">
            HFC by the Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "10K+", label: "Rides Completed" },
              { value: "500+", label: "Active Drivers" },
              { value: "50+", label: "Bike Owners" },
              { value: "4.8★", label: "Average Rating" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display font-black text-hfc-lime text-4xl">{stat.value}</p>
                <p className="text-hfc-muted text-sm font-body mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="bg-hfc-card border border-hfc-border rounded-2xl p-8 text-center space-y-4">
          <h2 className="font-display font-bold text-white text-2xl">Get in Touch</h2>
          <p className="text-hfc-muted font-body">
            Have questions? Want to partner with us? We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:hello@howfar.ng"
              className="text-hfc-lime hover:underline font-medium"
            >
              hello@howfar.ng
            </a>
            <span className="text-hfc-muted hidden sm:inline">•</span>
            <a
              href="tel:+2348012345678"
              className="text-hfc-lime hover:underline font-medium"
            >
              +234 801 234 5678
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-6">
          <h2 className="font-display font-bold text-white text-3xl">
            Join the Movement
          </h2>
          <p className="text-hfc-muted font-body max-w-2xl mx-auto">
            Whether you're a rider looking for convenient transport, a driver seeking income opportunities, or a bike owner wanting to earn passively — there's a place for you at HFC.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.push("/")}
              className="bg-hfc-lime text-hfc-black font-display font-bold px-8 py-4 rounded-xl hover:bg-white transition-all"
            >
              Get Started
            </button>
            <button
              onClick={() => router.push("/careers")}
              className="border border-hfc-border text-white font-display font-bold px-8 py-4 rounded-xl hover:border-hfc-lime/50 hover:bg-hfc-card transition-all"
            >
              View Careers
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-hfc-border py-8">
        <div className="max-w-5xl mx-auto px-6 text-center text-hfc-muted text-sm">
          <p>&copy; 2026 Howfar Transport. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
