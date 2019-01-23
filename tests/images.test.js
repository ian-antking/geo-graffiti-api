const ImageHelper = require('./helpers/image-helpers');
const DataFactory = require('./helpers/data-factory');

describe('/images', () => {
  let imageData;
  beforeEach(() => {
    imageData = DataFactory.image();
  });
  describe('POST', () => {
    it('creates an image in the database', (done) => {
      ImageHelper.postImage(imageData)
        .then(res => {
          expect(res.status).to.equal(201);
          expect(res.body.lat).to.equal(imageData.lat);
          expect(res.body.lon).to.equal(imageData.lon);
          expect(res.body.time).to.equal(imageData.time);
          expect(res.body).to.have.property('url');
          done();
        })
        .catch(error => {
          done(error);
        });
    });
  });
});
