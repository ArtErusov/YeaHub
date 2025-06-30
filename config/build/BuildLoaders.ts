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
    // Images (PNG, JPG, JPEG, GIF, WEBP)
    {
      test: /\.(png|jpe?g|gif|webp)$/i,
      type: 'asset',
      parser: {
        dataUrlCondition: {
          maxSize: 8 * 1024, // 8kb - файлы меньше этого размера будут инлайнится как base64
        },
      },
      generator: {
        filename: isDev 
          ? 'images/[name][ext]' 
          : 'images/[name].[hash:8][ext]',
      },
    },
    // SVG как React компоненты через SVGR
    {
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            ext: 'tsx',
            exportType: 'default',
            memo: true, // Оборачивает в React.memo для оптимизации
            svgProps: {
              focusable: 'false', // Улучшает доступность
            },
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      removeViewBox: false, // Сохраняем viewBox
                      removeUselessStrokeAndFill: false, // Сохраняем stroke и fill
                      cleanupIds: false, // Не удаляем ID (важно для анимаций)
                    },
                  },
                },
                'removeDimensions', // Удаляем width/height, оставляем только viewBox
              ],
            },
            replaceAttrValues: {
              '#000': 'currentColor', // Заменяем черный цвет на currentColor
              '#000000': 'currentColor',
            },
          },
        },
      ],
    },
    // Fonts
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
      generator: {
        filename: isDev 
          ? 'fonts/[name][ext]' 
          : 'fonts/[name].[hash:8][ext]',
      },
    },
    // TS
    {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    },
  ];
}