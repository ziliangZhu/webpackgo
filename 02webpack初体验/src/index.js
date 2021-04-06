/* 
  index.js：webpack的入口文件
  1.運行指令：
    开发指令：webpack ./src/index.js -o ./build/built.js --mode=development
    生产指令：webpack ./src/index.js -o ./build/built.js --mode=production
    
  2.结论
    1.webpack 只能处理js/json文件，不能处理css/img等其他资源
    2.生产环境和开发环境将ES6模块化编译成浏览器能识别的模块
    3.生产环境比开发环境多一个压缩js
*/

import './index.css'
import data from './data.json'
console.log(data);

function add(x, y) {
    return x + y
}
console.log(add(1, 2));