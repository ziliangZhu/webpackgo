/* 
  webpack.config.js webpack的配置文件
  作用：指示webpack干哪些活 当运行webpack指令时， 会加载里面的配置

  所有构建工具都是基于node.js平台的  模块化默认采用commonjs

*/

const { resolve } = require('path')
// resolve 用来拼接绝对路径的方法  __dirname nodejs 的变量，代表当前文件的目录绝对路径
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname,'build')
    },
    module:{
        rules:[
            // 详细的loader配置
            // 不同文件必须配置不同loader处理
            {
                //匹配哪些文件
                test:/\.css$/,
                // 使用哪些loader
                use:[
                    // 创建style标签，将js中的样式资源插入进去，添加到head中生效
                    'style-loader',
                    // 将css文件以字符串的形式变成commonjs模块加载到js中，里面内容是样式字符串
                    'css-loader'
                ]
            },
            {
                //匹配哪些文件
                test:/\.less$/,
                // 使用哪些loader
                use:[
                    // 创建style标签，将js中的样式资源插入进去，添加到head中生效
                    'style-loader',
                    // 将css文件以字符串的形式变成commonjs模块加载到js中，里面内容是样式字符串
                    'css-loader',
                    // 将less文件编译成CSS文件 less less-loader
                    'less-loader'
                ]
            }
        ]
    },
    plugins:[

    ],
    mode:'development'
}