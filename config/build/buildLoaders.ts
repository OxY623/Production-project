// import webpack from 'webpack';
// import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// import { BuildOptions } from './types/config';

// export function buildLoadersConfig({
//   isDev,
// }: BuildOptions): webpack.RuleSetRule[] {
//   const cssLoader = {
//     test: /\.s[ac]ss$/i,
//     use: [
//       isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
//       {
//         loader: 'css-loader',
//         options: {
//           modules: {
//             auto: (resPath: string) => Boolean(resPath.includes('.module.')),
//             localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
//           },
//         },
//       },
//       'sass-loader',
//     ],
//   };

//   const typescriptLoader = {
//     test: /\.tsx?$/,
//     use: 'ts-loader',
//     exclude: /node_modules/,
//   };

//   return [typescriptLoader, cssLoader];
// }

import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildLoadersConfig({
  isDev,
}: BuildOptions): webpack.RuleSetRule[] {
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    exclude: /\.module\.s[ac]ss$/i, // Исключаем .module.scss файлы
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: false, // Обычные SCSS файлы не используют модули
        },
      },
      'sass-loader',
    ],
  };

  const cssModuleLoader = {
    test: /\.module\.s[ac]ss$/i, // Обрабатываем только .module.scss файлы
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')), // Должен использоваться только для .module.scss файлов
            localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]', // Имя класса для модулей
          },
        },
      },
      'sass-loader',
    ],
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [typescriptLoader, cssLoader, cssModuleLoader];
}
