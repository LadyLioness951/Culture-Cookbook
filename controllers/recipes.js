const Culture = require('../models/culture');
const Like = require('../models/like');
const Dislike = require('../models/dislike');
const Love = require('../models/love');

module.exports = {
    new: newRecipe,
    create,
    show,
};

function newRecipe(req, res) {
      res.render('recipes/new', {
        name: 'Add Recipe',
        cultureId: req.params.id
      });
  };

function create(req, res) {
    req.body.user = req.user._id;
    Culture.findById(req.params.id, function(err, culture) {
        culture.recipes.push(req.body);
        culture.save(function(err) {
            res.redirect(`/cultures/${culture._id}`);
        });
    });
}

function show(req, res) {
    Culture.findOne({'recipes._id': req.params.id}, function(err, culture) {
        Like.find({'recipe': req.params.id}, function(err, likes) {
            Love.find({'recipe': req.params.id}, function(err, loves) {
                Dislike.find({'recipe': req.params.id}, function(err, dislikes) {
                    let recipe = culture.recipes.id(req.params.id);
                    res.render('recipes/show', {
                        name: 'Show Recipe',
                        recipe,
                        likes, 
                        loves,
                        dislikes
                    });
                })
            });
        })
    });
}
