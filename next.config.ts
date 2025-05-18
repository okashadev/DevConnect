import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";
const webpack = require("webpack");

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /^oracledb$/,
      })
    );
    return config;
  },
};

export default withFlowbiteReact(nextConfig);