module.exports = {
  entry: './main.js',
  output: {
    path: './dist',
    filename: 'index.js'
  },
  devServer: {
    inline: true,
    port: 3001
  },
  module: {
    loaders: [
      {
        test: /\.js$/,loader: 'babel',
        exclude: /node_modules/,
        query: { presets: ['es2015-loose', 'react'] }
      },
      { test: /\.less$/, loader: 'style!css!less' },
      { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=100000' },
      { test: /\.(svg|ttf|woff|eot)/, loader: 'file-loader' }
    ]
  }
};