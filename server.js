var webpackDevMiddleware = require('webpack-dev-middleware');
　　
var webpackHotMiddleware = require('webpack-hot-middleware');
　　

　　
Object.keys(webpackConfig.entry).forEach(function(name){
　　webpackConfig.entry[name] = ['webpack-hot-middleware/client'].concat(webpackConfig.entry[name]);
　　
})
　　
var compiler = webpack(webpackConfig);
　　

　　
var devMiddleware = webpackDevMiddleware(compiler, {
　　publicPath: webpackConfig.output.publicPath,
　　hot: true,
　　noInfo: true,
　　stats: {
　　colors: true
　　}
　　});
　　
var hotMiddleware = webpackHotMiddleware(compiler);
　　
app.use(devMiddleware);
　　
app.use(hotMiddleware);
　　

　　
app.listen(port, function(err){
　　if(err){
　　console.log(err);
　　}else {
　　var url = 'http://localhost:' + port;
　　console.log("listening on port %s", port);
　　}
　　
})