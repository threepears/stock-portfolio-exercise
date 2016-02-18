'use strict';

const express = require('express');
const router = express.Router();

const getquote = require('../controllers/getquote');

router.post('/getquote/:stock', getquote.index);

module.exports = router;
