
// описание правил
const {resolve} = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
module.exports ={

    entry:{
        main: './js/main.js'  //точка входа
    },
    output:{
        path:resolve(__dirname,'dist'),
        filename: 'main.[contenthash].js' //точка выхода
    },
    module: {
        rules: [{
                test: /\.(png)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
                // test: /\.scss$/i,
                // use: [MiniCssExtractPlugin.loader, "css-loader","sass-loader"], //для SCSS файлов
            },
            {
                test: /\.mp3$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].mp3',
                },
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:'[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            template:resolve(__dirname,'index.html')
        }),
        // new BundleAnalyzerPlugin()
    ]
}

