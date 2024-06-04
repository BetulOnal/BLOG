const path = require('path');

module.exports = {
  // Webpack yapılandırması buraya gelecek
  resolve: {
    fallback: {
      "zlib": require.resolve("browserify-zlib")
    }
  }
};
