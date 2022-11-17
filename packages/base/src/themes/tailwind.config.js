module.exports = {
  content: [{ raw: "" }],
  corePlugins: {
    preflight: false,
  },
  artbcui: {
    base: false,
  },
  plugins: [require("../index")],
};
