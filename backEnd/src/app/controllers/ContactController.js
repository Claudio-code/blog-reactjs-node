import CreateContactService from '../services/CreateContactService';
import GetAllContactsService from '../services/GetAllContactsService';

class ContactController {
  async store(req, res) {
    try {
      const createContactService = new CreateContactService();
      const contact = await createContactService.run(req.body);

      return res.status(201).json({ contact });
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
  }

  async index(req, res) {
    try {
      const getAllContactsService = new GetAllContactsService();
      const allContact = await getAllContactsService.run();

      return res.status(200).json({ allContact });
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
  }
}

export default new ContactController();
