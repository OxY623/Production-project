import { ResolveOptions } from 'webpack';

export function buildResolvesConfig(): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
  };
}
