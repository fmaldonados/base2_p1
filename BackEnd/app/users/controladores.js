var configdb = require("./../../helpers/configdb");
var docdbClient = require("documentdb").DocumentClient;
var client = new docdbClient(configdb.uri, { "masterKey": configdb.primaryKey });
var databaseUrl = `dbs/${configdb.database.id}`;
var collectionUrl = `${databaseUrl}/colls`;

var DoQmentDB = require('doqmentdb');
var db = new DoQmentDB(client, 'tbd2');
var pregunta = db.use('pregunta');

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
    }
}