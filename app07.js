/**
 * Created by 乐城 on 2017/4/14.
 * NodeJs全局对象：http://www.runoob.com/nodejs/nodejs-global-object.html
 */

console.log( __filename );

console.log( __dirname );

function printHello(){
    console.log( "Hello, World!");
}
// 两秒后执行以上函数
setTimeout(printHello, 2000);

// function printHello(){
//     console.log( "Hello, World!");
// }
// setInterval(printHello, 2000);//每隔两秒循环执行


// 输出到终端////////////////////////////////////////////////////////
process.stdout.write("Hello World!" + "\n");

// 通过参数读取
process.argv.forEach(function(val, index, array) {
    console.log(index + ': ' + val);
});

// 获取执行路径
console.log(process.execPath);

// 平台信息
console.log(process.platform);


// 输出当前目录//////////////////////////////////////////////////////
console.log('当前目录: ' + process.cwd());

// 输出当前版本
console.log('当前版本: ' + process.version);

// 输出内存使用情况
console.log(process.memoryUsage());