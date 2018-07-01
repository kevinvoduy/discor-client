const webpack = require('webpack');
const path = require('path');
const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
require('dotenv').config();

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  // entry: slsw.lib.entries,
  target: 'node',
  externals: [nodeExternals()],
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: __dirname,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015'],
        },
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[sha512:hash:base64:7].[ext]',
              publicPath: 'assets/',
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'NEWS_API_KEY': JSON.stringify(process.env.NEWS_API_KEY),
      }
    }),
    new FriendlyErrorsWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
    new CopyWebpackPlugin([
      { from: 'public/assets', to: 'assets' }
    ]),
  ],
  optimization: {
    minimize: process.env.NODE_ENV === 'production' ? true : false,
    mergeDuplicateChunks: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  watch: false,
  performance: {
    hints: false,
  },
};
