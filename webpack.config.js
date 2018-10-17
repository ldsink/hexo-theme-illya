const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: {
        main: "./source-src/js/main.js",
        slider: "./source-src/js/slider.js",
        mobile: ["babel-polyfill", "./source-src/js/mobile.js"]
    },
    output: {
        path: __dirname + "/source",
        filename: "[name].[chunkhash:6].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader?cacheDirectory',
                exclude: /node_modules/
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(gif|jpg|png)\??.*$/,
                loader: 'url-loader?limit=500&name=img/[name].[ext]'
            },
            {
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                loader: "file-loader?name=fonts/[name].[hash:6].[ext]"
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: devMode ? '[name].css' : '[name].[hash:6].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash:6].css',
        }),
        new HtmlWebpackPlugin({
            inject: false,
            cache: false,
            template: 'source-src/css.ejs',
            filename: '../layout/_partial/css.ejs'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            cache: false,
            template: 'source-src/script.ejs',
            filename: '../layout/_partial/script.ejs'
        }),
    ],
    watch: devMode
};
