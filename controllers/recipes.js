const Culture = require('../models/culture');

module.exports = {
    create,
};

function create(req, res) {
    Culture.findById(req.params.id, function(err, culture) {
        culture.recipes.push(req.body);
        culture.save(function(err) {
            res.redirect(`/cultures/${culture._id}`);
        });
    });
}