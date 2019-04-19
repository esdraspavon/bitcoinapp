const debug = process.env.NODE_ENV !== "production";

module.exports = {
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/nosotros": { page: "/nosotros" }
    };
  },
  //assetPrefix: '',
  assetPrefix: !debug ? "/bitcoinapp" : ""
  /* webpack: (config, { dev }) => {
    // Perform customizations to config

    config.module.rules = config.module.rules.map(rule => {
      if (rule.loader === "babel-loader") {
        rule.options.cacheDirectory = false;
      }
      return rule;
    });
    // Important: return the modified config
    return config;
  } */
};
