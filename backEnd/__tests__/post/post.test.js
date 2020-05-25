import request from 'supertest';
import app from '../../src/app';
import truncate from '../util/truncate';

describe('Post', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('add new post', async () => {
    const response = await request(app)
      .post('/post')
      .send({
        title: 'kraudio',
        content: 'teste de teste',
        author: 'casa nova',
        post_id: 2,
      });

    expect(response.body).toHaveProperty('post');
  });

  it('get all post', async () => {
    const response = await request(app)
      .get('/post');

    expect(response.body).toHaveProperty('posts');
  });
});
