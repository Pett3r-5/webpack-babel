var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
// var ngAnnotateAdfPlugin = require( 'ng-annotate-adf-plugin')
// 'ng-annotate-adf-plugin',

 module.exports = {
     entry: ['.\\src\\index.js', '.\\src\\app-angular.js', '.\\src\\base-controller.js', '.\\src\\directives.js'],
     output: {
         path: path.resolve(__dirname, 'public'),
         filename: 'app.bundle.js'
     },
     module: {
       rules: [
           {
             test: /\.js/,
             exclude: /(node_modules|bower_components)/,
             use: [
               {
               loader: 'babel-loader',
               options: {
                 presets: ['@babel/preset-env']
                }
              },
              { loader: 'ng-annotate',
              // options: {
              //   ngAnnotate: "ng-annotate-patched",
              //   es6: true,
              //   explicitOnly: false
              // }
             }
            ]
           }
        ]
      },
      stats: {
          colors: true
      },
     plugins: [ new HtmlWebpackPlugin({ template: './public/index.html' }), new ngAnnotatePlugin({add: true}) ],
     devtool: 'source-map',
     watch: true
 }
