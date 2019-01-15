var path = require('path');
 var webpack = require('webpack');
 var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({ template: './index.html' });

 module.exports = {
     entry: path.resolve(__dirname, '../src/index.js'),
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'app.bundle.js'
     },
     module: {
       rules: [
           {
             test: /\.js/,
             exclude: /(node_modules|bower_components)/,
             use: {
               loader: 'babel-loader',
               options: {
                 presets: ['@babel/preset-env']
               }
             }
           }
        ],
     stats: {
         colors: true
     },
     devtool: 'source-map',
     watch: true,
     plugins: [HTMLWebpackPluginConfig]
 };
