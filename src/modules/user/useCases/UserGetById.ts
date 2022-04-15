import { UseCase } from '../../../core/UseCase';
import { GetUserById } from '../domain/vobjects';
import { User } from '../../../domain/entities/user/User';
import { UserRepository } from '../../../repository/User';

export class UserGetById implements UseCase<GetUserById, User, any> {
  private userRepository: UserRepository;

  constructor({ userRepository }) {
    this.userRepository = userRepository;
  }
  async act(dataSource: GetUserById): Promise<User> {
    try {
      const user = await this.userRepository.findById(dataSource);
      return user;
    } catch (e) {
      throw new Error(e);
    }
  }
}
