import { Router } from 'express';

import ContactController from '../controllers/ContactController';
import ContactValidations from '../validations/ContactValidations';

const contactRoutes = new Router();

contactRoutes.post('/', ContactValidations.store, ContactController.store);
contactRoutes.get('/', ContactController.index);

export default contactRoutes;
