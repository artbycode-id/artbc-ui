// add color default and custom to addBase tailwind
const Color = require("color");
const colorNames = require("./colorNames");

module.exports = {
  generateForegroundColorFrom: function (input, percentage = 0.8) {
    if (Color(input).isDark()) {
      let arr = Color(input)
        .mix(Color("white"), percentage)
        .saturate(10)
        .hsl()
        .round()
        .array();
      return arr[0] + " " + arr[1] + "%" + " " + arr[2] + "%";
    } else {
      let arr = Color(input)
        .mix(Color("black"), percentage)
        .saturate(10)
        .hsl()
        .round()
        .array();
      return arr[0] + " " + arr[1] + "%" + " " + arr[2] + "%";
    }
  },

  convertToHsl: function (input) {
    let resultObj = {};
    if (typeof input === "object" && input !== null) {
      Object.entries(input).forEach(([rule, value]) => {
        if (colorNames.hasOwnProperty(rule)) {
          const hslArray = Color(value).hsl().round().array();
          resultObj[colorNames[rule]] =
            hslArray[0] + " " + hslArray[1] + "%" + " " + hslArray[2] + "%";
        } else {
          resultObj[rule] = value;
        }

        // auto generate focus colors
        if (!input.hasOwnProperty("neutral-focus")) {
          const darkerHslArray = Color(input["neutral"])
            .darken(0.2)
            .hsl()
            .round()
            .array();
          resultObj["--nf"] =
            darkerHslArray[0] +
            " " +
            darkerHslArray[1] +
            "%" +
            " " +
            darkerHslArray[2] +
            "%";
        }

        // auto generate base colors
        if (!input.hasOwnProperty("base-100")) {
          resultObj["--b1"] = 0 + " " + 0 + "%" + " " + 100 + "%";
        }

        if (!input.hasOwnProperty("base-200")) {
          const darkerHslArray = Color(input["base-100"])
            .darken(0.1)
            .hsl()
            .round()
            .array();
          resultObj["--b2"] =
            darkerHslArray[0] +
            " " +
            darkerHslArray[1] +
            "%" +
            " " +
            darkerHslArray[2] +
            "%";
        }

        if (!input.hasOwnProperty("base-300")) {
          if (input.hasOwnProperty("base-200")) {
            const darkerHslArray = Color(input["base-200"])
              .darken(0.1)
              .hsl()
              .round()
              .array();
            resultObj["--b3"] =
              darkerHslArray[0] +
              " " +
              darkerHslArray[1] +
              "%" +
              " " +
              darkerHslArray[2] +
              "%";
          } else {
            const darkerHslArray = Color(input["base-100"])
              .darken(0.1)
              .darken(0.1)
              .hsl()
              .round()
              .array();
            resultObj["--b3"] =
              darkerHslArray[0] +
              " " +
              darkerHslArray[1] +
              "%" +
              " " +
              darkerHslArray[2] +
              "%";
          }
        }

        // auto generate shades colors
        if (!input.hasOwnProperty("shades-white")) {
          resultObj["--sw"] = 0 + " " + 0 + "%" + " " + 100 + "%";
        }

        if (!input.hasOwnProperty("shades-black")) {
          resultObj["--sb"] = 0 + " " + 0 + "%" + " " + 9 + "%";
        }

        // auto generate content colors
        if (!input.hasOwnProperty("base-content")) {
          resultObj["--bc"] = this.generateForegroundColorFrom(
            input["base-100"]
          );
        }

        if (!input.hasOwnProperty("neutral-content")) {
          resultObj["--nc"] = this.generateForegroundColorFrom(
            input["neutral"]
          );
        }

        // auto generate css variables
        if (!input.hasOwnProperty("--rounded-btn")) {
          resultObj["--rounded-btn"] = "0.5rem";
        }
        if (!input.hasOwnProperty("--border-btn")) {
          resultObj["--border-btn"] = "1px";
        }
      });
      return resultObj;
    }
    return input;
  },

  injectThemes: function (addBase, config, themes) {
    let includedThemesObj = new Object();

    // add light themes
    if (config("artbcui.themes") == false) {
      Object.entries(themes).forEach(([theme, index]) => {
        includedThemesObj[theme] = this.convertToHsl(themes[theme]);
      });
    }

    // add default themes
    if (config("artbcui.themes") != false) {
      Object.entries(themes).forEach(([theme, index]) => {
        includedThemesObj[theme] = this.convertToHsl(themes[theme]);
      });
    }

    // add custom themes
    if (Array.isArray(config("artbcui.themes"))) {
      config("artbcui.themes").forEach((item, index) => {
        if (typeof item === "object" && item !== null) {
          Object.entries(item).forEach(
            ([customThemeName, customThemevalue]) => {
              includedThemesObj["[data-theme=" + customThemeName + "]"] =
                this.convertToHsl(customThemevalue);
            }
          );
        }
      });
    }

    let themeOrder = [];
    if (Array.isArray(config("artbcui.themes"))) {
      config("artbcui.themes").forEach((theme, index) => {
        if (typeof theme === "object" && theme !== null) {
          Object.entries(theme).forEach(
            ([customThemeName, customThemevalue]) => {
              themeOrder.push(customThemeName);
            }
          );
        } else if (
          includedThemesObj.hasOwnProperty("[data-theme=" + theme + "]")
        ) {
          themeOrder.push(theme);
        }
      });
    } else if (config("artbcui.themes") != false) {
      themeOrder = ["light"]; //["light", "dark"]; if theme dark is done added
    } else if (config("artbcui.themes") == false) {
      themeOrder.push("light");
    }

    // inject themes in order
    themeOrder.forEach((themeName, index) => {
      if (index === 0) {
        // first theme as root
        addBase({
          [":root"]: includedThemesObj["[data-theme=" + themeName + "]"],
        });
      } else if (index === 1) {
        // auto dark
        if (config("artbcui.darkTheme")) {
          if (
            themeOrder[0] != config("artbcui.darkTheme") &&
            themeOrder.includes(config("artbcui.darkTheme"))
          ) {
            addBase({
              ["@media (prefers-color-scheme: dark)"]: {
                [":root"]:
                  includedThemesObj[
                    `[data-theme=${config("artbcui.darkTheme")}]`
                  ],
              },
            });
          }
        } else if (config("daisyui.darkTheme") === false) {
          // disables prefers-color-scheme: dark
        } else {
          if (themeOrder[0] != "dark" && themeOrder.includes("dark")) {
            addBase({
              ["@media (prefers-color-scheme: dark)"]: {
                [":root"]: includedThemesObj["[data-theme=dark]"],
              },
            });
          }
        }
        // theme 0 with name
        addBase({
          ["[data-theme=" + themeOrder[0] + "]"]:
            includedThemesObj["[data-theme=" + themeOrder[0] + "]"],
        });
        // theme 1 with name
        addBase({
          ["[data-theme=" + themeOrder[1] + "]"]:
            includedThemesObj["[data-theme=" + themeOrder[1] + "]"],
        });
      } else {
        addBase({
          ["[data-theme=" + themeName + "]"]:
            includedThemesObj["[data-theme=" + themeName + "]"],
        });
      }
    });

    return {
      includedThemesObj: includedThemesObj,
      themeOrder: themeOrder,
    };
  },
};
