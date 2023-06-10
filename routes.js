const express = require('express');
const router = express.Router();
const { getKlinik } = require('./handler');

router.get('/klinik', getKlinik);

module.exports = router;
