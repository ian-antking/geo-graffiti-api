const Image = require('../models/images');
const AWS = require('aws-sdk');

const s3 = new AWS.S3();

exports.postImage = (req, res) => {
  const data = req.body;
  const image = new Image({
    lat: data.lat,
    lon: data.lon,
    time: data.time,
    url: `${process.env.S3_SERVER}${req.file.originalname}`,
  });
  const params = {
    Body: req.file.buffer,
    Bucket: 'geo-graffiti',
    Key: `${req.file.originalname}.jpeg`,
  };
  s3.putObject(params, (err) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      image.save().then(() => {
        res.status(201).json(image);
      })
        .catch(error => {
          res.status(500).json({ error: error });
        });
    }
  });
};

exports.getImages = (req, res) => {
  Image.find(req.query ? req.query : {}, (_, images) => {
    res.status(200).json(images);
  });
};
