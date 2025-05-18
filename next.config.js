const webpack = require('webpack');

module.exports = {
  webpack: (config) => {
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /^oracledb$/,
      })
    );
    return config;
  },
};
