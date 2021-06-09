const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    // publicPath: "auto",  //default in webpack 5
    // publicPath: "http://some-cdn.com/",  //when our assets are located in cdn
    publicPath: "dist/"   //path where assets are located
  },
  mode: "none",
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: "asset/resource", //for images, fonts
        // type: "asset/inline", //for svg etc
        // type: "asset/source", //for text files 
        // type: "asset",  //webpack will decide based on file size what to do
      },
      {
        test: /\.(ttf)$/,
        type: "asset/resource",
      }
    ]
  }
}