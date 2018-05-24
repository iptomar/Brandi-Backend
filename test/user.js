var should = require('chai').should(),
  supertest = require('supertest'),
  conf = require('./conf'),
  api = supertest(conf.app);

describe('User controller', function() {

  it('fetch user/register', function(done) {
    api.post('/registar')
      .send({'email': 'test@tedsdat.spt', 'password': '12dd34d98'})
      .expect(200)
      .expect(function(res) {
        if (!('id' in res.body) || res.body.email !== 'test@test.pt') return 'email from userRegister failed';
      })
      .end(done);
  });

});
