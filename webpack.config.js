const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const port = process.env.PORT || 3000;

module.exports = {
  entry: {
    'js/app': ['./src/index.js'],
  },
  devServer: { port: port },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/',
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
      container: path.resolve(__dirname, 'src/container'),
      hook: path.resolve(__dirname, 'src/hook'),
      lib: path.resolve(__dirname, 'lib'),
      presenter: path.resolve(__dirname, 'src/presenter'),
      util: path.resolve(__dirname, 'src/util'),
    },
    extensions: ['.jsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: 'url-loader',
        options: {
          // publicPath:'./dist/',
          name: '[name].[ext]?[hash]',
          limit: 10000,
        },
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
  ],
};
