const Culture = require('../models/culture');

module.exports = {
    index,
    new: newCulture,
    create
}

function index(req, res) {
    Culture.find({}, function(err, cultures) {
        res.render('cultures/index', {country: 'All cultures', cultures});
    });
}

function newCulture(req, res) {
    res.render('cultures/new', { country: 'Add Culture' });
}

function create(req, res) {
    Culture.create(req.body, function(err, culture) {
        res.redirect('/cultures');
    });
}
