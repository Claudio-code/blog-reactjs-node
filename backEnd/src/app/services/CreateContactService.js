import ContactRepository from '../repositories/ContactRepository';
import Contact from '../models/Contact';

export default class CreateContactService {
  constructor() {
    this.repository = new ContactRepository(Contact);
  }

  async run(data) {
    const searchResult = await this.repository.findOne({
      where: { email: data.email }, raw: true,
    });

    if (searchResult) {
      throw new Error('this post already exists');
    }

    const contact = await this.repository.store(data);

    return contact;
  }
}
