const fs = require('fs');

const mongoPort = 'mongodb://localhost:27017';
const mongoURI = mongoPort + '/quizztory';
const dbName = 'quizztory'

const conn = new Mongo();
const dbs = conn.adminCommand('listDatabases');

let db = null;

for(let i = 0; i < dbs.length; i++) {
  if(dbs[i].name === dbName) {
    db = conn.getDB(dbName);
    db.dropDatabase();
    break;
  }
}

db = conn.getDB(dbName);
