let express = require('express');

let app = express();

let path= require('path');

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.listen(3000, () => 
console.log('servidor corriendo')
);

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname,'/views/home.html'))
})

<<<<<<< HEAD
app.get('/log-in', function(req,res) {
    res.sendFile(path.join(__dirname,'/views/log-in.html'))
})

app.get('/sign-in', function(req,res) {
    res.sendFile(path.join(__dirname,'/views/sign-in.html'))
})
=======
 app.get('/detalle', function(req,res) {
    res.sendFile(path.join(__dirname,'/views/detalle.html'))
 })

// app.get('/', function(req,res) {
//     res.sendFile(path.join(__dirname,'/views/sign-in.html'))
// })
>>>>>>> fe9583626ce67d0790e85b551d6564ce258ee867
