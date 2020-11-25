const paths = require('./paths');
const baseConfig = require('./webpack.base.js');
const {merge} = require('webpack-merge');

module.exports = merge(baseConfig, {
    mode: 'production',
    devtool: false,
    output: {
        publicPath: '/',
        filename: 'js/[name].[contenthash].bundle.js'
    },
    optimization: {
        minimize: true,
        runtimeChunk: {
            name: 'runtime'
        }
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
});