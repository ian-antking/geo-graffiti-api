const ImageHelper = require('./helpers/image-helpers');
const DataFactory = require('./helpers/data-factory');
const UserHelper = require('./helpers/user-helpers');

describe('/images', () => {
  let userData;
  let credentials;
  let imageData;
  let imageList;
  beforeEach((done) => {
    userData = DataFactory.user();
    UserHelper.signup(userData)
      .then(() => {
        UserHelper.login(userData)
          .then(response => {
            credentials = response.body.token;
            done();
          })
          .catch(error => done(error));
      })
      .catch(error => done(error));
    imageList = [];
    imageData = DataFactory.image();
    for (let i = 0; i < 10; i += 1) {
      const image = DataFactory.image();
      imageList.push(image);
    }
  });
  describe('POST', () => {
    it('creates an image in the database', (done) => {
      ImageHelper.postImage(credentials, imageData)
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
  describe('GET', () => {
    it('returns a list of images', (done) => {
      ImageHelper.manyImages(credentials, imageList)
        .then(() => {
          ImageHelper.getImages()
            .then(res => {
              expect(res.body.length).to.equal(10);
              done();
            })
            .catch(error => done(error));
        })
        .catch(error => done(error));
    });
  });
});
