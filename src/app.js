const express = require('express');
const ImageRouter = require('./routes/images');
const UserRouter = require('./routes/user');
const AuthRouter = require('./routes/auth');

const app = express();

const log = (req, res, next) => {
  console.log('Content-Length');
  next();
};

app.use(log);

app.use(express.json({
  limit: '10mb',
}));
app.use(express.static('public'));

app.use('/images', ImageRouter);
app.use('/user', UserRouter);
app.use('/auth', AuthRouter);

app.get('*', (_, res) => {
  res.redirect('/');
});


module.exports = app;
