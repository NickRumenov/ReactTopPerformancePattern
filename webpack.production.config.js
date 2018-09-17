const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module:{
        rules:[{
            test: /\.jsx?$/,
            exclude:/node_modules/,
            loader: 'babel-loader'
        }]
    }
}