const Culture = require('../models/culture');

module.exports = {
    new: newRecipe,
    create,
    show
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
        let recipe = culture.recipes.id(req.params.id);
        res.render('recipes/show', {
            name: 'Show Recipe',
            recipe
        });
    });
}