import type { Config } from "tailwindcss";

/* ============================================================
   POLYUREA INSURANCE — "Industrial Teal & Charcoal" palette
   Token NAMES are inherited from the shared component architecture;
   VALUES are remapped to industrial teal (primary) / slate charcoal
   (secondary) / teal-gold accent.
   clay = industrial teal · sage = slate charcoal · gold = teal accent
   cream = light steel · sand = cool grey
   ============================================================ */

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F8FAFA",
        sand: "#EDF2F4",
        white: "#FFFFFF",
        clay: {
          DEFAULT: "#167A6E",
          dark: "#0F5C52",
          light: "#22A090",
          50: "#E8F5F3",
          100: "#C7E8E4",
          200: "#8ECFC9",
          300: "#55B5AD",
          400: "#22A090",
          500: "#167A6E",
          600: "#0F5C52",
          700: "#0A4540",
          800: "#072E2A",
          900: "#041815",
        },
        sage: {
          DEFAULT: "#3A4A5C",
          dark: "#283545",
          light: "#4E6070",
          50: "#EEF1F4",
          100: "#D5DBE3",
          200: "#A8B5C4",
          300: "#7A8EA0",
          400: "#4E6070",
          500: "#3A4A5C",
          600: "#283545",
          700: "#1A2530",
        },
        gold: {
          DEFAULT: "#2CB5A5",
          dark: "#1F8C7E",
          light: "#50CCBE",
          50: "#E6F7F5",
          100: "#C0ECE8",
          200: "#82D9D1",
          300: "#50CCBE",
          400: "#2CB5A5",
          500: "#1F8C7E",
          600: "#166860",
        },
        espresso: "#0F1E22",
        cocoa: "#2A3A44",
        mocha: "#546070",
        adobe: "#D0DDE0",
        adobeDark: "#B8CDD2",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        arch: "2rem 2rem 2rem 2rem",
        arch2: "2.5rem 2.5rem 1.5rem 1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backgroundImage: {
        "sunrise-bands":
          "linear-gradient(180deg, #F8FAFA 0%, #EDF2F4 40%, #E6F7F5 70%, #F8FAFA 100%)",
        "warm-radial":
          "radial-gradient(circle at 30% 20%, rgba(22,122,110,0.12) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(58,74,92,0.08) 0%, transparent 55%)",
        "clay-gradient": "linear-gradient(135deg, #167A6E 0%, #22A090 100%)",
        "sage-gradient": "linear-gradient(135deg, #3A4A5C 0%, #4E6070 100%)",
        "gold-gradient": "linear-gradient(135deg, #2CB5A5 0%, #50CCBE 100%)",
      },
      boxShadow: {
        warm: "0 10px 40px -15px rgba(15, 92, 82, 0.22), 0 4px 12px -6px rgba(15, 30, 34, 0.08)",
        "warm-lg": "0 30px 70px -20px rgba(15, 92, 82, 0.28), 0 10px 30px -10px rgba(15, 30, 34, 0.10)",
        card: "0 2px 8px -2px rgba(15, 30, 34, 0.06), 0 1px 3px -1px rgba(15, 30, 34, 0.04)",
        "card-hover": "0 20px 50px -15px rgba(15, 92, 82, 0.24), 0 8px 20px -8px rgba(15, 30, 34, 0.10)",
        arch: "inset 0 -8px 30px -10px rgba(15, 92, 82, 0.10)",
      },
      keyframes: {
        "fade-up": { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "slow-zoom": { "0%, 100%": { transform: "scale(1)" }, "50%": { transform: "scale(1.05)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        "arch-rise": { "0%": { transform: "scaleY(0.6)", opacity: "0", transformOrigin: "bottom" }, "100%": { transform: "scaleY(1)", opacity: "1", transformOrigin: "bottom" } },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "slow-zoom": "slow-zoom 20s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "arch-rise": "arch-rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
