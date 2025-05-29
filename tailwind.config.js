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
        ms:"328px"
      },
      colors: {
        primary: {
          DEFAULT: "#3b82f6",
          dark: "#60a5fa",
        },
        bg: {
          DEFAULT: "#ffffff",
          dark: "#0f172a",
        },
        fg: {
          DEFAULT: "#1e293b",
          dark: "#f1f5f9",
        },
        border: {
          DEFAULT: "#e2e8f0",
          dark: "#334155",
        },

        sectionBg: {
          hero: "#ffffff",
          about: "#e2e8f0",
          skills: "#f3f4f6",
          projects: "#e2e8f0",
          contact: "#f9fafb",
          footer: "#f1f5f9",

          dark: {
            hero: "#0f172a",
            about: "#16243e",
            skills: "#0f172a",
            projects: "#1e293b",
            contact: "#0f172a",
            footer: "#0f172a",
          },
        },

        cardAlt: {
          about: "#ffffff",
          skills: "#f8fafc",
          projects: "#f0f4ff",
          dark: {
            about: "#0f172a",
            skills: "#16243e",
            projects: "#0e1521",
          },
        },
      },
    },
  },
  plugins: [],
};
