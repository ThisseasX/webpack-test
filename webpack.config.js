const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: join(__dirname, 'build'),
  },
  devServer: {
    contentBase: join(__dirname, 'build'),
    compress: true,
    port: 4000,
  },
  resolve: {
    alias: {
      components: join(__dirname, 'src', 'components'),
    },
    modules: ['node_modules', 'lib'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.(le|sa|sc|c)ss$/,
        loaders: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.less$/,
        loader: 'less-loader',
      },
      {
        test: /\.s[ac]ss$/,
        loader: 'sass-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
};
