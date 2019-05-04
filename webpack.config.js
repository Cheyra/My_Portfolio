//this file allows front end and back end to communicate
var path = require("path");
var webpack = require("webpack");
module.exports = {
  mode: "development",
  entry: ["babel-polyfill", "./client/index.js"],
  output: {
    path: path.join(__dirname, "client"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["@babel/preset-env", "@babel/react"],
          plugins: ["@babel/plugin-proposal-class-properties"]
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: "file-loader"
      }
    ]
  }
};
