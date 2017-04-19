/**
 * Created by 乐城 on 2017/4/19.
 * http://www.runoob.com/nodejs/nodejs-express-framework.html
 * 第4个 Express 框架实例:get方法参数获取
 * node app12Express4
 * http://127.0.0.1:8084/index12Get.html
 */
var express = require('express');
var app = express();

//通过文件方式,直接把public 目录下的文件映射到url 的"/" 后面
app.use(express.static('public'));

//通过路由方式
app.get('/index.htm', function (req, res) {
    res.sendFile("/public/index12Get.html");
})

app.get('/process_get', function (req, res) {

    // 输出 JSON 格式
    response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

var server = app.listen(8084, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})