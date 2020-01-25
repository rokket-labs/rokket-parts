const { resolve } = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        include: /flexboxgrid/
      }
    ]
  }
}

