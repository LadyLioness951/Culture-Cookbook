var express = require('express');
var router = express.Router();
const lovesCtrl = require('../controllers/loves');
const isLoggedIn = require('../config/auth');

router.get('/recipes/:id/love', isLoggedIn, lovesCtrl.create);

module.exports = router;