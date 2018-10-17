const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production'

const minifyHTML = {
    collapseInlineTagWhitespace: true,
    collapseWhitespace: true,
    minifyJS: true
};

module.exports = {
    entry: {
        main: "./source-src/js/main.js",
        slider: "./source-src/js/slider.js",
        mobile: ["babel-polyfill", "./source-src/js/mobile.js"]
    },
    output: {
        path: __dirname + "/source",
        // publicPath: "./",
        filename: "[name].[chunkhash:6].js"
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        })
    ],
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
    // resolve: {
    //     alias: {
    //         'vue$': 'vue/dist/vue.common.js'
    //     }
    // },
    // plugins: [
    //     new ExtractTextPlugin('[name].[chunkhash:6].css'),
    //     new webpack.DefinePlugin({
    //         'process.env.NODE_ENV': '"production"'
    //     }),
    //     new HtmlWebpackPlugin({
    //         inject: false,
    //         cache: false,
    //         minify: minifyHTML,
    //         template: './source-src/script.ejs',
    //         filename: '../layout/_partial/script.ejs'
    //     }),
    //     new HtmlWebpackPlugin({
    //         inject: false,
    //         cache: false,
    //         minify: minifyHTML,
    //         template: './source-src/css.ejs',
    //         filename: '../layout/_partial/css.ejs'
    //     })
    // ],
    // watch: true
};
