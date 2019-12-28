const path = require("path");

const DllPlugin = require("webpack/lib/DllPlugin");
const webpack = require("webpack");
const fs = require("fs");
const dllDirname = "dll_abc";
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
// const resolveApp = relativePath => path.resolve(__dirname, "..", relativePath);
const config = {
  mode: "none",
  // mode: "production",
  // 入口文件
  entry: {
    // test: [resolveApp("abc")]
    abc: ["./abc/index"]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  // 输出文件
  output: {
    // 文件名称
    filename: "[name].dll.js",

    path: resolveApp("public/" + dllDirname),

    /*
       存放相关的dll文件的全局变量名称，比如对于jquery来说的话就是 _dll_jquery, 在前面加 _dll
       是为了防止全局变量冲突。
      */
    library: "__dll_[name]"
  },
  plugins: [
    // 使用插件 DllPlugin
    new DllPlugin({
      /*
         该插件的name属性值需要和 output.library保存一致，该字段值，也就是输出的 manifest.json文件中name字段的值。
         比如在jquery.manifest文件中有 name: '_dll_jquery'
        */
      name: "__dll_[name]",

      /* 生成manifest文件输出的位置和文件名称 */
      path: resolveApp(`public/${dllDirname}/[name].manifest.json`)
    })
  ]
};

const compiler = webpack(config);
compiler.run((err, stats) => {
  if (!err) {
    console.log("编译成功");
    return;
  }
  console.log(err);
});
