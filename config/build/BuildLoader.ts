import type { ModuleOptions } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type { BuildOptions } from './types';

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
  const { isDev } = options;

  return [
    // CSS Modules
    {
      test: /\.module\.s[ac]ss$/i,
      use: [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: isDev 
                ? '[name]__[local]--[hash:base64:5]' 
                : '[hash:base64:8]',
              exportLocalsConvention: 'camelCase',
            },
            esModule: false,
            importLoaders: 1,
          },
        },
        'sass-loader',
      ],
    },
    // Global SCSS
    {
      test: /\.s[ac]ss$/i,
      exclude: /\.module\.s[ac]ss$/i,
      use: [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader',
      ],
    },
    // TS
    {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    },
  ];
}