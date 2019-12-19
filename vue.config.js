
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
      less: {
        modifyVars: {
          // @primary-color: #1890ff; // 全局主色
          // @link-color: #1890ff; // 链接色
          // @success-color: #52c41a; // 成功色
          // @warning-color: #faad14; // 警告色
          // @error-color: #f5222d; // 错误色
          // @font-size-base: 14px; // 主字号
          // @heading-color: rgba(0, 0, 0, 0.85); // 标题色
          // @text-color: rgba(0, 0, 0, 0.65); // 主文本色
          // @text-color-secondary : rgba(0, 0, 0, .45); // 次文本色
          // @disabled-color : rgba(0, 0, 0, .25); // 失效色
          // @border-radius-base: 4px; // 组件/浮层圆角
          // @border-color-base: #d9d9d9; // 边框色
          // @box-shadow-base: 0 2px 8px rgba(0, 0, 0, 0.15); // 浮层阴影
          'primary-color': '#F56515',
          // 'link-color': '#1DA57A',
          'border-radius-base': '2px',
        },
        javascriptEnabled: true

      },
      stylus: {
        import: [
          resolve("src/styles/variable/index.styl")
        ],
      }
    }
  }
}
