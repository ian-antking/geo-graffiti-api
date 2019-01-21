const express = require('express');
const ImageRouter = require('./routes/images');

const app = express();

app.use(express.json());

app.use('/images', ImageRouter);

module.exports = app;
