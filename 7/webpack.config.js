var ExtractTextPlugin = require('extract-text-webpack-plugin');

var path = require('path');
var postcss = require('postcss');
  

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'index.js',
    path: path.resolve('./build'),
    libraryTarget: 'umd'
  }, 

  module: {
    loaders: [

      { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")},
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader?module!cssnext-loader")}
    ]
  },

  // Provide the Local Scope plugin to postcss-loader:
  postcss: [ require('postcss-local-scope')],

  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true })
  ]
};
/*
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var path = require('path');
var postcss = require('postcss');
  

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
      { test: /\.scss$/, loaders: ["style", "css", "sass"] },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader') }
    ]
  },

  // Provide the Local Scope plugin to postcss-loader:
  postcss: [ require('postcss-local-scope')],
  

  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true })
  ]
};
*/