const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: ""
  },
  mode: "development",
  // npm i webpack-dev-server -D
  devServer: {
    open: true,
    hot: true,
    contentBase: path.resolve(__dirname, "./dist"),
    index: "index.html",
    port: 9000,
    writeToDisk: true
  },
  devtool: "source-map",
  module: {
    rules: [
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
        test: /\.(css)$/,
        use: [
          MiniCssExtractPlugin.loader,  //extracts css file into separate bundle
          "css-loader"  //reads the contents of css file and returns js representation
        ]
      },
      {
        test: /\.(scss)$/,
        use: [
          MiniCssExtractPlugin.loader,  //extracts css file into separate bundle
          "css-loader",  //takes the contents from sass-loader and returns js representation
          "sass-loader"  //reads the sass file contents and convert to css
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          // npm i -D @babel/core babel-loader @babel/preset-env @babel/plugin-proposal-class-properties
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"]
          }
        }
      }
    ]
  },
  plugins: [
    // npm i -D mini-css-extract-plugin
    new MiniCssExtractPlugin({
      filename: "styles.css"
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
    new HtmlWebpackPlugin({
      template: "public/index.html"
    })
  ]
}