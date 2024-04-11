var express = require('express');

var app = express();

app.get("/", function (req, res) {
    res.send("Hello Express");
})

var server= app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening a http://%s:%s", host, port);
})