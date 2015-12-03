import path from 'path'
const JS_REGEX = /\.js$|\.jsx$/

export default {
  devtool: 'source-map',
  entry: {
    app: path.resolve(__dirname, 'src/app/client.js')
  },
  output: {
    path: path.resolve(__dirname, '../build/public'),
    filename: '[name]-[hash].js',
    chunkFilename: '[name]-[hash].js',
    publicPath: '/build/public/assets/'
  },
  module: {
    // preLoaders: [
    //   { test: JS_REGEX, exclude: /node_modules/, loader: 'eslint' }
    // ],
    loaders: [
      { test: /\.json$/, exclude: /node_modules/, loader: 'json' },
      { test: JS_REGEX, exclude: /node_modules/, loader: 'babel' },
      { test: /\.styl$/, exclude: /node_modules/, loader: 'css-loader!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/' }
    ]
  },
  plugins: [],
  resolve: {
    extensions: ['', '.js', '.json'],
    modulesDirectories: ['node_modules', 'src']
  }
}
