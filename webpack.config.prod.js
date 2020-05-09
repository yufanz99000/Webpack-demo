
/* ---合并两个config文件之前的代码---
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    entry: './src/component.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'pOMELO',
            template: 'src/assets/index.html'//以template的模版生成新的html网页
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
        }),
    ],

    module: {
        rules: [
            {
                test: /\.css$/i,
                //use: ['style-loader', 'css-loader'],
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '/public/path/to/',
                        },
                    },
                    'css-loader',
                ],
            },
        ],
    },
};
*/
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");
const base = require('./webpack.config.base.js')

module.exports = {
  ...base,
  mode: "production",
  plugins: [
    ...base.plugins,
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
  ],
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          'css-loader',
        ],
      }
    ]
  }
};