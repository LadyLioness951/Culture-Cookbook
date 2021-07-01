var express = require('express');
var router = express.Router();
const dislikesCtrl = require('../controllers/dislikes');
const isLoggedIn = require('../config/auth');

router.get('/recipes/:id/dislike', isLoggedIn, dislikesCtrl.create);

module.exports = router;