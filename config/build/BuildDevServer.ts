import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import type { BuildOptions } from './types';

export function buildDevServer({ port }: BuildOptions): DevServerConfiguration {
  return {
    port: port ?? 3000,
    open: true,
    hot: true,
    historyApiFallback: true,
  };
}
