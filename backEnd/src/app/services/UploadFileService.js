import File from '../models/File';
import FileRepository from '../repositories/FileRepository';

export default class UploadFileService {
  constructor() {
    this.repository = new FileRepository(File);
  }

  async run(data) {
    const file = await this.repository.store(data);
    return file;
  }
}
