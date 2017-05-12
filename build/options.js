'use strict'

const path = require('path')
const version = require('../package.json').version

const banner =
  '/*!\n' +
  ' * vueditor v' + version + ' (https://github.com/mcknight0219/vueditor)\n' +
  ' * (c) ' + new Date().getFullYear() + ' Qiang Guo\n' +
  ' * Released under the MIT License.\n' +
  ' */'

module.exports = {
    banner,

    isProduction: process.env.NODE_ENV === 'production',

    paths: {
        root: path.join(__dirname, '..'),
        src: {
            main: path.join(__dirname, '..', 'src'),
            examples: path.join(__dirname, '..', 'examples-src')
        },

        output: {
            main: path.join(__dirname, '..', 'dist'),
            examples: path.join(__dirname, '..', 'examples')
        },

        resolve(location) {
            return path.join(__dirname, '..', location)
        }
    }
}