const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});

const webpack = require('webpack');

module.exports = {
  entry: {
     app: './src/index.js'
  },
  devServer: {
    hot: true
  },
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  mode:'development',
  module: {
    rules: [
      { test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }, {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },
  plugins: [
        HtmlWebpackPluginConfig,
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
  ]
}