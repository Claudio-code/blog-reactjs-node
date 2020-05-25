import UploadFileService from '../services/UploadFileService';

class FileController {
  async store(req, res) {
    try {
      const { originalname: name, filename: path } = req.file;
      const uploadFileService = new UploadFileService();
      const file = await uploadFileService.run({ name, path });

      return res.status(201).json({ file });
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
  }
}

export default new FileController();
