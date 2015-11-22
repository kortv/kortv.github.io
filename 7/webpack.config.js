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

      /*{ test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader?module&localIdentName=[name]__[local]__[hash:base64:5]!autoprefixer-loader!resolve-url!sass?sourceMap")},*/
      { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader?module&localIdentName=[name]__[local]__[hash:base64:5]!resolve-url!sass?sourceMap")},
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
