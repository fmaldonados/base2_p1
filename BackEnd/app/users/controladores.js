var configdb = require("./../../helpers/configdb");
var docdbClient = require("documentdb").DocumentClient;
var client = new docdbClient(configdb.uri, { "masterKey": configdb.primaryKey });
var databaseUrl = `dbs/${configdb.database.id}`;
var collectionUrl = `${databaseUrl}/colls`;

var DoQmentDB = require('doqmentdb');
var db = new DoQmentDB(client, 'tbd2');
var preguntaC = db.use('pregunta');
var userC = db.use('user');

exports.funciones = {
    getPregunta: function (id) {
        var p = new Promise(function (resolve, reject) {
            console.log(client.getDatabaseAccount);
            client.queryDocuments(`${collectionUrl}/${configdb.collection.pregunta}`, "select f.id,f.pregunta,f.respuestas,f.correcta from f where f.id ='" + id + "'").toArray((err, results) => {

                if (err) {
                    console.log("ColecctionUrl" + JSON.stringify(err));
                } else {
                    var vStream = "";
                    for (let result of results) {
                        vStream += JSON.stringify(result);
                    }

                    resolve(vStream);
                }
            });
        });
        return p;
    },

    insertarAlumno: function (_user, _password) {
        var p = new Promise(function (resolve, reject) {
            client.queryDocuments(`${collectionUrl}/${configdb.collection.user}`, "select COUNT(f.id) from f").toArray((err, results) => {
                if (err) {
                    console.log("ColecctionUrl" + JSON.stringify(err));
                } else {
                    userC.findOne({ user: `${_user}`, password: `${_password}` }).then(function (res) {
                        if (res) {
                            resolve("El usuario ya existe");

                        } else {
                            var a = 1;
                            a = a + parseInt(results[0].$1);
                            userC.create({ id: `${a}`, user: `${_user}`, password: `${_password}` });
                            resolve("Usuario Ingresado Exitosamente");
                        }
                    });
                }
            });
        });
        return p;

    },
    insertarPregunta: function (_pregunta, respuesta1, respuesta2, respuesta3, respuesta4, correcta) {
        var p = new Promise(function (resolve, reject) {
            client.queryDocuments(`${collectionUrl}/${configdb.collection.pregunta}`, "select COUNT(f.id) from f").toArray((err, results) => {
                if (err) {
                    console.log("ColecctionUrl" + JSON.stringify(err));
                } else {
                    preguntaC.findOne({ pregunta: `${_pregunta}` }).then(function (res) {
                        if (res) {
                            resolve("La pregunta ya existe");

                        } else {
                            console.log("Entro aqui");
                            var a = 1;
                            a = a + parseInt(results[0].$1);
                            var b = [`${respuesta1}`, `${respuesta2}`, `${respuesta3}`, `${respuesta4}`];
                            preguntaC.create({ id: `${a}`, pregunta: `${_pregunta}`, respuestas: [`${respuesta1}`, `${respuesta2}`, `${respuesta3}`, `${respuesta4}`], correcta: `${correcta}` });
                            resolve("pregunta agregada exitosamente");
                        }
                    });
                }
            });
        });
        return p;
    },
    login: function (_user, _password) {
        var p = new Promise(function (resolve, reject) {
            userC.findOne({ user: `${_user}`, password: `${_password}` }).then(function (res) {
                if (res) {
                    console.log("El usuario existe");
                    resolve("true");
                } else {
                    console.log("el usuario no existe");
                    resolve("false");
                }
            });
        });
        return p;

    },
    getrandoms: function () {
        var p = new Promise(function (resolve, reject) {
            var arreglo = [];
            client.queryDocuments(`${collectionUrl}/${configdb.collection.pregunta}`, "select COUNT(f.id) from f").toArray((err, results) => {
                if (err) {
                    console.log("ColecctionUrl" + JSON.stringify(err));
                } else {
                    var max = parseInt(results[0].$1);
                    console.log(max);
                    var a = 0;
                    while (a < 10) {
                        var random = Math.floor((Math.random() * max) + 1);
                        //console.log(random);
                        if (arreglo.indexOf(random) == (-1)) {
                            arreglo[a] = random;
                            a++;
                        }
                    }
                    resolve(arreglo);
                }
            });

        });
        return p;
    },
    getPrueba: function () {
        var a = this;
        var arreglo = [];
        var p = new Promise(function (resolve, reject) {
            var index = 0;
            a.getrandoms().then(function (_result) {
                for (let res of _result) {
                    a.getPregunta(res).then(function (_result1) {
                        arreglo[index] = _result1;
                        index++;
                        if (index == 10) {
                            resolve(arreglo);
                        }
                    });
                }


            });

        });
        return p;
    }
}