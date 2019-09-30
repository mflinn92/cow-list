const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.post('/api/cows', (req, res, next) => {
  res.send('You have added a cow');
});

app.get('/api/cows', (req, res, next) => {
  res.send('Here are some cows');
});

module.exports = app;