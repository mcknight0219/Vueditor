'use strict'

const merge = require('deep-assign')
const webpack = require('webpack')

const options = require('./options')
const base = require('./webpack.base')

const config = merge(base, {
    entry: options.paths.resolve('src/index.js'),

    output: {
        filename: options.isProduction ? 'vueditor.min.js' : 'vueditor.js',
        path: options.paths.output.main,
        library: 'vueditor',
        libraryTarget: 'umd'
    },

    plugins: [
        new webpack.BannerPlugin({
            banner: options.banner,
            raw: true,
            entryOnly: true
        })
    ]
})

if (options.isProduction) {
    config.plugins = config.plugins.concat([
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),

        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ])
}

module.exports = config