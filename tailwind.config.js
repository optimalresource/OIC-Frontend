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
      max1140: { max: "1140px" },
      min1140: { min: "1140px" },
      min1041: { min: "1041px" },
      max1040: { max: "1040px" },
      max1040min769: { max: "1040px", min: "769px" },
      pmd: "800px",
      amd: { min: "769px" },
      bmd: { max: "768px" },
      min641: { min: "641px" },
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
