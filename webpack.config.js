const path = require('path');

module.exports = {
  entry: './public/src/app.js',
  output: {
    filename: './public/build/[name].bundle.js',
    sourceMapFilename: './public/build/bundle.map'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}
