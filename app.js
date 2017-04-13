/*
 * Created by 乐城 on 2017/4/13.
 * 本地测试：http://localhost:3000/lecheng
 * 教程地址：http://www.jikexueyuan.com/course/723.html
 * express：http://expressjs.com/
 * 启动指令：node app    */

var express = require('express');
var app = express();

app.get('/lecheng', function (req, res) {
    res.send('Halo LeCheng~!')

});

app.listen(3000);
