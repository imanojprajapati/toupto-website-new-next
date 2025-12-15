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
        primary: {
          // Gradient colors from logo: Purple to Pink to Orange
          50: "#fdf4ff",
          100: "#fae8ff",
          200: "#f5d0fe",
          300: "#f0abfc",
          400: "#e879f9",
          500: "#d946ef", // Purple
          600: "#c026d3", // Deep Purple
          700: "#a21caf",
          800: "#86198f",
          900: "#701a75",
        },
        secondary: {
          // Dark blue from logo + gradient support colors
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6", // Blue
          600: "#2563eb", // Primary Blue
          700: "#1d4ed8", // Dark Blue (matches logo)
          800: "#1e40af",
          900: "#1e3a8a",
        },
        accent: {
          // Orange/pink gradient support
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316", // Orange
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
        gradient: {
          // Direct gradient colors from logo
          purple: "#9333ea",
          pink: "#ec4899",
          orange: "#f97316",
          blue: "#1d4ed8",
        },
        // Extended colors for logo gradient
        purple: {
          logo: "#9333ea",
        },
        pink: {
          logo: "#ec4899",
        },
        orange: {
          logo: "#f97316",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      keyframes: {
        blob: {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
        },
        "bounce-slow": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
      },
      animation: {
        blob: "blob 7s infinite",
        "blob-delay-2": "blob 7s infinite 2s",
        "blob-delay-4": "blob 7s infinite 4s",
        "bounce-slow": "bounce-slow 3s infinite",
        float: "float 6s ease-in-out infinite",
        "float-delay": "float 6s ease-in-out infinite 3s",
      },
    },
  },
  plugins: [],
};
export default config;

