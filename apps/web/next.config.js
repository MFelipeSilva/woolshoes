const path = require("path");

module.exports = {
  reactStrictMode: true,
  experimental: {
    webpackBuildWorker: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias["@"] = path.join(__dirname, "/");
    }

    return config;
  },
};
