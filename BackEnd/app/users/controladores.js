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
    getPregunta: function () {
        var p = new Promise(function (resolve, reject) {
            console.log(client.getDatabaseAccount);
            client.queryDocuments(`${collectionUrl}/${configdb.collection.pregunta}`, "select * from f").toArray((err, results) => {

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
            client.queryDocuments(`${collectionUrl}/${configdb.collection.user}`, "select MAX(f.id) from f").toArray((err, results) => {
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
            client.queryDocuments(`${collectionUrl}/${configdb.collection.pregunta}`, "select MAX(f.id) from f").toArray((err, results) => {
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
                    console.log(res);
                        if (res) {
                            console.log("El usuario existe");
                            resolve(true);
                        } else {
                            console.log("el usuario no existe");
                            resolve(false);
                        }
                    });
            return p;
        });
    }
}