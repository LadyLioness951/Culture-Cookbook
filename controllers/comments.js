const culture = require('../models/culture');
const Culture = require('../models/culture');

module.exports = {
    create,
    update,
    delete: deleteComment
}

function create(req, res) {
    Culture.findOne({'recipes._id': req.params.id}, function(err, culture) {
        let recipe = culture.recipes.id(req.params.id);
        req.body.user = req.user._id;
        recipe.comments.push(req.body);
        culture.save(function(err) {
            if (err) console.log(err);
            res.redirect(`/recipes/${recipe._id}`);
        });
    });        
}

function update(req, res) {
    Culture.findOne({'recipes._id': req.params.recipeId}, function(err, culture) {
        let recipe = culture.recipes.id(req.params.recipeId);
        let comment = recipe.comments.id(req.params.commentId);
        if (!comment.user.equals(req.user._id)) return res.redirect(`/recipes/${recipe._id}`);
        comment.content = req.body.content;
        culture.save(function(err) {
            res.redirect(`/recipes/${recipe._id}`);
        });
    });    
}

function deleteComment(req, res) {
    Culture.findOne({'recipes._id': req.params.recipeId}, function(err, culture) {
        let recipe = culture.recipes.id(req.params.recipeId);
            if (!recipe || err) return res.redirect(`/recipes/${recipe._id}`);
            recipe.comments.remove(req.params.commentId);
            culture.save(function(err) {
                res.redirect(`/recipes/${recipe._id}`);
            });
        }
    );
}
