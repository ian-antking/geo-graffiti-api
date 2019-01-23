const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
  lat: {
    type: Number,
    required: true,
  },
  lon: {
    type: Number,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
});

const Image = mongoose.model('image', ImageSchema);

module.exports = Image;
