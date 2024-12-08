const http = require('http');

const port = 1000;

const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });//키값이 Content-Type이고 밸류값이 text/plain인 헤더를 추가, 패킷
    res.write("<h1>Hi!</h1>\n");//응답 본문
    res.write("<h1>Hello World</h1>\n");//응답 본문
    res.end();
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});