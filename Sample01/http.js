//http 서버 구동 예제
var http = require('http');
var server = http.createServer();

var port = 3000;//0~66635까지의 port가 있음

server.listen(port, function() {
    console.log("Start server");
});

server.on('connection', function(socket)  {
    var addr = socket.address();
    console.log("누군가 접속함");
});

server.on('request', function(req, res) {
    console.log("누군가 요청함");

    res.writeHead(200, {"Content-type" : "text/html; charset=utf-8"});
    res.write("반갑습니다.");
    res.end();
});