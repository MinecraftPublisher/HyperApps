var path = require('path');

module.exports = {
  //...
  devServer: {
    static: {
      directory: __dirname,
    },
    compress: true,
    port: 5000,
  },
};