const plugin = require("tailwindcss/plugin");
const responsiveRegex = require("../lib/responsiveRegex");
module.exports = {
  content: [{ raw: "" }],
  safelist: responsiveRegex,
  theme: {
    colors: require("../colors"),
  },
  corePlugins: [
    "animation",
    "backgroundColor",
    "backgroundImage",
    "backgroundOpacity",
    "backdropOpacity",
    "borderColor",
    "borderOpacity",
    "divideColor",
    "divideOpacity",
    "gradientColorStops",
    "opacity",
    "placeholderColor",
    "preflight",
    "ringColor",
    "ringOffsetColor",
    "ringOffsetWidth",
    "ringOpacity",
    "ringWidth",
    "textColor",
    "textOpacity",
    "transitionProperty",
  ],
  plugins: [
    plugin(function ({ addBase, addUtilities, addComponents }) {
      addBase(require("../../../dist/plugins/base"));
      addComponents(require("../../../dist/plugins/styled"));
      addUtilities(require("../../../dist/plugins/utilities"), {
        variants: ["responsive"],
      });
      addUtilities(require("../../../dist/plugins/utilities-unstyled"), {
        variants: ["responsive"],
      });
      addUtilities(require("../../../dist/plugins/utilities-styled"), {
        variants: ["responsive"],
      });
    }),
  ],
};
