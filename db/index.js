const mysql = require('mysql');
const setup = require('./config');
const Promise = require('bluebird');
const database = 'cows';

const dbConnection = mysql.createConnection({
  user: 'root',
  password: 'BeckyPete0206'
});

const db = Promise.promisifyAll(dbConnection, {multiArgs: true});

db.connectAsync()
  .then(() => console.log(`Connected to ${database} database as ID ${db.threadId}`))
  .then(() => db.queryAsync(`CREATE DATABASE IF NOT EXISTS ${database}`))
  .then(() => db.queryAsync(`USE ${database}`))
  .then(() => setup(db));

module.exports = db;