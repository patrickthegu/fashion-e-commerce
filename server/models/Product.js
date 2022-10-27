const mongoose = require('mongoose');
// const helper = require('./helper/productHelper')

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  stock: {
    type: Number,
    min: 0,
    default: 0
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  size: [
    {
      sizeType: {
        type: String,
        required: true
      },
      colors: [
        {
          colour: helper.colorObject
        }
      ]
    }
  ]
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product  