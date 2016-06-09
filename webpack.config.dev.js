var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'cheap-eval-source-map',

  debug: true,

  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client?reload=true',
    path.resolve(__dirname, 'client/app.js')
  ],

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public'
  },

  module: {
    loaders: [
      { test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      { test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  postcss: [ autoprefixer ],

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}