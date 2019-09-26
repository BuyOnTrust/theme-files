const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
      CleanPlugin = require('clean-webpack-plugin'),
      LodashPlugin = require('lodash-webpack-plugin'),
      path = require('path'),
      webpack = require('webpack');

// Common configuration, with extensions in webpack.dev.js and webpack.prod.js.
module.exports = {
    bail: true,
    context: __dirname,
    entry: {
        main: './assets/js/app.js',
        'checkout-sdk': './assets/js/checkout-app/index.ts',
        'checkout-button': './assets/js/checkout-app/bundles/checkout-button.ts',
        'embedded-checkout': './assets/js/checkout-app/bundles/embedded-checkout.ts',
        'internal-mappers': './assets/js/checkout-app/bundles/internal-mappers.ts',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: /(assets\/js|assets\\js|stencil-utils)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            '@babel/plugin-syntax-dynamic-import', // add support for dynamic imports (used in app.js)
                            'lodash', // Tree-shake lodash
                        ],
                        presets: [
                            ['@babel/preset-env', {
                                corejs: 3,
                                targets: [
                                    'defaults',
                                    'ie 11',
                                ],
                                useBuiltIns: 'usage',
                            },],
                        ],
                    },
                },
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                include: /(assets\/js|assets\\js)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-react'],
                    },
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    'sass-loader'
                ],
            },
            {
                parser: {
                    amd: false,
                },
            },
            {
                test: /\.(js|ts)$/,
                exclude: /node_modules/,
                include: /(assets\/js|assets\\js)/,
                loader: 'ts-loader',
            },
        ],
    },
    output: {
        chunkFilename: 'theme-bundle.chunk.[name].js',
        filename: 'theme-bundle.[name].js',
        path: path.resolve(__dirname, 'assets/dist'),
    },
    performance: {
        hints: 'warning',
        maxAssetSize: 1024 * 300,
        maxEntrypointSize: 1024 * 300,
    },
    plugins: [
        new CleanPlugin(['assets/dist'], {
            verbose: false,
            watch: false,
        }),
        new LodashPlugin, // Complements babel-plugin-lodash by shrinking its cherry-picked builds further.
        new webpack.ProvidePlugin({ // Provide jquery automatically without explicit import
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
        }),
    ],
    resolve: {
        extensions: ['.ts', '.js', '.jsx'],
        alias: {
            jquery: path.resolve(__dirname, 'node_modules/jquery/dist/jquery.min.js'),
            jstree: path.resolve(__dirname, 'node_modules/jstree/dist/jstree.min.js'),
            lazysizes: path.resolve(__dirname, 'node_modules/lazysizes/lazysizes.min.js'),
            nanobar: path.resolve(__dirname, 'node_modules/nanobar/nanobar.min.js'),
            'slick-carousel': path.resolve(__dirname, 'node_modules/slick-carousel/slick/slick.min.js'),
            'svg-injector': path.resolve(__dirname, 'node_modules/svg-injector/dist/svg-injector.min.js'),
            sweetalert2: path.resolve(__dirname, 'node_modules/sweetalert2/dist/sweetalert2.min.js'),
        },
    },
};
