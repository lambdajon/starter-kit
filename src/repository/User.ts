import User from '../infra/mongo/models/User';

export class UserRepository {
  async create(dataSource) {
    const record = await User.create(dataSource);
    record.password = null; // TODO: need refactor this
    return record;
  }
  async findById(datasource) {
    const findUser = await User.findById(datasource);
    return findUser;
  }
}
