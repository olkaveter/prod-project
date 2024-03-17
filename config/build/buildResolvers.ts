import path from 'path';
import webpack from 'webpack';

export function buildResolvers(): webpack.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [path.resolve(__dirname, '..', 'src'), 'node_modules'],
    mainFiles: ['index'],
    alias: {
      '@': path.resolve(__dirname, '..', 'src')
    }
  }} {
  
}