module.exports = {
  mode: 'development',
  entry: `${__dirname}/client/src/index.jsx`,
  watch: true,
  module: {
    rules: [
      {
        test: /\.(png|jpeg|gif|svg)$/i,
        use: [{
          loader: 'file-loader',
        }],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: [
              '@babel/transform-runtime',
            ],
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
