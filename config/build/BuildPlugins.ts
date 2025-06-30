import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
import type { Configuration } from 'webpack';
import type { BuildOptions } from './types';
import path from 'path';

export function buildPlugins({ paths, isDev }: BuildOptions): Configuration['plugins'] {
  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({ template: path.resolve(paths.html) }),
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
  ];

  if (!isDev) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  return plugins;
}