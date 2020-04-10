const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',

  /**
   * 遍历当前路径下所有文件夹，将文件夹中的 app.ts 文件作为webpack构建的入口文件
   * entries 收集了多个目录入口文件，并且每个入口还引入一个用于hot load的文件
   */
  entry: fs.readdirSync(__dirname).reduce((entries, dir) => {
    const fullDir = path.join(__dirname, dir)

    // 判断是否是文件夹
    if (fs.statSync(fullDir).isDirectory()) {
      const entry = path.join(fullDir, 'app.ts')

      // 判断 app.ts 文件是否存在
      if (fs.existsSync(entry)) {
        entries[dir] = ['webpack-hot-middleware/client', entry]
      }
    }

    return entries
  }, {}),

  /*
    根据不同的目录，打包生成目标js，名称和目录名一致
  */
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    publicPath: '/build/'
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        use: [
          {
            loader: 'tslint-loader'
          }
        ]
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.css?$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()]
}
