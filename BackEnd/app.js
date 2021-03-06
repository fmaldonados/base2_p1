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


app.post('/Add', function (req, res) {
    c.insertarPregunta(req.body.MainQuestion,req.body.Answer1,req.body.Answer2,req.body.Answer3,req.body.Answer4,req.body.CorrectAnswer).then(function(_result){
        res.send(_result);
    });
    
});
app.post('/login', function(req,res){
    c.login(req.body.user, req.body.password).then(function(_result){
        res.send(_result);
    });
})
app.get('/StudentView', function(req,res){
    c.getPrueba().then(function(_result){
        console.log("hola");
        res.send(_result);
    });
})

app.use(cors());


app.listen(3000);

console.log("Express app running on port 3000");

module.exports = app;