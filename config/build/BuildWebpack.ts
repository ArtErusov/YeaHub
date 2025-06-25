import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types';

export function buildWebpack(options: BuildOptions): webpack.Configuration {
  const { mode, isDev, paths, port } = options;

  return {
    mode,
    entry: path.resolve(__dirname, '..', '..', paths.entry),
    output: {
      path: path.resolve(__dirname, '..', '..', paths.output),
      filename: 'bundle.[contenthash].js',
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({ template: path.resolve(__dirname, '..', '..', paths.html) }),
      new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' })
    ],
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    devtool: isDev ? 'inline-source-map' : false,
    devServer: isDev ? {
      port: port ?? 3000,
      open: true,
      hot: true,
    } : undefined,
  };
}