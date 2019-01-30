const Image = require('../models/images');
const AWS = require('aws-sdk');

const s3 = new AWS.S3();

exports.postImage = (req, res) => {
  console.log(req.file);
  const data = req.body;
  const image = new Image({
    lat: data.lat,
    lon: data.lon,
    time: data.time,
    url: `${process.env.S3_SERVER}${req.file.originalName}`,
  });
  const params = {
    Body: req.file.buffer,
    Bucket: 'geo-graffiti/images',
    Key: req.file.originalName,
  };
  s3.putObject(params, (err) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: err });
    } else {
      image.save().then(() => {
        res.status(201).json(image);
      })
        .catch(error => {
          console.log(error);
          res.status(500).json(error);
        });
    }
  });
};

exports.getImages = (req, res) => {
  Image.find(req.query ? req.query : {}, (_, images) => {
    res.status(200).json(images);
  });
};
