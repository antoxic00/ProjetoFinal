var express = require('express');
var app = express();


app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res0) {
    res.sendFile(__dirname + '/public/html/index.html')
});

app.get('/compra1', function(req, res) {
    res.send(__dirname + '/public/html/index.html');
});

app.get('/compra2', function(req, res) {
    res.send(__dirname + '/public/html/index.html');
});

app.get('/compra3', function(req, res) {
    res.send(__dirname + '/public/html/index.html');
});

app.listen(8800,function(){
})