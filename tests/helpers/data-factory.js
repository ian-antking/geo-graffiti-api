const faker = require('faker');

exports.image = (options = {}) => ({
  lat: options.lat || faker.random.number(),
  lon: options.lon || faker.random.number(),
  time: options.time || faker.random.number(),
});
