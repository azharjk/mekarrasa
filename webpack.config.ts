import path from "path";
import { Configuration } from "webpack";

const config: Configuration = {
  mode: "development",
  watch: true,
  entry: "./app/index.tsx",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "public/dist/"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};

module.exports = config;
