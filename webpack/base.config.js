import path from 'path';

const JS_REGEX = /\.js$|\.jsx$/;

export default {
  devtool: 'source-map',
  entry: {
    app: path.resolve(ROOT_PATH, 'src/app/client.js')
  },
  output: {
    path: path.resolve(ROOT_PATH, '../build/public'),
    filename: '[name]-[hash].js',
    chunkFilename: '[name]-[hash].js',
    publicPath: '/build/public/assets/'
  },
  module: {
    preLoaders: [
      { test: JS_REGEX, exclude: /node_modules/, loader: 'eslint' }
    ],
    loaders: [
      { test: /\.json$/, exclude: /node_modules/, loader: 'json' },
      { test: JS_REGEX, exclude: /node_modules/, loader: 'babel' },
      { test: /\.styl$/, exclude: /node_modules/, loader: 'css-loader!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/' }
    ]
  },
  plugins: [],
  resolve: {
    extensions: ['', '.js', '.json', '.jsx', '.es6', '.babel'],
    modulesDirectories: ['node_modules', 'app']
  }
};
