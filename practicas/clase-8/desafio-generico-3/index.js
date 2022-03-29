const express = require('express');
const multer = require('multer');

const app = express();
const port = 8080;
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const server = app.listen(port, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on("error", err => console.log(`Error en el servidor ${err}`));

app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile('index.html')
});

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})
let upload = multer({storage: storage})

app.post('/uploadFile', upload.single('myFile'), (req, res, next) => {
    const file = req.file
    if (!file) {
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    }
    res.send(file)
})

