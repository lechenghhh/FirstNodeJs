/**
 * Created by 乐城 on 2017/4/19.
 * http://www.runoob.com/nodejs/nodejs-express-framework.html
 * 第3个 Express 框架实例:文件使用
 * node app12Express3
 * http://127.0.0.1:8083/images/logo.png
 */

var express = require('express');
var app = express();

//通过文件方式,直接把public 目录下的文件映射到url 的"/" 后面
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('Hello World');
})

var server = app.listen(8083, function () {

    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})