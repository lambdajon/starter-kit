import User from '../infra/mongo/models/User';

export class UserRepository {
  async create(dataSource) {
    const record = await User.create(dataSource);
    record.password = null; // TODO: need refactor this
    return record;
  }

  async update(userId, dataSource) {
    return await User.findByIdAndUpdate(userId, dataSource, { new: true });
  }

  async getById(userId) {
    return await User.findById(userId);
  }

  async getAll() {
    return await User.find();
  }

  async delete(userId) {
    return await User.findByIdAndDelete(userId);
  }
}
