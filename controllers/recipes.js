const Culture = require('../models/culture');

module.exports = {
    new: newRecipe,
    create,
};

function newRecipe(req, res) {
      res.render('recipes/new', {
        name: 'Add Recipe',
        // recipes
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