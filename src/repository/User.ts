import User from '../infra/mongo/models/User';

export class UserRepository {
  create(dataSource) {
    return User.create(dataSource);
  }
  update(user_id, dataSource) {
    console.log(user_id);
    return User.findByIdAndUpdate(user_id, dataSource);
  }
}
