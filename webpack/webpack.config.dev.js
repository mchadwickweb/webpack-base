const base = require('./webpack.config.base');
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

// Dev environment variables.
const env = require('../config/dev.env')

module.exports = merge(base, {
  plugins: [
    new webpack.DefinePlugin({
        'process.env': JSON.stringify(env)
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    port: 8080,
    compress: true,
    open: true
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
    ]
  }
})