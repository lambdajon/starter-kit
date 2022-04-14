import User from '../infra/mongo/models/User';

export class UserRepository {
  create(dataSource) {
    return User.create(dataSource);
  }

  update(userId, dataSource) {
    return User.findByIdAndUpdate(userId, dataSource);
  }
}
