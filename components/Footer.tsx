import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const links = {
  Riders: [
    { label: "Sign Up",        href: "https://riders.howfar.ng/register" },
    { label: "Log In",         href: "https://riders.howfar.ng/login" },
    { label: "How It Works",   href: "#how-it-works" },
    { label: "Pricing",        href: "#features" },
  ],
  Drivers: [
    { label: "Apply Now",      href: "/apply" },
    { label: "Driver Login",   href: "https://drivers.howfar.ng/login" },
    { label: "Driver Portal",  href: "https://drivers.howfar.ng" },
    { label: "Requirements",   href: "/apply#requirements" },
  ],
  Company: [
    { label: "About HFC",      href: "/about" },
    { label: "Careers",        href: "/careers" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use",   href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer id="footer" className="bg-hfc-black border-t border-hfc-border">
      {/* CTA strip */}
      <div className="bg-hfc-lime">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-display font-black text-hfc-black text-xl">
              Ready to ride — or ready to earn?
            </p>
            <p className="text-hfc-black/60 text-sm font-body">
              Join thousands of happy riders and drivers in Makurdi.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link
              href="https://riders.howfar.ng/register"
              className="bg-hfc-black text-hfc-lime font-display font-bold text-sm px-5 py-3 rounded-xl hover:bg-hfc-dark transition-colors flex items-center gap-2"
            >
              Get a Ride <ArrowRight size={14} />
            </Link>
            <Link
              href="/apply"
              className="bg-white/20 backdrop-blur text-hfc-black font-display font-bold text-sm px-5 py-3 rounded-xl hover:bg-white/30 transition-colors"
            >
              Drive With Us
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="col-span-2 space-y-5">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-hfc-lime rounded-lg flex items-center justify-center">
                <span className="font-display font-black text-hfc-black text-sm">HFC</span>
              </div>
              <span className="font-display font-bold text-white text-lg">Howfar</span>
            </div>
            <p className="font-body text-hfc-muted text-sm leading-relaxed max-w-xs">
              Makurdi's most trusted bike transport platform. Safe rides, fixed fares,
              verified drivers — everywhere in the city for just ₦500.
            </p>

            {/* Contact */}
            <div className="space-y-2">
              <a href="tel:+2348012345678" className="flex items-center gap-2 text-hfc-muted hover:text-white text-sm transition-colors">
                <Phone size={14} /> +234 801 234 5678
              </a>
              <a href="mailto:hello@howfar.ng" className="flex items-center gap-2 text-hfc-muted hover:text-white text-sm transition-colors">
                <Mail size={14} /> hello@howfar.ng
              </a>
              <div className="flex items-center gap-2 text-hfc-muted text-sm">
                <MapPin size={14} />
                <span>Makurdi, Benue State, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 className="font-display font-bold text-white text-sm mb-5">{section}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="font-body text-hfc-muted hover:text-hfc-lime text-sm transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-hfc-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-hfc-muted text-xs">
            © {new Date().getFullYear()} Howfar Transport Company. All rights reserved.
          </p>
          <p className="font-body text-hfc-muted text-xs">
             <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a> · <a href="/terms" className="hover:text-white transition-colors">Terms of Use</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
