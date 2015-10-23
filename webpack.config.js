var path = require('path');
var webpack = require('webpack');
var argv = require('minimist')(process.argv.slice(2));

var DEBUG = !argv.release;

module.exports = [{
  entry: {
    bundle: './src/app/app.module.js'
  },
  output: {
    path: 'build/public/scripts',
    filename: 'bundle.js'
  },
  cache: DEBUG,
  debug: DEBUG,
  devtool: DEBUG ? '#inline-source-map' : false,
  stats: {
    colors: true,
    reasons: DEBUG
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js','.module.js','.routes.js']
  },
  externals: [
    {
      'lodash': '_',
      'angular': 'angular',
      'angualr-ui': 'angular-ui'
    }
  ],
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin()
  ].concat(DEBUG ? [] : [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.AggressiveMergingPlugin()
    ]),
  module: {
    preLoaders: [],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel'
      }
    ]
  }
}];
