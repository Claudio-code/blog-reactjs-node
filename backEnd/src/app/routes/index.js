import { Router } from 'express';

import PostRoutes from './post.routes';
import FileRoutes from './file.routes';
import contactRoutes from './contact.routes';

const AllRoutes = new Router();

AllRoutes.use('/contact', contactRoutes);
AllRoutes.use('/file', FileRoutes);
AllRoutes.use('/post', PostRoutes);

export default AllRoutes;
