const express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send("Hello world in express");
})

var server = app.listen(8085, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Hello Word express app is running on https://%s:%s", host, port);
})