import { Router } from 'express';
import PostController from '../controllers/PostController';
import PostValidations from '../validations/PostValidations';

const PostRoutes = new Router();

PostRoutes.post('/', PostValidations.store, PostController.store);
PostRoutes.get('/', PostController.index);

export default PostRoutes;
