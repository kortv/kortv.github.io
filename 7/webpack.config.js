var ExtractTextPlugin = require('extract-text-webpack-plugin');

var path = require('path');
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
      { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader',
        query: {
            presets: ['es2015', 'react', 'stage-0']
          }
        },

      { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader?module&localIdentName=[name]__[local]__[hash:base64:5]!autoprefixer-loader!resolve-url!sass?sourceMap")},
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader?module!cssnext-loader")}
    ]
  },

  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true }),
/*    new CompressionPlugin({
      asset: "{file}.gz",
      algorithm: "gzip",
      regExp: /\.js$|\.html$|\.css$/,
      threshold: 10240,
      minRatio: 0.8
    })
*/  ],
  watch: true,
  devtool: "source-map"
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