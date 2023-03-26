const path = require('path');

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';

// const target = devMode ? 'web' : 'browserslist';
const target = 'web';

const devtool = devMode ? 'source-map' : undefined;

const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode,
    target,
    devtool,
    entry: path.resolve(__dirname, 'src', 'main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
           template: path.resolve(__dirname, 'src', 'index.html') 
        }),
        //
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
          })
          //
    ],
    module: {
        rules: [
          {
            test: /\.html$/i,
            loader: "html-loader",
          },
          {
            test: /\.css$/i,
            use: [
                MiniCssExtractPlugin.loader, "css-loader", 'postcss-loader'
            ],
          },
        ],
      },
}