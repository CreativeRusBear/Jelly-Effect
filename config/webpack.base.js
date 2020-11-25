const paths = require('./paths')
const htmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: [paths.src + '/js/index.js'],
    output: {
        path: paths.dist,
        publicPath: '/',
        filename: 'js/[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: ['/node_modules/'],
                use: ['babel-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            title: 'Jelly-Effect',
            template: paths.src + '/index.html',
            filename: paths.dist + '/index.html',
        }),
    ]
};