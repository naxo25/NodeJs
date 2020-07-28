var app  = require('express')();
var http = require('http').Server(app);
var io   = require('socket.io')(http);

app.get('/', function(req, res) {
  res.sendFile( __dirname + '/chat.html');
});


io.on('connection', function(socket) {

  socket.on('nuevo mensaje', function(msj) {
    io.emit('nuevo mensaje', msj);
  });

  socket.on('nuevo foto', function(event) {
    io.emit('nuevo foto', event);
  });

  socket.on('nuevo video', function(event) {
    io.emit('nuevo video', event);
  });

  socket.on('disconnect', function() {
    console.log('Usuario desconectado');
  });
  
});


http.listen(80, function() {
  console.log('listening on *:3000');
});