const path = require('path')
const babelConfig = require('./babel.config.json')

const configs = {
  paths: {
    output: path.resolve(__dirname, 'dist')
  }
}

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: '[name].bundle.js',
    path: configs.paths.output,
    clean: true
  },
  module: {
    rules: [
      // SASS assets loader
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      // Image assets loader
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.[jt]sx?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelConfig
        },
        resolve: {
          fullySpecified: false
        }
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public')
    },
    compress: true,
    port: 9000,
    watchFiles: ['node_modules/terra/dist']
  },
  resolve: {
    extensions: ['.js', '.json', '.wasm', '.jsx', '.ts', '.tsx']
  }
}
