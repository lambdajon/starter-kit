import User from '../infra/mongo/models/User';

export class UserRepository {
  async create(dataSource) {
    const record = await User.create(dataSource);
    record.password = null
    return record;
  }

  async update(dataSource, params) {
    const record = await User.findOneAndUpdate({ id: params.userId }, dataSource, { new: true });
    return record;
  }
}
