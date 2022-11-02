/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./packages/*/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("./packages/base")
  ],
};
