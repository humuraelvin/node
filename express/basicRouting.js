const express = require('express');

var app = express();

app.get('/', function (req, res) {
    console.log("Recieved a getrequest");
    res.send("Hello get");
})

app.post('/', function (req, res) {
    console.log("Recieved a Post request");
    res.send("Updated");
})

app.delete('/del_user', function (req, res) {
    console.log("Recieved a delete user request");
    res.send("Deleted the user");
})

app.get('/list_user', function (req, res) {
    console.log("Recieved aget user list");
    res.send("listed users");
})

app.get('/ab*cd', function (req,res) {
    console.log("Recieved a pattern matching request");
    res.send("Pattern matching")
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Routing app in express is running on port https://%s:%s", host, port);
})