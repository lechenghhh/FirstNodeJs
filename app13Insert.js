/**
 * Created by 乐城 on 2017/4/19.
 * http://www.runoob.com/nodejs/nodejs-mongodb.html
 * MangoDB实例: 插入数据
 * 启动服务   D:\MongoDB\Server\3.4\bin\mongod.exe
 * node app13Insert
 */
var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/runoob'; // 数据库为 runoob

var insertData = function (db, callback) {
    //连接到表 site
    var collection = db.collection('site');
    //插入数据
    var data = [{"title": "菜鸟教程", "content": "我真的是1212小白"}, {"title": "菜鸟工具", "content": "我真的是"}];
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