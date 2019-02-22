const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf')
module.exports = merge(baseWebpackConfig, {
    
    output: {
        filename: './dist/[hash]app.js', // dist文件夹不存在时，会自动创建
        hashDigestLength: 8 // 默认长度是20
    },
    devServer: {
        contentBase: path.join(__dirname, "../dist"), //网站的根目录为 根目录/dist，如果配置不对，会报Cannot GET /错误
        port: 9000, //端口改为9000
        open: true// 自动打开浏览器，适合懒人
    },
})