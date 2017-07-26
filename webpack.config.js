const webpack = require('webpack'); //to access built-in plugins
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  devtool:'eval-source-map', //定位错误信息所在位置；
  entry: './app/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle-[chunkhash].js',
    publicPath: "/dist/"
  },
  devServer: {
    contentBase: "./public",//本地服务器所加载的页面所在的目录
    colors: true,//终端中输出结果为彩色
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
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