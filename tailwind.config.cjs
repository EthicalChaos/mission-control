/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "moon-blue": "#0B3B8E",
        "moon-orange": "#D7594F",
        "moon-gold": "#F9B95C",
        "moon-deepblue": "#132456",
        "moon-pink": "#ff03f8",
        "moon-salmon": "#e76e6b",
        "moon-lightblue": "#69e9f1"
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        GoodTimes: ["Good Times", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
