const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const recipeSchema = new Schema({
  name: {
    type: String
  },
  image: {
    type: String
  },
  directions: {
    type: String
  },
  discription: {
    type: String
  },
  ingredients: {
    type: String
  }
}, {
  timestamps: true
});

const cultureSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  recipes: [recipeSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Culture', cultureSchema);