const merge = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')
const webpackCommon = require('./webpack.config.common')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = merge(webpackCommon, {
    entry:{
        index:path.resolve(__dirname, '../src/index.js'),
        vendor:['moment','jquery']
    },
    output:{
        filename: "[name].[chunkhash].js",
        publicPath:'./'
    },
    module:{
        rules:[
            {
                test: /\.css$/,
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