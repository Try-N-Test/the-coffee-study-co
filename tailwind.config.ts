import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
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
        "primary-1": "#F9F4F1",
        "primary-2": "#E7D4C5",
        "primary-3": "#D6B49A",
        "primary-4": "#CA9E7D",
        "primary-5": "#B87E51",
        "primary-6": "#9C6840",
        "primary-7": "#744D2F",
        "primary-8": "#664429",
        "primary-9": "#3A2717",
        "primary-10": "#2B1D12",
        "secondary-1": "#FFF5EB",
        "secondary-2": "#FFE2C2",
        "secondary-3": "#FFCF99",
        "secondary-4": "#FFB35C",
        "secondary-5": "#FFA033",
        "secondary-6": "#FF8A01",
        "secondary-7": "#E07800",
        "secondary-8": "#A35700",
        "secondary-9": "#7A4100",
        "secondary-10": "#3D2100",
        "light-1": "#F9F9F9",
        "light-2": "#F5F6FA",
        "light-3": "#F3F3F3",
        "light-4": "#EDEDED",
        facebook: "#1877F2",
        insta1: "#4F5BD5",
        insta3: "#D62976",
        insta5: "#FEDA75",

        glassmorphism: "rgba(16, 16, 18, 0.60)",
      },
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
        secondary: ["Raleway", "sans-serif"],
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
