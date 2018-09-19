const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
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
    resolve:{
        extensions: [' ','.js','.jsx']
    },
    module:{
        rules:[{
            test: /\.jsx?$/,
            exclude:/node_modules/,
            loader: 'babel-loader'
        },{
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass!resolve-url!sass?sourceMap&sourceComments'
        },{
            test: /\.css$/,
            loader: 'style-loader!css-loader?importLoaders=1'
        },{
            test: /\.(png|woff|woff2|ttf|svg|eot)$/,
            loader: 'url-loader?limit=100000'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
}