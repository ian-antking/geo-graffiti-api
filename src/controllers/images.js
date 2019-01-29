const Image = require('../models/images');

exports.postImage = (req, res) => {
  const data = req.body;
  const image = new Image({
    lat: data.lat,
    lon: data.lon,
    time: data.time,
    url: `${__dirname}/../../public/images/${req.file.filename}`,
  });
  image.save().then(() => {
    res.status(201).json(image);
  })
    .catch(error => {
      res.status(500).json(error);
    });
};

exports.getImages = (req, res) => {
  Image.find(req.query ? req.query : {}, (_, images) => {
    res.status(200).json(images);
  });
};
