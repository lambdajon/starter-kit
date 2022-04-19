import { UserRepository } from '../../../repository/User';
import { UseCase } from '../../../core/UseCase';
import { User } from '../../../domain/entities/user/User';

export class UserGet implements UseCase<User, any, any> {
    private userRepository: UserRepository;

    constructor({ userRepository }) {
        this.userRepository = userRepository;
    }

    async act(param: Object): Promise<User> {
        try {
            const user = await this.userRepository.getOne(param);
            return user;
        } catch (e) {
            throw new Error(e);
        }
    }
}
