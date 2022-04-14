import { UseCase } from '../../../core/UseCase';
import { GetOrDeleteUser } from '../domain/vobjects';
import { Users } from '../../../domain/entities/user/User';
import { UserRepository } from '../../../repository/User';

export class UserGetAll implements UseCase<GetOrDeleteUser, Users, any> {
  private userRepository: UserRepository;

  constructor({ userRepository }) {
    this.userRepository = userRepository;
  }
  async act(): Promise<Users> {
    try {
      const users = await this.userRepository.getAll();
      return users;
    } catch (e) {
      throw new Error(e);
    }
  }
}
