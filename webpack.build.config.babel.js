import path from 'path';
import webpack from 'webpack';

import packageJson from './package.json';

const main = () => {
  const PROD = process.argv.includes('-p');
  const min = PROD ? '.min' : '';
  const entry = {
    [packageJson.name]: ['./src/js/index.js'],
  };
  const filename = `[name]${min}.js`;

  return {
    entry,
    output: {
      filename,
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'env', 'stage-0'],
              plugins: ['transform-runtime'],
            },
          },
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: { loader: 'file-loader', options: { publicPath: '' } },
        },
      ],
    },
  };
};

export default main;
