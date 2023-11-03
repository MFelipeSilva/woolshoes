import { fileURLToPath } from "url";
import path from "path";

function getCurrentDirname(importMetaUrl) {
  const __filename = fileURLToPath(importMetaUrl);
  return path.dirname(__filename);
}

export default {
  webpack: (config) => {
    const currentDir = getCurrentDirname(import.meta.url);
    config.resolve.alias["@"] = currentDir;

    return config;
  },
};
