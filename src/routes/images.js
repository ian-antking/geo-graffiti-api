const express = require('express');
const ImageController = require('../controllers/images');

const router = express.Router();

router.post('/', ImageController.postImage);

module.exports = router;
