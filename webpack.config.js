'use strict'

const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: __dirname + '/build/dist',
    filename: '[name].bundle.js'
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    })
  ]
}
