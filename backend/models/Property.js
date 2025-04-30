const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  cover: String,
  name: String,
  location: String,
  category: String,
  price: String,
  type: String,
}, { timestamps: true });

module.exports = mongoose.model('Property', propertySchema);