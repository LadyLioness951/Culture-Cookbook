const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');
const isLoggedIn = require('../config/auth');

router.post('/recipes/:id/comments', isLoggedIn, commentsCtrl.create);
router.put('/recipes/:recipeId/comments/:commentId', isLoggedIn, commentsCtrl.update);
router.delete('/recipes/:recipeId/comments/:commentId', isLoggedIn, commentsCtrl.delete);


module.exports = router;