const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        }
      ]
    },
    devtool: 'source-map',
    resolve: {
      extensions: ['*', '.js']
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          title: 'Hello Webpack bundled JavaScript Project',
          template: path.resolve(__dirname, './src/index.html'),
        })
      ],
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'bundle.js'
    },
    devServer: {
        static: path.resolve(__dirname, './dist'),
    }
  };