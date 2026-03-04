import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "young-serif": ['"Young Serif"', "serif"],
        dynapuff: ['"DynaPuff"', "cursive"],
        rethink: ['"Rethink Sans"', "sans-serif"],
      },
      colors: {
        orange: {
          primary: "#e87c00",
          hover: "#d16f00",
          accent: "#F5A623",
          light: "#FFF8F0",
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
        },
        gold: "#ffbd71",
        dark: {
          bg: "#0A0300",
          footer: "hsl(35, 55%, 8%)",
        },
        cream: {
          50: "#FFFBF5",
          100: "#FFF8F0",
          200: "#FFF3E6",
        },
      },
      borderRadius: {
        card: "38px",
        "4xl": "40px",
        "5xl": "48px",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        shimmer: "shimmer 2s infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
