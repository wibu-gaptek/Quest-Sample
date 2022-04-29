const path = require("path");
const HtmlWebPackPlugins = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
    new HtmlWebPackPlugins({
      template: path.join(__dirname, "src", "public/index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.?js$|.?ts$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
