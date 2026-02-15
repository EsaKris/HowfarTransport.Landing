import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hfc: {
          black:  "#09090F",
          dark:   "#111118",
          card:   "#16161F",
          border: "#222230",
          lime:   "#C8F53F",
          orange: "#FF6B2C",
          muted:  "#6B6B82",
          light:  "#E8E8F0",
        },
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body:    ["var(--font-jakarta)", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(200,245,63,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(200,245,63,0.04) 1px, transparent 1px)",
        "hero-glow":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(200,245,63,0.18) 0%, transparent 70%)",
        "orange-glow":
          "radial-gradient(ellipse 60% 40% at 80% 60%, rgba(255,107,44,0.12) 0%, transparent 60%)",
      },
      backgroundSize: {
        "grid": "48px 48px",
      },
      animation: {
        "float":       "float 6s ease-in-out infinite",
        "marquee":     "marquee 28s linear infinite",
        "fade-up":     "fadeUp 0.7s ease forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-14px)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%":   { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;