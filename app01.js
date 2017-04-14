/*
 * Created by 乐城 on 2017/4/13.
 * 本地测试：http://localhost:3000/lecheng
 * 教程地址：http://www.jikexueyuan.com/course/723.html
 * express：http://expressjs.com/
 * 启动指令：node app    */

var express = require('express');
var app = express();

var json = {
    'status': 1,
    'msg': '成功',
    'data': [{
        'title': '标题1',
        'content': '内容1',
    }, {
        'title': '标题2',
        'content': '内容2',
    }, {
        'title': '标题3',
        'content': '内容3',
    }]
}
app.get('/lecheng', function (req, res) {
    // res.send('Halo LeCheng~!')
    res.send(json)
});

app.listen(3000);
