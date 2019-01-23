const Image = require('../models/images');

exports.postImage = (req, res) => {
  const data = JSON.parse(req.body.imageData);
  const image = new Image({
    lat: data.lat,
    lon: data.lon,
    time: data.time,
    url: `${__dirname}/../images/${req.file.filename}`,
  });
  console.log(image);
  image.save().then(() => {
    res.status(201).json(image);
  });
};
