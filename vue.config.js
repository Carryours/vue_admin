const path = require("path");
const webpack = require("webpack");

const resolve = dir => {
  return path.join(__dirname, dir);
};

const isDev = process.env.NODE_ENV === "development";
const isPro = process.env.NODE_ENV === "production";
module.exports = {
  publicPath: "", // 使用相对路径
  assetsDir: "assets",
  productionSourceMap: false,
  runtimeCompiler: isPro,
  lintOnSave: isDev,
  chainWebpack: config => {
    config.plugins.delete("preload"); // TODO: need test
    config.plugins.delete("prefetch"); // TODO: need test

    config.resolve.alias
      // .delete("vue$")
      .set("@", resolve("src"))
      // .set('@a', resolve('src/ui/antd/components'))
      .end();
    ///////////////////////////////////////////////
    /////开发配置//////////////////////////
    ///////////////////////////////////////////////
    if (isDev) {
      config // 使用dll
        .plugin("dll-reference-plugin")
        .use(webpack.DllReferencePlugin)
        .tap(options => {
          options[0] = {
            context: __dirname,
            manifest: require(path.join(
              __dirname,
              `./public/dll_vender_test/test.manifest.json`
            ))
          };
          return options;
        })
        .end();
      config.optimization.splitChunks({}).end();
    }
    //////////////////////////////////////////////////////////
    //////**********生产配置 */
    //////////////////////////////////////////////////////////
    if (isPro) {
      ///////////////////////
      config
        .externals({
          vue: "Vue"
        })
        .end();
      //////////////////////////
      config // 使用dll
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
          // options[1] = {
          //   context: __dirname,
          //   manifest: require(path.join(
          //     __dirname,
          //     `./public/dll_vender_test/test.manifest.json`
          //   ))
          // };
          return options;
        })
        .end();
      config
        .plugin("html")
        .tap(args => {
          let arg = args[0];
          // 自定义script标签
          arg.costomScripts = [
            { src: "vue/vue.runtime.min.js" },
            { src: "dll_vender/vendor.dll.d38023ff.js" }
          ];
          // ars.meta = {
          //   // viewport: "width=device-width, initial-scale=1, shrink-to-fit=no"
          // };
          arg.minify = false;
          return args;
        })
        .end();
      config
        .plugin("ScriptExtHtmlWebpackPlugin")
        .after("html")
        .use("script-ext-html-webpack-plugin", [
          {
            // `runtime` must same as runtimeChunk name. default is `runtime`
            inline: /runtime\..*\.js$/
          }
        ]);

      config.optimization
        .splitChunks({
          chunks: "all",
          cacheGroups: {
            vendors: {
              name: "chunks/node_modules-vendors",
              test: /[\\/]node_modules[\\/]/,
              priority: -10,
              chunks: "initial"
            },
            // common: {
            //   name: "chunk-common",
            //   minChunks: 2,
            //   priority: -20,
            //   chunks: "initial",
            //   reuseExistingChunk: true
            // },
            componentCommons: {
              name: "chunks/component-commons",
              test: resolve("src/components"), // can customize your rules
              minChunks: 3, //  minimum common number
              priority: 5,
              reuseExistingChunk: true
            }
          }
        })
        .runtimeChunk("single") //  分离runtime
        .minimize(false) // 配置不压缩js
        .end();
    }
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
