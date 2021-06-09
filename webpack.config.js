const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
    // publicPath: "auto",  //default in webpack 5
    // publicPath: "http://some-cdn.com/",  //when our assets are located in cdn
    // publicPath: "dist/"   //path where assets are located
    publicPath: ""
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
      // {
      //   test: /\.(css)$/,
      //   use: [
      //     // npm i -D style-loader css-loader
      //     "style-loader", //takes the content from css-loader and loads it into html file using style tags
      //     "css-loader"  //reads the contents of css file and returns js representation
      //   ]
      // },
      {
        test: /\.(css)$/,
        use: [
          MiniCssExtractPlugin.loader,  //extracts css file into separate bundle
          "css-loader"  //reads the contents of css file and returns js representation
        ]
      },
      // {
      //   test: /\.(scss)$/,
      //   use: [
      //     // npm i -D sass sass-loader
      //     "style-loader", //takes the content from css-loader and loads it into html file using style tags
      //     "css-loader",  //takes the contents from sass-loader and returns js representation
      //     "sass-loader"  //reads the sass file contents and convert to css
      //   ]
      // },
      {
        test: /\.(scss)$/,
        use: [
          MiniCssExtractPlugin.loader,  //extracts css file into separate bundle
          "css-loader",  //takes the contents from sass-loader and returns js representation
          "sass-loader"  //reads the sass file contents and convert to css
        ]
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          // npm i -D @babel/core babel-loader @babel/preset-env @babel/plugin-proposal-class-properties
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }
      }
    ]
  },
  plugins: [
    // npm i -D terser-webpack-plugin 
    new TerserPlugin(),  //webpack 5 includes this pluging by default so no need add here for webpack 5
    // npm i -D mini-css-extract-plugin
    new MiniCssExtractPlugin({
      filename: "styles.[contenthash].css"
    }),
    // npm i -D clean-webpack-plugin
    // new CleanWebpackPlugin(), //it will delete the folder mentioned in "path" everytime
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        "**/*",  //delete all folders and files in folder mentioned in "path"
        path.join(process.cwd(), "build/**/*")  //for deleting multiple folders
      ]
    }),
    // npm i -D html-webpack-plugin
    new HtmlWebpackPlugin(),
  ]
}