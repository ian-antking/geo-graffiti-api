const fs = require('fs');

exports.postImage = (credentials, data) => new Promise((resolve, reject) => {
  chai.request(server)
    .post('/images')
    .set('Authorizer', credentials)
    .attach('image', fs.readFileSync(`${__dirname}/llama.jpg`), 'llama.jpg')
    .field('imageData', JSON.stringify(data))
    .end((error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response);
      }
    });
});

exports.manyImages = (credentials, data) => new Promise((resolve, reject) => {
  data.forEach(image => {
    chai.request(server)
      .post('/images')
      .set('Authorizer', credentials)
      .attach('image', fs.readFileSync(`${__dirname}/llama.jpg`), 'llama.jpg')
      .field('imageData', JSON.stringify(image))
      .end((error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
  });
});

exports.getImages = () => new Promise((resolve, reject) => {
  chai.request(server)
    .get('/images')
    .send()
    .end((error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response);
      }
    });
});
