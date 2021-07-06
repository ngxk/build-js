const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // Mode devlopment or production
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
    }),
        // new MiniCssExtractPlugin(),
    ],

    // Configure style-css and css-loader
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },

    // DevTools
    // devtool: "eval-source-map"
};