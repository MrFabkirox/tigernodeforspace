const assert = require('chai').assert;
const app = require('../app');
  
const request = require('supertest');

// npm run mocha || true or npm run -s command line
describe('Article page check', function() {

  // route testing with supertest
  describe('One article on Ecology comes from db', function() {
    it('displays the word ecology', function (done) {
      request(app).get('/api/articles/')
        .expect(200)
        .expect(/cology/, done);
    });
  });

});
