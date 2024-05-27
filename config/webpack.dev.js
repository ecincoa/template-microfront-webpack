/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');
const { ModuleFederationPlugin } = require('webpack').container;
const packageJson = require('../package.json');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const webpack = require('webpack');

/**
 * @type {import('webpack').Configuration}
 */
const devConfig = {
  mode: 'development',
  devServer: {
    port: 3000,
    liveReload: true,
    open: true,
    historyApiFallback: {
      index: 'index.html',
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    },
    hot: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'template',
      filename: 'remoteEntry.js',
      exposes: {
        "./Login": "./src/layouts/Login.tsx",
      },
      shared: {
        ...packageJson.dependencies,
        react: {
          singleton: true,
          requiredVersion: packageJson.dependencies.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: packageJson['react-dom'],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin(),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify('dev'),
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
