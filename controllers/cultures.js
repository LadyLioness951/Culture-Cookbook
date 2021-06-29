const Culture = require('../models/culture');

module.exports = {
    index,
    new: newCulture,
    show,
    create
}

function index(req, res) {
    Culture.find({}, function(err, cultures) {
        console.log(cultures);
        res.render('cultures/index', {name: 'All cultures', cultures});
    });
}

function newCulture(req, res) {
    res.render('cultures/new', { name: 'Add Culture' });
}

function show(req, res) {
    Culture.findById(req.params.id, function(err, culture) {
        res.render('cultures/show', {
            name: 'Culture',
            culture
        });
    });
}

function create(req, res) {
    Culture.create(req.body, function(err, culture) {
        console.log(err);
        res.redirect('/cultures');
    });
}
