let express = require('express');
let path = require('path');
let app = express();


const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));


//app.listen(process.env.PORT || 3000, function () {
    console.log("Servidor corriendo");
//})

app.use("/", home.routes);

app.set("view engine", "ejs");

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

app.listen(process.env.PORT || 3000, function () {
    console.log("Servidor corriendo");
})