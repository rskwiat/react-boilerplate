var path = require("path");
var webpack = require('webpack');

var Dashboard = require('webpack-dashboard');
var DashboardPlugin = require('webpack-dashboard/plugin');
var dashboard = new Dashboard();

if(process.env.NODE_ENV === 'test'){
  var entry = './tests/spec.js';
  var publicPath = '/tests';
  var path = './tests';
  var filename = 'SpecRunner.js';
  var contentBase = './tests';
} else {
  var entry = './src/main.js';
  var path =  __dirname;
  var publicPath = '/';
  var filename = './dist/bundle.js';
  var contentBase = './public';
}

module.exports = {
  entry: [
    entry
  ],
  output: {
    path: path,
    publicPath: publicPath,
    filename: filename
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins:[
    new DashboardPlugin(dashboard.setData),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: true
      }
    })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: contentBase,
    quiet: true
  }
};
