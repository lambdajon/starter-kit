import { UseCase } from '../../../core/UseCase';
import { UpdateUser } from '../domain/vobjects';
import { User } from '../../../domain/entities/user/User';
import { UserRepository } from '../../../repository/User';
import UserPassword from '../domain/UserPassword';

export class UserUpdate implements UseCase<UpdateUser, User, any> {
  private userRepository: UserRepository;

  constructor({ userRepository }) {
    this.userRepository = userRepository;
  }
  async act(dataSource: UpdateUser): Promise<User> {
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
