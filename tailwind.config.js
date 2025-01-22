/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
import scrollbarHide from "tailwind-scrollbar-hide";

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {},
    screens: {
      xs: "340px",
      phone: "400px",
      five: "500px",
      tablet: "640px",
      md: "750px",
      xtab: "960px",
      laptop: "1100px",
      desktop: "1280px",
      large: "1520px",
      fourk: "3840px",
    },
    fontFamily: {
      poppin: ["Poppins", "sans-serif"], // Set Poppins as the primary font
      oxa: ["Oxanium", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      rokkit: ["Rokkit", "sans-serif"],
    },
    colors: {
      ...colors,
      // Updated Tailwind v3 color replacements
      sky: colors.sky,
      stone: colors.stone,
      neutral: colors.neutral,
      gray: colors.gray,
      slate: colors.slate,

      // Updated custom colors
      mainwhite: "#f5f7fa",
      secondary: "#f9f9f9",
      mainblue: "#3a86ff",
      active: "#14213d",
    },
  },
  plugins: [scrollbarHide],
  important: true,
};
