var app  = require('express')();
var http = require('http').Server(app);
var io   = require('socket.io')(http);
var cors = require('cors');
app.use(cors());

app.get('/', function(req, res) {
  res.sendFile( __dirname + '/chat.html');
});

const lista = [];
const listar = () => {
  lista.push({ usuario: 'pancho', mensaje:'Esta es la demo de un chat'});
  lista.push({ usuario: 'fran', mensaje:'Welcome'});
  lista.push({ usuario: 'javiera', mensaje:'con nodejs mas vuejs usando sockets io'});
};
listar();

app.get('/listar', async (req, res) => {
    await res.send(lista);
});

io.on('connection', function(socket) {

  socket.on('update mensaje', async (msj,id) => {
    lista[id].mensaje = msj;
    await io.emit('update mensaje', msj, id);
  });

  socket.on('borrar', async (id) => {
    await lista.splice(id, 1);
    await io.emit('borrar', id);
  });

  socket.on('nuevo mensaje', async (userName, msj) => {
    const datos = { usuario: userName, mensaje: msj };
    await lista.push(datos);
    await io.emit('nuevo mensaje', datos);
  });

  socket.on('nuevo foto', async (userName, event) => {
    const datos = { usuario: userName, imagen: event };
    await lista.push(datos);
    await io.emit('nuevo foto', datos);
  });

  socket.on('nuevo video', async (event) => {
    await io.emit('nuevo video', event);
  });

  /*socket.on('disconnect', () => {
    console.log('Usuario desconectado');
  });*/
  
});



http.listen(4000);