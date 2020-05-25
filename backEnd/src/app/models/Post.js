import Sequelize, { Model } from 'sequelize';

class Post extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        content: Sequelize.TEXT,
        description: Sequelize.STRING,
        author: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'posts',
      },
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'post_id', as: 'post' });
  }
}

export default Post;
