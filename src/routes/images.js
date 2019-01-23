const express = require('express');
const ImageController = require('../controllers/images');
const multer = require('multer');

const upload = multer({ dest: `${__dirname}/../../public/images` });

const router = express.Router();

router.post('/', upload.single('imageField'), ImageController.postImage);
router.get('/', ImageController.getImages);

module.exports = router;
