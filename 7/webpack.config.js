var ExtractTextPlugin = require('extract-text-webpack-plugin');

var path = require('path');
var postcss = require('postcss');
var CompressionPlugin = require("compression-webpack-plugin");
  

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'index.js',
    path: path.resolve('./build'),
    libraryTarget: 'umd'
  }, 

  module: {
    loaders: [
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.jpg$/, loader: "file-loader" },
      { test: /\.svg$/, loader: "url-loader?limit=100000" },
      { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader?module!autoprefixer-loader!sass-loader")},
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader?module!cssnext-loader")}
    ]
  },

  // Provide the Local Scope plugin to postcss-loader:
  postcss: [ require('postcss-local-scope')],

  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new CompressionPlugin({
      asset: "{file}.gz",
      algorithm: "gzip",
      regExp: /\.js$|\.html$|\.css$/,
      threshold: 10240,
      minRatio: 0.8
    })
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