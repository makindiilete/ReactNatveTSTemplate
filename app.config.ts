// import "dotenv/config";

type ENV_TYPES = "development" | "master" | "staging" | "production";

const GET_CUSTOM_CONFIG = {
  development: {
    name: "VeeChange",
    slug: "veechangedev",
    bundleIdentifier: "com.veechange.dev",
    version: "1.0.0",
    versionCode: 1,
  },
  master: {
    name: "VeeChange",
    slug: "veechangemaster",
    bundleIdentifier: "com.veechange.master",
    version: "1.0.0",
    versionCode: 1,
  },
  staging: {
    name: "VeeChange Staging",
    slug: "veechangestaging",
    bundleIdentifier: "com.veechange.staging",
    version: "1.0.0",
    versionCode: 1,
  },
  production: {
    name: "VeeChange", // Please don't change this
    slug: "veechange", // Please don't change this
    bundleIdentifier: "com.veechange", // Please don't change this
    version: "1.0.0",
    versionCode: 1,
  },
};

const enviroment = process.env.NODE_ENV ? process.env.NODE_ENV : "development"; // Default to development
const ENV_CONFIG = GET_CUSTOM_CONFIG[enviroment as ENV_TYPES];

export default ({ config }: any) => {
  return {
    ...config,
    name: ENV_CONFIG.name,
    slug: ENV_CONFIG.slug,
    version: ENV_CONFIG.version,
    ios: {
      bundleIdentifier: ENV_CONFIG.bundleIdentifier,
      buildNumber: ENV_CONFIG.version,
    },
    android: {
      package: ENV_CONFIG.bundleIdentifier,
      versionCode: ENV_CONFIG.versionCode,
    },
  };
};
