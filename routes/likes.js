var express = require('express');
var router = express.Router();
const likesCtrl = require('../controllers/likes');
const isLoggedIn = require('../config/auth');

router.get('/recipes/:id/like', isLoggedIn, likesCtrl.create);

module.exports = router;