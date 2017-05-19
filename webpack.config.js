const webpack = require('webpack'); //to access built-in plugins
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './app/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle-[chunkhash].js',
    publicPath: "/mobile/dist/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        use: 'babel-loader'
      },
      
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },

      {
        test: /\.(png|jpg|jpeg|gif|woff)$/, 
        use: 'url-loader?limit=4192&name=[name].[ext]' 
      },

    ]
  },
  plugins:[
        new HtmlWebpackPlugin({               //自动生成Html
            template:'./app/view/index.html',
            filename:'../app/index.html',
            inject:'body'
        })
    ]
};

module.exports = config;