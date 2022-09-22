let express = require('express');

let app = express();

let path = require('path');

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

/*app.listen(3000, () =>
    console.log('servidor corriendo')
);*/

app.listen(process.env.PORT || 3000, function () {
    console.log("Servidor corriendo");
})

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})

app.get('/log-in', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/log-in.html'))
})

app.get('/sign-in', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/sign-in.html'))
})


app.get('/detalle', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/detalle.html'))
})

app.get('/carrito', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/carrito.html'))
})
