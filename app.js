let express = require('express');

let app = express();

let path= require('path');

app.listen(3000, () => 
console.log('servidor corriendo')
);

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname,'/views/home.html'))
})