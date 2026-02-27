"use client";
import { useRouter } from "next/navigation";
import { ArrowLeft, Bike, Briefcase, Users, TrendingUp, Heart, Code, Megaphone, UserCheck } from "lucide-react";

export default function CareersPage() {
  const router = useRouter();

  const positions = [
    {
      title: "Driver",
      department: "Operations",
      type: "Full-time",
      location: "Makurdi",
      icon: Bike,
      description: "Join our fleet of professional drivers and earn competitive income with flexible hours.",
      requirements: [
        "Valid motorcycle license",
        "2+ years riding experience",
        "Clean driving record",
        "Age 21-50",
        "Own smartphone",
      ],
    },
    {
      title: "Software Engineer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote/Makurdi",
      icon: Code,
      description: "Build scalable solutions for Nigeria's leading bike-hailing platform.",
      requirements: [
        "3+ years experience with React/Next.js",
        "Backend experience (Django/Node.js)",
        "Mobile app development (React Native)",
        "Strong problem-solving skills",
        "Experience with geolocation APIs",
      ],
    },
    {
      title: "Operations Manager",
      department: "Operations",
      type: "Full-time",
      location: "Makurdi",
      icon: UserCheck,
      description: "Oversee daily operations, driver onboarding, and ensure excellent service delivery.",
      requirements: [
        "5+ years operations experience",
        "Strong leadership skills",
        "Excellent communication",
        "Knowledge of Makurdi geography",
        "Experience with logistics/transport",
      ],
    },
    {
      title: "Marketing Manager",
      department: "Growth",
      type: "Full-time",
      location: "Makurdi",
      icon: Megaphone,
      description: "Drive brand awareness and user acquisition through creative marketing campaigns.",
      requirements: [
        "3+ years marketing experience",
        "Digital marketing expertise",
        "Social media management",
        "Content creation skills",
        "Data-driven mindset",
      ],
    },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Competitive Compensation",
      description: "Market-leading salaries and performance bonuses",
    },
    {
      icon: Users,
      title: "Growth Opportunities",
      description: "Clear career progression and skill development",
    },
    {
      icon: Heart,
      title: "Health Insurance",
      description: "Comprehensive health coverage for you and your family",
    },
    {
      icon: Briefcase,
      title: "Flexible Work",
      description: "Remote options and flexible schedules where applicable",
    },
  ];

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
              <p className="font-display font-bold text-white">Howfar Transport</p>
              <p className="text-hfc-lime text-xs">Careers</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        {/* Hero */}
        <div className="text-center space-y-4">
          <h1 className="font-display font-black text-white text-5xl md:text-6xl">
            Join Our <span className="text-hfc-lime">Team</span>
          </h1>
          <p className="text-hfc-muted text-lg font-body max-w-2xl mx-auto leading-relaxed">
            Build the future of urban mobility in Nigeria. We're looking for passionate, talented individuals to help us transform transportation.
          </p>
        </div>

        {/* Why HFC */}
        <div className="space-y-8">
          <h2 className="font-display font-bold text-white text-3xl text-center">
            Why Work at HowFar Transport?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-hfc-card border border-hfc-border rounded-xl p-6 space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-hfc-lime/10 border border-hfc-lime/20 flex items-center justify-center">
                  <benefit.icon size={24} className="text-hfc-lime" />
                </div>
                <h3 className="font-display font-bold text-white text-xl">
                  {benefit.title}
                </h3>
                <p className="text-hfc-muted font-body leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="font-display font-bold text-white text-3xl">
              Open Positions
            </h2>
            <p className="text-hfc-muted font-body">
              {positions.length} position{positions.length !== 1 ? "s" : ""} available
            </p>
          </div>

          <div className="space-y-4">
            {positions.map((position) => (
              <div
                key={position.title}
                className="bg-hfc-card border border-hfc-border rounded-xl p-6 hover:border-hfc-lime/30 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-hfc-lime/10 border border-hfc-lime/20 flex items-center justify-center flex-shrink-0">
                      <position.icon size={24} className="text-hfc-lime" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-white text-xl">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="text-xs bg-hfc-black border border-hfc-border rounded-full px-3 py-1 text-hfc-muted">
                          {position.department}
                        </span>
                        <span className="text-xs bg-hfc-black border border-hfc-border rounded-full px-3 py-1 text-hfc-muted">
                          {position.type}
                        </span>
                        <span className="text-xs bg-hfc-black border border-hfc-border rounded-full px-3 py-1 text-hfc-muted">
                          📍 {position.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="bg-hfc-lime text-hfc-black font-display font-bold px-6 py-2 rounded-lg hover:bg-white transition-all text-sm whitespace-nowrap">
                    Apply Now
                  </button>
                </div>

                <p className="text-hfc-muted font-body leading-relaxed mb-4">
                  {position.description}
                </p>

                <div>
                  <p className="text-white font-display font-bold text-sm mb-2">
                    Requirements:
                  </p>
                  <ul className="space-y-1">
                    {position.requirements.map((req, idx) => (
                      <li
                        key={idx}
                        className="text-hfc-muted text-sm font-body flex items-start gap-2"
                      >
                        <span className="text-hfc-lime mt-1">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How to Apply */}
        <div className="bg-gradient-to-br from-hfc-lime/5 to-hfc-orange/5 border border-hfc-border rounded-2xl p-8 space-y-6">
          <h2 className="font-display font-bold text-white text-2xl text-center">
            How to Apply
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Submit Application",
                description: "Send your CV and cover letter to careers@howfar.ng",
              },
              {
                step: "2",
                title: "Interview",
                description: "Selected candidates will be contacted for interviews",
              },
              {
                step: "3",
                title: "Join HFC",
                description: "Successful applicants start onboarding and training",
              },
            ].map((step) => (
              <div key={step.step} className="text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-hfc-lime text-hfc-black font-display font-black text-xl flex items-center justify-center mx-auto">
                  {step.step}
                </div>
                <h3 className="font-display font-bold text-white">{step.title}</h3>
                <p className="text-hfc-muted text-sm font-body">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="text-center space-y-4">
          <h2 className="font-display font-bold text-white text-2xl">
            Don't See Your Role?
          </h2>
          <p className="text-hfc-muted font-body max-w-2xl mx-auto">
            We're always looking for talented people. Send us your CV and tell us how you can contribute to HFC's mission.
          </p>
          <a
            href="mailto:careers@howfar.ng"
            className="inline-block bg-hfc-lime text-hfc-black font-display font-bold px-8 py-4 rounded-xl hover:bg-white transition-all"
          >
            Email careers@howfar.ng
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-hfc-border py-8">
        <div className="max-w-5xl mx-auto px-6 text-center text-hfc-muted text-sm">
          <p>&copy; 2025 Howfar Transport. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
