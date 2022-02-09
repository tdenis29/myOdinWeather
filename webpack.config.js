const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          // html configuration
          test: /\.html$/,
          use: {
            loader: "html-loader"
          }
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
     
        },
      ]
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
        },
      ],
    },
    
    devtool: 'source-map',
    resolve: {
      extensions: ['*', '.js']
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {from: "src/assets/icons", to: "assets/icons/",}
        ],
      }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          title: 'Hello Webpack bundled JavaScript Project',
          template: path.resolve(__dirname, './src/index.html'),
        })
      ],
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'bundle.js',
      assetModuleFilename: 'assets/[name][ext]'
    },
    devServer: {
        static: path.resolve(__dirname, './dist'),
    }
  };