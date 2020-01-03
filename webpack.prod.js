const path = require('path');
const commen = require('./webpack.common');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});


module.exports = merge(commen, {
  mode: "production",
  output: {
    filename: "[name].[contentHash].bundled.js",
    path: path.resolve("dist")
  },
  optimizations: {
    minimizer: new OptimizeCssAssetsPlugin(), new TerserPlugin()
  },
  plugins: [
    htmlPlugin,
    new MiniCssExtractPlugin({ filename: "[name].[contentHash].css"}),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: {
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        }
      }
    ]
  }
});