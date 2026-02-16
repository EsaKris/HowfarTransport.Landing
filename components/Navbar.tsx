"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import Image from "next/image";


const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Why HTC",      href: "#features" },
  { label: "Drive With Us",href: "#drive" },
  { label: "Contact",      href: "#footer" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-hfc-black/95 backdrop-blur-md border-b border-hfc-border shadow-lg shadow-black/40"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          {/* Logo Image */}
          <div className="w-9 h-9 relative flex-shrink-0">
            <Image
              src="/img/logo.png"
              alt="Howfar Transport Company Logo"
              fill
              className="object-contain group-hover:scale-105 transition-transform"
              priority
            />
          </div>

          {/* Logo Text */}
          <span className="font-display font-bold text-white text-lg hidden sm:block">
            Howfar Transport Company
          </span>
        </Link>


        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-hfc-muted hover:text-white text-sm font-body font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="https://riders.howfar.ng/login"
            className="text-hfc-muted hover:text-white text-sm font-medium transition-colors px-4 py-2"
          >
            Sign In
          </Link>
          <Link
            href="https://riders.howfar.ng/register"
            className="btn-primary bg-hfc-lime text-hfc-black font-display font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-white transition-colors"
          >
            Get a Ride
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu drawer */}
      {menuOpen && (
        <div className="md:hidden bg-hfc-dark border-t border-hfc-border px-6 py-5 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-hfc-muted hover:text-white font-medium transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-3 border-t border-hfc-border">
            <Link
              href="https://riders.howfar.ng/login"
              className="text-center border border-hfc-border text-white font-medium py-3 rounded-xl hover:border-hfc-lime transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="https://riders.howfar.ng/register"
              className="text-center bg-hfc-lime text-hfc-black font-display font-bold py-3 rounded-xl hover:bg-white transition-colors"
            >
              Get a Ride
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
