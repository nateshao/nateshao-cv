module.exports = {
  presets: [
    [
      "@babel/env",
      {
        modules: "auto"
      }
    ]
  ],
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        corejs: 3
      }
    ]
  ]
};
