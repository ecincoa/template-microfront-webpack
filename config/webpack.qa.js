/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { HotModuleReplacementPlugin, DefinePlugin } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');
const packageJson = require('./../package.json');
const { merge } = require('webpack-merge');

/**
 * @type {import('webpack').Configuration}
 */
const devConfig = {
  mode: 'development',
  devServer: {
    port: '3001',
    historyApiFallback: {
      index: '/index.html',
    },
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
    new HotModuleReplacementPlugin(),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new MiniCssExtractPlugin(),
    new DefinePlugin({
      'process.env': JSON.stringify('qa'),
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
