const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cultureSchema = new Schema({
  country: {
    type: String,
    required: true
  },
    timestamps: true
});

module.exports = mongoose.model('Culture', cultureSchema);