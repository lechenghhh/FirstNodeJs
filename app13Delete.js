/**
 * Created by 乐城 on 2017/4/19.
 * http://www.runoob.com/nodejs/nodejs-mongodb.html
 * MangoDB实例: 删除数据
 * 启动服务   D:\MongoDB\Server\3.4\bin\mongod.exe
 * node app13Delete
 */
var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/runoob';

var delData = function (db, callback) {
    //连接到表
    var collection = db.collection('site');
    //删除数据
    var whereStr = {"name": '菜鸟工具'};
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