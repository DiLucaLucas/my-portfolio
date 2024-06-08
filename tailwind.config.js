/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customBackground: "#222438",
        customButtons: "#F04A52",
        customHover: "#FF303A",
        customCards: "#292C3E",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [],
};
