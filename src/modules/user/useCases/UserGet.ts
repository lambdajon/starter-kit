import { UseCase } from '../../../core/UseCase';
import { GetUser } from '../domain/vobjects';
import { User } from '../../../domain/entities/user/User';
import { UserRepository } from '../../../repository/User';

export class UserGet implements UseCase<GetUser, User> {
  private userRepository: UserRepository;

  constructor({ userRepository }) {
    this.userRepository = userRepository;
  }
  async act(dataSource: GetUser): Promise<User> {
    try {
      const user = await this.userRepository.getUser(dataSource);
      return user;
    } catch (e) {
      throw new Error(e);
    }
  }
}
