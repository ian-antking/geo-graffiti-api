const fs = require('fs');

exports.postImage = (data) => new Promise((resolve, reject) => {
  chai.request(server)
    .post('/images')
    .attach('imageField', fs.readFileSync(`${__dirname}/llama.jpg`), 'llama.jpg')
    .field('imageData', JSON.stringify(data))
    .end((error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response);
      }
    });
});
