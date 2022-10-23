/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      min1728: { min: "1728px" },
      max1727: { max: "1727px" },
      max1555: { max: "1555px" },
      min1201: { min: "1201px" },
      max1200: { max: "1200px" },
      max1140: { max: "1140px" },
      min1141: { min: "1141px" },
      max1140min641: { max: "1140px", min: "641px" },
      min1140: { min: "1140px" },
      max1040: { max: "1040px" },
      max1040min769: { max: "1040px", min: "769px" },
      pmd: "800px",

      min1041: { min: "1041px" },
      bmd: { max: "768px" },
      min641: { min: "641px" },
      amd: { min: "769px" },
      max640: { max: "640px" },
      mimamd: { min: "768px", max: "800px" },
      max400: { max: "400px" },
      max375: { max: "375px" },
      max345: { max: "345px" },
      min320: { min: "320px" },
      max320: { max: "320px" },
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
