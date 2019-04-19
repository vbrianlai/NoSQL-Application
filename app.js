const express = require('express');
const path = require('path');
const routes = require('./routes/index');

const app = express();

// Sets app.js to use pug as layout engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use('/', routes);

module.exports = app;