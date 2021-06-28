require('dotenv').config();
require('./config/database')
const Culture = require('./models/movie');
const Recipe = require('./models/performer');

let c;
let r;

Culture.findOne({}, function(err, culture) {
  c = culture;
});