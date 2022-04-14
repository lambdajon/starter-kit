import { UseCase } from '../../../core/UseCase';
import { RemoveUser } from '../domain/vobjects';
import { User } from '../../../domain/entities/user/User';
import { UserRepository } from '../../../repository/User';

export class UserRemove implements UseCase<RemoveUser, User, any> {
  private userRepository: UserRepository;

  constructor({ userRepository }) {
    this.userRepository = userRepository;
  }
  async act(userId: RemoveUser): Promise<User> {
    try {
      const user = await this.userRepository.deleteUserById(userId);
      return user;
    } catch (e) {
      throw new Error(e);
    }
  }
}
