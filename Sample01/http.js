//http 서버 구동 예제
var http = require('http');
var server = http.createServer();

var port = 3000;//0~66635까지의 port가 있음

server.listen(port, function() {
    console.log("Start server");
});