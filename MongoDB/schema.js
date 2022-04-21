const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  name: String,
  slogan: String,
  definition: String,
  category: String,
  default_price: String,
  features: [featureSchema],
  styles: [styleSchema]
});

const featureSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  feature: String,
  value: String
});

const styleSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  name: String,
  original_price: String,
  sale_price: String,
  default: Boolean,
  photos: [photoSchema],
  skus: [skuSchema]
});

const photoSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  thumbnail_url: String,
  url: String
});

const skuSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  quantity: Number,
  size: String
});

const Product = mongoose.model('Product', productSchema);

module.exports.Product = Product;