const express = require('express');
const ImageController = require('../controllers/images');
const multer = require('multer');
const auth = require('../middleware/auth');

const upload = multer({
  dest: `${__dirname}/../../public/images`,
  onError: (err, next) => {
    next(err);
  },
});

const router = express.Router();

router.post('/', auth, upload.single('imageField'), ImageController.postImage);
router.get('/', ImageController.getImages);

module.exports = router;
