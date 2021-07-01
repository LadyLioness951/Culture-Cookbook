const Love = require("../models/love");

module.exports = {
  create,
};

function create(req, res) {
    Love.findOne({"user": req.user._id, "recipe": req.params.id}, function(err, love) {
        if (love) return res.redirect(`/recipes/${req.params.id}`);
        req.body.user = req.user._id;
        req.body.recipe = req.params.id;
        Love.create(req.body, function(err, love) {
            if (err) console.log(err);
            res.redirect(`/recipes/${req.params.id}`);
        })
    })
}