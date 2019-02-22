const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = merge(baseWebpackConfig, {
   
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({}),
            new UglifyJsPlugin({sourceMap: true})
        ]
    } 
})