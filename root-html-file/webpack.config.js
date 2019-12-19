// Webpack uses this to work with directories
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

// This is main configuration object.
// Here you write different options and tell Webpack what to do
module.exports = {
    entry: {
        index: './index.js'
    },
    
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist'
    },

    devServer: {
        overlay: true,
        contentBase: path.resolve(__dirname, './dist'),
        compress: true
    },

    plugins: [
      new CopyPlugin([
        {from: path.resolve(__dirname, 'index.html')},
        {from: path.resolve(__dirname, 'import-map.json')}
      ]),
      new CleanWebpackPlugin()
    ],    
    

  // Default mode for Webpack is production.
  // Depending on mode Webpack will apply different things
  // on final bundle. For now we don't need production's JavaScript 
  // minifying and other thing so let's set mode to development
  mode: 'development',

  module: {
    rules: [
      {parser: {System: false}},
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
    ]
  }
};
