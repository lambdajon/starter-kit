import { UseCase } from '../../../core/UseCase';
import { GetUser } from '../domain/vobjects';
import { User } from '../../../domain/entities/user/User';
import { UserRepository } from '../../../repository/User';

export class UserGet implements UseCase<GetUser, User, any> {
  private userRepository: UserRepository;

  constructor({ userRepository }) {
    this.userRepository = userRepository;
  }
  async act(userId: GetUser): Promise<User> {
    try {
      const user = await this.userRepository.getUserById(userId);
      return user;
    } catch (e) {
      throw new Error(e);
    }
  }
}
