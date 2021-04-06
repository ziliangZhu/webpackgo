/* 
  webpack.config.js webpack的配置文件
  作用：指示webpack干那些活

  所有构建工具都是基于node.js平台的  模块化默认采用commonjs

*/

const { resolve } = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname,'build')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins:[

    ],
    mode:'development'
}