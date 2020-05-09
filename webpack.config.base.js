const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/x.js",
  output: {
    filename: "x.[contenthash].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "XDML - 写代码啦",
      template: "src/assets/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.styl$/,
        loader: ["style-loader", "css-loader", "stylus-loader"]
      },
      {
        test: /\.less$/,
        loader: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.scss$/i,
        use: [
          "style-loader", //把js字符串生成style标签
          "css-loader", //把css语法变成js字符串
          {
            loader: "sass-loader", //把sass代码转换成css代码
            options: {
              implementation: require("dart-sass")
            }
          }
        ]
      }
    ]
  }
};