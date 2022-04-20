import { UseCase } from '../../../core/UseCase';
import { User } from '../../../domain/entities/user/User';
import { UserRepository } from '../../../repository/User';
import { UpdateUser } from '../domain/vobjects';

export class UserUpdate implements UseCase<UpdateUser, User, string> {
  private userRepository: UserRepository;
  constructor({ userRepository }) {
    this.userRepository = userRepository;
  }
  async act(dataSource: UpdateUser, id: string): Promise<User> {
    try {
      await this.userRepository.update(dataSource, id);
      return this.userRepository.findOneById(id);
    } catch (e) {
      throw new Error(e);
    }
  }
}
