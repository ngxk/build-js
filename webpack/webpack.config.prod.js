const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    // Mode
    mode: "production",

    // Configure entry and output
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "bundle.js",
    },

    // Plugins HTML
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
        new MiniCssExtractPlugin(),
    ],

    // Configure style-css and css-loader
    module: {
        rules: [
            //{
            //    test: /\.css$/i,
            //    use: [
            //        {
            //            loader: MiniCssExtractPlugin.loader,
            //        },
            //        "css-loader",
            //    ],
            //},
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },

    // DevTools
    // devtool: "eval-source-map"
};