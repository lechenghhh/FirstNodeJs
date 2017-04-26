/**
 * Created by 乐城 on 2017/4/19.
 * 启动服务   D:\MongoDB\Server\3.4\bin\mongod.exe
 * node app13Test
 */

var mongodb = require("mongodb") ;
var server = new mongodb.Server("localhost",27017,{
    auto_reconnect : true
}) ;
var conn = new mongodb.Db("bb",server,{
    safe : true
}) ;
conn.open(function(error,db){
    if(error) throw error ;
    var collection = db.collection('site');

    collection.insert({name:"myName",age:"myAge"},function(err,result){
        if(err){
            console.error(err);
        }else{
            console.log("insert result:");
            console.log(result);
        }
    })
}) ;