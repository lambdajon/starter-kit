import { UseCase } from '../../../core/UseCase';
import { CreateUser } from '../domain/vobjects';
import { User } from '../../../domain/entities/user/User';
import { UserRepository } from '../../../repository/User';
import UserPassword from '../domain/UserPassword';

export class UserCreate implements UseCase<CreateUser, User, any> {
  private userRepository: UserRepository;

  constructor({ userRepository }) {
    this.userRepository = userRepository;
  }
  async act(dataSource: CreateUser): Promise<User> {
    try {
      const hashedPassword = await UserPassword.hashPassword(dataSource.password);
      const userWithSecurePassword = {
        ...dataSource,
        password: hashedPassword
      };
      const user = await this.userRepository.create(userWithSecurePassword);
      return user;
    } catch (e) {
      throw new Error(e);
    }
  }
}
