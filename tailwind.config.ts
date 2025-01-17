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
        shimmer: "shimmer 1.5s infinite",
        slideLeft: "slideLeft 1s ease forwards",
        loadspin: "loadspin 1.5s linear infinite",
      },
      keyframes: {
        loadspin: {
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
        slideLeft: {
          "50%": {
            opacity: "0.7",
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
      },
      colors: {
        NeutalBase: "#020202",
        Neutral60: "#2A2A2A",
        Neutra50: "#2c2c2c",
        Neutra40: "#565656",
        Neutra30: "#808080",
        Neutra20: "#ababab",
        Neutra10: "#cccccc",
        Accent1: "#008080",
        Accent2: "#00cccc",
        Accent3: "#00ffff",
        Accent4: "#7fffff",
        Accent5: "#b2ffff",
        Accent6: "#e5ffff",
        SuccessBase: "#0f973d",
        Success10: "#cfead8",
        Success20: "#afdcbe",
        Success30: "#87cb93",
        Success40: "#5fba7e",
        Success50: "#37a85d",
        Success60: "#0d7e33",
        Success70: "#0a6529",
        Success80: "#084c1f",
        Success100: "#031e0c",
        ErrorBase: "#d42620",
        Error10: "#f6d4d2",
        Error20: "#f1b7b5",
        Error30: "#e9928f",
        Error40: "#e26e6a",
        Error50: "#db4a45",
        Error60: "#b1201b",
        Error70: "#8d1915",
        Error80: "#6a1310",
        Error90: "#450d0b",
        Error100: "#2a0806",
      },
      fontFamily: {
        Gladiora: ["var(--font-gladiora)", "sans-serif"],
        Inter: ["var(--font-inter)", "sans-serif"],
        Hanken: ["var(--font-hanken)", "sans-serif"],
      },
      width: {
        "9/10": "90%",
      },
    },
  },
  plugins: [],
};
export default config;
