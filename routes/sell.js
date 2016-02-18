'use strict';

const express = require('express');
const router = express.Router();

const sell = require('../controllers/sell');

router.get('/sell', sell.index);

module.exports = router;
