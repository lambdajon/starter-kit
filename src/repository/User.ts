import User from '../infra/mongo/models/User';

export class UserRepository {
  async create(dataSource) {
    const record = await User.create(dataSource);
    record.password = null; // TODO: need refactor this
    return record;
  }

  async update(dataSource, id): Promise<void> {
    const updateResult = await User.updateOne({ id: id }, dataSource);
    if (updateResult.modifiedCount === 0) {
      throw new Error('User not found');
    }
  }

  async findOneById(id): Promise<any> {
    return User.findOne({ id: id }, { password: 0 });
  }
}
