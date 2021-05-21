module.exports = {
  entry: `${__dirname}/client/src/index.js`,
  module: {
    rules: [
      {
        test: /\.(png|jpeg|gif|svg)$/i,
        use: [{
          loader: 'file-loader',
          options: {},
        }],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: [/\.(js|jsx)?/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/client/dist`,
  },
  optimization: {
    minimize: true,
  },
};
