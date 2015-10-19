var ExtractTextPlugin = require('extract-text-webpack-plugin');

var path = require('path');

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'index.js',
    path: path.resolve('./build'),
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader') }
    ]
  },

  // Provide the Local Scope plugin to postcss-loader:
  postcss: [ require('postcss-local-scope') ],

  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true })
  ]
};