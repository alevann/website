const path = require('path')
const babelConfig = require('./babel.config.json')
const CopyPlugin = require("copy-webpack-plugin");

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
      },
      // IDK why this works, but it does and that is good enough for me
      // Source: https://github.com/webpack/webpack/issues/11467#issuecomment-691873586
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false
        }
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'public', to: '.' }
      ]
    })
  ],
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
