import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        rotateDown: "rotateDown 0.6s linear both",
        showSlowly: "showSlowly 0.6s ease-in both",
      },
      backgroundImage: {
        hero: "url('/images/hero_bg.svg')",
        footer: "url('/images/grid_bg_4.svg')",
      },
      colors: {
        bpurple: "#6F43CD",
        bpurpleHover: "#5735a1",
      },
      fontSize: {
        small1: "12px",
        small2: "14px",
        small3: "16px",
        small4: "18px",
        mid1: "20px",
        mid2: "22px",
        mid3: "24px",
        mid4: "32px",
        large1: "36px",
        large2: "42px",
        large3: "52px",
        large4: "60px",
      },
      keyframes: {
        rotateDown: {
          "0%": {
            transform: "scale(1) rotateZ(0)",
            opacity: "1",
          },
          "50%": {
            transform: "scale(0.5) rotateZ(180deg)",
            opacity: "0.5",
          },
          "100%": {
            transform: "scale(0) rotateZ(360deg)",
            opacity: "0",
          },
        },
        showSlowly: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      spacing: {
        "34": "8.5rem",
        "112": "28rem",
        "128": "32rem",
        "144": "36rem",
        "176": "44rem",
      },
    }
  },
  darkMode: "class",
  plugins: [require("daisyui")],
};
export default config;
