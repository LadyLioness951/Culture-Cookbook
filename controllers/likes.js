const Like = require("../models/like");

module.exports = {
  create,
};

function create(req, res) {
    Like.findOne({"user": req.user._id, "recipe": req.params.id}, function(err, like) {
        if (like) return res.redirect(`/recipes/${req.params.id}`);
        req.body.user = req.user._id;
        req.body.recipe = req.params.id;
        Like.create(req.body, function(err, like) {
            if (err) console.log(err);
            res.redirect(`/recipes/${req.params.id}`);
        })
    })
}