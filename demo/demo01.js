/**
 * Created by 乐城 on 2017/4/19.
 * http://www.runoob.com/nodejs/nodejs-mongodb.html
 * MangoDB实例: 记事本实例
 * 启动服务：  D:\MongoDB\Server\3.4\bin\mongod.exe
 * node .\demo\demo01
 * 页面地址：  http://127.0.0.1:8091/demo01list.html
 */
var ObjectId = require('mongodb').ObjectId;//获取主键导的包
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/runoob'; // 数据库为 runoob
var urlencodedParser = bodyParser.urlencoded({extended: false})//创建 application/x-www-form-urlencoded编码解析

// app.get('/index.htm', function (req, res) {
//     res.sendFile( __dirname + "/" + "index.htm" );
// })//屏蔽get方法

/*
 * 建立服务器端口好为8091。。。
 * */
var server = app.listen(8091, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})

/*
 * select查询方法   node .\demo\demo01
 * */
app.post('/note_select', urlencodedParser, function (req, res) {//穿件路由
    select(req, res);
})

var select = function (req, res) {
    MongoClient.connect(DB_CONN_STR, function (err, db) {
        console.log("连接成功！");
        selectData(db, function (result) {
            console.log(result);
            db.close();
            response = {'result': result};
            console.log(response);
            res.end(JSON.stringify(response));
        });
    });
    var selectData = function (db, callback) {
        //连接到表
        var collection = db.collection('my_note');
        //查询数据
        // var whereStr = {"_id":req.body._id};
        collection.find({}).toArray(function (err, result) {
            if (err) {
                console.log('Error:' + err);
                return;
            }
            callback(result);
        });
    }
}

/*
 *   add方法    node .\demo\demo01
 * */
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({extended: false})

app.use(express.static('public'));

app.post('/note_add', urlencodedParser, function (req, res) {
    insert(req);
    // 输出 JSON 格式
    response = {
        title: req.body.title,
        content: req.body.content
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

var insert = function (req) {
    var insertData = function (db, callback) {
        //连接到表 site
        var collection = db.collection('my_note');
        //插入数据
        var data = [{
            "title": req.body.title,
            "content": req.body.content,
            "time": new Date(parseInt(Date.now())).toLocaleString().substr(0, 17),
            "test": ""
        }];
        collection.insert(data, function (err, result) {
            if (err) {
                console.log('Error:' + err);
                return;
            }
            callback(result);
        });
    }
    MongoClient.connect(DB_CONN_STR, function (err, db) {
        console.log("连接成功！");
        insertData(db, function (result) {
            console.log(result);
            db.close();
        });
    });
}

/*
 * http://blog.csdn.net/kongjunchao159/article/details/51209287
 * delete方法    node .\demo\demo01
 * */
app.post('/note_delete', urlencodedParser, function (req, res) {
    noteDelete(req);
    // 输出 JSON 格式
    response = {
        msg: 'Delete Success !',
        content: ''
    };
    console.log(response);
    res.end(JSON.stringify(response));
})
var noteDelete = function (req, res) {
    var delData = function (db, callback) {
        //连接到表
        var collection = db.collection('my_note');
        //删除数据

        var whereStr = {"_id": ObjectId(req.body._id)};
        collection.remove(whereStr, function (err, result) {
            if (err) {
                console.log('Error:' + err);
                return;
            }
            callback(result);
        });
    }

    MongoClient.connect(DB_CONN_STR, function (err, db) {
        console.log("连接成功！");
        delData(db, function (result) {
            console.log(result);
            db.close();
        });
    });
}

/*
 * update方法    node .\demo\demo01
 * */
app.post('/note_update', urlencodedParser, function (req, res) {
    update(req);
    // 输出 JSON 格式
    response = {
        msg: 'Update Success !',
        content: ''
    };
    console.log(response);
    res.end(JSON.stringify(response));
})
var update = function (req, res) {
    var updateData = function (db, callback) {
        //连接到表
        var collection = db.collection('my_note');
        //更新数据
        var whereStr = {"_id": ObjectId(req.body._id)};
        var updateStr = {
            $set: {
                "title": req.body.title,
                "content": req.body.content,
                "time": new Date(parseInt(Date.now())).toLocaleString().substr(0, 17),
                "test": ""
            }
        };
        collection.update(whereStr, updateStr, function (err, result) {
            if (err) {
                console.log('Error:' + err);
                return;
            }
            callback(result);
        });
    }

    MongoClient.connect(DB_CONN_STR, function (err, db) {
        console.log("连接成功！");
        updateData(db, function (result) {
            console.log(result);
            db.close();
        });
    });
}
