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
  metadataBase: new URL("https://howfartransports.onrender.com/"),

  title: {
    default:
      "Howfar Transport Company (HFC) – ₦500 Affordable Bike Taxi & Ride Services in Makurdi, Benue State, Nigeria",
    template: "%s | Howfar Transport Company Makurdi",
  },

  description:
    "Howfar Transport Company (HFC) offers safe, fast, and affordable ₦500 fixed-fare bike rides across Makurdi, Benue State, Nigeria. We cover Wurukum, High Level, North Bank, Modern Market, Judges Quarters, Kanshio, Apir, and surrounding areas. Book a reliable ride today!",

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
    "affordable bike rides Makurdi",
    "safe motorcycle taxi Makurdi",
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
    title: "₦500 Fixed-Fare Bike Rides in Makurdi — Howfar Transport Company",
    description:
      "Affordable, reliable, and safe ₦500 bike rides across Makurdi, Benue State. Fast pickup from anywhere in the city. Book your ride now!",
    url: "https://howfartransports.onrender.com/",
    siteName: "Howfar Transport Company",
    type: "website",
    locale: "en_NG",
    images: [
      {
        url: "/img/hero.jpeg", // Local hero image from public/img/
        width: 1200,
        height: 630,
        alt: "Howfar Transport Company bike rides in Makurdi, Benue State, Nigeria",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "₦500 Bike Rides Across Makurdi | Howfar Transport Company",
    description:
      "Safe, fast, and fixed ₦500 bike rides in Makurdi, Benue State. Reliable transport from Wurukum, High Level, North Bank, Modern Market, and more. Book now!",
    images: ["/img/hero.jpeg"], // Local hero image
  },

  alternates: {
    canonical: "https://howfartransports.onrender.com/",
  },

  category: "Transportation",

  // Icons
  icons: {
    icon: "/img/icon.png",
    shortcut: "/img/icon.png",
  },

  // Google site verification
  verification: {
    google: "4FP3mrdBA1hcJ7hYmRwpeCg2p1M5cZIdkX1P_Q3S4QY",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-NG" className="scroll-smooth">
      <head>
        {/* Google site verification meta tag */}
        <meta
          name="google-site-verification"
          content="4FP3mrdBA1hcJ7hYmRwpeCg2p1M5cZIdkX1P_Q3S4QY"
        />

        {/* JSON-LD Structured Data for LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Howfar Transport Company",
              url: "https://howfartransports.onrender.com/",
              logo: "https://howfartransports.onrender.com/img/icon.png",
              image: "https://howfartransports.onrender.com/img/hero.jpeg",
              description:
                "Affordable ₦500 fixed-fare bike rides across Makurdi, Benue State, Nigeria. Safe and fast motorcycle taxi service.",
              telephone: "+2349155775787",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Makurdi City Center",
                addressLocality: "Makurdi",
                addressRegion: "Benue",
                postalCode: "970001",
                addressCountry: "NG",
              },
              sameAs: [
                "https://twitter.com/howfartransport",
                "https://facebook.com/howfartransport",
              ],
            }),
          }}
        />
      </head>

      <body
        className={`${syne.variable} ${jakarta.variable} font-body bg-hfc-black text-hfc-light antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
