// craco.config.js
module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        webpackConfig.devtool = 'source-map';
        webpackConfig.ignoreWarnings = [
          (warning) => /Failed to parse source map/.test(warning.message),
        ];
        return webpackConfig;
      },
    },
  };
  