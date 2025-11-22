import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        space: {
          50: "#f5f8ff",
          100: "#e6ecff",
          200: "#c8d2ff",
          300: "#a5b2ff",
          400: "#7b8aff",
          500: "#5363ff",
          600: "#3744db",
          700: "#2431aa",
          800: "#182178",
          900: "#0f1652",
          950: "#090d33"
        }
      }
    }
  },
  plugins: []
};

export default config;
