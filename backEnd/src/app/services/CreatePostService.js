import PostRepository from '../repositories/PostRepository';
import Post from '../models/Post';

export default class CreatePostService {
  constructor() {
    this.repository = new PostRepository(Post);
  }

  async run(data) {
    try {
      const searchResult = await this.repository.findOne({
        where: { title: data.title }, raw: true,
      });

      if (searchResult) {
        throw new Error('This post already exists.');
      }

      const post = await this.repository.store(data);

      return post;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
