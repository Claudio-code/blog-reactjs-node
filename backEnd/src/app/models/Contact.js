import Sequelize, { Model } from 'sequelize';

class Contact extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        post: Sequelize.STRING,
        phone: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'contacts',
      },
    );


    return this;
  }
}

export default Contact;
