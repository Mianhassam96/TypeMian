
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#18181B",
          foreground: "#F4F4F5",
        },
        secondary: {
          DEFAULT: "#22C55E",
          foreground: "#09090B",
        },
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#F4F4F5",
        },
        muted: {
          DEFAULT: "#27272A",
          foreground: "#A1A1AA",
        },
        accent: {
          DEFAULT: "#22C55E",
          foreground: "#09090B",
        },
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        blink: "blink 1s ease-in-out infinite",
        slideUp: "slideUp 0.3s ease-out",
        fadeIn: "fadeIn 0.5s ease-out",
      },
      fontFamily: {
        mono: ["Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
