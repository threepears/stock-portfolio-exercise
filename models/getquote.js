'use strict';

const mongoose = require('mongoose');

module.exports = mongoose.model('getquote',
  mongoose.Schema({
    name: String,
    email: String,
    message: String
  })
);
