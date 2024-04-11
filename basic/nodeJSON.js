const http = require("http");

http.createServer(function (req, res) {
   
    res.writeHead(200, {'Content-Type': 'application/json'});

    const jsonResponse = {
        message: 'Welcome to this page runningon node js server'
    };
    
    res.write(JSON.stringify(jsonResponse));
    
    res.end();
}).listen(1000);
