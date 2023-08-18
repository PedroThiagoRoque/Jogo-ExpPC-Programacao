const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// https://www.educative.io/answers/how-to-create-a-react-application-with-webpack

const root = process.cwd();

module.exports = function (mode) {
    const isEnvProduction = mode == "production";
    const isEnvDevelopment = mode == "development";

    return {
        entry: path.resolve(root, 'src', 'index.ts'),
        output: {
            clean: true,
            path: path.resolve(root, 'build'),
            filename: '[name].[contenthash:8].js',
            chunkFilename: '[name].[contenthash:8].chunk.js',
        },

        devServer: {
            static: {
                directory: path.join(root, 'public'),
            },
            historyApiFallback: true,
            /*
            historyApiFallback: {
                // Paths with dots should still use the history fallback.
                // See https://github.com/facebook/create-react-app/issues/387.
                disableDotRule: true,
                index: "/",
            },*/
            compress: true,
            port: 9000,
        },
        stats: 'errors-warnings',
        target: ['browserslist'],
        devtool: isEnvProduction ? 'source-map' : 'cheap-module-source-map',
        module: {
            strictExportPresence: true,
            rules: [
                {
                    test: /\.ts?$/, // .js and .jsx files
                    exclude: /node_modules/, // excluding the node_modules folder
                    loader: "ts-loader"
                }
            ]
        },
        resolve: {
            // Add `.ts` and `.tsx` as a resolvable extension.
            modules: [path.resolve(root, 'node_modules')],
            extensions: [".ts", ".js"]
        },
        // externals: [nodeExternals()],
        optimization: {
            splitChunks: {
                chunks: 'all',
            },
            minimize: mode == "production",
            minimizer: []
        },
        /*
        resolve: {
            modules: "node_modules",
            extensions: [".jsx", ".ts", ".js"]
        },*/
        plugins: [
            //new BundleAnalyzerPlugin(),
            new HtmlWebpackPlugin({
                template: path.resolve(root, 'public', 'index.html'),
                //inject: true,

                ...(isEnvProduction && {
                    minify: {
                        removeComments: true,
                        collapseWhitespace: true,
                        removeRedundantAttributes: true,
                        useShortDoctype: true,
                        removeEmptyAttributes: true,
                        removeStyleLinkTypeAttributes: true,
                        keepClosingSlash: true,
                        minifyJS: true,
                        minifyCSS: true,
                        minifyURLs: true,
                    }
                })
            })
        ],
    }
};