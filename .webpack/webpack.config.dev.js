abc = {
  mode: "development",
  context: "/github/vue_admin_lerna",
  externals: {
    vue: "window.vue"
  },
  node: {
    setImmediate: false,
    process: "mock",
    dgram: "empty",
    fs: "empty",
    net: "empty",
    tls: "empty",
    child_process: "empty"
  },
  output: {
    path: "/github/vue_admin_lerna/dist",
    filename: "js/[name].js",
    publicPath: "",
    chunkFilename: "js/[name].js"
  },
  resolve: {
    alias: {
      "@": "/github/vue_admin_lerna/src",
      vue$: "vue/dist/vue.runtime.esm.js"
    },
    extensions: [
      ".tsx",
      ".ts",
      ".mjs",
      ".js",
      ".jsx",
      ".vue",
      ".json",
      ".wasm"
    ],
    modules: [
      "node_modules",
      "/github/vue_admin_lerna/node_modules",
      "/github/vue_admin_lerna/node_modules/@vue/cli-service/node_modules"
    ]
  },
  resolveLoader: {
    modules: [
      "/github/vue_admin_lerna/node_modules/@vue/cli-plugin-typescript/node_modules",
      "/github/vue_admin_lerna/node_modules/@vue/cli-plugin-babel/node_modules",
      "node_modules",
      "/github/vue_admin_lerna/node_modules",
      "/github/vue_admin_lerna/node_modules/@vue/cli-service/node_modules"
    ]
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      /* config.module.rule('vue') */
      {
        test: /\.vue$/,
        use: [
          {
            loader:
              "/github/vue_admin_lerna/node_modules/cache-loader/dist/cjs.js",
            options: {
              cacheDirectory:
                "/github/vue_admin_lerna/node_modules/.cache/vue-loader",
              cacheIdentifier: "84e40532"
            }
          },
          {
            loader:
              "/github/vue_admin_lerna/node_modules/vue-loader/lib/index.js",
            options: {
              compilerOptions: {
                whitespace: "condense"
              },
              cacheDirectory:
                "/github/vue_admin_lerna/node_modules/.cache/vue-loader",
              cacheIdentifier: "84e40532"
            }
          }
        ]
      },
      /* config.module.rule('images') */
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          {
            loader:
              "/github/vue_admin_lerna/node_modules/url-loader/dist/cjs.js",
            options: {
              limit: 4096,
              fallback: {
                loader: "file-loader",
                options: {
                  name: "img/[name].[hash:8].[ext]"
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('svg') */
      {
        test: /\.(svg)(\?.*)?$/,
        use: [
          {
            loader:
              "/github/vue_admin_lerna/node_modules/file-loader/dist/cjs.js",
            options: {
              name: "img/[name].[hash:8].[ext]"
            }
          }
        ]
      },
      /* config.module.rule('media') */
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader:
              "/github/vue_admin_lerna/node_modules/url-loader/dist/cjs.js",
            options: {
              limit: 4096,
              fallback: {
                loader: "file-loader",
                options: {
                  name: "media/[name].[hash:8].[ext]"
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('fonts') */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader:
              "/github/vue_admin_lerna/node_modules/url-loader/dist/cjs.js",
            options: {
              limit: 4096,
              fallback: {
                loader: "file-loader",
                options: {
                  name: "fonts/[name].[hash:8].[ext]"
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('pug') */
      {
        test: /\.pug$/,
        oneOf: [
          /* config.module.rule('pug').oneOf('pug-vue') */
          {
            resourceQuery: /vue/,
            use: [
              {
                loader: "pug-plain-loader"
              }
            ]
          },
          /* config.module.rule('pug').oneOf('pug-template') */
          {
            use: [
              {
                loader: "raw-loader"
              },
              {
                loader: "pug-plain-loader"
              }
            ]
          }
        ]
      },
      /* config.module.rule('css') */
      {
        test: /\.css$/,
        oneOf: [
          /* config.module.rule('css').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/vue-style-loader/index.js",
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/css-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: "[name]_[local]_[hash:base64:5]"
                  }
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/postcss-loader/src/index.js",
                options: {
                  sourceMap: false,
                  plugins: [
                    function() {
                      /* omitted long function */
                    }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/vue-style-loader/index.js",
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/css-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/postcss-loader/src/index.js",
                options: {
                  sourceMap: false,
                  plugins: [
                    function() {
                      /* omitted long function */
                    }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/vue-style-loader/index.js",
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/css-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: "[name]_[local]_[hash:base64:5]"
                  }
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/postcss-loader/src/index.js",
                options: {
                  sourceMap: false,
                  plugins: [
                    function() {
                      /* omitted long function */
                    }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('normal') */
          {
            use: [
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/vue-style-loader/index.js",
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/css-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/postcss-loader/src/index.js",
                options: {
                  sourceMap: false,
                  plugins: [
                    function() {
                      /* omitted long function */
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('postcss') */
      {
        test: /\.p(ost)?css$/,
        oneOf: [
          /* config.module.rule('postcss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/vue-style-loader/index.js",
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/css-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: "[name]_[local]_[hash:base64:5]"
                  }
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/postcss-loader/src/index.js",
                options: {
                  sourceMap: false,
                  plugins: [
                    function() {
                      /* omitted long function */
                    }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/vue-style-loader/index.js",
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/css-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/postcss-loader/src/index.js",
                options: {
                  sourceMap: false,
                  plugins: [
                    function() {
                      /* omitted long function */
                    }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/vue-style-loader/index.js",
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/css-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: "[name]_[local]_[hash:base64:5]"
                  }
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/postcss-loader/src/index.js",
                options: {
                  sourceMap: false,
                  plugins: [
                    function() {
                      /* omitted long function */
                    }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('normal') */
          {
            use: [
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/vue-style-loader/index.js",
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/css-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/postcss-loader/src/index.js",
                options: {
                  sourceMap: false,
                  plugins: [
                    function() {
                      /* omitted long function */
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('scss') */
      {
        test: /\.scss$/,
        oneOf: [
          /* config.module.rule('scss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/vue-style-loader/index.js",
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/css-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: "[name]_[local]_[hash:base64:5]"
                  }
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/postcss-loader/src/index.js",
                options: {
                  sourceMap: false,
                  plugins: [
                    function() {
                      /* omitted long function */
                    }
                  ]
                }
              },
              {
                loader: "sass-loader",
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/vue-style-loader/index.js",
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/css-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/postcss-loader/src/index.js",
                options: {
                  sourceMap: false,
                  plugins: [
                    function() {
                      /* omitted long function */
                    }
                  ]
                }
              },
              {
                loader: "sass-loader",
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/vue-style-loader/index.js",
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/css-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: "[name]_[local]_[hash:base64:5]"
                  }
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/postcss-loader/src/index.js",
                options: {
                  sourceMap: false,
                  plugins: [
                    function() {
                      /* omitted long function */
                    }
                  ]
                }
              },
              {
                loader: "sass-loader",
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('normal') */
          {
            use: [
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/vue-style-loader/index.js",
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/css-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/postcss-loader/src/index.js",
                options: {
                  sourceMap: false,
                  plugins: [
                    function() {
                      /* omitted long function */
                    }
                  ]
                }
              },
              {
                loader: "sass-loader",
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('sass') */
      {
        test: /\.sass$/,
        oneOf: [
          /* config.module.rule('sass').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/vue-style-loader/index.js",
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/css-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: "[name]_[local]_[hash:base64:5]"
                  }
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/postcss-loader/src/index.js",
                options: {
                  sourceMap: false,
                  plugins: [
                    function() {
                      /* omitted long function */
                    }
                  ]
                }
              },
              {
                loader: "sass-loader",
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/vue-style-loader/index.js",
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/css-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/postcss-loader/src/index.js",
                options: {
                  sourceMap: false,
                  plugins: [
                    function() {
                      /* omitted long function */
                    }
                  ]
                }
              },
              {
                loader: "sass-loader",
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/vue-style-loader/index.js",
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/css-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: "[name]_[local]_[hash:base64:5]"
                  }
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/postcss-loader/src/index.js",
                options: {
                  sourceMap: false,
                  plugins: [
                    function() {
                      /* omitted long function */
                    }
                  ]
                }
              },
              {
                loader: "sass-loader",
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('normal') */
          {
            use: [
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/vue-style-loader/index.js",
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/css-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/postcss-loader/src/index.js",
                options: {
                  sourceMap: false,
                  plugins: [
                    function() {
                      /* omitted long function */
                    }
                  ]
                }
              },
              {
                loader: "sass-loader",
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('less') */
      {
        test: /\.less$/,
        oneOf: [
          /* config.module.rule('less').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/vue-style-loader/index.js",
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/css-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: "[name]_[local]_[hash:base64:5]"
                  }
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/postcss-loader/src/index.js",
                options: {
                  sourceMap: false,
                  plugins: [
                    function() {
                      /* omitted long function */
                    }
                  ]
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/less-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  modifyVars: {
                    "primary-color": "#F56515",
                    "border-radius-base": "2px"
                  },
                  javascriptEnabled: true
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/vue-style-loader/index.js",
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/css-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/postcss-loader/src/index.js",
                options: {
                  sourceMap: false,
                  plugins: [
                    function() {
                      /* omitted long function */
                    }
                  ]
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/less-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  modifyVars: {
                    "primary-color": "#F56515",
                    "border-radius-base": "2px"
                  },
                  javascriptEnabled: true
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/vue-style-loader/index.js",
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/css-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: "[name]_[local]_[hash:base64:5]"
                  }
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/postcss-loader/src/index.js",
                options: {
                  sourceMap: false,
                  plugins: [
                    function() {
                      /* omitted long function */
                    }
                  ]
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/less-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  modifyVars: {
                    "primary-color": "#F56515",
                    "border-radius-base": "2px"
                  },
                  javascriptEnabled: true
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('normal') */
          {
            use: [
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/vue-style-loader/index.js",
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/css-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/postcss-loader/src/index.js",
                options: {
                  sourceMap: false,
                  plugins: [
                    function() {
                      /* omitted long function */
                    }
                  ]
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/less-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  modifyVars: {
                    "primary-color": "#F56515",
                    "border-radius-base": "2px"
                  },
                  javascriptEnabled: true
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('stylus') */
      {
        test: /\.styl(us)?$/,
        oneOf: [
          /* config.module.rule('stylus').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/vue-style-loader/index.js",
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/css-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: "[name]_[local]_[hash:base64:5]"
                  }
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/postcss-loader/src/index.js",
                options: {
                  sourceMap: false,
                  plugins: [
                    function() {
                      /* omitted long function */
                    }
                  ]
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/stylus-loader/index.js",
                options: {
                  sourceMap: false,
                  preferPathResolver: "webpack",
                  import: [
                    "/github/vue_admin_lerna/src/styles/variable/index.styl"
                  ]
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/vue-style-loader/index.js",
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/css-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/postcss-loader/src/index.js",
                options: {
                  sourceMap: false,
                  plugins: [
                    function() {
                      /* omitted long function */
                    }
                  ]
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/stylus-loader/index.js",
                options: {
                  sourceMap: false,
                  preferPathResolver: "webpack",
                  import: [
                    "/github/vue_admin_lerna/src/styles/variable/index.styl"
                  ]
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/vue-style-loader/index.js",
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/css-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: "[name]_[local]_[hash:base64:5]"
                  }
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/postcss-loader/src/index.js",
                options: {
                  sourceMap: false,
                  plugins: [
                    function() {
                      /* omitted long function */
                    }
                  ]
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/stylus-loader/index.js",
                options: {
                  sourceMap: false,
                  preferPathResolver: "webpack",
                  import: [
                    "/github/vue_admin_lerna/src/styles/variable/index.styl"
                  ]
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('normal') */
          {
            use: [
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/vue-style-loader/index.js",
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/css-loader/dist/cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/postcss-loader/src/index.js",
                options: {
                  sourceMap: false,
                  plugins: [
                    function() {
                      /* omitted long function */
                    }
                  ]
                }
              },
              {
                loader:
                  "/github/vue_admin_lerna/node_modules/stylus-loader/index.js",
                options: {
                  sourceMap: false,
                  preferPathResolver: "webpack",
                  import: [
                    "/github/vue_admin_lerna/src/styles/variable/index.styl"
                  ]
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('js') */
      {
        test: /\.m?jsx?$/,
        exclude: [
          function() {
            /* omitted long function */
          }
        ],
        use: [
          {
            loader:
              "/github/vue_admin_lerna/node_modules/cache-loader/dist/cjs.js",
            options: {
              cacheDirectory:
                "/github/vue_admin_lerna/node_modules/.cache/babel-loader",
              cacheIdentifier: "5c09cf59"
            }
          },
          {
            loader:
              "/github/vue_admin_lerna/node_modules/babel-loader/lib/index.js"
          }
        ]
      },
      /* config.module.rule('eslint') */
      {
        enforce: "pre",
        test: /\.(vue|(j|t)sx?)$/,
        exclude: [
          /node_modules/,
          "/github/vue_admin_lerna/node_modules/@vue/cli-service/lib"
        ],
        use: [
          {
            loader:
              "/github/vue_admin_lerna/node_modules/eslint-loader/index.js",
            options: {
              extensions: [".js", ".jsx", ".vue", ".ts", ".tsx"],
              cache: true,
              cacheIdentifier: "1acf5816",
              emitWarning: false,
              emitError: false,
              eslintPath: "/github/vue_admin_lerna/node_modules/eslint",
              formatter: function() {
                /* omitted long function */
              }
            }
          }
        ]
      },
      /* config.module.rule('ts') */
      {
        test: /\.ts$/,
        use: [
          {
            loader:
              "/github/vue_admin_lerna/node_modules/cache-loader/dist/cjs.js",
            options: {
              cacheDirectory:
                "/github/vue_admin_lerna/node_modules/.cache/ts-loader",
              cacheIdentifier: "63ed336e"
            }
          },
          {
            loader:
              "/github/vue_admin_lerna/node_modules/babel-loader/lib/index.js"
          },
          {
            loader: "/github/vue_admin_lerna/node_modules/ts-loader/index.js",
            options: {
              transpileOnly: true,
              appendTsSuffixTo: ["\\.vue$"],
              happyPackMode: false
            }
          }
        ]
      },
      /* config.module.rule('tsx') */
      {
        test: /\.tsx$/,
        use: [
          {
            loader:
              "/github/vue_admin_lerna/node_modules/cache-loader/dist/cjs.js",
            options: {
              cacheDirectory:
                "/github/vue_admin_lerna/node_modules/.cache/ts-loader",
              cacheIdentifier: "63ed336e"
            }
          },
          {
            loader:
              "/github/vue_admin_lerna/node_modules/babel-loader/lib/index.js"
          },
          {
            loader: "/github/vue_admin_lerna/node_modules/ts-loader/index.js",
            options: {
              transpileOnly: true,
              happyPackMode: false,
              appendTsxSuffixTo: ["\\.vue$"]
            }
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: "chunk-vendors",
          test: /[\\\/]node_modules[\\\/]/,
          priority: -10,
          chunks: "initial"
        },
        common: {
          name: "chunk-common",
          minChunks: 2,
          priority: -20,
          chunks: "initial",
          reuseExistingChunk: true
        }
      }
    },
    minimize: false,
    runtimeChunk: "single",
    minimizer: [
      {
        options: {
          test: /\.m?js(\?.*)?$/i,
          chunkFilter: () => true,
          warningsFilter: () => true,
          extractComments: false,
          sourceMap: true,
          cache: true,
          cacheKeys: defaultCacheKeys => defaultCacheKeys,
          parallel: true,
          include: undefined,
          exclude: undefined,
          minify: undefined,
          terserOptions: {
            compress: {
              arrows: false,
              collapse_vars: false,
              comparisons: false,
              computed_props: false,
              hoist_funs: false,
              hoist_props: false,
              hoist_vars: false,
              inline: false,
              loops: false,
              negate_iife: false,
              properties: false,
              reduce_funcs: false,
              reduce_vars: false,
              switches: false,
              toplevel: false,
              typeofs: false,
              booleans: true,
              if_return: true,
              sequences: true,
              unused: true,
              conditionals: true,
              dead_code: true,
              evaluate: true
            },
            mangle: {
              safari10: true
            }
          }
        }
      }
    ]
  },
  plugins: [
    /* config.plugin('vue-loader') */
    new VueLoaderPlugin(),
    /* config.plugin('define') */
    new DefinePlugin({
      "process.env": {
        NODE_ENV: '"development"',
        BASE_URL: '""'
      }
    }),
    /* config.plugin('case-sensitive-paths') */
    new CaseSensitivePathsPlugin(),
    /* config.plugin('friendly-errors') */
    new FriendlyErrorsWebpackPlugin({
      additionalTransformers: [
        function() {
          /* omitted long function */
        }
      ],
      additionalFormatters: [
        function() {
          /* omitted long function */
        }
      ]
    }),
    /* config.plugin('html') */
    new HtmlWebpackPlugin({
      templateParameters: function() {
        /* omitted long function */
      },
      template: "/github/vue_admin_lerna/public/index.html"
    }),
    /* config.plugin('preload') */
    new PreloadPlugin({
      rel: "preload",
      include: "initial",
      fileBlacklist: [/\.map$/, /hot-update\.js$/]
    }),
    /* config.plugin('prefetch') */
    new PreloadPlugin({
      rel: "prefetch",
      include: "asyncChunks"
    }),
    /* config.plugin('copy') */
    new CopyPlugin([
      {
        from: "/github/vue_admin_lerna/public",
        to: "/github/vue_admin_lerna/dist",
        toType: "dir",
        ignore: [
          ".DS_Store",
          {
            glob: "index.html",
            matchBase: false
          }
        ]
      }
    ]),
    /* config.plugin('fork-ts-checker') */
    new ForkTsCheckerWebpackPlugin({
      vue: true,
      tslint: false,
      formatter: "codeframe",
      checkSyntacticErrors: false
    })
  ],
  entry: {
    app: ["./src/main.ts"]
  }
};
