const router = require('express').Router();

const {
  getInfo
} = require('../controllers');

// @prefix /api
router.get('/info', getInfo);

module.exports = router;
