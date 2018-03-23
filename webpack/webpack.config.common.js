const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    output:{
        path:path.resolve(__dirname, '../dist'),
        publicPath:'/'
    },
    resolve: {
        extensions:[".js", ".json", ".css"],
        alias:{
            ASSETS:path.resolve(__dirname,'../src/assets'),
            CMP:path.resolve(__dirname,'../src/components'),
            API:path.resolve(__dirname,"../src/api"),
        }
    },
    module:{
        rules:[
            {
                test:/\.js$/,               
                use:['babel-loader'],
                exclude:path.resolve(__dirname,'../node_modules')
            },
            {
                test:/\.(png|jpg|svg|gif)$/,
                use:['file-loader?limit=10240']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use:['file-loader?limit=10240']
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'myreactapp',
            template:'./index.html',
            inject:'body'
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            names:['vendor', 'manifest'],
            minChunks: Infinity,
        })
    ]
}