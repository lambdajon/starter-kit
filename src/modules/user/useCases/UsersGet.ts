import { UserRepository } from '../../../repository/User';
import { UseCase } from '../../../core/UseCase';
import { User } from '../../../domain/entities/user/User';

export class UsersGet implements UseCase<User, any, any> {
    private userRepository: UserRepository;

    constructor({ userRepository }) {
        this.userRepository = userRepository;
    }

    async act(): Promise<User[]> {
        try {
            const users = await this.userRepository.getMany();
            return users;
        } catch (e) {
            throw new Error(e);
        }
    }
}
