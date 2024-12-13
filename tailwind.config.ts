import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#5E8B9E", // Ocean teal
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#1F3B4D", // Deep ocean blue
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#E88D9D", // Sunset coral
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#C17F89", // Dusty rose
          foreground: "#ffffff",
        },
        highlight: {
          DEFAULT: "#FFD4B8", // Peach
          foreground: "#1F3B4D",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "gradient-flow": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "gradient-flow": "gradient-flow 15s ease infinite",
      },
      backgroundImage: {
        'gradient-sunset': 'linear-gradient(to bottom, #5E8B9E, #1F3B4D, #C17F89, #E88D9D, #FFD4B8)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;