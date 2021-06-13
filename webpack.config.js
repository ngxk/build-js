const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  // Mode development
  mode: 'development',

  // Configure entry and output
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    // path: __dirname + '/dist',
    filename: 'bundle.js',
  },

  // Plugin for HTML
  plugins: [new HtmlWebpackPlugin({
    template: './src/main.html'
  })],

  // Configure style-css and css-loader
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};