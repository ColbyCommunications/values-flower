import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import packageJson from './package.json';

const main = () => {
  const entry = {
    [packageJson.name]: ['./example/src/index.js'],
  };
  const filename = `[name].js`;

  return {
    entry,
    output: {
      filename,
      path: path.resolve(__dirname, 'example'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: path.resolve(__dirname, 'example/index.html'),
        template: 'example/src/index.html',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'env', 'stage-0'],
              plugins: [
                [
                  'transform-runtime',
                  {
                    helpers: false,
                    polyfill: false,
                    regenerator: true,
                  },
                ],
              ],
            },
          },
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: { loader: 'file-loader', options: { publicPath: '' } },
        },
      ],
    },
    devServer: {
      open: true,
      openPage: 'values-flower/example/',
      publicPath: '/values-flower/',
    },
    devtool: 'source-maps',
  };
};

export default main;
