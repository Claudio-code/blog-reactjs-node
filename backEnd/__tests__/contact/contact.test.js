import request from 'supertest';
import app from '../../src/app';
import truncate from '../util/truncate';


describe('Contact', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('add new contact', async () => {
    const response = await request(app)
      .post('/contact')
      .send({
        name: 'kraudio',
        email: 'teste@gmail.com',
        phone: '998253928',
        post: 'descricao nova',
      });

    expect(response.body).toHaveProperty('contact');
  });

  it('add new contact', async () => {
    const response = await request(app)
      .get('/contact');

    expect(response.body).toHaveProperty('allContact');
  });
});
