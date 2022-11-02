const plugin = require("tailwindcss/plugin");
const responsiveRegex = require("../../lib/responsiveRegex");
module.exports = {
  content: [{ raw: "" }],
  safelist: responsiveRegex,
  theme: {
    colors: require("../../colors"),
  },
  plugins: [
    plugin(function ({ addBase, addUtilities }) {
      addBase(require("../../../../dist/plugins/base"));
      addUtilities(require("../../../../dist/plugins/utilities"), {
        variants: ["responsive"],
      });
    }),
  ],
};
