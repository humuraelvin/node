const http = require("http");
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Welcome to this page');
    res.end();
    
}).listen(1000);