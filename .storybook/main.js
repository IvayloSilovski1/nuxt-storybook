const path = require('path');

module.exports = {
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    });
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: [
        // path.resolve(__dirname, '../assets/**/*.scss'),
        // path.resolve(__dirname, '../assets/style-resources.scss'),
        path.resolve(__dirname, '../assets/main.scss'),
      ]
    });

    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../")
    }
    console.log('Webpack config:', config.module.rules)
    // Return the altered config
    return config;
  },

  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    // {
    //   name: '@storybook/preset-scss',
    //   options: {
    //     sassLoaderOptions: {
    //       data: `@import "../assets/all.scss";`, // <-- note this is ./ not ../ as above
    //     },
    //   }
    // }
  ]
}
