const path = require("path");
const rimraf = require("rimraf");
const webpack = require("webpack");
const fs = require("fs");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const mStr = __dirname.split("/").pop(); // 模块名称

const config = {
  mode: "none",
  context: resolveApp(""),
  // mode: "production",
  externals: { vue: "Vue" },
  devtool: false,
  entry: {
    [mStr]: [resolveApp(`dll/${mStr}/index`)]
  },
  output: {
    path: resolveApp("public"),
    filename: `${mStr}/index.[contenthash:8].js`,
    chunkFilename: "[name]/index.[contenthash:8].js",
    library: `__dll_${mStr}`
  },
  resolve: {
    alias: {},
    extensions: [".tsx", ".ts", ".js", ".jsx", ".json"],
    modules: ["node_modules", resolveApp("node_modules")]
  },
  resolveLoader: {
    modules: ["node_modules", resolveApp("node_modules")]
  },
  module: {
    noParse: /^(vue|vue-router|vuex|axios|antd|vuex-router-sync)$/,
    rules: [
      {
        //“ oneOf”将遍历所有后续装载程序，直到满足要求为止。 如果没有匹配的加载程序，它将退回到加载程序列表末尾的“文件”加载程序。
        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            use: [
              {
                loader: require.resolve("url-loader"),
                options: {
                  limit: 4096,
                  fallback: {
                    loader: require.resolve("file-loader"),
                    options: {
                      name: `${mStr}/img/[name].[hash:8].[ext]`
                    }
                  }
                }
              }
            ]
          }
        ]
      }
    ]
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

    console.log(JSON.stringify(stats.toJson().assetsByChunkName));
  });
});
