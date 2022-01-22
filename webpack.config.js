const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "frontend", "index.tsx"),
  target: "web",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    alias: {
      "@pages": path.resolve(__dirname, "frontend", "pages"),
      "@common": path.resolve(__dirname, "frontend", "common"),
      "@assets": path.resolve(__dirname, "frontend", "assets"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(svg|jpg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: "source-map-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "frontend", "index.html"),
    }),
  ],
};
