const express = require('express');
const ImageController = require('../controllers/images');
const multer = require('multer');

const upload = multer({ dest: `${__dirname}/../images` });

const router = express.Router();

router.post('/', upload.single('imageField'), ImageController.postImage);

module.exports = router;
