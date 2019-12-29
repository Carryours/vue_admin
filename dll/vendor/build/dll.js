const path = require("path");

// const DllPlugin = require("webpack/lib/DllPlugin");
const webpack = require("webpack");
const fs = require("fs");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const mStr = "vendor"; // 模块名称

const config = {
  // mode: "none",
  mode: "production",
  // 入口文件
  entry: {
    [mStr]: ["vue-router", "axios"]
  },

  // 输出文件
  output: {
    // 文件名称
    path: resolveApp("public"),
    filename: `${mStr}/index.[contenthash:8].js`,
    library: `__dll_${mStr}`
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new webpack.DllPlugin({
      name: `__dll_${mStr}`,
      path: resolveApp(`public/${mStr}/manifest.json`)
    })
  ]
};

const compiler = webpack(config);
compiler.run((err, stats) => {
  if (!err) {
    console.log("编译成功");
    return;
  }
  console.log(stats);
  throw err;
  //   console.log(err);
});
