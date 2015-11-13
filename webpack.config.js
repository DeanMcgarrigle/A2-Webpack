'use strict';
var webpack = require('webpack'),
    APP = __dirname;
var dev = false;
var path = require('path');


module.exports = {
    context: APP,
    entry: {
        app:  ['webpack/hot/dev-server', './src/app/bootstrap.ts']
    },
    output: {
        path: APP,
        filename: 'build/bundle.js'
    },
    module: {
        loaders: [
            //{
            //    test: /\.scss$/,
            //    loader: "style-loader!css-loader!sass-loader?"
            //},
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_module|bower_components/
            },
            {
                test: /\.ts$/,
                loader: "ts-loader"
            },
            //{
            //    test: /\.css$/,
            //    loader: "style-loader!css-loader"
            //},
            //{
            //    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            //    loader: "url-loader?name=build/assets/[name].[ext]&limit=10000&minetype=application/font-woff"
            //},
            //{
            //    test: /\.(ttf|eot|svg)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            //    loader: "file-loader?name=build/assets/[name].[ext]"
            //},
            //{
            //    test: /\.(jpg|png)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            //    loader: 'file-loader?name=build/assets/[name].[ext]'
            //},
            //{
            //    test: /\.ico$/,
            //    loader: 'url-loader?mimetype=image/ico'
            //},
            {
                test: /\.json/,
                loader: 'json'
            },
            {
                test: /\.html/,
                loader: 'raw'
            }
        ]
    },
    resolve: {
        root: APP,
        alias: {
            sweetalert: '../../node_modules/sweetalert/dist/sweetalert.min.js'
        }
    },
    plugins: !dev ?
        [
            //   new webpack.HotModuleReplacementPlugin(),
            new webpack.optimize.UglifyJsPlugin({
                minimize: true,
                mangle: false,
                compress: {
                    warnings: false
                }
            })
        ] :
        [
            new webpack.HotModuleReplacementPlugin()
        ]
};