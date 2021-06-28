const express = require('express');
const router = express.Router();
const recipesCtrl = require('../controllers/recipes');

router.post('/cultures/:id/recipes', recipesCtrl.create);

module.exports = router;