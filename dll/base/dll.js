const path = require("path");
const rimraf = require("rimraf");
const webpack = require("webpack");
const fs = require("fs");
const chalk = require("chalk");
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
// const {
//   log,
//   done,
//   info,
//   logWithSpinner,
//   stopSpinner
// } = require("@vue/cli-shared-utils");

const mStr = __dirname.split("/").pop(); // 模块名字符串

const config = {
  mode: "none",
  // mode: "production",
  entry: {
    [mStr]: [resolveApp(`dll/${mStr}/index`)]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  output: {
    path: resolveApp("public"),
    filename: `${mStr}/index.[contenthash:8].js`,
    chunkFilename: "[name]/index.[contenthash:8].js",
    library: `__dll_${mStr}`
  },
  plugins: [
    new webpack.DllPlugin({
      name: `__dll_${mStr}`,
      path: resolveApp(`public/${mStr}/manifest.json`)
    })
  ]
};

rimraf(resolveApp(`public/${mStr}`), function(err) {
  if (err) throw err;
  const compiler = webpack(config);
  compiler.run((err, stats) => {
    if (err) {
      throw err;
    }
    if (stats.hasErrors()) {
      return console.log(`Build failed with errors.`);
    }
    // const json = stats.toJson({
    //   hash: false,
    //   modules: false,
    //   chunks: false
    // });
    // let assets = json.assets
    //   ? json.assets
    //   : json.children.reduce((acc, child) => acc.concat(child.assets), []);
    // const seenNames = new Map();
    // const isJS = val => /\.js$/.test(val);
    // const isCSS = val => /\.css$/.test(val);
    // const isMinJS = val => /\.min\.js$/.test(val);
    // const targetDirShort = path.relative(api.service.context, targetDir);
    // log(formatStats(stats, targetDirShort, api));

    console.log(JSON.stringify(stats.toJson().assetsByChunkName));
  });
});
