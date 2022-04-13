import { UseCase } from '../../../core/UseCase';
import { UpdateUser } from '../domain/vobjects';
import { User } from '../../../domain/entities/user/User';
import { UserRepository } from '../../../repository/User';

export class UserUpdate implements UseCase<UpdateUser, User> {
  private userRepository: UserRepository;

  constructor({ userRepository }) {
    this.userRepository = userRepository;
  }
  async act(user_id: string, dataSource: UpdateUser): Promise<User> {
    try {
      const user = await this.userRepository.update(user_id, dataSource);
      return user;
    } catch (e) {
      throw new Error(e);
    }
  }
}

