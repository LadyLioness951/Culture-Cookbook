const express = require('express');
const router = express.Router();
const recipesCtrl = require('../controllers/recipes');
const isLoggedIn = require('../config/auth');

router.get('/cultures/:id/recipes/new', isLoggedIn, recipesCtrl.new);
router.get('/recipes/:id', recipesCtrl.show);
router.post('/cultures/:id/recipes', isLoggedIn, recipesCtrl.create);

module.exports = router;