/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: { sanchez: ["Sanchez", "Serif"] },
    extend: {},
  },
  daisyui: {
    themes: ["bumblebee"],
  },
  plugins: [require("daisyui")],
};
