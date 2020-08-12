const path = require("path");

module.exports = {
  name: "wordrelay-setting",
  mode: "development", // 실서비스시 production
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"],
  },

  // input :: client.jsx, WordRelay.jsx
  entry: {
    //   client.jsx에서 WordRelay.jsx를 import 하기 때문에 client.jsx만 entry에 넣어준다.
    app: ["./client"],
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-class-properties"],
        },
      },
    ],
  },

  // output :: app.js
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  },
};
