const HtmlWebpackPlugin = require('html-webpack-plugin'); //第二步导入
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var path = require('path');
module.exports = {
    entry: './src/main', //main.js中的.js可以省略，前面的./不能省
    devtool: '#source-map',
    output: {
        filename: 'js/app[hash].js', // dist文件夹不存在时，会自动创建
        hashDigestLength: 8,// 默认长度是20
        publicPath:"./static/",
        path:path.resolve(__dirname, '../dist/static'),
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                title: 'SEIE5.0', // html5文件中<title>部分
                filename: '../index.html', // 默认是index.html，服务器中设置的首页是index.html，如果这里改成其它名字，那么devServer.index改为和它一样，最终完整文件路径是output.path+filename，如果filename中有子文件夹形式，如`./ab/cd/front.html`，只取`./front.html`
                template: './src/template/template.html', //如果觉得插件默认生成的hmtl5文件不合要求，可以指定一个模板，模板文件如果不存在，会报错，默认是在项目根目录下找模板文件，才模板为样板，将打包的js文件注入到body结尾处
                inject: "body", // true|body|head|false，四种值，默认为true,true和body相同,是将js注入到body结束标签前,head将打包的js文件放在head结束前,false是不注入，这时得要手工在html中加js
            }
        ),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "[id].css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'stage-0', 'react'],
                        plugins: [['import', { "libraryName": "antd", "style": "css" }]]//--通过bable-plugin-import依赖 实现antd按需加载
                    }
                }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 8,
                    name: 'img/[name].[hash:7].[ext]',
                    publicPath:"../"
                }
            },
        ],
    },
}