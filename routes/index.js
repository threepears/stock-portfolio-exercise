'use strict';

const express = require('express');
const router = express.Router();

const home = require('./home');
const buy = require('./buy');
const portfolio = require('./portfolio');
const quote = require('./getquote');
const sell = require('./sell');

router.use(home);
router.use(buy);
router.use(portfolio);
router.use(quote);
router.use(sell);

module.exports = router;
