module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-nested")({
      bubble: ["screen"],
    }),
    require("tailwindcss")("./src/plugins/utilities/styled/tailwind.config.js"),
    require("autoprefixer"),
  ],
};
