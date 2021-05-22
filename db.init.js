const fs = require('fs');


const mongoPort = 'mongodb://localhost:27017';
const mongoURI = mongoPort + '/quizztory';
const dbName = 'quizztory'

conn = new Mongo();
db = conn.getDB(dbName);

const dbs = db.adminCommand('listDatabases');

console.log(dbs);



