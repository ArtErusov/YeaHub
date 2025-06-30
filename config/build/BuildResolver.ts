import { Configuration } from "webpack";
import { BuildOptions } from "./types";
import path from 'path';

export function buildResolver(options: BuildOptions): Configuration['resolve'] {
    return {
      extensions: ['.tsx', '.ts', '.js'],
      alias: {
        '@': path.resolve(__dirname, '../../src'),
      }
    }
}