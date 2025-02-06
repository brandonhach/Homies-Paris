/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: { sanchez: ["Sanchez", "Serif"] },
    extend: {
      colors: {
        primary: "#FF710D",
      },
    },
  },
  daisyui: {
    themes: ["bumblebee"],
  },
  plugins: [require("daisyui")],
};
