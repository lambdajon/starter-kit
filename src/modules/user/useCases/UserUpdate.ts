import { UseCase } from '../../../core/UseCase';
import { UpdateUser } from '../domain/vobjects';
import { User } from '../../../domain/entities/user/User';
import { UserRepository } from '../../../repository/User';

export class UserUpdate implements UseCase<UpdateUser, User, string> {
  private userRepository: UserRepository;

  constructor({ userRepository }) {
    this.userRepository = userRepository;
  }
  async act(dataSource: UpdateUser, userId: string): Promise<User> {
    try {
      const user = await this.userRepository.update(userId, dataSource);
      return user;
    } catch (e) {
      throw new Error(e);
    }
  }
}
