import ContactRepository from '../repositories/ContactRepository';
import Contact from '../models/Contact';

export default class GetAllContactsService {
  constructor() {
    this.repository = new ContactRepository(Contact);
  }

  async run() {
    const allContacts = await this.repository.findAll({});
    return allContacts;
  }
}
