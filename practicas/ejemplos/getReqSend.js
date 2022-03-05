const express = require('express')

const app = express()

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
 })
server.on("error", error => console.log(`Error en servidor ${error}`))

app.get('/usuarios', (req, res) => { // get http://localhost:8080/usuarios?nombre=Alfredo --> Hola Alfredo!

    const nombre = req.query.nombre;

    res.send(`Hola ${nombre}!`)
})

app.get('/usuarios/:id', (req, res) => { // get http://localhost:8080/usuarios/1 --> ID: 1

    const id = req.params.id;

    res.send(`ID: ${id}`)
})