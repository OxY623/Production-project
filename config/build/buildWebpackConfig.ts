import { BuildOptions } from './types/config';
import webpack from 'webpack';
import { buildLoadersConfig } from './buildLoaders';
import { buildPluginsConfig } from './buildPlugins';
import { buildResolvesConfig } from './buildResolve';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(
  options: BuildOptions,
): webpack.Configuration {
  const { paths, mode, isDev } = options;
  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].bundle.js',
      path: paths.build,
      clean: true,
    },
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
    plugins: buildPluginsConfig(options),
    module: {
      rules: buildLoadersConfig(options),
    },
    resolve: buildResolvesConfig(options),
  };
}
