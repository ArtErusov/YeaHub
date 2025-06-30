import { buildWebpack } from './config/build/BuildWebpack';
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import type webpack from 'webpack';
import path from 'path';

type Mode = "production" | "development";

interface EnvVariables {
  mode: Mode;
  port: number;
}

export default (env: EnvVariables): webpack.Configuration => {
  const src = path.resolve(__dirname, 'src');

  return buildWebpack({
    mode: env.mode,
    port: env.port,
    isDev: env.mode === "development",
    paths: {
      entry: './src/index.tsx',
      html: './public/index.html',
      output: './buildTest',
      src, 
    }
  });
};