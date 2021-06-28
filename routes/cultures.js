var express = require('express');
var router = express.Router();
const culturesCtrl = require('../controllers/cultures');
const isLoggedIn = require('../config/auth');

router.get('/', culturesCtrl.index);
router.get('/new', isLoggedIn, culturesCtrl.new);
router.get('/:id', culturesCtrl.show);
router.post('/', isLoggedIn, culturesCtrl.create);

module.exports = router;
