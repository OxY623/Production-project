import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";
import CopyWebpackPlugin from "copy-webpack-plugin";

export function buildPluginsConfig({paths, isDev}: BuildOptions): webpack.WebpackPluginInstance[] {
  const copyPlugin = new CopyWebpackPlugin({
    patterns: [{from: "locales", to: "locales"}],
  });

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
    copyPlugin,
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
