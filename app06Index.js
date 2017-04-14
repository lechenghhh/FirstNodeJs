/**
 * Created by 乐城 on 2017/4/14.
 * nodejs 路由对象：http://www.runoob.com/nodejs/nodejs-router.html
 */
var server = require("./app06Sever");
var router = require("./app06Router");

server.start(router.route);