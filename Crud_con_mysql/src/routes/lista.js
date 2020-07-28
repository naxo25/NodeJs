const express = require("express");
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let links = [
	{ 'nombre': 'Gustavo', 'profesion': 'UberRapiCornetaEats', 'rango': 'Guaton parrillero', 'img': 'http://nacholabraweb.000webhostapp.com/imagesChat/N.jpg' },
	{ 'nombre': 'Cristiano', 'profesion': 'Adobexd', 'rango': 'Fluter lov', 'img': 'http://nacholabraweb.000webhostapp.com/imagesChat/N.jpg' },
	{ 'nombre': 'N', 'profesion': 'Comer', 'rango': 'Quasar Master', 'img': 'http://nacholabraweb.000webhostapp.com/imagesChat/N.jpg' }
	];

app.get('/', function(req, res) {
 res.send(links);
});
//nose si la wa que sigue es asi o es del ejemplo
/*app.route('/usuario')
 .get(function (req, res) {
  respuesta = {
   error: false,
   codigo: 200,
   tarea: ''
  };
  if(usuario.nombre === '' || usuario.apellido === '') {
   respuesta = {
    error: true,
    codigo: 501,
    tarea: 'El usuario no ha sido creado'
   };
  } else {
   respuesta = {
    error: false,
    codigo: 200,
    tarea: 'respuesta del usuario',
    respuesta: usuario
   };
  }
  res.send(respuesta);
 })
 .post(function (req, res) {
  if(!req.body.nombre || !req.body.apellido) {
   respuesta = {
    error: true,
    codigo: 502,
    tarea: 'El campo nombre y apellido son requeridos'
   };
  } else {
   if(usuario.nombre !== '' || usuario.apellido !== '') {
    respuesta = {
     error: true,
     codigo: 503,
     tarea: 'El usuario ya fue creado previamente'
    };
   } else {
    usuario = {
     nombre: req.body.nombre,
     apellido: req.body.apellido
    };
    respuesta = {
     error: false,
     codigo: 200,
     tarea: 'Usuario creado',
     respuesta: usuario
    };
   }
  }
  
  res.send(respuesta);
 })
 .put(function (req, res) {
  if(!req.body.nombre || !req.body.apellido) {
   respuesta = {
    error: true,
    codigo: 502,
    tarea: 'El campo nombre y apellido son requeridos'
   };
  } else {
   if(usuario.nombre === '' || usuario.apellido === '') {
    respuesta = {
     error: true,
     codigo: 501,
     tarea: 'El usuario no ha sido creado'
    };
   } else {
    usuario = {
     nombre: req.body.nombre,
     apellido: req.body.apellido
    };
    respuesta = {
     error: false,
     codigo: 200,
     tarea: 'Usuario actualizado',
     respuesta: usuario
    };
   }
  }
  
  res.send(respuesta);
 })
 .delete(function (req, res) {
  if(usuario.nombre === '' || usuario.apellido === '') {
   respuesta = {
    error: true,
    codigo: 501,
    tarea: 'El usuario no ha sido creado'
   };
  } else {
   respuesta = {
    error: false,
    codigo: 200,
    tarea: 'Usuario eliminado'
   };
   usuario = { 
    nombre: '', 
    apellido: '' 
   };
  }
  res.send(respuesta);
 });
app.use(function(req, res, next) {
 respuesta = {
  error: true, 
  codigo: 404, 
  tarea: 'URL no encontrada'
 };
 res.status(404).send(respuesta);
});*/
app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});