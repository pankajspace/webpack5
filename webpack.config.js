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
      // {
      //   test: /\.(png|jpg)$/,
      //   type: "asset/resource", //for big files like images, fonts
      //   // type: "asset/inline", //for small files like svg etc
      //   // type: "asset/source", //for text files 
      //   // type: "asset",  //webpack will decide based on file size what to do
      // },
      // {
      //   test: /\.(png|jpg)$/,
      //   type: "asset/inline",
      // },
      {
        test: /\.(png|jpg)$/,
        type: "asset",  //if filesize is less than 8kb webpack will handle it as asset/inline and if greater webpack will handle it as asset/resource,
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024  //this property is used to midify default 8kb size of webpack for general resource
          }
        }
      },
      {
        test: /\.(txt)$/,
        type: "asset/source", //for adding text files as inline string, this will not generate a separate file
      },
    ]
  }
}