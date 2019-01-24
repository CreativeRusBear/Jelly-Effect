//получаем абсолютный путь
let path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

//настройка в webpack
let conf = {
    //указываем webpack откуда брать начальный скрипт
    entry: './src/js/script.js',
    //выходные данные
    output: {
        path: path.resolve(__dirname, './dist/js'),
        filename: 'app.js',
        publicPath: '/dist/js'//localhost:8080 будет работать даже без папки dist + работает как liveReload
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('../css/style.css'),
    ]

};

module.exports = (env, options)=>{
    let prod = options.mode==='production';
    conf.devtool = prod ? 'source-map' : 'eval-sourcemap';
    return conf;
};
