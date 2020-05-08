var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js'
    },

    plugins: [new HtmlWebpackPlugin({
        title: 'Pomelo',
        template: 'src/assets/index.html'
    })],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['to-string-loader', 'css-loader'],
                
            },
        ],
    },
};

