'use strict';

const app = require("express")();
const express = require("express");
const path = require('path');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const routes = require('./routes/');

const PORT = process.env.PORT || 3000;

const MONGODB_HOST = process.env.MONGODB_HOST || 'localhost';
const MONGODB_PORT = process.env.MONGODB_PORT || 27017;
const MONGODB_USER = process.env.MONGODB_USER || '';
const MONGODB_PASS = process.env.MONGODB_PASS || '';
const MONGODB_NAME = process.env.MONGODB_NAME || 'node-webserver';

const MONGODB_AUTH = MONGODB_USER
  ? `${MONGODB_USER}:${MONGODB_PASS}@`
  : '';

const MONGODB_URL = `mongodb://${MONGODB_AUTH}${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_NAME}`;

app.set('view engine', 'jade');

app.locals.title = "Stock Portfolio App";

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(routes);

// Message for terminal to list current port
mongoose.connect(MONGODB_URL);

mongoose.connection.on('open', () => {
  console.log("MONGO OPEN");

  app.listen(PORT, () => {
    console.log(`Node.js server started. Listening on port ${PORT}`);
  });
});

// END
