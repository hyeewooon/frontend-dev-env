const path = require("path");
const MyWebpackPlugin = require("./my-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        // webpack5부터 url-loader는 Asset Modules로 대체
        test: /\.(jpeg|jpg|png|gif|svg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 2 * 1024,
          },
        },
        generator: {
          filename: "images/[name][ext]?[hash]",
        },
      },
    ],
  },
  plugins: [new MyWebpackPlugin()],
};
