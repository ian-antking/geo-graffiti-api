const express = require('express');
const ImageRouter = require('./routes/images');


const app = express();

app.use(express.json());
app.use(express.static('images'));

app.use('/images', ImageRouter);
app.get('*', (_, res) => {
  res.redirect('/');
});

module.exports = app;
