var express = require('express');
var app = new express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 80;
app.use(express.static(__dirname + '/public'));
http.listen(port, function(){
});
app.get('/', function(req, res){
res.redirect('index.html');
});
io.on('connection', function(socket){
socket.on('stream',function(image){
socket.broadcast.emit('stream', image);
});
});