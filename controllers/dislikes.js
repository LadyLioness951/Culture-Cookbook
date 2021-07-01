const Dislike = require("../models/dislike");

module.exports = {
  create,
};

function create(req, res) {
    Dislike.findOne({"user": req.user._id, "recipe": req.params.id}, function(err, dislike) {
        if (dislike) return res.redirect(`/recipes/${req.params.id}`);
        req.body.user = req.user._id;
        req.body.recipe = req.params.id;
        Dislike.create(req.body, function(err, dislike) {
            if (err) console.log(err);
            res.redirect(`/recipes/${req.params.id}`);
        })
    })
}