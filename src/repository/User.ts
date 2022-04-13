import User from '../infra/mongo/models/User';

export class UserRepository {
  create(dataSource) {
    return User.create(dataSource);
  }
  getUser(dataSource) {
    return User.findOne(dataSource)
  }
}
