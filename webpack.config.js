module.exports = {
  module: {
    rules: [
      {
        test: /\.(ttf|otf|woff|woff2|eot)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]',
        },
      },
    ],
  },
};
