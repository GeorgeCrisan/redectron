const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
    {
        mode: 'development',
        entry: './src/app.ts',
        target: 'electron-main',
        module: {
            rules: [{
                test: /\.ts$/,
                include: /src/,
                use: [{ loader: 'ts-loader' }]
            }]
        },
        output: {
            path: __dirname + '/dist',
            filename: 'app.js'
        }
    },
    {
        mode: 'development',
        entry: './src/appfe.tsx',
        target: 'electron-renderer',
        devtool: 'source-map',
        module: {
            rules: [{
                test: /\.ts(x?)$/,
                include: /src/,
                use: [{ loader: 'ts-loader' }]
            }]
        },
        output: {
            path: __dirname + '/dist',
            filename: 'appfe.js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            })
        ],
        watch: true
    }
];