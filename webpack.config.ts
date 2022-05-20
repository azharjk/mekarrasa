import path from 'path';
import { Configuration } from 'webpack';

const config: Configuration = {
  mode: 'development',
  watch: true,
  entry: './app/index.ts',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'public/dist/')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
};

module.exports = config;
