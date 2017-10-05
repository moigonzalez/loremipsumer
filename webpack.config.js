const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'content.js',
    path: path.resolve('./app')
  },
  devtool: 'cheap-eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
          quiet: true
        }
      },
      {
        test: /\.js?$/,
        loader: 'babel-loader'
      }
    ]
  }
};
