// 导入webpack-chain 模块
import Config, { Optimization } from 'webpack-chain'
const SentryWebpackPlugin = require('@sentry/webpack-plugin')

// 对该的那一构造函数创建新的实例
const config = new Config()

// 用链式api改变配置
// 每个api 的调用都会跟踪对存储配置的更改
config
  .entry('index')
  .add('src/main.js')
  .end()
  .output.path('dist')
  .filename('[name].bundle.js')

config.module
  .rule('lint')
  .test(/\.js$/)
  .pre()
  .include.add('src')
  .end()
  .use('eslint')
  .loader('eslint-loader')
  .options({
    rules: {
      semi: 'off'
    }
  })

config.optimization
  .minimizer('css')
  .use(OptimizeCssAssetsPlugin, [{ cssProcessorOptions: { safe: true } }])

config.plugin('hot').use(webpack.HotModuleReplacementPlugin)

const isProd = false

module.exports = {
  publicPath: isProd ? '//static.ianguo.com/agent' : '/',
  outputDir: path.join(__dirname, './dist/static'),
  pages: {
    index: {
      // page 的入口
      entry: 'src/index/main.js',
      // 模板来源
      template: 'public/index.html',
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    subpage: 'src/subpage/main.js'
  },
  configureWebpack: {
    plugins: [
      new SentryPlugin({
        release: '3.0.0.0.0',
        include: './dist/static',
        ignore: ['node_modules', 'webpack.config.js']
      })
    ]
  },
  chainWebpack: config => {
    // 别名
    config.resolve.alias
      .set('assets', resolve('../../common/assets'))
      .set('components', resolve('../../common/components'))
    if (isAnalyze) {
      // 设置bundle-analyzer
      config.plugin('bundle-analyzer').use(WebpackBundleAnalyzer)
    }
    config.optimization.splitChunks({
      cacheGroups: {
        theme: {
          name: 'chunk-theme',
          test: /[\\/]node_modules[\\/]element-ui[\\/]/,
          chunks: 'all',
          priority: 1,
          reuseExistingChunk: true,
          enforce: true
        }
      }
    })
    // ...
  }
}
