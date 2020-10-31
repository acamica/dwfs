const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
    console.log('El endpoint / ha sido ejecutado');
    let respuesta = 'Hello World'
    res.send(respuesta);
})

let usuarios = [];

app.get('/usuarios', function (req, res) {
    res.send(usuarios);
})

app.post('/usuarios', function (req, res) {
    usuarios.push('new');
    res.send('se ingreso un nuevo usuario');
})


 
app.listen(3000)