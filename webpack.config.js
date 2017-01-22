var webpack = require('webpack');

module.exports = {
  entry: __dirname + "/react/guzhidui/index.js",
  output: {
    path: __dirname + "/public/js/guzhidui",
    filename: "bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    }),
    new webpack.BannerPlugin("Copyright guzhidui.")
  ]
}