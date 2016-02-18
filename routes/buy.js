'use strict';

const express = require('express');
const router = express.Router();

const buy = require('../controllers/buy');

router.get('/buy', buy.index);

module.exports = router;
