/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  purge: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
    },
    colors: {
      linen: "#fdf2e9",
      orange: "#e67e22",
      dorange: "#b45309",
      lorange: "#cf711f",
      white: "#ffffff",
      gray: "#555",
      dgray: "#333",
    },
  },
  plugins: [],
};
