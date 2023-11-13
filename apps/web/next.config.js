const url = require('url');
const { fileURLToPath } = require('url');
const path = require('path');

function getCurrentDirname(importMetaUrl) {
  const fileUrl = url.pathToFileURL(importMetaUrl);

  const __filename = fileURLToPath(fileUrl);
  
  return path.dirname(__filename);
}

module.exports = {
  experimental: {
    webpackBuildWorker: true,
  },
  webpack: (config) => {
    const currentDir = getCurrentDirname(require.main.filename);
    config.resolve.alias["@"] = currentDir;
    return config;
  },
};
