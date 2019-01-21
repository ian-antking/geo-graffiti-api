const ImageHelper = require('./helpers/image-helpers');

describe('/images', () => {
  describe('POST', () => {
    it('creates an image in the database', (done) => {
      ImageHelper.postImage({ data: 'mockData' })
        .then(res => {
          expect(res.status).to.equal(201);
          done();
        })
        .catch(error => {
          done(error);
        });
    });
  });
});
