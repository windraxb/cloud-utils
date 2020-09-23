const path = require('path')
const buble = require('rollup-plugin-buble')
const replace = require('rollup-plugin-replace')
const node = require('rollup-plugin-node-resolve')
const pack = require('../package')
const version = process.env.VERSION || pack.version

const moduleName = 'cloud-utils'

const banner =
    `/*!
 * ${moduleName} v${version}
 * API
 * Copyright 2017-${(new Date).getFullYear()} ${pack.author.name}. All Rights Reserved
 * Licensed under ${pack.license}
 */
 `

const resolve = position => {
  return path.resolve(__dirname, '../', position)
}

const builds = {
  commonjs: {
    entry: resolve('src/main.js'),
    dest: resolve(`dist/${moduleName}.common.js`),
    format: 'cjs',
    banner
  },
  esm: {
    entry: resolve('src/main.js'),
    dest: resolve(`dist/${moduleName}.esm.js`),
    format: 'es',
    banner
  },
  production: {
    entry: resolve('src/main.js'),
    dest: resolve(`dist/${moduleName}.min.js`),
    format: 'umd',
    env: 'production',
    moduleName,
    banner
  },
  development: {
    entry: resolve('src/main.js'),
    dest: resolve(`dist/${moduleName}.js`),
    format: 'umd',
    env: 'development',
    moduleName,
    banner
  }
}

function genConfig(name) {
  const opts = builds[name]
  const config = {
    input: opts.entry,
    external: opts.external,
    plugins: [
      node(),
      buble()
    ].concat(opts.plugins || []),
    output: {
      file: opts.dest,
      format: opts.format,
      banner: opts.banner,
      name: opts.moduleName
    }
  }

  const replacePlutinOptions = {
    '__VERSION__': pack.version
  }

  if (opts.env) {
    replacePlutinOptions['process.env.NODE_ENV'] = JSON.stringify(opts.env)
  }
  config.plugins.push(replacePlutinOptions)

  Object.defineProperty(config, '_name', {
    enumerable: false,
    value: name
  })

  return config
}

if (process.env.TARGET) {
  module.exports = genConfig(process.env.TARGET)
} else {
  exports.getBuild = genConfig
  exports.getAllBuilds = () => Object.keys(builds).map(genConfig)
}



