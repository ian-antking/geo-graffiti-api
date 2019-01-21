exports.postImage = data => new Promise((resolve, reject) => {
  console.log('helper');
  chai.request(server)
    .post('/images')
    .send(data)
    .end((error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response);
      }
    });
});
