const postcssJs = require("postcss-js");
const postcssPrefix = require("./lib/postcss-prefixer");

const artbcuiInfo = require("../package.json");
const colors = require("./colors/index");
const utilities = require("../dist/utilities");
const base = require("../dist/base");
const unstyled = require("../dist/unstyled");
// const unstyledRtl = require("../dist/unstyled.rtl");
const styled = require("../dist/styled");
// const styledRtl = require("../dist/styled.rtl");
const utilitiesUnstyled = require("../dist/utilities-unstyled");
const utilitiesStyled = require("../dist/utilities-styled");
const themes = require("./colors/theme");
const colorFunctions = require("./colors/function");

const mainFunction = ({
  addBase,
  addComponents,
  addUtilities,
  config,
  postcss,
}) => {
  let artbcuiIncludedItems = [];
  let logs = false;
  if (config("artbcui.logs") != false) {
    logs = true;
  }
  if (logs) {
    console.log();
    console.log(
      "\x1b[35m%s\x1b[0m",
      "🌼 artbcui components " + artbcuiInfo.version,
      "\x1b[0m",
      artbcuiInfo.homepage
    );
    console.group();
  }

  // inject @base style
  if (config("artbcui.base") != false) {
    addBase(base);
    artbcuiIncludedItems.push("base");
  }

  // inject components
  // because rollupjs doesn't supprt dynamic require
  let file = styled;
  if (config("artbcui.styled") == false && config("artbcui.rtl") != true) {
    artbcuiIncludedItems.push("unstyled components");
    file = unstyled;
  } else if (
    config("artbcui.styled") == false &&
    config("artbcui.rtl") == true
  ) {
    artbcuiIncludedItems.push("unstyled components");
    console.log("\x1b[36m%s\x1b[0m", " Direction:", "\x1b[0m", "RTL");
    file = unstyledRtl;
  } else if (
    config("artbcui.styled") != false &&
    config("artbcui.rtl") != true
  ) {
    artbcuiIncludedItems.push("components");
    file = styled;
  } else if (
    config("artbcui.styled") !== false &&
    config("artbcui.rtl") == true
  ) {
    artbcuiIncludedItems.push("components");
    console.log("\x1b[36m%s\x1b[0m", " Direction:", "\x1b[0m", "RTL");
    file = styledRtl;
  }

  // add prefix to class names if specified
  const prefix = config("artbcui.prefix");
  let postcssJsProcess;
  if (prefix) {
    try {
      postcssJsProcess = postcssJs.sync(postcssPrefix({ prefix, ignore: [] }));
    } catch (error) {
      logs &&
        console.error(
          `Error occurred and prevent applying the "prefix" option:`,
          error
        );
    }
  }
  const shouldApplyPrefix = prefix && postcssJsProcess;
  if (shouldApplyPrefix) {
    file = postcssJsProcess(file);
  }

  addComponents(file);

  const themeInjector = colorFunctions.injectThemes(addBase, config, themes);
  themeInjector;

  artbcuiIncludedItems.push("themes[" + themeInjector.themeOrder.length + "]");

  // inject @utilities style needed by components
  if (config("artbcui.utils") != false) {
    addComponents(utilities, { variants: ["responsive"] });

    let toAdd = utilitiesUnstyled; // shadow clone here to avoid mutate the original
    if (shouldApplyPrefix) {
      toAdd = postcssJsProcess(toAdd);
    }
    addComponents(toAdd, { variants: ["responsive"] });

    toAdd = utilitiesStyled;
    if (shouldApplyPrefix) {
      toAdd = postcssJsProcess(toAdd);
    }
    addComponents(toAdd, { variants: ["responsive"] });
    artbcuiIncludedItems.push("utilities");
  }
  if (logs) {
    console.log(
      "\x1b[32m%s\x1b[0m",
      "✔︎ Including:",
      "\x1b[0m",
      "" + artbcuiIncludedItems.join(", ")
    );
    console.log();
    console.groupEnd();
  }
};

module.exports = require("tailwindcss/plugin")(mainFunction, {
  theme: { extend: { colors } },
});