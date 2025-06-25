import { buildWebpack } from './config/build/BuildWebpack';
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import type webpack from 'webpack';

type Mode = "production" | "development";

interface EnvVariables {
  mode: Mode;
  port: number;
}

export default (env: EnvVariables): webpack.Configuration => {
  return buildWebpack({
    mode: env.mode,
    port: env.port,
    isDev: env.mode === "development",
    paths: {
      entry: './src/index.tsx',
      html: './public/index.html',
      output: './buildTest',
    }
  });
};