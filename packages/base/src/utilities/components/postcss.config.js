module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss/nesting"),
    require("tailwindcss")("./src/utilities/components/tailwind.config.js"),
    require("autoprefixer"),
  ],
};
