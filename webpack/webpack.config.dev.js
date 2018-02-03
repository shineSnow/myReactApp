const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const webpackCommon = require('./webpack.config.common.js')

module.exports = merge(webpackCommon,{
    entry:{
        index:[
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
            'webpack/hot/only-dev-server',
            path.resolve(__dirname, '../src/index.js'),
        ],
        vendor:['moment']
    },
    output:{
        filename:'[name].js',
    },
    devtool:'source-map',
    module:{
        rules:[
            {
                test:/\.css$/,
                exclude:[
                    path.join(__dirname,'../node_modules'),
                    path.join(__dirname,'../assets/font'),
                ],
                use:[
                    'style-loader',
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
            },
            {
                test: /\.css$/,
                include:[
                    path.join(__dirname,'../node_modules'),
                    path.join(__dirname,'../assets/font'),
                ],
                use:['style-loader','css-loader','postcss-loader']
            },
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
})