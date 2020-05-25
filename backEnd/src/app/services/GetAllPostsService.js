import PostRepository from '../repositories/PostRepository';
import Post from '../models/Post';
import File from '../models/File';

export default class GetAllPostsService {
  constructor() {
    this.repository = new PostRepository(Post);
  }

  async run() {
    const allPosts = await this.repository.findAll({
      attributes: ['id', 'title', 'description', 'content', 'author', 'post_id', 'created_at'],
      include: [{
        model: File,
        as: 'post',
        attributes: ['id', 'name', 'path', 'url'],
      }],
    });

    return allPosts;
  }
}
