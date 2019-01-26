const express = require('express');
const ImageRouter = require('./routes/images');
const UserRouter = require('./routes/user');
const AuthRouter = require('./routes/auth');

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.use('/images', ImageRouter);
app.use('/user', UserRouter);
app.use('/auth', AuthRouter);

app.get('*', (_, res) => {
  res.redirect('/');
});


module.exports = app;
