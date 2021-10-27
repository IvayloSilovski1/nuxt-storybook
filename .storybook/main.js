const path = require('path');

module.exports = {
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        // Translates CSS into CommonJS
        "css-loader",
        {
          // Compiles Sass to CSS
          loader: "sass-loader",
          options: {
            additionalData: `@import "assets/main.scss";`,
            // includePaths: [__dirname, "./assets/**/*"],
          },
        },
      ],
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "assets"),
          "~": path.resolve(__dirname, "assets"),  // point these to where you need it to go
        },
      },
    });

    // Return the altered config
    return config;
  },

  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ]
}
