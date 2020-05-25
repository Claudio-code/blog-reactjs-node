import { Router } from 'express';
import Multer from 'multer';

import FileController from '../controllers/FileController';
import multerConfig from '../../config/multer';

const fileRoutes = new Router();
const upload = Multer(multerConfig);

fileRoutes.post('/', upload.single('file'), FileController.store);

export default fileRoutes;
