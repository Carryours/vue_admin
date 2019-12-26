const path = require("path");
const webpack = require("webpack");
const resolve = dir => {
  return path.join(__dirname, dir);
};
const isPro = process.env.NODE_ENV === "production";
module.exports = {
  publicPath: "",
  assetsDir: "appAsserts",
  productionSourceMap: false,
  // outputDir: "dist/app",
  runtimeCompiler: isPro,
  // configureWebpack: {
  //   plugins: [
  //     new webpack.DllReferencePlugin({
  //       context: __dirname,
  //       manifest: require("./dist/vue.manifest.json")
  //     })
  //   ]
  // },
  chainWebpack: config => {
    config.resolve.alias
      .delete("vue$")
      .set("@", resolve("src"))
      // .set('@a', resolve('src/ui/antd/components'))
      // .set('element-ui', resolve('src/element'))
      .end();

    //////////////////////////
    config
      .plugin("dll-reference-plugin")
      .use(webpack.DllReferencePlugin)
      .tap(options => {
        options[0] = {
          context: __dirname,
          manifest: require(path.join(
            __dirname,
            `./public/dll_vender/vendor.manifest.json`
          ))
        };
        return options;
      })
      .end();

    ///////////////////////
    config
      .externals({
        vue: "Vue"
      })
      .end();
    //  分离runtime
    // config
    //   .plugin("ScriptExtHtmlWebpackPlugin")
    //   .after("html")
    //   .use("script-ext-html-webpack-plugin", [
    //     {
    //       // `runtime` must same as runtimeChunk name. default is `runtime`
    //       inline: /runtime\..*\.js$/
    //     }
    //   ]);
    config.optimization.minimize(false).runtimeChunk("single");
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
          "primary-color": "#F56515",
          // 'link-color': '#1DA57A',
          "border-radius-base": "2px"
        },
        javascriptEnabled: true
      },
      stylus: {
        import: [resolve("src/styles/variable/index.styl")]
      }
    }
  }
};
