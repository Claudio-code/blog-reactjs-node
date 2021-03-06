import Sequelize from 'sequelize';

import Post from '../app/models/Post';
import File from '../app/models/File';
import Contact from '../app/models/Contact';

import databaseConfig from '../config/database';

const models = [Post, File, Contact];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map((model) => model.associate && model.associate(this.connection.models));
  }
}

export default new Database().connection;
