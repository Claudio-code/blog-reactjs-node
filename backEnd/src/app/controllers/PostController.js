import CreatePostService from '../services/CreatePostService';
import GetAllPostsService from '../services/GetAllPostsService';

class PostController {
  async store(req, res) {
    try {
      const createPostService = new CreatePostService();
      const post = await createPostService.run(req.body);

      return res.status(201).json(post);
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
  }

  async index(req, res) {
    try {
      const getAllPostsService = new GetAllPostsService();
      const allPosts = await getAllPostsService.run();

      return res.status(200).json({ posts: allPosts });
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
  }
}

export default new PostController();
