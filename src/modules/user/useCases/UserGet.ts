import { UseCase } from '../../../core/UseCase';
import { GetOrDeleteUser } from '../domain/vobjects';
import { User } from '../../../domain/entities/user/User';
import { UserRepository } from '../../../repository/User';

export class UserGet implements UseCase<GetOrDeleteUser, User, any> {
  private userRepository: UserRepository;

  constructor({ userRepository }) {
    this.userRepository = userRepository;
  }
  async act(userId): Promise<User> {
    try {
      const user = await this.userRepository.getById(userId);
      return user;
    } catch (e) {
      throw new Error(e);
    }
  }
}
