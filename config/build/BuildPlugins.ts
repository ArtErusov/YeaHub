import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type { Configuration } from 'webpack';
import type { BuildOptions } from './types';
import path from 'path';

export function buildPlugins({ paths }: BuildOptions): Configuration['plugins'] {
  return [
    new HtmlWebpackPlugin({ template: path.resolve(paths.html) }),
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
  ];
}