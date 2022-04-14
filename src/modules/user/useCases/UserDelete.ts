import { UseCase } from '../../../core/UseCase';
import { GetOrDeleteUser } from '../domain/vobjects';
import { User } from '../../../domain/entities/user/User';
import { UserRepository } from '../../../repository/User';

export class UserDelete implements UseCase<GetOrDeleteUser, User, any> {
  private userRepository: UserRepository;

  constructor({ userRepository }) {
    this.userRepository = userRepository;
  }
  async act(userId): Promise<User> {
    try {
      const user = await this.userRepository.delete(userId);
      return user;
    } catch (e) {
      throw new Error(e);
    }
  }
}
