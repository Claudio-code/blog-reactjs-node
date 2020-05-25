import Connection from '../../database';

export default class GenerigRepository {
  constructor(model) {
    this.model = model;
  }

  async store(data) {
    let transaction;
    try {
      transaction = await Connection.transaction();
      const registryNew = await this.model.create(data, { transaction });

      transaction.commit();
      return registryNew;
    } catch (error) {
      transaction.rollback();
      throw new Error(error.message);
    }
  }

  async findOne(query) {
    let transaction;
    try {
      transaction = await Connection.transaction();
      const registry = await this.model.findOne(query, { transaction });

      transaction.commit();
      return registry;
    } catch (error) {
      transaction.rollback();
      throw new Error(error.message);
    }
  }

  async findAll(query) {
    let transaction;
    try {
      transaction = await Connection.transaction();
      const allRegistry = await this.model.findAll(query, { transaction });

      transaction.commit();
      return allRegistry;
    } catch (error) {
      transaction.rollback();
      throw new Error(error.message);
    }
  }
}
