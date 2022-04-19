import User from '../infra/mongo/models/User';

export class UserRepository {
  async create(dataSource) {
    const record = await User.create(dataSource);
    record.password = null
    return record;
  }

  async update(dataSource, params) {
    const record = await User.findOneAndUpdate({ _id: params.userId }, dataSource, { new: true });
    record.password = null
    return record;
  }

  async delete(params) {
    const record = await User.findOneAndDelete({ _id: params.userId });
    record.password = null
    return record;
  }
}
