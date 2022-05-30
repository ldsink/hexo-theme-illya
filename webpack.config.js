const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env, argv) => {
  const devMode = argv.mode === "development";
  return {
    watch: devMode,
    entry: {
      main: "./source-src/js/main.js",
      slider: "./source-src/js/slider.js",
      mobile: ["babel-polyfill", "./source-src/js/mobile.js"],
    },
    output: {
      path: __dirname + "/source",
      publicPath: "",
      filename: "[name].[chunkhash:7].js",
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
        {
          test: /\.(sa|sc|c)ss$/i,
          use: [
            devMode ? "style-loader" : MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                importLoaders: 2,
                // 0 => no loaders (default);
                // 1 => postcss-loader;
                // 2 => postcss-loader, sass-loader
              },
            },
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: [
                    [
                      "postcss-import",
                      "postcss-preset-env",
                      "cssnano",
                    ],
                  ],
                },
              },
            },
            "sass-loader",
          ],
        },
        {
          test: /\.(png|svg|jpe?g|gif|webp)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name].[hash:7][ext][query]'
          },
        },
        {
          test: /\.(woff|eot|ttf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name].[hash:7][ext][query]'
          },
        },
        {
          test: /\.html$/i,
          loader: "html",
        },
      ],
    },
    plugins: [
      // new CleanWebpackPlugin(["source/*"]),
      new CleanWebpackPlugin({ verbose: true }),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: devMode ? "[name].css" : "[name].[chunkhash:7].css",
        chunkFilename: devMode ? "[id].css" : "[id].[chunkhash:7].css",
      }),
      new HtmlWebpackPlugin({
        inject: false,
        cache: false,
        template: "./source-src/css.ejs",
        filename: "../layout/_partial/css.ejs",
      }),
      new HtmlWebpackPlugin({
        inject: false,
        cache: false,
        template: "./source-src/script.ejs",
        filename: "../layout/_partial/script.ejs",
      }),
    ],
    optimization: {
      minimizer: [
        new TerserPlugin({ extractComments: false }),
      ],
    },
  };
};
