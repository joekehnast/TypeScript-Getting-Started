const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: ['./app/app.ts'],
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: '/index.html'
        })
    ],
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: './dist/app.js',
    },
    devServer: {
        watchFiles: {
            paths: ['app/**/*']
        }
    }
};