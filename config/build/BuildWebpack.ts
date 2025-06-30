import path from 'path';
import webpack from 'webpack';
import { BuildOptions } from './types';
import { buildLoaders } from './BuildLoaders';
import { buildPlugins } from './BuildPlugins';
import { buildResolver } from './BuildResolver';
import { buildDevServer } from './BuildDevServer';

export function buildWebpack(options: BuildOptions): webpack.Configuration {
  const { mode, isDev, paths } = options;

  return {
    mode,
    entry: path.resolve(paths.entry),
    output: {
      path: path.resolve(paths.output),
      filename: 'bundle.[contenthash].js',
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolver(options),
    devtool: isDev ? 'inline-source-map' : false,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
