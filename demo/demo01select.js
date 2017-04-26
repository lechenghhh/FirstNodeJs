/**
 * Created by 乐城 on 2017/4/19.
 * http://www.runoob.com/nodejs/nodejs-mongodb.html
 * MangoDB实例: 插入数据
 * 启动服务：  D:\MongoDB\Server\3.4\bin\mongod.exe
 * node .\demo\demo01select
 * 页面地址：  http://127.0.0.1:8091/demo01list.html
 */

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/runoob'; // 数据库为 runoob

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({extended: false})


app.use(express.static('public'));

// app.get('/index.htm', function (req, res) {
//     res.sendFile( __dirname + "/" + "index.htm" );
// })

app.post('/note_select', urlencodedParser, function (req, res) {

    select(req,res)
})

var server = app.listen(8091, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})

var select = function (req,res) {
    MongoClient.connect(DB_CONN_STR, function (err, db) {
        console.log("连接成功！");
        selectData(db, function (result) {
            console.log(result);
            db.close();
            response = result;
            console.log(response);
            res.end(JSON.stringify(response));
        });
    });
    var selectData = function (db, callback) {
        //连接到表
        var collection = db.collection('my_note');
        //查询数据
        var whereStr = {};
        collection.find(whereStr).toArray(function (err, result) {
            if (err) {
                console.log('Error:' + err);
                return;
            }
            callback(result);
        });
    }


}
