const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/greetings.js",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "http://localhost:9001/"
  },
  mode: "development",
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 3 * 1024  //minimum size for creating a separate chunk
    }
  },
  // npm i webpack-dev-server -D
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    index: "greetings.html",
    port: 9001,
    writeToDisk: true
  },
  devtool: "source-map",
  module: {
    rules: [
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
      },
      {
        test: /\.(hbs)$/,
        // npm i -D handlebars-loader
        // npm i handlebars
        use: ["handlebars-loader"]
      }
    ]
  },
  plugins: [
    // npm i -D mini-css-extract-plugin
    new MiniCssExtractPlugin({
      filename: "[name].css"
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
      filename: "greetings.html",
      title: "Greetings",
      template: "src/index.hbs",
      minify: false
    }),
    new ModuleFederationPlugin({
      name: "GreetingsApp",
      filename: "remoteEntry.js",
      exposes: {
        "./GreetingsPage": "./src/greetings"
      }
    })
  ]
}