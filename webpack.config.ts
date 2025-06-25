import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

type Mode = "production" | "development"

interface EnvVariables{
  mode: Mode
  port: number
}

export default  (env: EnvVariables) => {

const isDev = env.mode === "development"

  const config: webpack.Configuration = {
    mode: env.mode ?? 'development',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.[contenthash].js',
      clean: true,
    },
    plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }), new MiniCssExtractPlugin()],
    module: {
      // Порядок важен
      rules: [
           {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
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
    devtool: isDev && "inline-source-map" ,
    devServer : isDev ? {
      port: env.port ?? 3000,
      open:true,
    } : undefined,
  };
  return config;
};
