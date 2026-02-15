import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://howfartransport.com"),

  title: {
    default:
      "Howfar Transport Company (HFC) – Affordable Bike Taxi & Ride Services in Makurdi, Benue State, Nigeria, for ₦500 Fixed-Fare Rides",
    template: "%s | Howfar Transport Company Makurdi",
  },

  description:
    "Howfar Transport Company (HFC) provides safe, fast, and affordable ₦500 fixed-fare bike rides across Makurdi, Benue State, Nigeria. Reliable transportation from Wurukum, High Level, North Bank, Modern Market, Judges Quarters, Kanshio, Apir, and surrounding areas.",

  keywords: [
    "bike taxi Makurdi",
    "Makurdi transport company",
    "₦500 ride Makurdi",
    "Benue bike transport",
    "Howfar Transport Company",
    "HFC Makurdi",
    "cheap transportation in Makurdi",
    "Makurdi okada alternative",
    "ride hailing Makurdi",
    "Benue State transportation",
  ],

  authors: [{ name: "Howfar Transport Company" }],
  creator: "Howfar Transport Company",
  publisher: "Howfar Transport Company",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title:
      "₦500 Bike Rides in Makurdi — Howfar Transport Company (HTC)",
    description:
      "Affordable ₦500 fixed-fare bike rides anywhere in Makurdi, Benue State. Fast pickup. Safe drivers. Reliable transport daily.",
    url: "https://howfartransport.com",
    siteName: "Howfar Transport Company",
    type: "website",
    locale: "en_NG",
    images: [
      {
        url: "https://howfartransport.com/images/hero-preview.jpg", // 🔥 Replace with your real hosted hero image
        width: 1200,
        height: 630,
        alt: "Howfar Transport Company ₦500 bike rides in Makurdi Benue State Nigeria",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "₦500 Rides Across Makurdi | Howfar Transport Company",
    description:
      "Safe, fast, and fixed ₦500 bike transport in Makurdi, Benue State. Request your ride today.",
    images: ["https://howfartransport.com/images/hero-preview.jpg"], // same image
  },

  alternates: {
    canonical: "https://howfartransport.com",
  },

  category: "Transportation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-NG" className="scroll-smooth">
      <body
        className={`${syne.variable} ${jakarta.variable} font-body bg-hfc-black text-hfc-light antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
