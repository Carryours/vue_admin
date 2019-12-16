
const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '',
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      // .set('_c', resolve('src/components'))
      // .set('element-ui', resolve('src/element'))
      .end()

  },
  css: {
    loaderOptions: {
      stylus: {
        import: [
          resolve("src/styles/variable/index.styl")
        ],
      }
    }
  }
}