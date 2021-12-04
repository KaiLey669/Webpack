const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './index.js',
    module: {},
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack test',
            template: path.resolve(__dirname, './index.html'),
            filename: 'index.html',
        })
    ],

    mode: 'production'
};