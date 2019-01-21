const ImageHelper = require('./helpers/image-helpers');

describe('/images', (done) => {
  describe('POST', () => {
    it('creates an image in the database', () => {
      ImageHelper.postImage({ data: 'mockData' })
        .then(res => {
          expect(res.status).to.equal(201);
          done();
        })
        .catch(error => done(error));
    });
  });
});
