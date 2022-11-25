const path = require('path');
module.exports = {
  module: {
    rules: [
      {
        test: /.(tsx|ts)$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /.hbs$/,
        use: ['handlebars-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
};