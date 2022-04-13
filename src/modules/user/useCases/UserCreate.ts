import { UseCase } from '../../../core/UseCase';
import { CreateUser } from '../domain/vobjects';
import { User } from '../../../domain/entities/user/User';
import { UserRepository } from '../../../repository/User';

export class UserCreate implements UseCase<CreateUser, User, any> {
  private userRepository: UserRepository;

  constructor({ userRepository }) {
    this.userRepository = userRepository;
  }
  async act(dataSource: CreateUser): Promise<User> {
    try {
      const user = await this.userRepository.create(dataSource);
      return user;
    } catch (e) {
      throw new Error(e);
    }
  }
}
