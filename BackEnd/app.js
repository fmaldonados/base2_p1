var express = require("express");
var cors = require("cors");
var app = express();

//controllers
var c = require("./app/users/controladores").funciones;

app.use(function (req, res, next) {
    console.log(`${req.method} request for: '${req.url}'`);
    next();
    
});

app.get('/hola', function (req, res) {
    c.getPregunta().then(function(_result){
        res.send(_result);
    });
});

app.use(cors());


app.listen(3000);

console.log("Express app running on port 3000");

module.exports = app;