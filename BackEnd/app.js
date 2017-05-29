var express = require("express");
var cors = require("cors");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
//app.use(express.json());  
//controllers
var c = require("./app/users/controladores").funciones;


app.use(function (req, res, next) {
    console.log(`${req.method} request for: '${req.url}'`);
    next();

});

app.get('/hola', function (req, res) {
    c.getPregunta().then(function (_result) {
        res.send(_result);
    });
});

app.post('/add',function (req, res) {
    console.log(req.body);
});

app.post('/signIn', function (req, res) {
    c.insertarPregunta(req.body.pregunta,req.body.respuesta1,req.body.respuesta2,req.body.respuesta3,req.body.respuesta4,req.body.correcta).then(function(_result){
        res.send(_result);
    });
    
});
app.use(cors());


app.listen(3000);

console.log("Express app running on port 3000");

module.exports = app;