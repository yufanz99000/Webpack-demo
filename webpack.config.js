var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
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

