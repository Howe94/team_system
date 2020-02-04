
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/teamManagement/'
      : '/',
  // 将构建好的文件输出到哪里
  outputDir: 'teamManagement',
  pages: {
    teamManagement: {
          // page 的入口
          entry: 'src/pages/teamManagement/main.js',
          // 模板来源
          template: 'src/pages/teamManagement/tpl.html',
          // 在 dist/apply.html 的输出
          filename: 'teamManagement.html',
          // 当使用 title 选项时，
          // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
          title: '我要组队',
          // 在这个页面中包含的块，默认情况下会包含
          // 提取出来的通用 chunk 和 vendor chunk。
          chunks: ['chunk-vendors', 'chunk-common', 'teamManagement']
      },
      entering: {
          entry: 'src/pages/entering/main.js',
          template: 'src/pages/entering/tpl.html',
          filename: 'entering.html',
          title: '登陆中',
          chunks: ['chunk-vendors', 'chunk-common', 'entering']
      }
  },
  // 请求代理
  devServer: {
      proxy: {
          //为了不经网关暂时把端口8888改成8001
          '/api': {
              target: 'http://localhost:8080',
              ws: false,
              changeOrigin: true,// 是否启用websockets
              secure:false, // 使用的是http协议则设置为false，https协议则设置为true
              //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样客户端端和服务端进行数据的交互就不会有跨域问题
              changOrigin: true,
          }
      }
  },
  // 生产环境下的sourceMap
  productionSourceMap: true,
  lintOnSave:false, // 关闭eslint检查
  chainWebpack: config => {
      if (process.env.NODE_ENV === 'production') {
          // 为生产环境修改配置...
          config
              .externals({
                  'vue': 'Vue',
                  'vue-router': 'VueRouter'
              })
      } else {
          // 为开发环境修改配置...
      }
  },
  css: {
      loaderOptions: {
          sass: {
            prependData: `@import '@/assets/scss/public.scss';`
          }
      }
  } 
}