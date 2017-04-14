/**
 * Created by 乐城 on 2017/4/14.
 * Node.js 获取GET/POST请求:
 * http://www.runoob.com/nodejs/node-js-get-post.html
 * http://localhost:3000/user?name=lecheng&url=HaloLeCheng
 */

var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // 解析 url 参数
    var params = url.parse(req.url, true).query;
    res.write("网站名：" + params.name);
    res.write("\n");
    res.write("网站 URL：" + params.url);
    res.end();

}).listen(3000);