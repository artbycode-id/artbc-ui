//  config colors used tailwindcss
function withOpacityValue(variable, fallbackColor) {
  return ({ opacityValue }) => {
    let fallbackColorValue = "";
    if (fallbackColor) {
      fallbackColorValue = `, var(${fallbackColor})`;
    }
    if (opacityValue === undefined) {
      return `hsl(var(${variable}${fallbackColorValue}))`;
    }
    return `hsl(var(${variable}${fallbackColorValue}) / ${opacityValue})`;
  };
}

let colorObject = {
  transparent: "transparent",
  current: "currentColor",

  primary: withOpacityValue("--p"),
  "primary-30": withOpacityValue("--p30"),
  "primary-50": withOpacityValue("--p50"),
  "primary-200": withOpacityValue("--p200"),
  "primary-400": withOpacityValue("--p400"),
  "primary-700": withOpacityValue("--p700"),

  secondary: withOpacityValue("--s"),
  "secondary-30": withOpacityValue("--s30"),
  "secondary-50": withOpacityValue("--s50"),
  "secondary-100": withOpacityValue("--s100"),
  "secondary-200": withOpacityValue("--s200"),
  "secondary-400": withOpacityValue("--s400"),
  "secondary-600": withOpacityValue("--s600"),
  "secondary-700": withOpacityValue("--s700"),
  "secondary-900": withOpacityValue("--s900"),

  "shades-white": withOpacityValue("--sw"),
  "shades-black": withOpacityValue("--sb"),

  neutral: withOpacityValue("--n"),
  "neutral-focus": withOpacityValue("--nf", "--n"),
  "neutral-content": withOpacityValue("--nc"),

  "base-100": withOpacityValue("--b1"),
  "base-200": withOpacityValue("--b2", "--b1"),
  "base-300": withOpacityValue("--b3", "--b2"),
  "base-content": withOpacityValue("--bc"),

  info: withOpacityValue("--in"),
  "info-30": withOpacityValue("--in30"),
  "info-50": withOpacityValue("--in50"),
  "info-200": withOpacityValue("--in200"),
  "info-400": withOpacityValue("--in400"),
  "info-700": withOpacityValue("--in700"),

  success: withOpacityValue("--su"),
  "success-30": withOpacityValue("--su30"),
  "success-50": withOpacityValue("--su50"),
  "success-200": withOpacityValue("--su200"),
  "success-400": withOpacityValue("--su400"),
  "success-700": withOpacityValue("--su700"),

  warning: withOpacityValue("--wa"),
  "warning-30": withOpacityValue("--wa30"),
  "warning-50": withOpacityValue("--wa50"),
  "warning-200": withOpacityValue("--wa200"),
  "warning-400": withOpacityValue("--wa400"),
  "warning-700": withOpacityValue("--wa700"),

  error: withOpacityValue("--er"),
  "error-30": withOpacityValue("--er30"),
  "error-50": withOpacityValue("--er50"),
  "error-200": withOpacityValue("--er200"),
  "error-400": withOpacityValue("--er400"),
  "error-700": withOpacityValue("--er700"),
};

module.exports = colorObject;
