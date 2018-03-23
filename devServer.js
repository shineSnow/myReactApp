const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const history = require('connect-history-api-fallback')
const proxy = require('http-proxy-middleware');
const proxyOption={
        target: 'https://m.kaola.com', // target host
        changeOrigin: true,               // needed for virtual hosted sites
      }
const app = express();
const config = require('./webpack/webpack.config.dev.js');
const compiler = webpack(config);

app.use(history({verbose:true}))
// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
　　hot: true,
　　noInfo: true,
　　stats: {
　　colors: true
　　}
}));

app.use(webpackHotMiddleware(compiler))
app.use('/', proxy(proxyOption));

// Serve the files on port 3000.
app.listen(3000, function err(err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3000/');
});