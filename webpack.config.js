const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/typescript/index.ts",
  output: {
    filename: "flight-indicators.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    contentBase: "./dist",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        // use: ["babel-loader", "ts-loader"],
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === "development",
              publicPath: "./dist/styles/",
            },
          },
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new CopyPlugin([{ from: "src/img", to: "img" }]),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "flight-indicators.css",
    }),
    new CleanWebpackPlugin(),
  ],
};
