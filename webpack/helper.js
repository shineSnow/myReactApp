var vendors = require('./vendors')
module.exports = {
    masterName:function(obj) {
        var nev = process.env.NODE_ENV
        switch(obj) {
            case 'css':
                return nev == 'master' ? '[name].min.[hash:5].css' : '[name].min.css'
                break
            case 'app':
                return nev == 'master' ? '[name].min.[hash:5].js' : '[name].min.js'
                break
            case 'vendor':
                return nev == 'master' ? 'vendor.min.[hash:5].js' : 'vendor.min.js'
                break
        }
    },
    getEntrys:function(entry) {
        Object.keys(entry).forEach(function(name) {
            var app = entry[name],
            entryConfig = [];
            if(process.env.NODE_ENV == 'development') {
                entryConfig.push('webpack-hot-middleware/client?reload=true')
            }
            entryConfig.push(app);
            entry[name] = entryConfig
        })
        entry,vendor = vendors
        return entry
    }
}