/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kopub: ["KoPub Batang", "serif"],
        pretendard: ["Pretendard", "sans-serif"],
      },
      colors: {
        primary: "var(--color-primary)",
        primaryLight: "var(--color-primary-light)",
        danger: "var(--color-danger)",
        bgDark: "var(--color-bg-dark)",
      },
      boxShadow: {
        glow: "0 0 32px rgba(255, 132, 32, 0.35)",
      },
      borderRadius: {
        card: "16px",
      },
    },
  },
  plugins: [],
};
