const merge = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')
const webpackCommon = require('./webpack.config.common')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = merge(webpackCommon, {
    entry:{
        index:path.resolve(__dirname, '../src/app.js'),
        vendor:['moment']
    },
    output:{
        filename: "[name].[chunkhash].js",
        publicPath:'./'
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                exclude:[
                    path.join(__dirname,'../node_modules'),
                    path.join(__dirname,'../assets/font'),
                ],
                include:[path.join(__dirname,'../src')],
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use:[
                    {
                        loader:'css-loader',
                        options:{
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                     },
                    'postcss-loader'
                    ]
                })
            },
            {
                test: /\.css$/,
                include:[
                    path.join(__dirname,'../node_modules'),
                    path.join(__dirname,'../assets/font'),
                ],
                exclude:[path.join(__dirname,'../src')],
                use:['style-loader','css-loader']
            }
        ]
    },
    plugins:[
        new UglifyJSPlugin(),
        new webpack.HashedModuleIdsPlugin({
            hashFunction: 'sha256',
            hashDigest: 'hex',
            hashDigestLength: 20
          }),
          new ExtractTextPlugin("styles.css")
    ]
})