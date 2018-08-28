module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ]
            },
            {
                test: /.*\.(gif|png|jpe?g)$/i,
                use: [{
                    loader: 'file-loader'
                }]
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
    }
};