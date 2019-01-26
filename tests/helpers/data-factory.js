const faker = require('faker');

exports.image = (options = {}) => ({
  lat: options.lat || faker.random.number(),
  lon: options.lon || faker.random.number(),
  time: options.time || faker.random.number(),
});

exports.user = (options = {}) => ({
  firstName: options.firstName || faker.name.firstName(),
  lastName: options.lastName || faker.name.lastName(),
  email: options.email || faker.internet.email(),
  password: options.password || faker.internet.password(),
});
