var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      //loader: 'react-hot!babel'
      loader: 'react-hot-loader/webpack'
    }]
  },
  resolve: {
    extensions: ['', '.js']
  },
  output: {
    path: 'docs',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './docs',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
