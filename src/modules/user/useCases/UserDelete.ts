import { UseCase } from '../../../core/UseCase';
import { DeleteUser } from '../domain/vobjects';
import { User } from '../../../domain/entities/user/User';
import { UserRepository } from '../../../repository/User';

export class UserDelete implements UseCase<DeleteUser, User, any> {
    private userRepository: UserRepository;

    constructor({ userRepository }) {
        this.userRepository = userRepository;
    }

    async act(params: Object): Promise<User> {
        try {
            const user = await this.userRepository.delete(params);
            return user;
        } catch (e) {
            throw new Error(e);
        }
    }
}
