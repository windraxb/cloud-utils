module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        'browser': 'last 2 versions, > 1%, ie >= 6, Android >= 5, ios >= 6, and_uc > 9',
        'node': '0.10'
      },
      modules: false,
      loose: false
    }]
  ],
  plugins: [
    '@babel/plugin-transform-runtime', {
      helpers: false,
      regenerator: false
    }
  ]
}
