/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      screens: {
        xs: "400px",
      },
      colors: {
        primary: {
          DEFAULT: "#3b82f6",
          dark: "#60a5fa",
        },
        secondary: {
          DEFAULT: "#6366f1",
          dark: "#818cf8",
        },
        bg: {
          DEFAULT: "#ffffff",
          dark: "#0f172a",
        },
        fg: {
          DEFAULT: "#1e293b",
          dark: "#f1f5f9",
        },
        muted: {
          DEFAULT: "#64748b",
          dark: "#94a3b8",
        },
        border: {
          DEFAULT: "#e2e8f0",
          dark: "#334155",
        },
        card: {
          DEFAULT: "#f8fafc",
          dark: "#1e293b",
        },
        highlight: {
          DEFAULT: "#22c55e",
          dark: "#4ade80",
        },
        danger: {
          DEFAULT: "#ef4444",
          dark: "#f87171",
        },
      },
    },
  },

  plugins: [],
};
