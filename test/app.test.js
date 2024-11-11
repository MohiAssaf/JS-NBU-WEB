import { expect } from 'chai';
import request from 'supertest';
import app from '../app';


describe('GET /', function() {
    it('should return title', async function() {
      const res = await request(app).get('/');
      expect(res.status).to.equal(200);
      expect(res.text).to.equal('Hello this is a docker project made by mohamed f104622');
    });
  });