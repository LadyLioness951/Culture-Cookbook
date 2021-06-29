const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const commentSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId, ref: 'User'
  },
}, {
  timestamps: true
});

const recipeSchema = new Schema({
  name: {
    type: String
  },
  image: {
    type: String
  },
  description: {
    type: String
  },
  ingredients: {
    type: String
  },
  directions: {
    type: String
  },
  comments: [commentSchema],
  user: {
    type: Schema.Types.ObjectId, 
    ref: 'User'
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
  recipes: [recipeSchema],
}, {
  timestamps: true
});

module.exports = mongoose.model('Culture', cultureSchema);