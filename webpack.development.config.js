const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'src'),
        filename: 'app.js'
    },
    devServer: {
        proxy: {
            '/api': 'http://localhost:8080'
        },
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
    },
    module:{
        rules:[{
            test: /\.jsx?$/,
            exclude:/node_modules/,
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
}