import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";

export function buildPluginsConfig({paths, isDev}: BuildOptions): webpack.WebpackPluginInstance[] {
  let plugins = [
    new HtmlWebpackPlugin({
      // title: 'My App',
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css", // Имя для извлеченного CSS
      chunkFilename: "[id].[contenthash].css", // Для чанков
    }),
    new webpack.DefinePlugin({__IS_DEV__: JSON.stringify(isDev)}),
  ];

  if (isDev) {
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
      }),
    );
  }

  return plugins;
}
