/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#22d3ee",
        dark: "#1e293b",
        second: "#6b7280",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
