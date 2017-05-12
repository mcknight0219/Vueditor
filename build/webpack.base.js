'use strict'

const options = require('./options')
const autoprefixer = require('autoprefixer')

module.exports = {
    resolve: {
        modules: [
            options.paths.root,
            options.paths.resolve('node_modules')
        ],

        alias: {
            src: 'src',
            vue$: 'vue/dist/vue.common.js'
        },

        extensions: ['.js', '.json', '.vue', '.scss']
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {

                    },
                    postcss: [
                        autoprefixer({
                            browsers: ['last 2 versions', 'ie > 9', 'Firefox ESR']
                        })
                    ]
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },

    stats: {
        hash: false,
        colors: true,
        chunks: false,
        version: false,
        children: false,
        timings: true
    }
}